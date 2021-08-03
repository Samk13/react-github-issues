import React from 'react'
import Details from './Details'
import Issues from './Issues'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

export default function App() {
    return (
        <Router>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="issues">Issues</Link></li>
                <li><Link to="/details">details</Link></li>
            </ul>
        </nav>

            <div className="container">
                <Switch>
                    <Route exact path="/" component={Issues}/>
                </Switch>
                <Switch>
                    <Route path="/issues/:id" component={Details}/>
                </Switch>

            </div>
        </Router>
    )
}
