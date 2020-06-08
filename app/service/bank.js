const Service = require('egg').Service;

class BankService extends Service {
  async create(bankInfo) {
    const bank = await this.ctx.model.Bank.create(bankInfo);
    return bank;
  }
}

module.exports = BankService;