import { Sidebar } from "@/components/ui/sidebar";

import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { NavDashboard } from "@/app/dashboard/(ui)/nav";
import { Breadcrumb } from "@/app/dashboard/(ui)/bread-crumb";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <NavDashboard />
      <div className="border-t">
        <div className="bg-background">
          <div className="flex bg-background">
            <Sidebar />
            <div className="flex flex-col w-full mt-10 ml-10 pr-4">
              <Breadcrumb />
              {children}
            </div>
          </div>
        </div>
      </div>
      <CommandMenu />
    </Suspense>
  );
}
