import { NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
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
import { cn } from '@/lib/utils';
import {
  Bell,
  Calendar,
  CalendarCog,
  ChevronDown,
  LucideProps,
  User,
  UserCog,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface SidebarItem {
  key: string;
  title: string;
  href?: string;
  links?: SidebarSubItem[];
  number?: number;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>> &
    RefAttributes<SVGAElement>;
}

interface SidebarSubItem {
  key: string;
  title: string;
  href: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>> &
    RefAttributes<SVGAElement>;
}

export default function AppSidebar() {
  const items: SidebarItem[] = [
    {
      key: 'alarm',
      title: '알림 메시지',
      href: 'https://sm.onoffmix.com/Alarm',
      icon: Bell,
    },
    {
      key: 'user',
      title: '사용자',
      links: [
        {
          key: '2',
          title: '사용자 관리',
          href: '/user',
          icon: UserCog,
        },
      ],
      icon: User,
      number: 0,
    },
    {
      key: 'event',
      title: '이벤트',
      icon: Calendar,
      links: [
        {
          key: '1',
          title: '이벤트 관리',
          href: '/event',
          icon: CalendarCog,
        },
      ],
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader className="p-3.5">
        <NavLink to="https://sm.onoffmix.com">
          <img className="m-auto" src="/assets/logo.png" alt="onoffmix" />
        </NavLink>
      </SidebarHeader>
      <SidebarContent className="p-2">
        {items.map((item) => (
          <SidebarMenu key={item.key}>
            {item.links ? (
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <item.icon />
                      {item.title}
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.number !== undefined && (
                    <SidebarMenuBadge className="mr-5">
                      {item.number}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.links.map((link) => (
                      <SidebarMenuSubItem key={link.key}>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to={link.href}
                            className={({ isActive }) =>
                              cn('w-full', isActive && 'font-semibold')
                            }
                          >
                            <link.icon />
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
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.href ?? ''}
                    className={({ isActive }) =>
                      cn('w-full', isActive && 'font-semibold')
                    }
                  >
                    <item.icon />
                    {item.title}
                  </NavLink>
                </SidebarMenuButton>
                {item.number !== undefined && (
                  <SidebarMenuBadge className="mr-5">
                    {item.number}
                  </SidebarMenuBadge>
                )}
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
