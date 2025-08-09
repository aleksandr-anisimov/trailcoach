import type { ReactNode } from "react";
import  Header  from "./layout/header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 p-4">{children}</main>
      <footer className="p-4 border-t text-sm text-center">
        &copy; 2025 TrailCoach
      </footer>
    </div>
  );
}