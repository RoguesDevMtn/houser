//state
let initialState = {
  username: "",
  password: "",
  desiredRent: "",
  filter: 0,
  propertyName: "",
  propertyDescription: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  imageUrl: "",
  loanAmount: "",
  monthlyMortgage: ""
};

//consts
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_DESIREDRENT = "UPDATE_DESIREDRENT";
const RESET_FILTER = "RESET_FILTER";
const UPDATE_PROPERTYNAME = "UPDATE_PROPERTYNAME";
const UPDATE_PROPERTYDESCRIPTION = "UPDATE_PROPERTYDESCRIPTION";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGEURL = "UPDATE_IMAGEURL";
const UPDATE_LOANAMOUNT = "UPDATE_LOANAMOUNT";
const UPDATE_MONTHLYMORTGAGE = "UPDATE_MONTHLYMORTGAGE";

//action creators
export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
}
export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    payload: password
  };
}
export function updateDesiredRent(desiredRent) {
  return {
    type: UPDATE_DESIREDRENT,
    payload: desiredRent
  };
}
export function resetFilter() {
  return {
    type: RESET_FILTER,
    payload: 0
  };
}
export function updatePropertyName(propertyName) {
  return {
    type: UPDATE_PROPERTYNAME,
    payload: propertyName
  };
}

export function updatePropertyDescript(propertyDescription) {
  return {
    type: UPDATE_PROPERTYDESCRIPTION,
    payload: propertyDescription
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}

export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}

export function updateImageUrl(imageUrl) {
  return {
    type: UPDATE_IMAGEURL,
    payload: imageUrl
  };
}

export function updateLoanAmount(loanAmount) {
  return {
    type: UPDATE_LOANAMOUNT,
    payload: loanAmount
  };
}

export function updateMonthlyMortgage(monthlyMortgage) {
  return {
    type: UPDATE_MONTHLYMORTGAGE,
    payload: monthlyMortgage
  };
}

//reducer
function reducer(state = initialState, action) {
  var { payload, type } = action;
  switch (type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, { username: payload });
    case UPDATE_PASSWORD:
      return Object.assign({}, state, { password: payload });
    case UPDATE_DESIREDRENT:
      return Object.assign({}, state, { desiredRent: payload });
    case RESET_FILTER:
      return Object.assign({}, state, { filter: payload });
    case UPDATE_PROPERTYNAME:
      return Object.assign({}, state, { propertyName: payload });
    case UPDATE_PROPERTYDESCRIPTION:
      return Object.assign({}, state, { propertyDescription: payload });
    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: payload });
    case UPDATE_STATE:
      return Object.assign({}, state, { state: payload });
    case UPDATE_ZIP:
      return Object.assign({}, state, { zip: payload });
    case UPDATE_IMAGEURL:
      return Object.assign({}, state, { imageUrl: payload });
    case UPDATE_LOANAMOUNT:
      return Object.assign({}, state, { loanAmount: payload });
    case UPDATE_MONTHLYMORTGAGE:
      return Object.assign({}, state, { monthlyMortgage: payload });
  }
}
