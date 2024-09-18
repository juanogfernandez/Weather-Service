import { ReactNode } from "react";
import SwitchBar from "@/components/common/switch-bar";

interface LayoutProps {
  children: ReactNode;
}

// Layout de app
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-start antialiased">
      <SwitchBar />
      {children}
    </div>
  );
}
