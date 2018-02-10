import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoanAmount, updateMonthlyMortgage } from '../../ducks/reducer';
import step_active from '../../step_active.png';
import step_inactive from '../../step_inactive.png';
import step_completed from '../../step_completed.png';
import { Link } from 'react-router-dom';

class WizardFour extends Component {
    render(){
        const { updateLoanAmount, updateMonthlyMortgage } = this.props;
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
                <p>Step 4</p>
                <div className="step-icons">
                    
                    <img src={step_completed} alt="step 1"/>
                    <img src={step_completed} alt="step 2"/>
                    <img src={step_completed} alt="step 3"/>
                    <img src={step_active} alt="step 4"/>
                    <img src={step_inactive} alt="step 5"/>
                </div>

                <div>
                    <h3>Loan Amount</h3>
                    <input type="text" value={this.props.loanAmount} onChange={(event) => updateLoanAmount(event.target.value)}/>
                    <h3>Monthly Mortgage</h3>
                    <input type="text" value={this.props.monthlyMortgage} onChange={(event) => updateMonthlyMortgage(event.target.value)}/>
                </div>

                <div className="link-buttons">
                    <Link to={'/wizard/3'}>
                    <button className="stepButton">Previous Step</button>
                    </Link>

                    <Link to={'/wizard/5'}>
                    <button className="stepButton">Next Step</button>
                    </Link>
                </div>
                
            </div>
            
        )
    }
}
function mapStateToProps( state ){
    const { loanAmount, monthlyMortgage } = state;
    return {
        loanAmount,
        monthlyMortgage
    };
}
export default connect(mapStateToProps, { updateLoanAmount, updateMonthlyMortgage })(WizardFour); 
