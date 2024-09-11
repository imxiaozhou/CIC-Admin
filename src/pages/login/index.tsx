import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormText,
  ProCard
} from '@ant-design/pro-components';
import { message, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

export default function Login() {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const { oktaAuth, authState } = useOktaAuth();
  console.log(oktaAuth, authState);

  const handleOptLogin = async (values: any) => {
    const { username, password } = values;
    if (username === 'admin' && password === '123456') {
      navigate('/dashboard');
    } else {
      message.error('Invalid credentials, please try again!');
    }
    // oktaAuth.signInWithRedirect();
    // oktaAuth.signInWithRedirect({ originalUri: '/' })
  };

  // if (!authState || !authState.isAuthenticated) {
  //   handleOptLogin()
  // }

  return (
    <ProConfigProvider hashed={false}>
      <div
        style={{
          backgroundColor: token.colorBgContainer,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ProCard>
          <LoginForm onFinish={handleOptLogin}>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className="prefixIcon" />
              }}
              placeholder="用户名: admin"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!'
                }
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className="prefixIcon" />,
                strengthText:
                  'Password should contain numbers, letters and special characters, at least 8 characters long.'
              }}
              placeholder="密码:123456"
              rules={[
                {
                  required: true,
                  message: '请输入密码！'
                }
              ]}
            />
          </LoginForm>
        </ProCard>
      </div>
    </ProConfigProvider>
  );
}
