const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            email:{
                type:Sequelize.STRING(40),
                allowNull :true,
                unique:true,
            },
            nick:{
                type:Sequelize.STRING(15),
                allowNull:false,
            },
       
            provider:{
                type:Sequelize.STRING(10),
                allowNull:false,
                defaultValue:'local',
            },
            snsId:{
                type:Sequelize.STRING(30),
                allowNull:true,
            },
        
            new_nickname:{
                type:Sequelize.STRING(10),
                allowNull:true,
            },
            new_photo:{
                type:Sequelize.STRING(200),
                allowNull:true,
            },
            created_at:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:new Date().setHours(new Date().getHours()+9),
            },
            age_range:{
                type:Sequelize.STRING(10),
                allowNull:true,
            },
            gender:{
                type:Sequelize.STRING(8),
                allowNull:true,
            },
            phone_number:{
                type:Sequelize.STRING(20),
                allowNull:true,
            },
            profile_img:{
                type:Sequelize.STRING(200),
                allowNull:true,
            },
            wallet:{
                type:Sequelize.INTEGER(20),
                allowNull:true,
            },
            level:{
                type:Sequelize.STRING(10),
                allowNull:true,
            },
            user_terms:{
                type:Sequelize.INTEGER(10),
                allowNull:true,
            },
            user_marketing:{
                type:Sequelize.INTEGER(10),
                allowNull:true,
            },
            new_nick:{
                type:Sequelize.STRING(45),
                allowNull:true,
            }

            
        }, {
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Users',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
            dateStrings : 'date',
            typeCast:true,
        });
    }

    static associate(db) {}
};