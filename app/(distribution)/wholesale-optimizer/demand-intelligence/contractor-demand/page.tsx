import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContractorDemandPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L0.5 · Demand Intelligence · Continuous</p>
        <h1 className="text-2xl font-bold tracking-tight">Contractor Demand</h1>
        <p className="text-muted-foreground mt-1">
          Top-account demand modeling. Platinum and gold contractors with visible project pipelines contribute deterministic demand signals that aggregate models miss.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { tier: "Platinum", count: 28, revenue: "$14.2M", fillTarget: "99%" },
          { tier: "Gold", count: 94, revenue: "$18.6M", fillTarget: "97%" },
          { tier: "Silver", count: 212, revenue: "$12.1M", fillTarget: "95%" },
          { tier: "Transactional", count: 1041, revenue: "$8.9M", fillTarget: "92%" },
        ].map(({ tier, count, revenue, fillTarget }) => (
          <Card key={tier}>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm">{tier}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p className="text-2xl font-bold">{count}</p>
              <p className="text-muted-foreground text-xs">{revenue} annual · Fill target {fillTarget}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Top Account Pipeline — Copper Fittings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {[
              { contractor: "Sunshine Mechanical", tier: "Platinum", project: "Tampa Commercial Tower", sku_count: 284, value: "$48K", expected: "2024-Q2" },
              { contractor: "Atlantic Plumbing Group", tier: "Platinum", project: "Miami Residential Reno (120 units)", sku_count: 196, value: "$31K", expected: "2024-Q2" },
              { contractor: "Coastal Contractors Inc.", tier: "Gold", project: "Jacksonville Industrial MRO", sku_count: 142, value: "$22K", expected: "2024-Q3" },
              { contractor: "Peach State Mechanical", tier: "Gold", project: "Atlanta Office Complex", sku_count: 318, value: "$51K", expected: "2024-Q2" },
            ].map(({ contractor, tier, project, sku_count, value, expected }) => (
              <div key={contractor} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{contractor}</p>
                    <Badge className={tier === "Platinum" ? "bg-slate-100 text-slate-800 text-xs" : "bg-amber-100 text-amber-800 text-xs"}>{tier}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{project} · {sku_count} SKUs</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{value}</p>
                  <p className="text-xs text-muted-foreground">{expected}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
