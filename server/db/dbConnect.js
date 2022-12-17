const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite'
});

const Flower = sequelize.define('Flower', {
    flower: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
});
const test = async () => {
    
    const flower = await Flower.findAll()
    return flower

}

// Flower.sync()
const connectToDb = async () => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    // const flower1 = Flower.create({flower:"flower 1",price:500,img:"test"})
}

module.exports = { connectToDb,test}