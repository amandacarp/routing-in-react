import React from 'react'
import {  Link } from 'react-router-dom'


class Films extends React.Component {
    state = {
        films: []
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => { this.setState({ films }) })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <>
                {this.state.films.map(film => {
                    return (
                        <>

                            <div key= {`film id ${film?.id}`} className="container bg-dark">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card mt-4 shadow">
                                            <div className="card-body">
                                                <h5 className="card-title">Film Title: {film?.title}</h5>
                                                <p className="card-text">Film Decsription: {film?.description}</p>
                                                <div className="card-text">

                                                    <Link to={`/films/${film.id}`}>{film.title}</Link>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
}

export default Films;