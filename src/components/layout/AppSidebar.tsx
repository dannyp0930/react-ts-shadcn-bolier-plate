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
  CircleHelp,
  ImageUp,
  List,
  LucideProps,
  Mail,
  Mailbox,
  MailCheck,
  MailPlus,
  MailQuestion,
  Mails,
  Megaphone,
  MessageCircleQuestion,
  Monitor,
  MonitorCog,
  MonitorPlay,
  Send,
  Settings,
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
      number: 0,
    },
    {
      key: 'cs',
      title: '고객센터',
      icon: CircleHelp,
      number: 0,
      links: [
        {
          key: 'cs-faq-list',
          title: '고객센터 FAQ',
          href: 'https://sm.onoffmix.com/cs/faqList',
          icon: List,
        },
        {
          key: 'cs-inquire-list',
          title: '고객센터 문의',
          href: 'https://sm.onoffmix.com/cs/inquireList',
          icon: MessageCircleQuestion,
        },
        {
          key: 'cs-notice-list',
          title: '고객센터 공지사항',
          href: 'https://sm.onoffmix.com/cs/noticelist',
          icon: Megaphone,
        },
        {
          key: 'guide-email-result-list',
          title: '안내메일 발송 내역',
          href: 'https://sm.onoffmix.com/cs/GuideEmail/result_list',
          icon: Mailbox,
        },
        {
          key: 'cs-guide-email',
          title: '안내메일 발송',
          href: 'https://sm.onoffmix.com/cs/GuideEmail',
          icon: Send,
        },
      ],
    },
    {
      key: 'user',
      title: '사용자',
      icon: User,
      links: [
        {
          key: 'user',
          title: '사용자 관리',
          href: '/user',
          icon: UserCog,
        },
      ],
    },
    {
      key: 'event',
      title: '이벤트',
      icon: Calendar,
      links: [
        {
          key: 'event',
          title: '이벤트 관리',
          href: '/event',
          icon: CalendarCog,
        },
      ],
    },
    {
      key: 'channel',
      title: '채널',
      icon: Monitor,
      links: [
        {
          key: 'channel-manage',
          title: '채널 관리',
          href: 'https://sm.onoffmix.com/channel/manage',
          icon: MonitorCog,
        },
        {
          key: 'channel-manage',
          title: '채널 페이지',
          href: 'https://sm.onoffmix.com/channel/page',
          icon: MonitorPlay,
        },
      ],
    },
    {
      key: 'setting',
      title: '사이트 관리',
      icon: Settings,
      links: [
        {
          key: 'newsletter-manage',
          title: '뉴스레터 관리',
          href: 'https://sm.onoffmix.com/newsletter/manage',
          icon: Mails,
        },
        {
          key: 'newsletter-compose',
          title: '뉴스레터 작성',
          href: 'https://sm.onoffmix.com/newsletter/compose',
          icon: MailPlus,
        },
        {
          key: 'newsletter-subscribe',
          title: '뉴스레터 구독',
          href: 'https://sm.onoffmix.com/newsletter/subscribe',
          icon: MailCheck,
        },
        {
          key: 'newsletter-opinion',
          title: '뉴스레터 의견남기기',
          href: 'https://sm.onoffmix.com/newsletter/opinion',
          icon: MailQuestion,
        },
        {
          key: 'cs-email',
          title: '이메일 작성',
          href: 'https://sm.onoffmix.com/cs/email',
          icon: Mail,
        },
        {
          key: 'advert-skin',
          title: '스킨 관리',
          href: 'https://sm.onoffmix.com/Advert/skin',
          icon: ImageUp,
        },
        {
          key: 'code-ofm',
          title: '온오프믹스 코드 관리',
          href: 'https://sm.onoffmix.com/code/ofm',
          icon: ImageUp,
        },
        {
          key: 'cs-sms',
          title: '문자보내기',
          href: 'https://sm.onoffmix.com/cs/sms',
          icon: ImageUp,
        },
        {
          key: 'advert-ad-list',
          title: '광고 문의 리스트',
          href: 'https://sm.onoffmix.com/Advert/adList',
          icon: ImageUp,
        },
        {
          key: 'advert-partner-center-inquire-list',
          title: '파트너센터 문의 리스트',
          href: 'https://sm.onoffmix.com/Advert/partnerCenterInquireList',
          icon: ImageUp,
        },
        {
          key: 'cs-personal-info-usage-email',
          title: '개인정보 이용내역 안내 메일 관리',
          href: 'https://sm.onoffmix.com/cs/personalInfoUsageEmail',
          icon: ImageUp,
        },
        {
          key: 'nav-hot-keyword',
          title: '헤더 핫 키워드 관리',
          href: 'https://sm.onoffmix.com/navHotKeyword',
          icon: ImageUp,
        },
        {
          key: 'cs-footer-notice',
          title: '하단 공지사항 관리',
          href: 'https://sm.onoffmix.com/cs/footerNotice',
          icon: ImageUp,
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
                        <SidebarMenuSubButton asChild size="sm">
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
