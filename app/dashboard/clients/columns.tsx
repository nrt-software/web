"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-header";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ClientData } from "@/mock/client";
import { ColumnDef } from "@tanstack/react-table";
import { FileEdit, MoreHorizontal } from "lucide-react";
import { useRouter as routerFn } from "next/navigation";

export const columns: ColumnDef<ClientData>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Phone" />;
    },
  },
  {
    accessorKey: "businessPhoneNumberId",
    header: "Business Phone Id",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Created At" />;
    },
    cell: ({ row }) => {
      const value = row.original;

      return (
        <div className="text-right font-medium">
          {new Date(value.createdAt).toLocaleString("pt-BR")}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const user = row.original;
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
                router.push(`/dashboard/clients/${user.id}`);
              }}
              className="p-2"
            >
              <FileEdit className="mr-2 h-4 w-4" />
              Edit Client
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
