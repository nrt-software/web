"use client";

import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/ui/data-table-header";

import { ScheduleData } from "@/mock/schedule";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ScheduleData>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
    cell: ({ row }) => {
      return (
        <Badge variant="outline" className="capitalize">
          {row.getValue("status")}
        </Badge>
      );
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
        <div className="font-medium">
          {new Date(value.createdAt).toLocaleString("pt-BR")}
        </div>
      );
    },
  },
  {
    accessorKey: "dateSchedule",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Schedule Date" />;
    },
    cell: ({ row }) => {
      const value = row.original;

      return (
        <div className="font-medium">
          {new Date(value.createdAt).toLocaleString("pt-BR")}
        </div>
      );
    },
  },
];
