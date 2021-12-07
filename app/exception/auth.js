'use strict';

// token校验失败异常，当token校验失败抛出
const HttpException = require('./http');
class AuthException extends HttpException {
  constructor(message = '令牌无效', errorCode = 10001) {
    super(errorCode, message, null, 401);
  }
}
module.exports = AuthException;
