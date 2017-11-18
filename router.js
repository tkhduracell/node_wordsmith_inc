const index = require('./routes/index');
const api = require('./routes/api');

const ApiService = require('./lib/web/api_service'); 

const apiService = new ApiService();

module.exports = (app) => {
    app.use('/', index(apiService));
    app.use('/api', api(apiService));
}
