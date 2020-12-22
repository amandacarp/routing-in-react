import React from 'react'

class FilmID extends React.Component{
    state={
        film: null
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
            .then(res => res.json())
            .then(film => { this.setState({ film }) })
            .catch(e => console.log(e));
    }
   
    render(){
        if(!this.state.film){
            return (
            <>
            <h1>Loading...</h1>
            </>
            )
        }
        return(
            <>
            <div key= {`film id ${this.state.film.id}`} className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card mt-4 shadow">
                                        <div className="card-body">
                                            <h5 className="card-title"> {this.state.film.title}</h5>
                                            <div className="card-text"> Film Description: {this.state.film.description}</div>
                                            <div className="card-text">Film Director: {this.state.film.director}</div>
                                            <div className="card-text">Film Producer: {this.state.film.producer}</div>
                                            <div className="card-text">Film Release Date: {this.state.film.release_date }</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </>
        )
    }
}

export default FilmID;