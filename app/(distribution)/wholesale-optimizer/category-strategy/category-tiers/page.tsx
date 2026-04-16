import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TIER_DEFINITIONS = [
  {
    tier: "Critical",
    color: "bg-red-100 text-red-800",
    description: "High revenue, low substitutability. Stockout causes contractor job-site shutdown. Requires dedicated inventory buffer and preferred supplier agreements.",
    examples: "Copper press fittings, ball valves, CPVC cement",
    fillTarget: "99.5%",
    supplierStrategy: "Dual-source with consignment",
  },
  {
    tier: "Leverage",
    color: "bg-amber-100 text-amber-800",
    description: "High spend, multiple qualified suppliers. Negotiating leverage available. Target consolidation to 2 suppliers per subcategory for volume discounts.",
    examples: "Copper tube, solder fittings, pipe hangers",
    fillTarget: "98%",
    supplierStrategy: "Consolidate to 2 suppliers",
  },
  {
    tier: "Routine",
    color: "bg-blue-100 text-blue-800",
    description: "Standard commercial products with established supply base. Manage for efficiency — reduce PO frequency through blanket orders.",
    examples: "Threaded fittings, unions, couplings",
    fillTarget: "96%",
    supplierStrategy: "Blanket PO, hub replenish",
  },
  {
    tier: "Commodity",
    color: "bg-slate-100 text-slate-800",
    description: "Low margin, easily substituted, widely available. Optimize for lowest total cost including handling. Consider drop-ship or 3PL.",
    examples: "Miscellaneous hardware, tape, consumables",
    fillTarget: "93%",
    supplierStrategy: "Drop-ship or special order",
  },
];

export default function CategoryTiersPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L0 · Category Strategy · Annual</p>
        <h1 className="text-2xl font-bold tracking-tight">Category Tiers</h1>
        <p className="text-muted-foreground mt-1">
          Four-tier classification framework mapping each subcategory to a supply strategy. Copper fittings demo — Southeast region.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TIER_DEFINITIONS.map(({ tier, color, description, examples, fillTarget, supplierStrategy }) => (
          <Card key={tier}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Badge className={color}>{tier}</Badge>
                <span className="text-sm text-muted-foreground">Fill target: {fillTarget}</span>
              </div>
              <CardTitle className="text-base">{tier} Category</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">{description}</p>
              <p><span className="font-medium">Examples:</span> {examples}</p>
              <p><span className="font-medium">Supplier strategy:</span> {supplierStrategy}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
