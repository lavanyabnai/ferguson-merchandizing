import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WholesaleDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Distribution Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Cross-layer summary — Ferguson Southeast · Copper Fittings · Refreshed daily.
        </p>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3">
        {[
          { label: "Region fill rate", value: "97.6%", target: "97%", ok: true },
          { label: "Platinum fill rate", value: "98.4%", target: "99%", ok: false },
          { label: "Working capital (SE)", value: "$13.7M", ok: true },
          { label: "Dead stock", value: "$4.2M", ok: false },
          { label: "Open stockout alerts", value: "28", ok: false },
          { label: "Supplier OTD (avg)", value: "92.4%", ok: true },
        ].map(({ label, value, ok }) => (
          <Card key={label} className={!ok ? "border-amber-200 bg-amber-50/20" : ""}>
            <CardHeader className="pb-1 pt-3 px-3">
              <CardTitle className="text-xs text-muted-foreground font-normal">{label}</CardTitle>
            </CardHeader>
            <CardContent className="px-3 pb-3">
              <p className={`text-xl font-bold ${ok ? "" : "text-amber-600"}`}>{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Layer status */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {[
          { layer: "L0", label: "Category Strategy", last_run: "2024-01-15", status: "Current", href: "/wholesale-optimizer/category-strategy" },
          { layer: "L0.5", label: "Demand Intelligence", last_run: "2024-04-15 06:00", status: "Current", href: "/wholesale-optimizer/demand-intelligence" },
          { layer: "L1", label: "Network Optimization", last_run: "2024-04-01", status: "Current", href: "/wholesale-optimizer/network-optimization" },
          { layer: "L2", label: "Branch Assortment", last_run: "2024-04-10", status: "Current", href: "/wholesale-optimizer/branch-assortment" },
          { layer: "L3", label: "Branch Layout", last_run: "2024-04-14", status: "Current", href: "/wholesale-optimizer/branch-layout" },
          { layer: "L4", label: "Execution Monitoring", last_run: "2024-04-16 00:00", status: "Live", href: "/wholesale-optimizer/execution" },
        ].map(({ layer, label, last_run, status, href }) => (
          <Link key={layer} href={href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="py-3 px-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-muted-foreground">{layer}</span>
                    <p className="font-medium text-sm">{label}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">Last run: {last_run}</p>
                </div>
                <Badge className={status === "Live" ? "bg-green-100 text-green-800 text-xs" : "bg-blue-100 text-blue-800 text-xs"}>
                  {status}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
