import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SafetyStockOptimizerPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L1 · Network Optimization · Quarterly</p>
        <h1 className="text-2xl font-bold tracking-tight">Safety Stock Optimizer</h1>
        <p className="text-muted-foreground mt-1">
          Service-level constrained safety stock by SKU × location × contractor tier. Formula: SS = z(α) × σ_LT × √LT where z(α) is the service-factor for the tier fill-rate target.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { tier: "Platinum", z: "2.576", target: "99.0%", avg_ss_days: "18", color: "bg-slate-50" },
          { tier: "Gold", z: "1.881", target: "97.0%", avg_ss_days: "12", color: "bg-yellow-50" },
          { tier: "Silver", z: "1.645", target: "95.0%", avg_ss_days: "9", color: "bg-blue-50" },
          { tier: "Transactional", z: "1.405", target: "92.0%", avg_ss_days: "6", color: "bg-slate-50" },
        ].map(({ tier, z, target, avg_ss_days, color }) => (
          <Card key={tier} className={color}>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm">{tier}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p>Target: <span className="font-semibold">{target}</span></p>
              <p>z-factor: <span className="font-mono font-semibold">{z}</span></p>
              <p>Avg SS: <span className="font-semibold">{avg_ss_days} days</span></p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Safety Stock by Branch Type — Copper Fittings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {[
              { branch: "Central DC (Atlanta)", sku_coverage: "8,000", total_ss_value: "$2.1M", avg_days: "22" },
              { branch: "Regional DC (Jacksonville)", sku_coverage: "6,200", total_ss_value: "$1.4M", avg_days: "18" },
              { branch: "Regional DC (Charlotte)", sku_coverage: "5,800", total_ss_value: "$1.2M", avg_days: "16" },
              { branch: "Hub branches (avg. of 24)", sku_coverage: "2,100", total_ss_value: "$0.38M", avg_days: "14" },
              { branch: "Spoke branches (avg. of 156)", sku_coverage: "820", total_ss_value: "$0.11M", avg_days: "10" },
            ].map(({ branch, sku_coverage, total_ss_value, avg_days }) => (
              <div key={branch} className="flex items-center justify-between py-2 border-b last:border-0">
                <p className="font-medium">{branch}</p>
                <div className="flex gap-6 text-right text-muted-foreground text-xs">
                  <span>{sku_coverage} SKUs</span>
                  <span className="font-semibold text-foreground">{total_ss_value}</span>
                  <span>{avg_days} days</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
