
import { store } from '@/store';
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

const PasswordTips: React.FC = () => {
  const lang = selectLanguage(store.getState());
  const [tips, setTips] = useState<any>('');

  const passwordTipsData = async () => {
    
  };

  useEffect(() => {
    passwordTipsData();
  }, [lang]);

  return (
    <Paragraph>
      <Text style={{ fontWeight: 600 }}>{$t('Password Tips')}</Text>
      <div dangerouslySetInnerHTML={{ __html: tips }} />
    </Paragraph>
  );
};

export default PasswordTips;
