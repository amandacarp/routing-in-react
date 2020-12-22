import React from 'react'

class Person extends React.Component{
    state={
        person: null
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
            .then(res => res.json())
            .then(person => { this.setState({ person }) })
            .catch(e => console.log(e));
    }
   
    render(){
        if(!this.state.person){
            return (
            <>
            <h1>Loading...</h1>
            </>
            )
        }
        return(
            <>
            <div key= {`person id ${this.state.person.id}`} className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card mt-4 shadow">
                                        <div className="card-body">
                                            <h5 className="card-title">Person Name: {this.state.person.name}</h5>
                                            <div className="card-text"> Person Age: {this.state.person.age}</div>
                                            <div className="card-text"> Person Gender: {this.state.person.gender}</div>
                                            <div className="card-text"> Person Hair Color: {this.state.person.hair_color}</div>
                                            <div className="card-text"> Person Hair Color: {this.state.person.eye_color}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </>
        )
    }
}

export default Person;