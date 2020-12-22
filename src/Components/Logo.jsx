import React from 'react'

class Logo extends React.Component{


    render(){
        return(
            <>
            <h1 className= "text-center">Routing In React</h1>
        <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt=""/>
            </>
        )
    }
}

export default Logo;