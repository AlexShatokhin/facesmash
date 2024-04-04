const db = require("../config/config");

class Authorization {

    async userAuthorization(req, res){

        try {
            const phone = req.query.phone.substring(1);
            const password = req.query.password;

            const [user] = await db.query(`SELECT * FROM auth_data WHERE phone = '+${phone}' AND password = '${password}'`);

            if(user.length === 0){
                res.send({
                    user: null,
                    code: 400,
                    message: "Пользователь не найден!"
                });
            } else {
                res.send({
                    user: user[0],
                    code: 200,
                    message: "Пользователь успешно авторизован!"
                })
            }

    
        } catch (error) {
            console.log(error.sql);
            console.log(error.sqlMessage);

            res.send({
                user: null,
                code: 500,
                message: "Попробуйте позже!"
            });
        }

    }

}

module.exports = new Authorization();