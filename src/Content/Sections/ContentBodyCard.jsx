import React, { Component } from "react";
import "./ContentBodyCard.css";
import Card from "./Cards/Card";
import { Link } from "react-router-dom";
import { getFilmsRequest } from "../../redux/films/actions";
import { connect } from "react-redux";

class FromLibrary extends Component {
  componentDidMount() {
    const { getFilmsRequest } = this.props;

    getFilmsRequest();
  }

  render() {
    const { films } = this.props;
    const mixedFilms = films?.data?.slice(7, 13);

    return (
      <div className="fromlibrary">
        <div className="fromlibrary-head">
          <h4>{this.props.name}</h4>
        </div>
        <hr />
        <div className="fromlibrary-body">
          {mixedFilms &&
            mixedFilms.length > 0 &&
            mixedFilms.map((film) => {
              return (
                mixedFilms && (
                  <Link to={`film-project/films/${film.id}`}>
                    <Card
                      img={film.poster_path}
                      title={film.title}
                      imdb={film.vote_average}
                      date={film.release_date}
                    />
                  </Link>
                )
              );
            })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFilmsRequest: () => dispatch(getFilmsRequest()),
});

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps, mapDispatchToProps)(FromLibrary);
