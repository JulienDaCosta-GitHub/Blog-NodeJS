const ejs = require("ejs-locals");

module.exports = async function (app) {
    app.engine('ejs', ejs);
    app.set('view engine' , 'ejs');
}