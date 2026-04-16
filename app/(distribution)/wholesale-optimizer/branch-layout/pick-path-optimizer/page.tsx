import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PickPathOptimizerPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L3 · Branch Layout · Weekly</p>
        <h1 className="text-2xl font-bold tracking-tight">Pick-Path Optimizer</h1>
        <p className="text-muted-foreground mt-1">
          CP-SAT (OR-Tools) walk-sequence minimization. Models the warehouse as a directed graph; solves a TSP variant for each picker wave to minimize total travel distance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Avg. travel distance / wave", before: "1,840m", after: "1,320m", improvement: "-28%" },
          { label: "Picks per hour", before: "68", after: "94", improvement: "+38%" },
          { label: "Lines filled / picker / day", before: "312", after: "428", improvement: "+37%" },
        ].map(({ label, before, after, improvement }) => (
          <Card key={label}>
            <CardHeader className="pb-1">
              <CardTitle className="text-xs text-muted-foreground font-normal">{label}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-muted-foreground line-through text-xs">{before}</p>
              <p className="text-2xl font-bold">{after}</p>
              <p className="text-xs text-green-600 font-semibold">{improvement} vs. random slot</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Algorithm Details</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>The warehouse aisle graph is modeled as a weighted directed graph. Each pick location is a node; aisle traversal distance is the edge weight. The CP-SAT solver minimizes total edge weight for a given pick wave (typically 20-40 lines).</p>
          <p>For larger waves (&gt;80 lines), a 2-opt local search heuristic is applied post-solve to escape local optima within 500ms time budget.</p>
          <p><span className="font-medium text-foreground">Atlanta hub benchmark:</span> 5 pickers × 8 waves/day. CP-SAT solve time per wave: avg 1.8s. Improvement validated over 6-week pilot in Jacksonville branch.</p>
        </CardContent>
      </Card>
    </div>
  );
}
