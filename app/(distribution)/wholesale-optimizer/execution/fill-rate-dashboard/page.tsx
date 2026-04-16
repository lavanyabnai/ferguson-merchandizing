import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BRANCH_DATA = [
  { branch: "Atlanta Hub (GA)", fill_rate: "98.8%", target: "97%", status: "above", platinum_fr: "99.1%" },
  { branch: "Jacksonville Hub (FL)", fill_rate: "97.4%", target: "97%", status: "above", platinum_fr: "98.6%" },
  { branch: "Charlotte Hub (NC)", fill_rate: "96.1%", target: "97%", status: "below", platinum_fr: "97.9%" },
  { branch: "Miami Spoke (FL)", fill_rate: "97.9%", target: "97%", status: "above", platinum_fr: "99.0%" },
  { branch: "Tampa Spoke (FL)", fill_rate: "95.8%", target: "97%", status: "below", platinum_fr: "97.2%" },
];

export default function FillRateDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L4 · Execution · Daily</p>
        <h1 className="text-2xl font-bold tracking-tight">Fill-Rate Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Line fill rate by branch and contractor tier. Refreshed daily from WMS order data. Copper fittings category — Southeast region.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Region fill rate", value: "97.6%", target: "97%", ok: true },
          { label: "Platinum fill rate", value: "98.4%", target: "99%", ok: false },
          { label: "Branches above target", value: "142 / 180", ok: true },
          { label: "Open stockout alerts", value: "28", ok: false },
        ].map(({ label, value, ok }) => (
          <Card key={label}>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm text-muted-foreground font-normal">{label}</CardTitle>
              <p className={`text-2xl font-bold ${ok ? "text-green-600" : "text-amber-600"}`}>{value}</p>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Branch Fill Rate — This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {BRANCH_DATA.map(({ branch, fill_rate, target, status, platinum_fr }) => (
              <div key={branch} className="flex items-center justify-between py-2 border-b last:border-0">
                <p className="font-medium">{branch}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">Target: {target}</span>
                  <span className="font-semibold">{fill_rate}</span>
                  <span className="text-xs text-muted-foreground">Platinum: {platinum_fr}</span>
                  <Badge className={status === "above" ? "bg-green-100 text-green-800 text-xs" : "bg-amber-100 text-amber-800 text-xs"}>
                    {status === "above" ? "On target" : "Below target"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
