'use strict';

const Service = require('egg').Service;
// const NotFoundException = require('../exception/not_found.js');
class UserService extends Service {
  async info() {
    const data = {
      id: '1',
      name: '张三',
      age: 18,
      gender: '女',
    };
    // 抛出异常
    // throw new NotFoundException('用户不存在', 22000);
    return data;
  }
}

module.exports = UserService;
