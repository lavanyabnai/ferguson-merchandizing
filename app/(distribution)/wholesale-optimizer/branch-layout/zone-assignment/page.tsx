import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ZONES = [
  { zone: "Receiving / Inbound", sqft: 2600, pct: "10%", purpose: "Unloading, receiving inspection, put-away staging" },
  { zone: "Reserve Racking (C items)", sqft: 7800, pct: "30%", purpose: "High-bay racking, slow movers, bulk copper tube" },
  { zone: "Primary Pick (A+B items)", sqft: 9360, pct: "36%", purpose: "Ground-level golden zone, flow rack, bin shelving" },
  { zone: "Will-Call Staging", sqft: 3640, pct: "14%", purpose: "8 staging lanes (2 platinum, 2 gold, 3 standard, 1 counter)" },
  { zone: "Returns / QA", sqft: 1300, pct: "5%", purpose: "Supplier return staging, damage inspection, QA hold" },
  { zone: "Office / Common", sqft: 1300, pct: "5%", purpose: "Manager office, break room, restrooms" },
];

export default function ZoneAssignmentPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L3 · Branch Layout · Weekly</p>
        <h1 className="text-2xl font-bold tracking-tight">Zone Assignment</h1>
        <p className="text-muted-foreground mt-1">
          Full warehouse zone map for Atlanta hub branch (26,000 sq ft). Zone boundaries are optimized for copper fittings weight/density profile — heavy copper tube in ground-level reserve; lightweight press fittings in primary pick.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {ZONES.map(({ zone, sqft, pct, purpose }) => (
          <Card key={zone} className="border">
            <CardContent className="py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{zone}</p>
                  <p className="text-xs text-muted-foreground">{purpose}</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground">{sqft.toLocaleString()} sq ft</span>
                  <Badge variant="outline" className="text-xs">{pct}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">WMS Export Formats</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>Zone assignment exports to Manhattan Active WMS, Körber WMS, and HighJump CSV format. Slot IDs follow the ZONE-AISLE-BAY-LEVEL convention (e.g., A-01-003-01). Export triggers an automated slot validation check before upload.</p>
        </CardContent>
      </Card>
    </div>
  );
}
