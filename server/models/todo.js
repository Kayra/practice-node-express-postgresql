
module.exports = (sequelize, DataTypes) => {
  
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems'
    });
  };

  return Todo;

};

// Initially generated with: sequelize model:create --name Todo --attributes title:string
