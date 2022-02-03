const app = require('./route');

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running!');
});