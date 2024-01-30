"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { DataTableViewOptions } from "@/components/ui/data-table-view-options";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const searchParams = useSearchParams();
  const path = usePathname();
  const route = useRouter();

  const tableHasEmailColumn = table
    .getAllColumns()
    .find((column) => column.id === "email");

  const onChangeEmail = (email: string) => {
    const params = new URLSearchParams(searchParams);
    table.getColumn("email")?.setFilterValue(email);
    if (email) {
      params.set("email", email);
    } else {
      params.delete("email");
    }

    route.replace(`${path}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {tableHasEmailColumn && (
          <Input
            placeholder="Filter email..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) => {
              onChangeEmail(event.target.value);
            }}
            className="h-8 w-[250px] lg:w-[350px]"
            defaultValue={searchParams.get("email")?.toString()}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
      <Button
        onClick={() => route.push(`${path}/create`)}
        size="sm"
        variant="default"
        className="ml-2"
      >
        Create
      </Button>
    </div>
  );
}
