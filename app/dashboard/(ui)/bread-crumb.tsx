"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Breadcrumb = () => {
  const path = usePathname();
  const segments = path.split("/").filter((segment) => segment !== "");

  return (
    <div className="w-full flex flex-row py-2 mb-4">
      {segments.length > 1 &&
        segments.map((segment, index) => {
          const isDashboard = segment === "dashboard";
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const renderChevron = index < segments.length - 1;
          return (
            <div className="flex flex-row items-center" key={segment}>
              <Link
                className="capitalize text-sm text-muted-foreground"
                href={href}
              >
                {isDashboard ? (
                  <Home className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <span>{segment}</span>
                )}
              </Link>
              {renderChevron ? (
                <ChevronRight className="h-4 w-4 mx-4 text-muted-foreground" />
              ) : null}
            </div>
          );
        })}
    </div>
  );
};
