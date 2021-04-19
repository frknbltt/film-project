import React, { Component } from "react";
import "./Films.css";
import PeopleCard from "../Content/Sections/Cards/PeopleCard";
import { getPeopleRequest } from "../redux/people/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class People extends Component {
  componentDidMount() {
    const { getPeopleRequest } = this.props;
    window.scrollTo(0, 0);
    getPeopleRequest();
  }
  render() {
    const { people } = this.props;
    return (
      <div className="films">
        {people.data &&
          people.data.length > 0 &&
          people.data.map((people) => {
            return (
              <Link to={`/film-project/people/${people.id}`}>
                <PeopleCard
                  img={people.profile_path}
                  title={people.name}
                  popularity={people.popularity}
                  department={people.known_for_department}
                />
              </Link>
            );
          })}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getPeopleRequest: () => dispatch(getPeopleRequest()),
});

const mapStateToProps = (state) => ({
  people: state.people,
});

export default connect(mapStateToProps, mapDispatchToProps)(People);
