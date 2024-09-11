const CLIENT_ID = '0oa99pp1fhUjqK3xV697';
const ISSUER = 'https://onepass-sso.cic.hk/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK = false;
const BASENAME = `${window.location.origin}` || '';
// BASENAME includes trailing slash
const REDIRECT_URI = `${window.location.origin}/login/callback`;
const USE_INTERACTION_CODE = false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
    useInteractionCode: USE_INTERACTION_CODE
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  },
  app: {
    basename: `${window.location.origin}`
  }
};
