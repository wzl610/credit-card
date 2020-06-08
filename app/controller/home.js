'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.bank.create({
      name: '中信银行',
      icon: 'https://www.baidu.com',
      quota: 23000
    })
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
