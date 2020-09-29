const ejs = require("ejs").__express;

module.exports = async function (app) {
    app.engine('ejs', ejs);
    app.set('view engine' , 'ejs');
}