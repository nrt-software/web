import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FilteredData<T> {
  filteredData: T[];
  filters: Record<string, any>;
  handleFilterChange: (filterKey: string, value: any) => void;
  table: JSX.Element;
}

interface IUseTable<T> {
  dataPromise: Promise<T[]>;
  caption?: string;
}

function useTable<T>({ dataPromise, caption }: IUseTable<T>): FilteredData<T> {
  const [data, setData] = useState<T[]>([]);
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [filters, setFilters] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dataPromise;
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataPromise]);

  const handleFilterChange = (filterKey: string, value: any) => {
    setFilters({
      ...filters,
      [filterKey]: value,
    });

    const filteredResult = data.filter((item) => {
      for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
          if (item[key] !== filters[key]) {
            return false;
          }
        }
      }
      return true;
    });

    setFilteredData(filteredResult);
  };

  const table = () => {
    if (data.length === 0) {
      return <p>No data available.</p>;
    }

    return (
      <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableHead key={key}>{key}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((item, index) => (
            <TableRow key={index}>
              {Object.values(item).map((value, index) => (
                <TableCell key={index}>{String(value)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return {
    filteredData,
    filters,
    handleFilterChange,
    table: table(),
  };
}

export default useTable;
