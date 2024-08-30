import { IconType } from '@/components/Icons';

export interface MenuItem {
  label: string;
  key: string;
  icon?: IconType;
  children?: MenuItem[];
  hidden?: boolean;
  code?: string;
}

export const menus: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'AppstoreOutlined',
    key: '/dashboard',
  },
  {
    label: 'User Management',
    key: '/user-management',
  },
  {
    label: 'System Settings',
    key: '/system-settings',
  },
  {
    label: 'Content Management',
    key: '/content-management',
  }
];
