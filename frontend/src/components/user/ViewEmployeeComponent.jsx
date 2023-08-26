import React, { Component } from 'react'
import EmployeeService from '../../service/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }

    render() {
        return (
            <div>
                 <a href="/employee" style={{ width: '200px' }} className="btn btn-primary">Go Back To List</a>
                <div>                 <br></br>
                <div className="card text-green bg-dark mb-3" width="200px">
                   
                    <div className="card text-justify">
                        <div className="card-header">
                            DETAILS OF EMPLOYEE
                             </div>
                        <div className="card-body">
                            <div className="row">
                                <label> Employee First Name: </label>
                                <div> {this.state.employee.firstName}</div>
                            </div>
                            <div className="row">
                                <label> Employee Last Name: </label>
                                <div> {this.state.employee.lastName}</div>
                            </div>
                            <div className="row">
                                <label> Employee Email ID: </label>
                                <div> {this.state.employee.email}</div>
                            </div>
                            <div className="row">
                                <label> Role </label>
                                <div> {this.state.employee.role}</div>
                            </div>
                        </div>
                        </div>
                        </div>

                    </div>
                </div>
        )
    }
}

export default ViewEmployeeComponent
