import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
