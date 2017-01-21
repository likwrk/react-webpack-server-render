import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app';
import store from './store';
var AppFactory = React.createFactory(App)
var appHtml = ReactDOMServer.renderToString(AppFactory({items: store.getState()}));
fs.readFile('index.html', 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	var result = data.replace(/(<div id="react-app">).*(<\/div>)/gm, '$1' + appHtml + '$2');
	fs.writeFileSync('index.html', result, 'utf8');
	var files = fs.readdirSync('src').forEach(file => {
		fs.unlinkSync('./src/' + file);
	});
});

/*fs.writeFile('app.html', appHtml, (err) => {
	if (err) throw err;
	console.log('It\'s saved!');
});*/