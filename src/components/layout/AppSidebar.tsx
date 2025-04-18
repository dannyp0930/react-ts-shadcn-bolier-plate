import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';

export default function AppSidebar() {
  const items = [
    {
      title: 'HOME',
      href: '/',
    },
    {
      title: '이벤트 관리',
      href: '/event',
      links: [
        {
          title: 'HOME',
          href: '/',
        },
      ],
    },
    {
      title: '유저 관리',
      href: '/user',
      links: [
        {
          title: 'HOME',
          href: '/',
        },
      ],
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        {items.map((item) => (
          <SidebarGroup key={item.title}></SidebarGroup>
        ))}
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
