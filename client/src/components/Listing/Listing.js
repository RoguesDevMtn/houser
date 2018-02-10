import React, { Component } from "react";
import './Listing.css';
import axios from 'axios';

class Listing extends Component {
  handleDelete(){
    axios.delete(`api/properties?id=${this.props.propertyId}`)
  }
  render() {
    return (
      <div className="listingContainer">
        <div className="imgContainer">
          <img src={this.props.imgUrl} alt="" />
        </div>
        <div className="nameDescriptionContainer">
          <div>{`${this.props.propertyName}`}</div>
          <div>{`${this.props.propertyDescription}`}</div>
          </div>
          <div className="detailsContainer">
            <div className='detail'>{`Loan: ${this.props.loanAmount ? this.props.loanAmount : "$"}`}</div>
            <div className='detail'>{`Monthly Mortgage: ${this.props.monthlyMortgage
              ? this.props.monthlyMortgage
              : "$"}`}</div>
            <div className='detail'> Recommended Rent: $</div>
            <div className='detail'>{`Desired Rent: ${this.props.desiredRent
              ? this.props.desiredRent
              : "$"}`}</div>
            <div className='detail'>{`Address: ${this.props.address ? this.props.address : ""}`}</div>
            <div className='detail'>{`City: ${this.props.city ? this.props.city : ""}`}</div>
            <div className='detail'>{`State: ${this.props.state ? this.props.state : ""}`}</div>
            <div className='detail'>{`Zip: ${this.props.zip ? this.props.zip : ""}`}</div>
          </div>
          <div className='deleteButton' onClick={()=>this.handleDelete()}>x</div>
      </div>
    );
  }
}

export default Listing;
