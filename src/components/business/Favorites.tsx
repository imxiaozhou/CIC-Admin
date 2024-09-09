import { Space, Button, Typography } from 'antd';
import Icon from '@/components/Icons';
import { FavoritesType } from '@/types/business';

const { Text } = Typography;

const Favorites = ({ code = '', label }: FavoritesType) => {
  const dispatch = useAppDispatch();
  const layoutMode = useAppSelector(selectLayoutMode);
  const collapsed = useAppSelector(selectCollapsed);

  return (
    <Space style={{ height: '32px', margin: '-6px 0 4px' }}>
      {layoutMode === 'sidemenu' && (
        <Button
          type="text"
          icon={<Icon type="MenuOutlined" />}
          onClick={() => dispatch(setCollapsed(!collapsed))}
        />
      )}

      {code ? <></> : <Text>{label}</Text>}
    </Space>
  );
};

export default Favorites;
