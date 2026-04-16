import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Warehouse, MapPin, PackageSearch, LayoutGrid } from "lucide-react";

const MODULES = [
  {
    title: "ABC Slotting",
    description: "Velocity-based zone assignment. A items (top 20% velocity) at primary pick locations; B items at secondary; C items in reserve storage.",
    href: "/wholesale-optimizer/branch-layout/abc-slotting",
    icon: Warehouse,
  },
  {
    title: "Pick-Path Optimizer",
    description: "CP-SAT walk-sequence minimization. Reduces picker travel distance by 28% vs. random slot assignment in Atlanta hub branch benchmark.",
    href: "/wholesale-optimizer/branch-layout/pick-path-optimizer",
    icon: MapPin,
  },
  {
    title: "Will-Call Staging",
    description: "Contractor pickup prioritization and staging lane assignment. Platinum contractors get dedicated lanes; reduces will-call wait time from 12 min to 4 min.",
    href: "/wholesale-optimizer/branch-layout/will-call-staging",
    icon: PackageSearch,
  },
  {
    title: "Zone Assignment",
    description: "Full warehouse zone map: receiving, reserve, primary pick, will-call staging, returns processing. Optimized for copper fittings weight/density profile.",
    href: "/wholesale-optimizer/branch-layout/zone-assignment",
    icon: LayoutGrid,
  },
];

export default function BranchLayoutPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L3 · Weekly</p>
        <h1 className="text-2xl font-bold tracking-tight">Branch Layout</h1>
        <p className="text-muted-foreground mt-1">
          Warehouse and branch layout optimization: ABC velocity slotting, pick-path minimization, will-call staging, and zone assignments. Outputs exportable to WMS (Manhattan, Körber, HighJump).
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MODULES.map(({ title, description, href, icon: Icon }) => (
          <Link key={title} href={href}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <Icon className="h-5 w-5 text-amber-600" />
                <CardTitle className="text-base mt-1">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
