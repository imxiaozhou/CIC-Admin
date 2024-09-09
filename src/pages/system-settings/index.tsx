import { Favorites } from '@/components/business';
import { CustomFormButton } from '@/components/proComponents';
import { Card, Layout, Menu, Typography } from 'antd';
import './index.less';
import Counter from './components/Counter';

const { Sider, Content } = Layout;
const { Title } = Typography;
const SysTemSetting = () => {
  const [details, setDetails] = useState<any>({
    passwordExpiryTime: 12
  });
  const [key, setKey] = useState<string>('dataRetentionPolicles');
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
            label="Password Expiry Time Configuration"
            value={details.passwordExpiryTime}
            onChange={(value: number) => {
              setDetails({ ...details, passwordExpiryTime: value });
            }}
            suffix="Days"
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
      {/* <Card
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
                style={{ height: '100%' }}
                items={globalParameterMenus}
                selectedKeys={[key]}
                onSelect={handleSelectMenu}
              />
            </Sider>
            <Content style={{ height: '100%' }}>
              <Card style={{ height: '100%'}}>
                {MenuContent}
                <CustomFormButton
                  type="primary"
                  className="submitBtn"
                  onConfirm={() => {}}
                  style={{
                    top: 20,
                    right: 10
                  }}
                >
                  {$t('Submit')}
                </CustomFormButton>
              </Card>
            </Content>
          </Layout>
        </Card> */}
    </>
  );
};

export default SysTemSetting;
