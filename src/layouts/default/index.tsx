import { Layout } from 'antd';
import Header from './components/Header';
import Sider from './components/Sider';
import Content from './components/Content';
import Footer from './components/Footer';

export type LayoutModeType = 'sidemenu' | 'topmenu';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Content />
          <Footer />
        </Layout>
      </Layout>
    </>
  );
}
