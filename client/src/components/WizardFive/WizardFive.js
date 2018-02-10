import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updateDesiredRent, updateListings } from '../../ducks/reducer';
import step_active from '../../step_active.png';
import step_completed from '../../step_completed.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

class WizardFive extends Component {
    addProperty() {
        const body = {
            property_name: this.props.propertyName, 
            description: this.props.propertyDescription, 
            address: this.props.address, 
            city: this.props.city, 
            state: this.props.propertyState, 
            zip: this.props.zip, 
            image_URL: this.props.imageUrl, 
            loan_amount: this.props.loanAmount, 
            mortgage_amount: this.props.monthlyMortgage, 
            desired_rent: this.props.desiredRent
        }
        axios.post(`/api/properties`, body)
        .then(res => {
            console.log(res.data);
            this.props.updateListings(res.data);
        })
        .catch(err => console.log(err));
    }

    render(){
        const { updateDesiredRent } = this.props;
        return(
            <div className="parent-div">
            <div className="header-div">
            
                <div className="header-left">
                    <h1>Add new listing</h1>
                </div>
                <div className="header-right">
                    <Link to={'/dashboard'}>
                    <button className="cancelButton">Cancel</button>
                    </Link>
                </div>
            </div>
                <p>Step 5</p>
                <div className="step-icons">
                    
                    <img src={step_completed} alt="step 1"/>
                    <img src={step_completed} alt="step 2"/>
                    <img src={step_completed} alt="step 3"/>
                    <img src={step_completed} alt="step 4"/>
                    <img src={step_active} alt="step 5"/>
                </div>

                <div>
                    <h3>Recommended Rent ${this.props.monthlyMortgage*1.25}</h3>
                    <h3>Desired Rent</h3>
                    <input type="text" onChange={(event) => updateDesiredRent(event.target.value)}/>
                </div>

                <div className="link-buttons">
                    <Link to={'/wizard/4'}>
                    <button className="stepButton">Previous Step</button>
                    </Link>

                    <Link to={'/dashboard'}>
                    <button className="completeButton" onClick={() => this.addProperty()}>Complete</button>
                    </Link>
                </div>
                
            </div>
            
        )
    }
}
function mapStateToProps( state ){
    const { propertyName, propertyDescription, address, city, propertyState, zip, imageUrl, loanAmount, monthlyMortgage, desiredRent } = state;
    return {
        propertyName, 
        propertyDescription, 
        address, 
        city, 
        propertyState, 
        zip, 
        imageUrl, 
        loanAmount, 
        monthlyMortgage, 
        desiredRent
    };
}
export default connect(mapStateToProps, { updateDesiredRent, updateListings })(WizardFive); 
