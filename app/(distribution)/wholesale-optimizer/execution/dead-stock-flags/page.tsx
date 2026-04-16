import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DeadStockFlagsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L4 · Execution · Daily</p>
        <h1 className="text-2xl font-bold tracking-tight">Dead-Stock Flags</h1>
        <p className="text-muted-foreground mt-1">
          Real-time flagging of SKU-locations crossing 90 / 180 / 365-day zero-velocity thresholds. Feeds directly into the L2 Delist Analysis for supplier return action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { threshold: "90-day flags", count: "1,240", value: "$1.8M", action: "Review" },
          { threshold: "180-day flags", count: "3,840", value: "$4.2M", action: "Delist candidate" },
          { threshold: "365-day flags", count: "890", value: "$1.1M", action: "Urgent return/write-off" },
        ].map(({ threshold, count, value, action }) => (
          <Card key={threshold}>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm">{threshold}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p className="text-2xl font-bold">{count}</p>
              <p className="text-muted-foreground text-xs">{value} capital · Action: {action}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Newly Flagged (Last 7 Days) — 90-Day Threshold</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {[
              { sku: "5\" Cu Solder Cap", branch: "Greenville Spoke", days: 91, value: "$4.2K", prev_velocity: "2 units/yr" },
              { sku: "3.5\" Cu Press Reducer", branch: "Columbia Spoke", days: 94, value: "$2.8K", prev_velocity: "1 unit/yr" },
              { sku: "6\" Cu Solder 45° Elbow", branch: "Macon Spoke", days: 96, value: "$6.1K", prev_velocity: "3 units/yr" },
            ].map(({ sku, branch, days, value, prev_velocity }) => (
              <div key={`${sku}-${branch}`} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{sku}</p>
                  <p className="text-xs text-muted-foreground">{branch} · {days} days · Prior: {prev_velocity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{value}</span>
                  <Badge className="bg-amber-100 text-amber-800 text-xs">New flag</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
