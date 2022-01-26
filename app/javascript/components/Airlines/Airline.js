import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'

const Airline = (props) => {


    return (
        <div>
            <h1>{props.attributes.name}</h1>
            <p>{props.attributes.avg_rate}</p>
            <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
        </div>
    )
}
export default Airline