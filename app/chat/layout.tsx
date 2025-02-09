import ScrollHandler from "@/components/ScrollHandler";

const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollHandler>{children}</ScrollHandler>
    </div>
  );
};

export default InternalLayout;