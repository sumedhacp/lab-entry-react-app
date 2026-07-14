import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const AddLog = () => {

    const [input, changeInput] = useState(

        {
            name: "",
            dept: "",
            sem: "",
            course: "",
            sysNo: "",
            loginTime: "",
            logoutTime: "",
            date: ""

        }

    )

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-log", input).then(

            (response) => {
                console.log(response.data)
                alert("Course Added Successfully")
            }

        ).catch(

            (error) => {
                console.error("Error Adding Course!", error)
                alert("Failed to Add Course!")
            }

        )

    }


    return (
        <div>
<NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name: </label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Department: </label>
                                <input type="text" className="form-control" name="dept" value={input.dept} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Semester: </label>
                                <input type="text" className="form-control" name="sem" value={input.sem} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course: </label>
                                <input type="text" className="form-control" name="course" value={input.course} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">System No: </label>
                                <input type="text" className="form-control" name="sysNo" value={input.sysNo} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Login Time: </label>
                                <input type="text" className="form-control" name="loginTime" value={input.loginTime} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Logout Time: </label>
                                <input type="text" className="form-control" name="logoutTime" value={input.logoutTime} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date: </label>
                                <input type="date" className="form-control" name="date" value={input.date} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddLog