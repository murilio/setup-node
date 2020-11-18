import {
  DataTypes,
  Optional,
  ModelDefined
} from 'sequelize'

const sequelize = require('@database/index')

interface UserAttributes {
  id: String;
  nome: String;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

const User: ModelDefined<
    UserAttributes,
    UserCreationAttributes
  > = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING(),
      allowNull: false
    }
  },
  {
    tableName: 'users',
    sequelize
  })

export default User
