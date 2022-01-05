import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyLaptop, buyMobile, fetchUsers } from "../redux/actions";
import './style.css';

  class Shop extends Component {
  // state = {
  //   numberOfLaptops: 100,
  // };
  // buyLaptop = () => {
  //   this.setState({numberOfLaptops:this.state.numberOfLaptops-1})
  // }

  render() {
    return (
      <div>
        <h1 className="shop-title">welcom to v shop</h1>

        <div className="items">
          <p>Dell Laptop</p>
          <p> avilable :{this.props.numberOfLaptops}</p>
          <button onClick={this.props.buyLaptop}>click</button>
        </div>
        <div className="items">
          <p>vivo Mobiles</p>
          <p> avilable :{this.props.numberOfMobiles}</p>
          <button onClick={this.props.buyMobile}>click</button>
        </div>
        <div className="items">
          <p>getUser data</p>
          <p> count :{this.props.users}</p>
          <button onClick={this.props.fetchUsers}>call Api</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    numberOfLaptops: state.laptops.numberOfLaptops,
    numberOfMobiles: state.mobiles.numberOfMobiles,
    users: state.users.users

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptop()),
    buyMobile: () => dispatch(buyMobile()),
    fetchUsers:()=> dispatch(fetchUsers()),
  };
}
export default connect( mapStateToProps,mapDispatchToProps)(Shop)
