import React from 'react'

class FilmID extends React.Component{
    state={
        filmID: []
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/films" + this.props.match.params.id)
            .then(res => res.json())
            .then(filmID => { this.setState({ filmID }) })
            .catch(e => console.log(e));
    }
   
    render(){
        return(
            <>
            <div key= {`film id ${this.state.filmID.id}`} className="container bg-dark">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card mt-4 shadow">
                                        <div className="card-body">
                                            <h5 className="card-title">Film:</h5>
                                            <div className="card-text">
                                            </div>
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