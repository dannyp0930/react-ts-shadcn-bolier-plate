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
import { ChevronDown } from 'lucide-react';

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
      key: 'user',
      title: '사용자',
      links: [
        {
          key: '2',
          title: '사용자 관리',
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
