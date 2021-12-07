'use strict';

// const AuthException = require('../exception/auth');
module.exports = (name) => {
  // 此处name为 auth(xxx) 的xxx
  return async function auth(ctx, next) {
    // 获取token
    const token = ctx.request.headers.authorization;
    // 通过token获取用户id
    const userId = await ctx.service.jwt.getUserIdFromToken(token);
    // 校验权限
    await checkAuth(userId, ctx);
    await next();
  };
  async function checkAuth() {
    if (!name) {
      return true;
    }

    // 查询用户绑定的角色(具体的校验逻辑)
    // const roles = await ctx.model.AdminRoleUser.findAll({ attributes: [ 'role_id' ], where: { user_id: userId } });
    // const roleIds = roles.map(item => item.role_id);
    // if (roleIds.includes(1)) {
    //   return true;
    // }
    // const Op = ctx.app.Sequelize.Op;
    // // 查询用户是否有菜单的权限
    // const hasAccess = await ctx.model.AdminRoleMenu.findOne({ where: { role_id: { [Op.in]: roleIds }, menu_id: menu.id } });
    // if (hasAccess === null) {
    //   throw new AuthException('权限不足', 10002);
    // }
  }
};
