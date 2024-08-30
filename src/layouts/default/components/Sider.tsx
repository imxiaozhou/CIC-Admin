import type { CSSProperties } from 'react';
import { Layout, theme, Menu } from 'antd';
import { menus } from '@/config/menuConfig';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;
const { useToken } = theme;

export default function LayoutSider() {
  const [selectedKey, setSelectedKey] = useState('/dashboard'); 
  const layoutMode = useAppSelector(selectLayoutMode);
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const isFixedHeader = useAppSelector(selectIsFixedHeader);
  const history = useNavigate();

  const handleMenuClick = (e:any) => {
    setSelectedKey(e.key); 
    history(e.key); 
  };
  const {
    token: { colorBgContainer }
  } = useToken();
  const { collapsed } = useAppSelector((state) => state.layout);

  const positionStyle: CSSProperties = isFixedHeader
    ? { position: 'sticky', top: 64, zIndex: 100, height: 'calc(100vh - 64px)' }
    : { maxHeight: 'calc(100vh - 64px)' };

  return layoutMode === 'sidemenu' ? (
    <Sider
      width={290}
      collapsedWidth={80}
      trigger={null}
      // collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: !isDarkMode ? colorBgContainer : undefined,
        overflowY: 'auto',
        height: '100vh',
        ...positionStyle
      }}
    >
      <Menu
        mode="inline"
        theme={isDarkMode ? 'dark' : 'light'}
        items={menus}
        selectedKeys={[selectedKey]}
        onClick={handleMenuClick}
        className="side-menu"
      />
    </Sider>
  ) : null;
}
