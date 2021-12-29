import Header from "./headerComponent";
import Menu from "./menuComponent";
import Home from "./homeComponent";
import Footer from "./footerComponent";
import { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Redirect, withRouter } from "react-router-dom";
import { fectstaff } from "../redux/ActionCreator";
import history from "../helps/history";

const mapDispatchToProps = (dispatch) => ({
  fectstaff: () => {
    dispatch(fectstaff());
  },
});

const mapStateToProps = (state) => {
  return {
    Staff: state.Staffs,
  };
};

class Main extends Component {
  componentDidMount() {
    this.props.fectstaff();
    console.log(this.props)
  }
  render() {
    return (
      <>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/menu" component={Menu} />
            <Footer />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
