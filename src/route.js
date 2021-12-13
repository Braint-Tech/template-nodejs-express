const app = require('./index');

const authRoute = require('./auth/routes/auth.route');

app.use(authRoute);

module.exports = app;