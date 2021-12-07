/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1637017271937_3668';

  // add your middleware config here
  config.middleware = ['errorHanlder'];

  // flag to enable your hanlder
  // config.errorHanlder = {
  //   enable: true,
  //   // match: '/user/findUserByUserId',
  //   ignore: '/user/findUserByUserId',
  // };
  config.jwt = {
    // token过期时间，单位秒。
    expire: 7200,
    // token签名秘钥。
    secret: 'b2ce49e4a541068d',
    refresh_expire: 259200,
    refresh_secret: 'b2ce49e4a541068c',
  };
  config.valparams = {
    locale: 'zh-cn',
    throwError: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 关闭crsf,开启跨域
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'],
  };
  // 允许跨域方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,OPTIONS',
    allowHeaders: '*',
  };
  // 数据库的配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'xiezy',
    password: '123456',
    port: 3306,
    database: 'eggapi',
    // 中国时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      // deletedAt: 'deleted_at',
      // 所有驼峰命名格式化
      underscored: true,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
