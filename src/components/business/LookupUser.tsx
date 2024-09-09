import type { ProColumns } from '@ant-design/pro-components';
import { Button, Typography, Modal } from 'antd';
import Icon from '@/components/Icons';
import { modalProps } from '@/config/common';
import type { ILookup, LookupUserProps } from '@/types/business';
import { CustomProTable, SelectSearchable } from '@/components/proComponents';

const { Title } = Typography;

const getDataSource = async (params: any) => {
  return {};
};

const LookupUser = (props: LookupUserProps) => {
  const { onAdd, type = 'user' } = props;
  // const [form] = Form.useForm<ILookup>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddUser = (record: ILookup, type: string) => {
    setIsModalOpen(false);
    onAdd(record, type);
  };

  const columns: ProColumns<ILookup>[] = [
    {
      title: $t('User Name'),
      dataIndex: 'userName',
      key: 'userName',
      sorter: true
    },
    {
      title: $t('User Email'),
      dataIndex: 'userEmail',
      key: 'userEmail',
      sorter: true
    },
    {
      title: $t('User Tenant'),
      dataIndex: 'userTenant',
      initialValue: '',
      order: 1,
      key: 'userTenant',
      sorter: true,
      renderFormItem(schema, config, form, action) {
        return (
          <SelectSearchable
            defaultValue={[
              {
                label: '',
                value: ''
              }
            ]}
            disabled={true}
            onValueChange={(newValue: LabelValue[]) => {
              form.setFieldsValue({
                userTenant: newValue[0]?.value
              });
            }}
          />
        );
      }
    },
    {
      title: $t('Action'),
      dataIndex: 'option',
      valueType: 'option',
      fixed: 'right',
      width: 80,
      render: (_, record) => [
        <Button
          key="choose"
          type="link"
          onClick={() => handleAddUser(record, type)}
        >
          {$t('Choose')}
        </Button>
      ]
    }
  ];

  return (
    <>
      <Button
        type="primary"
        ghost
        icon={<Icon type="UserOutlined" />}
        onClick={() => setIsModalOpen(true)}
      >
        {$t('Look Up')}
      </Button>
      {isModalOpen && (
        <Modal
          {...modalProps}
          width="1200px"
          footer={false}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
        >
          <Title
            level={4}
            className="text-center"
            style={{ paddingTop: '16px', paddingBottom: 0 }}
          >
            {$t('Lookup User')}
          </Title>
          <CustomProTable
            columns={columns}
            rowSelection={false}
            headerTitle={$t('Search Result')}
            searchTitle={$t('Search User')}
            rowKey="uid"
            request={getDataSource}
          />
        </Modal>
      )}
    </>
  );
};
export default LookupUser;
