import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppHeader from '@/components/layout/AppHeader';
import AppSidebar from '@/components/layout/AppSidebar';

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="grow">
        <AppHeader />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
