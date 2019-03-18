const configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@todo-app-sample-7mz2y.mongodb.net/${configValues.uname}?retryWrites=true`
    }
}