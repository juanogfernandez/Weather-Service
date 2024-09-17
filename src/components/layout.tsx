import SwitchBar from "@/components/switch-bar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

// Layout de app
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-start antialiased">
      <SwitchBar />
      <div className="mt-7 flex h-2/3 w-5/6 flex-col items-center justify-center lg:w-3/4 lg:flex-row xl:w-2/3">
        {children}
      </div>
    </div>
  );
}
