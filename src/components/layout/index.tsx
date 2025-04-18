import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppHeader from '@/components/layout/AppHeader';
import AppSidebar from '@/components/layout/AppSidebar';
import AppFooter from '@/components/layout/AppFooter';

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <AppHeader />
        <Outlet />
        <AppFooter />
      </main>
    </SidebarProvider>
  );
}
