import './App.css'
import Header from './components/Header/Header'
import Recommendation from './components/Recommendation/Recommendation'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Explore from './components/Explore/Explore'

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<div className='app__page'>
						<Route path='/' exact>
							<Sidebar />
							<Recommendation />
						</Route>
						<Route path='/home'>
							<Sidebar />
							<Recommendation />
						</Route>
						<Route path='/explore'>
							<Sidebar />
							<Explore />
						</Route>
					</div>
				</Switch>
			</Router>
		</div>
	)
}

export default App
