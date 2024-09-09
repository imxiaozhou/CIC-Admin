import { Link } from 'react-router-dom';
import { Typography, Image } from 'antd';
import img from '@/assets/images/MEx.png';

const { Title } = Typography;

export default function LayoutLogo() {
  return (
    <Link className="logo" to="/">
      <Title className="logo_text" level={5}>
        <Image src={img} preview={false} />
      </Title>
    </Link>
  );
}
