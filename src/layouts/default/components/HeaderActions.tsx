import { Space } from 'antd';
import NoticeHeaderButton from './NoticeIcon';
import PersonalCenter from './PersonalCenter';
import LanguageSetting from './LanguageSetting';
import { DarkModeSwitch } from '@/components/DarkModeSwitch';

export default function HeaderActions() {
  return (
    <Space>
      <NoticeHeaderButton />
      <PersonalCenter />
      <LanguageSetting />
      <DarkModeSwitch />
    </Space>
  );
}
