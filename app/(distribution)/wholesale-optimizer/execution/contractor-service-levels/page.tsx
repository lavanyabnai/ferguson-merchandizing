import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContractorServiceLevelsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L4 · Execution · Daily</p>
        <h1 className="text-2xl font-bold tracking-tight">Contractor Service Levels</h1>
        <p className="text-muted-foreground mt-1">
          Per-tier fill rate actuals vs. targets. A contractor who can&apos;t get a fitting today loses a day on the job site — and remembers for years. Fill rate is a hard constraint, not a KPI to optimize.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { tier: "Platinum", target: "99.0%", actual: "98.4%", gap: "-0.6%", contractors: 28, ok: false },
          { tier: "Gold", target: "97.0%", actual: "97.6%", gap: "+0.6%", contractors: 94, ok: true },
          { tier: "Silver", target: "95.0%", actual: "95.8%", gap: "+0.8%", contractors: 212, ok: true },
          { tier: "Transactional", target: "92.0%", actual: "93.1%", gap: "+1.1%", contractors: 1041, ok: true },
        ].map(({ tier, target, actual, gap, contractors, ok }) => (
          <Card key={tier} className={!ok ? "border-amber-300 bg-amber-50/30" : ""}>
            <CardHeader className="pb-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">{tier}</CardTitle>
                {!ok && <Badge className="bg-amber-100 text-amber-800 text-xs">Below target</Badge>}
              </div>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p>Target: <span className="font-semibold">{target}</span></p>
              <p>Actual: <span className={`font-bold ${ok ? "text-green-600" : "text-amber-600"}`}>{actual}</span></p>
              <p className={`text-xs font-semibold ${ok ? "text-green-600" : "text-amber-600"}`}>{gap} vs. target</p>
              <p className="text-xs text-muted-foreground">{contractors} contractors</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Platinum Contractor Fill Rate — This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {[
              { contractor: "Sunshine Mechanical", fill: "99.1%", lines: 284, misses: 2, branch: "Tampa" },
              { contractor: "Atlantic Plumbing Group", fill: "98.6%", lines: 196, misses: 3, branch: "Miami" },
              { contractor: "Peach State Mechanical", fill: "97.8%", lines: 318, misses: 7, branch: "Atlanta" },
              { contractor: "Coastal Contractors Inc.", fill: "96.2%", lines: 142, misses: 5, branch: "Jacksonville" },
            ].map(({ contractor, fill, lines, misses, branch }) => (
              <div key={contractor} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{contractor}</p>
                  <p className="text-xs text-muted-foreground">{branch} · {lines} lines · {misses} misses</p>
                </div>
                <span className={`font-bold ${parseFloat(fill) >= 99 ? "text-green-600" : parseFloat(fill) >= 97 ? "text-amber-600" : "text-red-600"}`}>
                  {fill}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
