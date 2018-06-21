// const express = require('express');
import express from 'express';
import React from 'react';
import engine from 'react-engine';
import path from 'path';
import ReactDOMServer from 'react-dom/server';

import Home from './views/Home';

const app = express();

// definimos el engine para archivos jsx
app.engine('.js', engine.server.create());
// configuramos la ruta a las vistas
app.set('views', path.resolve(__dirname, 'views'));
// indicamos que el engine a usar es el de archivos jsx
app.set('view engine', 'js');
// le indicamos que use react-engine como engine de nuestras vistas
// app.set('view', engine.expressView);
app.set('view', require('react-engine/lib/expressView'));

app.use(express.static('dist'));// Files css, js etc

app.get('/', (req, res) => {
  // res.status(200).send('Hola mundo')
  // const html = React.renderToString(<Home />);
  const html = ReactDOMServer.renderToString(React.createElement(Home));
  // const html = `<!doctype html>${ReactDOMServer.renderToString(Home)}`;
  
  // res.send(html);
  res.render('Home');
})

export default app;
// module.exports = app;
