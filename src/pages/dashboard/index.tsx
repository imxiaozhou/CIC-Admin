import { ProCard } from '@ant-design/pro-components';
import { Space, Typography, Flex } from 'antd';
import { Favorites } from '@/components/business';
import MaterialExchangeChart from './components/MaterialExchangeChart';

const { Title, Text } = Typography;

const Dashboard = () => {
  const $t = useTranslations();

  return (
    <>
      <Space direction="vertical">
        <Favorites label={$t('Dashboard')} />
        <Flex justify="space-between" style={{ flexWrap: 'wrap', gap: '16px' }}>
          <ProCard
            style={{ height: 100, background: '#e7f5ef', flex: '1 1 300px' }}
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
            style={{ height: 100, background: '#fff8e7', flex: '1 1 300px' }}
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
            style={{ height: 100, background: '#eef6ff', flex: '1 1 300px' }}
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
            style={{ height: 100, background: '#fcf5ff', flex: '1 1 300px' }}
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
      <MaterialExchangeChart />
    </>
  );
};

export default Dashboard;
