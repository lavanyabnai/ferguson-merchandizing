import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Static demo data keyed by scenario id
const SCENARIO_DATA: Record<string, { name: string; layer: string; status: string; fill_rate: string; cost: string; notes: string; created: string }> = {
  "1": { name: "Q2 2024 Baseline — Copper Fittings SE", layer: "L1", status: "complete", fill_rate: "98.4%", cost: "$13.7M", notes: "Baseline Q2 network positioning. Platinum at 98.4% vs. 99% target — flagged for Q3 rerun with safety stock uplift.", created: "2024-04-01" },
  "2": { name: "Budget -15% Sensitivity", layer: "L1", status: "complete", fill_rate: "96.1%", cost: "$11.7M", notes: "15% working capital reduction forces 1,240 additional SKU-branches to hub-replenish. Silver tier drops to 93.8% fill rate.", created: "2024-04-02" },
  "3": { name: "Hurricane Season Supply Disruption", layer: "L1", status: "complete", fill_rate: "93.4%", cost: "$14.2M", notes: "Mueller and Nibco shipping delays of +14 days. Requires $0.5M incremental buffer stock at Jacksonville and Tampa DCs.", created: "2024-04-05" },
};

export default async function ScenarioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const scenario = SCENARIO_DATA[id];

  if (!scenario) {
    return (
      <div className="space-y-4">
        <Link href="/wholesale-optimizer/scenarios" className="text-sm text-blue-600 hover:underline">← Back to scenarios</Link>
        <p className="text-muted-foreground">Scenario not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/wholesale-optimizer/scenarios" className="text-sm text-blue-600 hover:underline">← Back to scenarios</Link>
        <div className="flex items-center gap-3 mt-2">
          <Badge variant="outline" className="font-mono text-xs">{scenario.layer}</Badge>
          <Badge className={scenario.status === "complete" ? "bg-green-100 text-green-800 text-xs" : "bg-blue-100 text-blue-800 text-xs"}>{scenario.status}</Badge>
        </div>
        <h1 className="text-2xl font-bold tracking-tight mt-1">{scenario.name}</h1>
        <p className="text-sm text-muted-foreground">Created: {scenario.created}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-1"><CardTitle className="text-sm text-muted-foreground font-normal">Fill rate</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold">{scenario.fill_rate}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1"><CardTitle className="text-sm text-muted-foreground font-normal">Inventory cost</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold">{scenario.cost}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1"><CardTitle className="text-sm text-muted-foreground font-normal">Layer</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold font-mono">{scenario.layer}</p></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-base">Notes</CardTitle></CardHeader>
        <CardContent><p className="text-sm text-muted-foreground">{scenario.notes}</p></CardContent>
      </Card>
    </div>
  );
}
