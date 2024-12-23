export interface AuthExchange {
  accessKey: string;
  refreshKey: string;
  md5hash: string;
}

export interface RequestAuthToken {
  id: string;
  pw: string;
}

export interface RequestTokenRefresh {
  refreshToken: string;
}
