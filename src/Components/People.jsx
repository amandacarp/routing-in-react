import React from 'react';
import {  Link } from 'react-router-dom'

class People extends React.Component {
    state = {
        people: null
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => { this.setState({ people }) })
            .catch(e => console.log(e));
    }
    render() {
        if(!this.state.people){
            return(
            <>
            <h1>Loading...</h1>
            </>
            )
        }
        return (
            <>
                {this.state.people.map(person => {
                    return (

                        <div key= {`person id ${person?.id}`} className="container bg-dark">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card mt-4 shadow">
                                        <div className="card-body">
                                            <h5 className="card-title">Person Name: {person?.name}</h5>
                                            <p className="card-text">Person Age: {person?.age}</p>
                                            <p className="card-text">Person Gender: {person?.gender}</p>
                                            <div className="card-text">
                                            <Link to={`/people/${person?.id}`}>{person?.name}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </>
        )
            }
        }
        export default People;