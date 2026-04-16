import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SCENARIOS = [
  { id: "1", name: "Q2 2024 Baseline — Copper Fittings SE", layer: "L1", status: "complete", fill_rate: "98.4%", cost: "$13.7M", created: "2024-04-01" },
  { id: "2", name: "Budget -15% Sensitivity", layer: "L1", status: "complete", fill_rate: "96.1%", cost: "$11.7M", created: "2024-04-02" },
  { id: "3", name: "Hurricane Season Supply Disruption", layer: "L1", status: "complete", fill_rate: "93.4%", cost: "$14.2M", created: "2024-04-05" },
  { id: "4", name: "Q3 2024 Seasonal Uplift (+20%)", layer: "L0.5", status: "complete", fill_rate: "97.8%", cost: "$14.9M", created: "2024-04-08" },
  { id: "5", name: "Mueller Lead Time +7 Days", layer: "L1", status: "running", fill_rate: "—", cost: "—", created: "2024-04-16" },
];

export default function ScenariosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Scenarios</h1>
        <p className="text-muted-foreground mt-1">
          Network positioning and demand scenario history. Each scenario captures a full L1 optimization run with its inputs, decisions, and KPIs.
        </p>
      </div>

      <div className="space-y-2">
        {SCENARIOS.map(({ id, name, layer, status, fill_rate, cost, created }) => (
          <Link key={id} href={`/wholesale-optimizer/scenarios/${id}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="py-3 px-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-mono">{layer}</Badge>
                      <p className="font-medium text-sm">{name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">Created: {created}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    {fill_rate !== "—" && <span className="text-muted-foreground">Fill: <span className="font-semibold text-foreground">{fill_rate}</span></span>}
                    {cost !== "—" && <span className="text-muted-foreground">Cost: <span className="font-semibold text-foreground">{cost}</span></span>}
                    <Badge className={status === "complete" ? "bg-green-100 text-green-800 text-xs" : "bg-blue-100 text-blue-800 text-xs"}>
                      {status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
