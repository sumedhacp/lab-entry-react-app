import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewLog = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-log").then(

            (response) => {
                changeData(response.data)
            }

        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {
                                data.map
                                    (
                                        (value, index) => {
                                            return (
                                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                                    <div className="card">

                                                        <div className="card-body">
                                                            <h5 className="card-title">Details: </h5>
                                                            <p><b>Name: </b>{value.name}</p>
                                                            <p><b>Department: </b>{value.dept}</p>
                                                            <p><b>Semester: </b>{value.sem}</p>
                                                            <p><b>Course: </b>{value.course}</p>
                                                            <p><b>System No: </b>{value.sysNo}</p>                                                            
                                                            <p><b>Login Time: </b>{value.loginTime}</p>                                                            
                                                            <p><b>Logout Time: </b>{value.logoutTime}</p>                                                            
                                                            <p><b>Date: </b>{value.date}</p>
                                                            <a href="#" className="btn btn-success">View</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    )
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewLog