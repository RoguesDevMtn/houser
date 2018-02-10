import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updatePropertyName, updatePropertyDescription } from '../../ducks/reducer';
import step_active from '../../step_active.png';
import step_inactive from '../../step_inactive.png';
import step_completed from '../../step_completed.png';
class WizardOne extends Component {
    render(){
        const {updatePropertyName, updatePropertyDescription} = this.props;
        return(
            <div className="parent-div">
            <div className="header-div">
            
                <div className="header-left">
                    <h1>Add New Listing</h1>
                </div>
                <div className="header-right">
                    <button>Cancel</button>
                </div>
            </div>
                <div className="step-icons">
                    <p>Step 1</p>
                    <img src={step_active} alt="step 1"/>
                    <img src={step_inactive} alt="step 2"/>
                    <img src={step_inactive} alt="step 3"/>
                    <img src={step_inactive} alt="step 4"/>
                    <img src={step_inactive} alt="step 5"/>
                </div>   
                <h2>Property Name</h2>
                <input type="text" onChange={(event) => updatePropertyName(event.target.value)}/>
                <h2>Property Description</h2>
                <input type="text" onChange={(event) => updatePropertyDescription(event.target.value)}/>
                </div>
            
        )
    }
}
function mapStateToProps( state ){
    const { propertyName, propertyDescription } = state;
    return {
        propertyName,
        propertyDescription
    };
}
export default connect(mapStateToProps, { updatePropertyName, updatePropertyDescription })(WizardOne); 
