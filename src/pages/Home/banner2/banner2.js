import React, { Component } from 'react'
import "./banner2.css"





class Banner2 extends React.Component{
    render(){
        return(
            <div className="banner">
            
         
            
            <div className="forRenters">
            
            <a className="forRents">FOR RENTERS</a>
            </div>
            <div>

            <div className="letBox">
            <a>Let our search guide you</a>
            </div>
            <div className="para1">
            Search thousands of up-to-date property listings on our easy-to-use website.
            Narrow down your options by choosing what's most important to you,
            such as number of bedrooms and bathrooms, price range, location,
            pet policy and more.
            <br/><br/>
            
            Parents can also search for rentals that fall within a particular school district.
            
            
            </div>
            <button className="startButton">Start My Search</button>
            
            </div>


            <div class="card">
            <div class="container">
                <h4><b>Washington Elementary</b></h4>
               
                <p className="grade">Grades K-5</p> 
                <p className="stnds">397 students, 25 students/teacher</p>
                <p className="see" >See homes in this district</p>
 
            </div>
            </div>
               
            </div>
        )
    }
}

export default Banner2;







// <td>{employee.id}</td>
// <td>{userId}</td>
// <td>{employee.employee_name}</td>
// <td>{employee.employee_salary}</td>
// <td>{employee.employee_age}</td>