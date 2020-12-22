import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Films from './Films'
import People from './People'
import Home from './Home'
import FilmID from './FilmID'
import Navbar from './Navbar'
import Logo from './Logo'
import Person from './Person'

class App extends React.Component {

    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <Logo />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/:id" component={FilmID} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/people/:id" component={Person} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default App;