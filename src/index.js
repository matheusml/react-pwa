import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

require('offline-plugin/runtime').install();

ReactDOM.render(<App />, document.getElementById('app'));
