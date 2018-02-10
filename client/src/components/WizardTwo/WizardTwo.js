import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer';
import step_active from '../../step_active.png';
import step_inactive from '../../step_inactive.png';
import step_completed from '../../step_completed.png';
import { Link } from 'react-router-dom';

class WizardTwo extends Component {
    render(){
        const { updateAddress, updateCity, updateState, updateZip } = this.props;
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
                <p>Step 2</p>
                <div className="step-icons">
                    
                    <img src={step_completed} alt="step 1"/>
                    <img src={step_active} alt="step 2"/>
                    <img src={step_inactive} alt="step 3"/>
                    <img src={step_inactive} alt="step 4"/>
                    <img src={step_inactive} alt="step 5"/>
                </div>

                <div>
                    <h3>Address</h3>
                    <input type="text" value={this.props.address} onChange={(event) => updateAddress(event.target.value)}/>
                    <br/>
                    <div className="cityState">
                    <h3>City</h3>
                    <h3>State</h3>
                    </div>

                    <div className="cityState">
                    <input type="text" className="cityStateZip" value={this.props.city} onChange={(event) => updateCity(event.target.value)}/>
                    
                    <input type="text" className="cityStateZip" value={this.props.propertyState} onChange={(event) => updateState(event.target.value)}/>
                    </div>
                    <br/>
                    <h3>Zip</h3>
                    <input type="text" className="zip" value={this.props.zip} onChange={(event) => updateZip(event.target.value)}/>
                </div>

                <div className="link-buttons">
                    <Link to={'/wizard/1'}>
                    <button className="stepButton">Previous Step</button>
                    </Link>

                    <Link to={'/wizard/3'}>
                    <button className="stepButton">Next Step</button>
                    </Link>
                </div>
                
            </div>
            
        )
    }
}
function mapStateToProps( state ){
    const { address, city, propertyState, zip } = state;
    return {
        address,
        city,
        propertyState,
        zip
    };
}
export default connect(mapStateToProps, { updateAddress, updateCity, updateState, updateZip })(WizardTwo); 
