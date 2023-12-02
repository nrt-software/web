"use client";

import { ListCard } from "@/app/dashboard/(ui)/list-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PageContent = () => {
  return (
    <div className="w-full px-4">
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <ListCard />
      </Tabs>
    </div>
  );
};
