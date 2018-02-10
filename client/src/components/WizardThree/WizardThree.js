import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updateImageUrl } from '../../ducks/reducer';
import step_active from '../../step_active.png';
import step_inactive from '../../step_inactive.png';
import step_completed from '../../step_completed.png';
import { Link } from 'react-router-dom';

class WizardThree extends Component {
    render(){
        const { updateImageUrl } = this.props;
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
                <p>Step 3</p>
                <div className="step-icons">
                    
                    <img src={step_completed} alt="step 1"/>
                    <img src={step_completed} alt="step 2"/>
                    <img src={step_active} alt="step 3"/>
                    <img src={step_inactive} alt="step 4"/>
                    <img src={step_inactive} alt="step 5"/>
                </div>

                <div>
                    <img src={this.props.imageUrl} alt=""/>
                    <h3>Image URL</h3>
                    <input type="text" value={this.props.imageUrl} onChange={(event) => updateImageUrl(event.target.value)}/>
                </div>

                <div className="link-buttons">
                    <Link to={'/wizard/2'}>
                    <button className="stepButton">Previous Step</button>
                    </Link>

                    <Link to={'/wizard/4'}>
                    <button className="stepButton">Next Step</button>
                    </Link>
                </div>
                
            </div>
            
        )
    }
}
function mapStateToProps( state ){
    const { imageUrl } = state;
    return {
        imageUrl
    };
}
export default connect(mapStateToProps, { updateImageUrl })(WizardThree); 
