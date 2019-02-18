import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'material-components-web/dist/material-components-web.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
