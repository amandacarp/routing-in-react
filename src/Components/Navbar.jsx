import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{


    render(){
        return(
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
            </>
        )
    }

}

export default Navbar;