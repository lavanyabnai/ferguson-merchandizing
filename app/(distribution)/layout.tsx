import { HeaderBlueWholesale } from "@/components/HeaderBlueWholesale";

interface DistributionLayoutProps {
  children: React.ReactNode;
}

export default async function DistributionLayout({ children }: DistributionLayoutProps) {
  return (
    <div className="pt-14 h-screen">
      <HeaderBlueWholesale />
      <div className="w-full h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
