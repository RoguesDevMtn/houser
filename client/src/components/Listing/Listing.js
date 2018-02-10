import React, { Component } from "react";
import { connect } from "react-redux";

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
          <div className="detailsContainer">
            <div>{`Loan: ${loanAmount ? this.props.loanAmount : "$"}`}</div>
            <div>{`Monthly Mortgage: ${monthlyMortgage
              ? this.props.monthlyMortgage
              : "$"}`}</div>
            <div> Recommended Rent: $</div>
            <div>{`Desired Rent: ${desiredRent
              ? this.props.desiredRent
              : "$"}`}</div>
            <div>{`Address: ${Address ? this.props.address : ""}`}</div>
            <div>{`City: ${city ? this.props.city : ""}`}</div>
            <div>{`State: ${state ? this.props.state : ""}`}</div>
            <div>{`Zip: ${zip ? this.props.zip : ""}`}</div>
          </div>
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
