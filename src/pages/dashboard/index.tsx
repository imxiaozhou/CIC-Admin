import { ProCard } from '@ant-design/pro-components';
import { Space, Typography, Flex } from 'antd';
import { Favorites } from '@/components/business';

const { Title, Text } = Typography;

const Dashboard = () => {
  const $t = useTranslations();

  return (
    <Space direction="vertical">
      <Favorites label={$t('Dashboard')} />
      <Flex justify="space-between" style={{ flexWrap: 'wrap', gap: '16px' }}>
        <ProCard
          style={{ height: 100, background: '#199F56', flex: '1 1 300px' }}
          hoverable
          bordered
        >
          <Flex>
            <Space direction="vertical">
              <Title level={2} style={{ marginBottom: 4 }}>
                26
              </Title>
              <Text style={{ marginTop: 8 }}>CO2e Avoided</Text>
            </Space>
            <Text style={{ marginLeft: -40, marginTop: 14 }}>MMT</Text>
          </Flex>
        </ProCard>

        <ProCard
          style={{ height: 100, background: '#faba14', flex: '1 1 300px' }}
          hoverable
          bordered
        >
          <Flex>
            <Space direction="vertical">
              <Title level={2} style={{ marginBottom: 4 }}>
                100
              </Title>
              <Text style={{ marginTop: 8 }}>Active Businesses</Text>
            </Space>
          </Flex>
        </ProCard>

        <ProCard
          style={{ height: 100, background: '#2083E1', flex: '1 1 300px' }}
          hoverable
          bordered
        >
          <Flex>
            <Space direction="vertical">
              <Title level={2} style={{ marginBottom: 4 }}>
                20
              </Title>
              <Text style={{ marginTop: 8 }}>Total Marterials Listed</Text>
            </Space>
          </Flex>
        </ProCard>

        <ProCard
          style={{ height: 100, background: '#AB2EE1', flex: '1 1 300px' }}
          hoverable
          bordered
        >
          <Flex>
            <Space direction="vertical">
              <Title level={2} style={{ marginBottom: 4 }}>
                8
              </Title>
              <Text style={{ marginTop: 8 }}>Cost Savings(HK$)</Text>
            </Space>
            <Text style={{ marginLeft: -90, marginTop: 14 }}>B</Text>
          </Flex>
        </ProCard>
      </Flex>
    </Space>
  );
};

export default Dashboard;
