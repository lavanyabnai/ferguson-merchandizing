import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SupplierSlaTrackingPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L4 · Execution · Daily</p>
        <h1 className="text-2xl font-bold tracking-tight">Supplier SLA Tracking</h1>
        <p className="text-muted-foreground mt-1">
          On-time delivery rate, lead-time variance (actual vs. quoted), and fill rate by supplier. Weekly scorecards with 13-week rolling trend. Copper fittings suppliers — Southeast region.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Supplier Scorecard — Copper Fittings, Rolling 13 Weeks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-5 text-xs font-medium text-muted-foreground pb-2 border-b">
              <span>Supplier</span>
              <span className="text-right">OTD</span>
              <span className="text-right">LT vs. Quoted</span>
              <span className="text-right">Fill Rate</span>
              <span className="text-right">Status</span>
            </div>
            {[
              { supplier: "Mueller Industries", otd: "97.2%", lt_var: "+0.3 days", fill: "98.8%", status: "green" },
              { supplier: "Nibco", otd: "96.1%", lt_var: "+0.8 days", fill: "97.4%", status: "green" },
              { supplier: "Streamline Cooper", otd: "91.4%", lt_var: "+2.1 days", fill: "94.1%", status: "amber" },
              { supplier: "Elkhart Products", otd: "88.6%", lt_var: "+3.4 days", fill: "91.2%", status: "red" },
              { supplier: "Regional Distributor A", otd: "78.1%", lt_var: "+5.8 days", fill: "84.3%", status: "red" },
            ].map(({ supplier, otd, lt_var, fill, status }) => (
              <div key={supplier} className="grid grid-cols-5 py-2 border-b last:border-0">
                <span className="font-medium">{supplier}</span>
                <span className="text-right">{otd}</span>
                <span className="text-right text-muted-foreground">{lt_var}</span>
                <span className="text-right">{fill}</span>
                <span className="text-right">
                  <Badge className={status === "green" ? "bg-green-100 text-green-800 text-xs" : status === "amber" ? "bg-amber-100 text-amber-800 text-xs" : "bg-red-100 text-red-800 text-xs"}>
                    {status === "green" ? "On track" : status === "amber" ? "Watch" : "At risk"}
                  </Badge>
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
