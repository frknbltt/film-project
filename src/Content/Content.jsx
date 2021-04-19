import React, { Component } from "react";
import "./Content.css";
import ContentBodyCard from "./Sections/ContentBodyCard";
import { getGenresRequest } from "../redux/genres/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Content extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.getGenres();
  }

  render() {
    const { genres } = this.props;
    return (
      genres && (
        <div className="content">
          <div className="content-body">
            {genres.data &&
              genres.data.length > 0 &&
              genres.data.map((genre) => {
                return (
                  genres && (
                    <Link to={`/film-project/films`}>
                      <ContentBodyCard name={genre.name} />
                    </Link>
                  )
                );
              })}
          </div>
        </div>
      )
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getGenres: () => dispatch(getGenresRequest()),
});
const mapStateToProps = (state) => ({
  genres: state.genres,
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);
