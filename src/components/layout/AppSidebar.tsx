import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarItem {
  key: string;
  title: string;
  href?: string;
  links?: SidebarSubItem[];
  number?: number;
}

interface SidebarSubItem {
  key: string;
  title: string;
  href: string;
}

export default function AppSidebar() {
  const items: SidebarItem[] = [
    {
      key: 'home',
      title: 'HOME',
      href: '/',
      number: 0,
    },
    {
      key: 'user',
      title: '사용자',
      links: [
        {
          key: '2',
          title: '유저 관리',
          href: '/user',
        },
      ],
      number: 0,
    },
    {
      key: 'event',
      title: '이벤트',
      links: [
        {
          key: '1',
          title: '이벤트 관리',
          href: '/event',
        },
      ],
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        {items.map((item) => (
          <SidebarMenu key={item.key}>
            {item.links ? (
              <Collapsible>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>{item.title}</SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.number !== undefined && (
                    <SidebarMenuBadge>{item.number}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.links.map((link) => (
                      <SidebarMenuSubItem key={link.key}>
                        <SidebarMenuSubButton>
                          <NavLink
                            to={link.href}
                            className={({ isActive }) =>
                              cn('w-full', isActive && 'font-semibold')
                            }
                          >
                            {link.title}
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <NavLink
                    to={item.href ?? ''}
                    className={({ isActive }) =>
                      cn('w-full', isActive && 'font-semibold')
                    }
                  >
                    {item.title}
                  </NavLink>
                </SidebarMenuButton>
                {item.number !== undefined && (
                  <SidebarMenuBadge>{item.number}</SidebarMenuBadge>
                )}
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        ))}
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
