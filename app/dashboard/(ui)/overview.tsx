import { CardDashboard } from "@/app/dashboard/(ui)/card";

export const Overview = () => {
  return (
    <div>
      <div className="grid grid-flow-col gap-4">
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
      </div>
    </div>
  );
};
