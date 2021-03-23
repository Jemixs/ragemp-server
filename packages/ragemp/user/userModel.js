let bcrypt = require('bcryptjs');
let mongoose = require('../mongodb/mongo'),
    Schema = mongoose.Schema;

let user = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
});

user.virtual('password')
    .set(function (password) {
        this.password = this.encryptPassword(password);
    })
    .get(function () {
        return 'secret';
    });

user.methods = {
    encryptPassword: function (password) {
        return bcrypt.hashSync(password, 12);
    },
    checkPassword: function (password) {
        return bcrypt.compareSync(password, this.hashPassword);
    }
}

user.statics = {
    authorize: function (login, password, callback) {
        var User = this;
        User.findOne({ login: login }, (err, user) => {
            if (err) return console.error(err);

            if (user) {
                if (!user.checkPassword(password)) {
                    callback(404);
                }  else{
                    callback(null, user);
                }
            } else {
                callback(404);
            }
        });
    }
}

exports.User = mongoose.model("User", user);