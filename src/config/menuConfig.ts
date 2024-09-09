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
    key: '/dashboard'
  },
  {
    label: 'User Management',
    icon: 'UserOutlined',
    key: '/user-management',
    children: [
      {
        label: 'Add User',
        key: '/user-management/add-user',
        hidden: true
      }
    ]
  },
  {
    label: 'System Settings',
    icon: 'SettingOutlined',
    key: '/system-settings'
  },
  {
    label: 'Content Management',
    icon: 'UsergroupDeleteOutlined',
    key: '/content-management'
  }
];
