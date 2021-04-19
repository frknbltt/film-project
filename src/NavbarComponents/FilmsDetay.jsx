import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./FilmsDetay.css";
import { getFilmsRequest } from "../redux/films/actions";
import { connect } from "react-redux";
import RatingCard from "../Content/Sections/Cards/RatingCard";

class FilmsDetay extends Component {
  componentDidMount() {
    const { getFilmsRequest } = this.props;

    getFilmsRequest();
  }
  render() {
    const { films } = this.props;
    const id = this.props.match.params.id;
    const selectedFilm =
      films.data &&
      films.data.length > 0 &&
      films.data.find((item) => item.id === parseInt(id));
    return (
      selectedFilm && (
        <div className="filmsdetay">
          <img
            className="backdrop-path"
            src={"https://image.tmdb.org/t/p/w500" + selectedFilm.backdrop_path}
            alt="backdroppath"
          />
          <div className="filmsdetay-left">
            <img
              className="poster-path"
              src={"https://image.tmdb.org/t/p/w500" + selectedFilm.poster_path}
              alt="poster-path"
            />
          </div>
          <div className="filmsdetay-right">
            <h4>
              {selectedFilm.title}
              <RatingCard filmId={selectedFilm.id} />
            </h4>
            <hr />

            <p>
              <strong> IMDB: </strong>
              <span>{selectedFilm.vote_average} </span>
            </p>
            <p>
              <strong>Yapım Tarihi:</strong>{" "}
              <span>{selectedFilm.release_date} </span>
            </p>

            <p>
              <strong> Oylanma: </strong>
              <span>{selectedFilm.vote_count} </span>
            </p>
            <p>
              <strong>Popülarite: </strong>
              <span>{selectedFilm.popularity.toFixed(0)} </span>
            </p>

            <hr />
            <h5>
              <strong> Film Özeti</strong>
            </h5>
            <p>{selectedFilm.overview}</p>
          </div>
        </div>
      )
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getFilmsRequest: () => dispatch(getFilmsRequest()),
});

const mapStateToProps = (state) => ({
  films: state.films,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FilmsDetay));
