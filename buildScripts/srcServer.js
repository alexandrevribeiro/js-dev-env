import express  from 'express';
import path  from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
    // Hard coding for simplicity. Pretends this hits a real database
    res.json([
        {"id": 1, "firstName": "Alexandre", "lastName": "Ribeiro", "email": "vribeiro.alexandre@gmail.com"},
        {"id": 2, "firstName": "Débora", "lastName": "Ribeiro", "email": "debrinhalmeida@gmail.com"},
        {"id": 3, "firstName": "Israel", "lastName": "Valverde", "email": "ipvalverde@gmail.com"},
    ]);
});

app.listen(port, function(err) {
    if (err)
        console.log(err);
    else
        open('http://localhost:' + port);
});