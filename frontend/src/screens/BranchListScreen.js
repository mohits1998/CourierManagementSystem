import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { Component } from 'react'
import BranchService from '../service/BranchService'

class BranchListScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
                branches: []
        }
    //     this.addbranch = this.addbranch.bind(this);
    //     this.editbranch = this.editbranch.bind(this);
    //     this.deletebranch = this.deletebranch.bind(this);
     }

    // console.log(this.state.branches);

    // deletebranch(id){
    //     BranchService.deletebranch(id).then( res => {
    //         this.setState({branches: this.state.branches.filter(branch => branch.id !== id)});
    //     });
    // }
    // viewbranch(id){
    //     this.props.history.push(`/view-branch/${id}`);
    // }
    // editbranch(id){
    //     this.props.history.push(`/add-branch/${id}`);
    // }

    componentDidMount(){
        BranchService.getbranches().then((res) => {
            this.setState({ branches: res.data});
        });
    }

    


    back(){
        this.props.history.push('/admin');
    }

    addBranch(){
        this.props.history.push('/addbranch');
    }


    

    render() {
        return (
            <div>
                 <h2 className="text-center">branches List</h2>
                 {/* <div>
                  <button className="btn btn-primary btn-lg" style={{marginBottom: "10px"}} href="/addbranch" role="button">
                  add branch
                 </button>
                 </div> */}
                 <div className = "row">
                    <button className="btn btn-primary" style={{width:'200px',height:'40px',margin:'10px'}} onClick={this.addBranch.bind(this)}> Add Branch</button>
                    <button className="btn btn-success btn-lg"style={{marginBottom: "10px", width:"250px"}} onClick={this.back.bind(this)}> back to admin board</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                
                                    <th> Name</th>
                                    <th> Contact</th>
                                    <th> email</th>
                                    <th> address</th>
                                    <th>city</th>
                                    <th>pincode</th>
                                    <th>state</th>
                                    <th>country</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.branches.map(
                                        branch => 
                                        <tr key = {branch.id}>
                                           
                                             <td> {branch.name} </td>   
                                             <td> {branch.contact}</td>
                                             <td> {branch.email}</td>
                                             <td> {branch.address}</td>
                                             <td> {branch.city}</td>
                                             <td> {branch.pincode}</td>
                                             <td> {branch.state}</td>
                                             <td> {branch.country}</td>
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default BranchListScreen
