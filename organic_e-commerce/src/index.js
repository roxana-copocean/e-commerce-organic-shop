import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './global.styles';

// Redux--------------
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/es/integration/react';

//Stripe ------------------
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<BrowserRouter>
					<Elements stripe={stripePromise}>
						<App />
					</Elements>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
