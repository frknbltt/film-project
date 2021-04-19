import React, { Component } from "react";
import "./Films.css";
import Card from "../Content/Sections/Cards/Card";
import { Link } from "react-router-dom";
import { getFilmsRequest } from "../redux/films/actions";
import { connect } from "react-redux";

class Films extends Component {
  componentDidMount() {
    const { getFilmsRequest } = this.props;
    window.scrollTo(0, 0);
    getFilmsRequest();
  }
  render() {
    const { films } = this.props;
    return (
      <div>
        <br />
        <br />
        <div className="films">
          {films.data &&
            films.data.length > 0 &&
            films.data.map((film) => {
              return (
                <Link to={`/film-project/films/${film.id}`}>
                  <Card
                    title={film.title}
                    imdb={film.vote_average}
                    img={film.poster_path}
                    date={film.release_date}
                  />
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Films);
