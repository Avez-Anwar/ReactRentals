import React, { Component } from 'react'
import "./banner.css"

import image from "./bbr.png"



class Banner extends React.Component{
    render(){
        return(
            <div className="banner">
            <img src={image} alt="pic" className="sofa"/>
         
            <h2 className="find">Find Your Perfect Rental Home</h2>
            
            <br/>
            <input className="banInput" type="text" placeholder="Search by city, state, Zip or School"/>
          
            
            
               
            </div>
        )
    }
}

export default Banner







// <td>{employee.id}</td>
// <td>{userId}</td>
// <td>{employee.employee_name}</td>
// <td>{employee.employee_salary}</td>
// <td>{employee.employee_age}</td>