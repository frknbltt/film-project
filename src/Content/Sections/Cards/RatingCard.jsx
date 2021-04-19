import React, { useState } from "react";
import Rating from "react-rating";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { rateFilmRequest } from "../../../redux/films/actions";
 
class RatingCard extends React.Component {

  state = {
    rate1:3
  }
 
   handleClick = (e) => {
    const payload = {movie_id:this.props.filmId,value:5}
    this.props.ratefilm(payload)
    this.setState({rate1:e})
  }

  render(){
    return (
      <div >
        <Rating
          initialRating={this.state.rate1}
          onClick={this.handleClick}
        />
        <p>Rate:  {this.state.rate1}</p>
      </div>
    );
  }

 
}
 
const mapDispatchToProps = (dispatch) => ({
  ratefilm: (payload) => dispatch(rateFilmRequest(payload)),
});

/* const mapStateToProps = (state) => ({
  films: state.films,
}); */

export default connect(
  null,
  mapDispatchToProps
)(withRouter(RatingCard));