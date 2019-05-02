const configuration = {
  client_id: 'spa',
  redirect_uri: 'http://localhost:5100/authentication/callback',
  response_type: 'token id_token',
  post_logout_redirect_uri: 'http://localhost:5000/account/login',
  scope:"openid profile verywon-dbservice",
  authority: 'http://localhost:5000',
  silent_redirect_uri: 'http://localhost:5100/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
  triggerAuthFlow: true,
  filterProtocolClaims: true,
  monitorSession: true
};

export default configuration;
