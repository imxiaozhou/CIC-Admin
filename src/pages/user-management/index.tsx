import { Favorites } from '@/components/business';
import Icon from '@/components/Icons';
import {
  CustomProTable,
  CustomProTableTheme
} from '@/components/proComponents';
import { ActionType, ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const UserManagement = () => {
  const tableRef = useRef<ActionType>();
  const navigate = useNavigate();
  const $t = useTranslations();

  const getDataSource = async (params: any) => {
    return {
      data: [],
      success: true,
      total: 0
    };
  };

  const columns: ProColumns<any>[] = [
    {
      title: $t('Job Name'),
      dataIndex: 'jobName',
      sorter: true,
      order: 3,
      search: false
    },
    {
      dataIndex: 'parameters',
      sorter: true,
      order: 1
    }
  ];
  return (
    <CustomProTableTheme>
      <Favorites label={$t('UserManagement')} />
      <CustomProTable
        actionRef={tableRef}
        rowSelection={false}
        columns={columns}
        searchTitle={$t('User Management')}
        headerTitle={$t('User List')}
        rowKey="id"
        request={getDataSource}
        toolBarRender={() => [
          <Button
            type="primary"
            onClick={() => navigate('/user-management/add-user')}
            key="addUser"
          >
            <Icon type="UserAddOutlined" />
            {$t('Add User')}
          </Button>
        ]}
      />
    </CustomProTableTheme>
  );
};

export default UserManagement;
