import { ProForm } from '@ant-design/pro-components';
import { Alert, Button, Flex, Typography } from 'antd';

import { useLocation, useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import Icon from '@/components/Icons';
import OTPInput from '@/components/business/CustomOtpInput';

interface Container {
  children: React.ReactNode;
}

const { Text, Title } = Typography;

const LoginContainer: React.FC<Container> = ({ children }) => {
  return (
    <div className={styles.login_bg}>
      <div className={styles.login_container}>{children}</div>
    </div>
  );
};

export default function Login() {
  const [otpForm] = ProForm.useForm();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const prev_page_location = location.state;

  const [isIpValidated, setIsIpValidated] = useState(true);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState<any>();

  const handleValidateUserIp = async () => {};

  const handleFinalLogin = async () => {};

  const handleOptLogin = async () => {
    if (!isIpValidated) {
      return false;
    }

    otpForm?.validateFields().then(
      async (values) => {
        const { otpValue } = values;
      },
      () => {}
    );
  };

  const handleLogout = () => {};

  const handleOtpChange = (value: string) => {
    otpForm.setFieldValue('otpValue', value);
  };

  useEffect(() => {
    handleValidateUserIp();
  }, []);

  return (
    <LoginContainer>
      <ProForm submitter={false} form={otpForm}>
        <Title level={4} style={{ fontWeight: 'bold', textAlign: 'center' }}>
          One Time Password
        </Title>

        <Flex vertical align="center" justify="center">
          {isAlertVisible && (
            <Alert
              message={
                <Title level={5} style={{ color: '#B80000' }}>
                  Incorrect One Time Password (Error: {errorMsg?.responseCode})
                </Title>
              }
              description={
                <>
                  <Text style={{ color: '#B80000' }}>
                    Attempts remaining: <b>{errorMsg?.remainingTimes}</b>
                  </Text>
                  <br />
                  <Text style={{ color: '#B80000' }}>
                    After 5 consecutive unsuccessful login attempts, your
                    account will be locked.
                  </Text>
                </>
              }
              type="error"
              showIcon
              icon={<Icon type="WarningFilled" />}
              style={{
                width: '80%',
                border: '1px solid #B80000',
                margin: '16px'
              }}
            />
          )}
          <ProForm.Item
            name="otpValue"
            rules={[
              {
                required: true,
                len: 6,
                message: 'Please enter the correct OTP.',
                validateTrigger: ['submit']
              }
            ]}
          >
            <OTPInput
              onChange={handleOtpChange}
              handleOptLogin={handleOptLogin}
            />
          </ProForm.Item>

          <Button
            type="primary"
            onClick={handleOptLogin}
            disabled={!isIpValidated}
            style={{ width: '80%', marginTop: 12 }}
          >
            Login
          </Button>
          <Button type="link" style={{ marginTop: 16 }} onClick={handleLogout}>
            Login with Another Account
          </Button>
        </Flex>
      </ProForm>
    </LoginContainer>
  );
}
