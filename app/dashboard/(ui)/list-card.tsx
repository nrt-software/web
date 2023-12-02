import PieAnalytics, { Analytics } from "@/app/dashboard/(ui)/analytics";
import { Overview } from "@/app/dashboard/(ui)/overview";
import { generateAnalyticsData } from "@/app/dashboard/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

export async function ListCard() {
  const overviewData = await generateAnalyticsData(2000);

  return (
    <div>
      <TabsContent value="overview" className="space-y-4">
        <Overview />
        <div className="grid gap-4 grid-flow-col md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Payments</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Analytics data={overviewData} />
            </CardContent>
          </Card>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Clients</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <PieAnalytics />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <div className="container"></div>
      </TabsContent>
      <TabsContent value="reports" className="space-y-4">
        <Analytics />
      </TabsContent>
    </div>
  );
}
