// import React from 'react'
// import ReactDOM from 'react-dom'
// import Provider from './Provider'
// import { Router } from 'react-router'
// import { Notifs } from 'redux-notifications'

// import { addLocaleData } from 'react-intl'
// import en from 'react-intl/locale-data/en'
// import ru from 'react-intl/locale-data/ru'
// addLocaleData([...ru, ...en])

// import { AppRoutes, NoMatchRoute, AuthRoutes } from '../routes'
// import Notification from '../components/Notification'

// export default class Root extends React.Component {
// 	render() {
// 		const { store, history } = this.props
// 		return (
// 			<Provider store={store}>
// 				<div>
// 					<Router history={history}>
// 						{AppRoutes}
// 						{AuthRoutes}
// 						{NoMatchRoute}
// 					</Router>
// 					<Notifs CustomComponent={Notification} />
// 				</div>
// 			</Provider>
// 		)
// 	}
// }

import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { AppRoutes, NoMatchRoute } from '../routes'

export default class Root extends React.Component {

	static propTypes = {
		store: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
		history: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
	}

	render() {
		const { store, history } = this.props
		return (
			<Provider store={store}>
				<div>
					<Router history={history}>
						{AppRoutes}
						{NoMatchRoute}
					</Router>
				</div>
			</Provider>
		)
	}
}
