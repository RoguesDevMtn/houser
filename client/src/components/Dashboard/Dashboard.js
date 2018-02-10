import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateDesiredRent,
  updateListings,
  resetFilter
} from "../../ducks/reducer";
import Listing from "../Listing/Listing";
import "./Dashboard.css";
import axios from "axios";

class Dashboard extends Component {
  componentDidMount() {
    axios.get(`/api/properties`).then(response => {
      this.props.updateListings(response.data);
    });
  }
  handleFilterClick() {
    axios
      .get(`/api/properties?desiredRent=${this.props.desiredRent}`)
      .then(response => {
        this.props.updateListings(response.data);
      });
  }
  handleResetClick() {
    axios.get(`/api/properties`).then(response => {
      this.props.updateListings(response.data);
      this.props.resetFilter();
    });
  }

  render() {
    var listingsList = this.props.listings.map((property, index) => {
      return <Listing key={index}
        propertyId={property.property_id}
        propertyName={property.property_name}
        propertyDescription={property.description}
        loanAmount={property.loan_amount}
        monthlyMortgage={property.mortgage_amount}
        desiredRent={property.desired_rent}
        address={property.address}
        city={property.city}
        state={property.state}
        zip={property.zip}
      />;
    });
    return (
      <div className="dashContainer">
        <div className="dashHead">
          <Link to="/wizard/1"><div className="addButton">Add new property</div></Link>
          <div className="desiredRentContainer">
            <div>List properties with "desired rent" greator than: $</div>
            <input
              onChange={e => this.props.updateDesiredRent(e.target.value)}
              className="desiredInput"
              type="number"
              name="desired rent"
              id=""
            />
            <div
              onClick={() => this.handleFilterClick()}
              className="filterButton"
            >
              Filter
            </div>
            <div
              onClick={() => this.handleResetClick()}
              className="resetButton"
            >
              Reset
            </div>
          </div>
        </div>
        <hr />
        <div className="homeListings">
          <h2>Home Listings</h2>
          {listingsList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    desiredRent,
    listings
  } = state;
  return {
    desiredRent,
    listings
  };
};

export default connect(mapStateToProps, {
    updateDesiredRent,
    updateListings,
    resetFilter
})(Dashboard);
