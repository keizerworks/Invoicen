import React from "react";

import AppSidebar from "../../components/layouts/app-sidebar";
import { SidebarProvider } from "../../components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="min-h-dvh px-4 pt-4">{children}</main>
    </SidebarProvider>
  );
}
