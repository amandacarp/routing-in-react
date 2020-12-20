import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Films from './Films'
import People from './People'
import Home from './Home'
import FilmID from './FilmID'

class App extends React.Component {

    render() {
        return (
            <Router>
                <>
                    <div className="text-center">
                        <Link to="/films">
                            <button className="btn btn-info btn-lg m-4 shadow">
                                View Films
                    </button>
                        </Link>
                        <Link to="/people">
                            <button className="btn btn-info btn-lg m-4 shadow">
                                View People
                    </button>
                        </Link>
                        <Link to="/">
                            <button className="btn btn-info btn-lg m-4 shadow">
                                Go Home
                    </button>
                        </Link>
                    </div>
                    
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" component={Films} />
                        <Route path="/films/:id" component={FilmID} />
                        <Route exact path="/people" component={People} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default App;