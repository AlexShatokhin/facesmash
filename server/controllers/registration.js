const db = require("../config/config");

class Registration {

    static async isUserExistChecking(phone){
        const [users] = await db.query(`SELECT * FROM auth_data WHERE phone = '${phone}'`);
        return users.length > 0;
    }

    async registerUser(req, res){

        try{
            const {name, phone, password} = req.body;

            if(await Registration.isUserExistChecking(phone)){
                res.send({
                    code: 400,
                    message: "Пользователь с таким номером телефона уже существует!"
                });
            } else {
                await db.query(`INSERT INTO auth_data (name, phone, password) VALUES ('${name}', '${phone}', '${password}')`);
                res.send({
                    code: 200,
                    message: "Пользователь успешно зарегистрирован!"
                });
            }

        } catch(err){
            console.log(err.sql);
            console.log(err.sqlMessage);

            res.send({
                code: 500,
                message: "Попробуйте позже!"
            })
        }

    }
}

module.exports = new Registration();