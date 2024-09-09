import { Favorites } from '@/components/business';
import Icon from '@/components/Icons';
import { CustomFormButton } from '@/components/proComponents';
import config from '@/config';
import {
  ProDescriptions,
  ProForm,
  ProFormSelect,
  ProFormSwitch
} from '@ant-design/pro-components';
import { Button, Card, Flex, Form, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;
const AddUser = () => {
  const [form] = Form.useForm<any>();
  const navigate = useNavigate();
  const $t = useTranslations();

  const columns = [
    {
      label: $t('Name'),
      key: 'name'
    },
    {
      label: $t('Email Address'),
      key: 'emailAddress'
    },
    {
      label: $t('Entitle'),
      key: 'entitle',
      children: (
        <ProFormSelect
          name="entitle"
          width="sm"
          placeholder={$t('Please Select User Status')}
          rules={[
            {
              required: true,
              message: $t('Please Select User Status')
            }
          ]}
        />
      )
    },
    {
      label: $t('Role'),
      key: 'role',
      children: (
        <ProFormSelect
          name="role"
          width="sm"
          placeholder={$t('Please Select Account Status')}
          rules={[
            {
              required: true,
              message: $t('Please Select Account Status')
            }
          ]}
        />
      )
    },
    {
      label: $t('Status'),
      key: 'status',
      children: (
        <ProFormSwitch
          name="status"
          checkedChildren={$t('Active')}
          unCheckedChildren={$t('Deactivate')}
          initialValue={true}
        />
      )
    }
  ];
  return (
    <>
      <Favorites label={$t('UserManagement')} />
      <Card style={{ flex: 1 }}>
        <Flex justify="space-between">
          <Title level={4}>{$t('User details')}</Title>
          <Space>
            <Button ghost onClick={() => navigate(-1)}>
              <Icon type="LeftOutlined" />
              {$t('Back')}
            </Button>
            <ProForm
              form={form}
              submitter={{
                render(props) {
                  return (
                    <Flex gap="small" style={{ justifyContent: 'end' }}>
                      <CustomFormButton formInstance={props.form}>
                        {$t('Save')}
                      </CustomFormButton>
                    </Flex>
                  );
                }
              }}
            />
          </Space>
        </Flex>

        <Flex style={{ marginTop: '16px' }}>
          <Flex>
            <ProDescriptions layout="vertical" columns={columns} />
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default AddUser;
