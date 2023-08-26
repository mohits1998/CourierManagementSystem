import React, { Component } from 'react'
import CourierService from '../../service/CourierService'

class ViewCourierComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courierId: this.props.match.params.id,
            consignment: {}
        }
    }

    componentDidMount() {
        CourierService.getcourierById(this.state.courierId).then(res => {
            this.setState({ consignment: res.data });
        })
    }

    render() {
        return (
            
            <div>
            <a href="/courierlist_admn" className="btn btn-primary">Go to Courier Management Board</a>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View All Courier Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> consignment ID: </label>
                            <div>{ this.state.consignment.trackingId }</div>
                        </div>
                        <div className = "row">
                            <label> consignment type: </label>
                            <div> { this.state.consignment.courierType }</div>
                        </div>
                        <div className = "row">
                            <label> consignment Seneder Name: </label>
                            <div> { this.state.consignment.senderName }</div>
                        </div>
                        <div className = "row">
                            <label> Sender Contact: </label>
                            <div> { this.state.consignment.senderContact }</div>
                        </div>
                        <div className = "row">
                            <label>Sender Address :</label>
                            <div> { this.state.consignment.senderAddress }</div>
                        </div>
                        <div className = "row">
                            <label> Sender City :</label>
                            <div> { this.state.consignment.senderCity }</div>
                        </div>
                        <div className = "row">
                            <label>Sender State :</label>
                            <div> { this.state.consignment.senderState }</div>
                        </div>
                        <div className = "row">
                            <label> Sender Pincode :</label>
                            <div> { this.state.consignment.senderPin}</div>
                        </div>
                        <div className = "row">
                            <label>Sender Country : </label>
                            <div> { this.state.consignment.senderCountry }</div>
                        </div>



                       <div className = "row">
                            <label> Receipient Name : </label>
                            <div> { this.state.consignment.recipientName }</div>
                        </div>
                        <div className = "row">
                            <label>Receipient Contact :</label>
                            <div> { this.state.consignment.recipientContact }</div>
                        </div>
                        <div className = "row">
                            <label>Receipient Address : </label>
                            <div> { this.state.consignment.recipientAddress }</div>
                        </div>
                        <div className = "row">
                            <label> Receipient City </label>
                            <div> { this.state.consignment.recipientCity }</div>
                        </div>
                        <div className = "row">
                            <label> Receipient State </label>
                            <div> { this.state.consignment.recipientState }</div>
                        </div>
                        <div className = "row">
                            <label> Receipient Pincode </label>
                            <div> { this.state.consignment.recipientPin}</div>
                        </div>
                        <div className = "row">
                            <label>Receipient Country </label>
                            <div> { this.state.consignment.recipientCountry }</div>
                        </div>
                       
                       
                       
                        <div className = "row">
                            <label> Weight </label>
                            <div> { this.state.consignment.courierWeight }</div>
                        </div>
                       
                        <div className = "row">
                            <label> Mode of Transport </label>
                            <div> { this.state.consignment.courierMode }</div>
                        </div>
                       
                        <div className = "row">
                            <label> Create Date </label>
                            <div> { this.state.consignment.createAt }</div>
                        </div>
                       
                        <div className = "row">
                            <label> Update Date </label>
                            <div> { this.state.consignment.updateAt }</div>
                        </div>
                       


                        <div className = "row">
                            <label> Price </label>
                            <div> { this.state.consignment.price }</div>
                        </div>
                        <div className = "row">
                            <label> Status </label>
                            <div> { this.state.consignment.status }</div>
                        </div>

                        <div className = "row">
                            <label>Remark: </label>
                            <div> { this.state.consignment.remark}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCourierComponent
