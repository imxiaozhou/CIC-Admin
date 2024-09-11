import { Favorites } from '@/components/business';
import { CustomFormButton } from '@/components/proComponents';
import { Card, Layout, Menu, Space, Typography } from 'antd';
import './index.less';
import Counter from './components/Counter';

const { Sider, Content } = Layout;
const { Title } = Typography;
const SysTemSetting = () => {
  const [details, setDetails] = useState<any>({
    passwordExpiryTime: 12
  });
  const [key, setKey] = useState<string>('dataRetentionPolicles');

  const $t = useTranslations();

  const globalParameterMenus: {
    key: any;
    label: string;
  }[] = [
    {
      key: 'notifications',
      label: $t('Notifications')
    },
    {
      key: 'dataRetentionPolicles',
      label: $t('Data Retention Policles')
    },
    {
      key: 'securityMeasures',
      label: $t('Security Measures')
    }
  ];

  const MenuContent = useMemo(() => {
    switch (key) {
      case 'notifications':
        return <></>;

      case 'dataRetentionPolicles':
        return (
          <Counter
            label="The Retention period of Audit Logs"
            value={details.passwordExpiryTime}
            onChange={(value: number) => {
              setDetails({ ...details, passwordExpiryTime: value });
            }}
            suffix="Month"
          />
        );

      case 'securityMeasures':
        return <></>;
    }
  }, [details, key]);

  const handleSelectMenu = ({
    selectedKeys
  }: {
    selectedKeys: string[];
  }): void => {
    setKey(selectedKeys[0] as any);
  };

  return (
    <>
      <Favorites label={$t('System Settings')} />
      <Card
        className="globalParametersContainer"
        styles={{
          body: { padding: '0 0 0 0', height: '100%' }
        }}
      >
        <Layout style={{ height: '100%' }}>
          <Sider
            width={320}
            style={{
              borderRadius: '8px 0 0 8px',
              background: '#fff',
              height: '100%',
              borderRight: '1px solid #e8e8e8'
            }}
          >
            <Title className="title" level={3}>
              {$t('About Settings')}
            </Title>
            <Menu
              mode="inline"
              defaultSelectedKeys={['dataRetentionPolicles']}
              items={globalParameterMenus}
              selectedKeys={[key]}
              onSelect={handleSelectMenu}
            />
          </Sider>
          <Content style={{ height: '100%' }}>
            <Card style={{ height: '100%' }}>
              {MenuContent}
              <Space>
                <CustomFormButton
                  type="primary"
                  ghost
                  className="submitBtn"
                  onConfirm={() => {}}
                  style={{
                    top: 20,
                    right: 100
                  }}
                >
                  {$t('Export Report')}
                </CustomFormButton>
                <CustomFormButton
                  type="primary"
                  className="submitBtn"
                  onConfirm={() => {}}
                  style={{
                    top: 20,
                    right: 20
                  }}
                >
                  {$t('Submit')}
                </CustomFormButton>
              </Space>
            </Card>
          </Content>
        </Layout>
      </Card>
    </>
  );
};

export default SysTemSetting;
