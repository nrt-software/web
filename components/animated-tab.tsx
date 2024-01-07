import { tabs } from "@/app/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedTabsProps {
  onPressTab: (id: string) => void;
}

export function AnimatedTabs({ onPressTab }: AnimatedTabsProps) {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            onPressTab(tab.id);
          }}
          className={cn(
            activeTab === tab.id ? "font-semibold" : "font-base",
            "relative rounded-full px-3 py-1.5 text-sm transition focus-visible:outline-2"
          )}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
