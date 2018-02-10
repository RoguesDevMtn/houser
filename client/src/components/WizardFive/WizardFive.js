import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updateDesiredRent } from '../../ducks/reducer';
import step_active from '../../step_active.png';
import step_completed from '../../step_completed.png';
import { Link } from 'react-router-dom';

class WizardFive extends Component {
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
                    <button className="completeButton">Complete</button>
                    </Link>
                </div>
                
            </div>
            
        )
    }
}
function mapStateToProps( state ){
    const { monthlyMortgage, desiredRent } = state;
    return {
        monthlyMortgage,
        desiredRent
    };
}
export default connect(mapStateToProps, { updateDesiredRent })(WizardFive); 
