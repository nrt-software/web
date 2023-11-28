"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-header";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomerData } from "@/mock/customer";
import { ColumnDef } from "@tanstack/react-table";
import { FileEdit, MoreHorizontal } from "lucide-react";
import { useRouter as routerFn } from "next/navigation";

export const columns: ColumnDef<CustomerData>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "customer_name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Customer name" />;
    },
  },
  {
    accessorKey: "customer_phone",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Customer phone" />;
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const customer = row.original;
      const router = routerFn();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-10 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                router.push(`/dashboard/customer/${customer.id}`);
              }}
              className="p-2"
            >
              <FileEdit className="mr-2 h-4 w-4" />
              Edit Customer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
