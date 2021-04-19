import React, { Component } from "react";
import { getPeopleRequest } from "../redux/people/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./PeopleDetay.css";

class PeopleDetay extends Component {
  componentDidMount() {
    const { getPeopleRequest } = this.props;

    getPeopleRequest();
  }
  render() {
    const { people } = this.props;
    const id = this.props.match.params.id;
    const selectedPeople =
      people.data &&
      people.data.length > 0 &&
      people.data.find((item) => item.id === parseInt(id));
    return (
      selectedPeople && (
        <div className="peopledetay">
          <img
            className="peopledetay-poster-path"
            src={
              "https://image.tmdb.org/t/p/w500" + selectedPeople.profile_path
            }
            alt="image"
          />
          <div className="peopledetay-right">
            <h1>{selectedPeople.name}</h1>
            <hr />
            <br />
            <h3>Popüler Filmler</h3>
            <br />
            {selectedPeople?.known_for.map((peopledetay) => {
              return (
                <div className="peopledetay-right-bottom">
                  <br />
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500" +
                      peopledetay.poster_path
                    }
                    alt="img"
                  />
                  <div>
                    <h4>{peopledetay.title}</h4>
                    <p>
                      <strong>IMDB</strong>:
                      <span>{peopledetay.vote_average} </span>
                    </p>
                    <p>
                      {" "}
                      <strong>Yapım</strong>:
                      <span>{peopledetay.release_date} </span>
                    </p>
                    <p>
                      {" "}
                      <strong>Film Özeti</strong>:
                      <span>{peopledetay.overview}</span>
                    </p>
                    <br />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getPeopleRequest: () => dispatch(getPeopleRequest()),
});

const mapStateToProps = (state) => ({
  people: state.people,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PeopleDetay));
