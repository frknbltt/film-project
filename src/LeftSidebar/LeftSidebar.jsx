import React, { Component } from "react";
import "./LeftSidebar.css";
import logo from "./image3.png";
import { getGenresRequest } from "../redux/genres/actions";
import { connect } from "react-redux";
class LeftSidebar extends Component {
  componentDidMount() {
    const { getGenresRequest } = this.props;

    getGenresRequest();
  }
  render() {
    const { genres } = this.props;
    return (
      <div className="leftsidebar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="leftsidebar-body">
          <div className="leftsidebar-body-1">
            {genres.data &&
              genres.data.length > 0 &&
              genres.data.map((genre) => {
                return <p>{genre.name}</p>;
              })}
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getGenresRequest: () => dispatch(getGenresRequest()),
});
const mapStateToProps = (state) => ({
  genres: state.genres,
});
export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);
