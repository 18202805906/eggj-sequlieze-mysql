'use strict';

const Controller = require('egg').Controller;
class BaseController extends Controller {
  success(data = null, message = '操作成功', code = 200) {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = {
      code,
      message,
      data,
    };
  }
}
module.exports = BaseController;
