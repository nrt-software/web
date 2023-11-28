import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Briefcase,
  CircleDollarSign,
  PhoneForwardedIcon,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const defaultRoute = "/dashboard";

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const options = [
    {
      title: "Payments",
      route: defaultRoute + "/payments",
      icon: (
        <div className="mr-2 h-4 w-4 text-center">
          <CircleDollarSign />
        </div>
      ),
    },
    {
      title: "Clients",
      route: defaultRoute + "/clients",
      icon: (
        <div className="mr-2 h-4 w-4">
          <User />
        </div>
      ),
    },
    {
      title: "Customer",
      route: defaultRoute + "/customer",
      icon: (
        <div className="mr-2 h-4 w-4">
          <PhoneForwardedIcon />
        </div>
      ),
    },
    {
      title: "Services",
      route: defaultRoute + "/services",
      icon: (
        <div className="mr-2 h-4 w-4">
          <Briefcase />
        </div>
      ),
    },
  ];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {options.map((option) => (
            <>
              <CommandItem
                key={option.title}
                onSelect={() => {
                  setOpen(!open);
                  router.push(option.route);
                }}
              >
                {option.title}
              </CommandItem>
            </>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
