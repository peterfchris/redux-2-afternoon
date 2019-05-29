import Axios from "axios";

const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
};

const REQUEST_BUDGET_DATA = "REQUEST_BUDGET_DATA";
const ADD_PURCHASE = "ADD_PURCHASE";
const REMOVE_PURCHASE = "REMOVE_PURCHASE";

export function requestBudgetData() {
  const budgetData = Axios.get("/api/budget-data").then(res => res.data);
  return {
    type: REQUEST_BUDGET_DATA,
    payload: budgetData
  };
}

export function addPurchase(price, description, category) {
  const purchase = Axios.post("/api/budget-data/purchase", {
    price,
    description,
    category
  }).then(res => res.data)
    .catch(error => console.log(error.message));
  return {
    type: ADD_PURCHASE,
    payload: purchase
  };
}

export function removePurchase(id) {
  const meNoWant = Axios.delete(`/api/budget-data/purchase/:${id}`).then(
    res => res.data
  );
  return {
    type: REMOVE_PURCHASE,
    payload: meNoWant
  };
}

function budgetReducer(state = initialState, action) {
  switch (action.payload) {
    case REQUEST_BUDGET_DATA + "_PENDING":
      return {
        ...state,
        loading: true
      };
    case REQUEST_BUDGET_DATA + "_FULFILLED":
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case ADD_PURCHASE + "_PENDING":
      return {
        ...state,
        loading: true
      };
    case ADD_PURCHASE + "_FULFILLED":
      return {
        ...state,
        purchase: action.payload,
        loading: false
      };
    case REMOVE_PURCHASE + "_PENDING":
      return {
        ...state,
        loading: true
      };
    case REMOVE_PURCHASE + "_FULFILLED":
      return {
        ...state,
        purchase: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default budgetReducer;
