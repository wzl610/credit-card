module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Bank = app.model.define('bank', {
    id: { 
      type: INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    name: STRING(24),
    icon: STRING(32),
    quota: INTEGER,
    createTime: {
      type: DATE,
      field: 'create_time',
    },
    modifyTime: {
      type: DATE,
      field: 'modify_time',
    },
  }, {
      freezeTableName: true, // 默认false修改表名为复数，true不修改表名，与数据库表名同步
      createdAt: 'createTime',
      updatedAt: 'modifyTime',
    }
  );
  return Bank;
}