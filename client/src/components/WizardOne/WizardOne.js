import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updatePropertyName, updatePropertyDescription } from '../../ducks/reducer';
import step_active from '../../step_active.png';
import step_inactive from '../../step_inactive.png';
import { Link } from 'react-router-dom';

class WizardOne extends Component {
    render(){
        const {updatePropertyName, updatePropertyDescription} = this.props;
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
                <p>Step 1</p>
                <div className="step-icons">
                    
                    <img src={step_active} alt="step 1"/>
                    <img src={step_inactive} alt="step 2"/>
                    <img src={step_inactive} alt="step 3"/>
                    <img src={step_inactive} alt="step 4"/>
                    <img src={step_inactive} alt="step 5"/>
                </div>

                <div>
                    <h3>Property Name</h3>
                    <input type="text" value={this.props.propertyName} onChange={(event) => updatePropertyName(event.target.value)}/>
                    <h3>Property Description</h3>
                    <input type="text" value={this.props.propertyDescription} id="descriptionInput" onChange={(event) => updatePropertyDescription(event.target.value)}/>
                </div>

                <Link to={'/wizard/2'}>
                <button className="stepButton">Next Step</button>
                </Link>
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
