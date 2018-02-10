import React, { Component } from "react";
import { connect } from "react-redux";
import './Listing.css'

class Listing extends Component {
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
            <div className='detail'>{`Loan: ${loanAmount ? this.props.loanAmount : "$"}`}</div>
            <div className='detail'>{`Monthly Mortgage: ${monthlyMortgage
              ? this.props.monthlyMortgage
              : "$"}`}</div>
            <div className='detail'> Recommended Rent: $</div>
            <div className='detail'>{`Desired Rent: ${desiredRent
              ? this.props.desiredRent
              : "$"}`}</div>
            <div className='detail'>{`Address: ${Address ? this.props.address : ""}`}</div>
            <div className='detail'>{`City: ${city ? this.props.city : ""}`}</div>
            <div className='detail'>{`State: ${state ? this.props.state : ""}`}</div>
            <div className='detail'>{`Zip: ${zip ? this.props.zip : ""}`}</div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    propertyName,
    propertyDescription,
    loanAmount,
    monthlyMortgage,
    desiredRent,
    address,
    city,
    state,
    zip
  } = state;
  return {
    propertyName,
    propertyDescription,
    loanAmount,
    monthlyMortgage,
    desiredRent,
    address,
    city,
    state,
    zip
  };
};

export default connect(mapStateToProps, {
  propertyName,
  propertyDescription,
  loanAmount,
  monthlyMortgage,
  desiredRent,
  address,
  city,
  state,
  zip
}
)(Listing);
