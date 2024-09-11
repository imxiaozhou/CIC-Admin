import dayjs from 'dayjs';
import { Suspense } from 'react';
import { ConfigProvider, type ConfigProviderProps } from 'antd';
import { RouterProvider, useNavigate } from 'react-router-dom';
import router from '@/router/index';
import Loading from '@/components/Loading';
import useGlobalTips from '@/hooks/useGlobalTips';
import i18n from './locales';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-hk';
import { i18nChangeLanguage } from '@wangeditor/editor';
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import oktaConfig from './config/oktaConfig';
import { ProvideAuth } from './hooks/useProvideAuth';

type Locale = ConfigProviderProps['locale'];

const locales = i18n.store.data;

const oktaAuth = new OktaAuth(oktaConfig.oidc);

function AdminApp() {
  useGlobalTips();
  const lang = useAppSelector(selectLanguage);
  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    window.location.replace(
      toRelativeUrl(originalUri || '/', window.location.origin)
    );
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
    dayjs.locale(lang === 'hk' ? 'zh-hk' : lang);
    i18nChangeLanguage(lang === 'cn' ? 'zh-CN' : lang);

    return () => {
      oktaAuth.options.restoreOriginalUri = undefined;
    };
  }, [lang]);

  return (
    <ConfigProvider
      locale={locales[lang] as unknown as Locale}
      input={{ autoComplete: 'off' }}
    >
      <Suspense fallback={<Loading />}>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          <RouterProvider router={router} />
        </Security>
      </Suspense>
    </ConfigProvider>
  );
}

export default AdminApp;
