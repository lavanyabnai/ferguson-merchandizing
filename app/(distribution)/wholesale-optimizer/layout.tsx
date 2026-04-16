export const metadata = {
  title: "WholesaleOS — Distribution Optimizer",
};

export default function WholesaleOptimizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full overflow-y-auto p-6">
      {children}
    </div>
  );
}
