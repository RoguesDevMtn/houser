import React, { Component } from 'react';
import { connect } from "react-redux";
import{ updateDesiredRent,resetFilter } from '../ducks/reducer'
import './Dashboard.css';

class Dashboard extends Component {
   
    render() {
        //var listings = forEach property create a listing card?
        return (
            <div className='dashContainer'>
                <div className='dashHead'>
                    <div className="addButton">Add new property</div>
                    <div className='desiredRentContainer'>
                        <div>List properties with "desired rent" greator than: $</div>
                        <input onChange={e=>updateDesiredRent(e.target.value)} className="desiredInput"type="number" name="desired rent" id=""/>
                        <div onClick={}className='filterButton'>Filter</div>
                        <div onClick={resetFilter()} className='resetButton'>Reset</div>
                    </div>
                </div>
                <hr/>
                <div className='homeListings'>
                    <h2>Home Listings</h2>
                    {/*listings*/}

                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
  const {

  } = state;
  return {
     updateDesiredRent, resetFilter, 
  };
};

export default connect(mapStateToProps, {
    updateDesiredRent, resetFilter
}
)(Dashboard);
