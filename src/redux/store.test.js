import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseAction from "./actions/courseAction";

it("Should handle creating courses", function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code",
  };

  // act
  const action = courseAction.createCourseSuccess(course);
  store.dispatch(action);

  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
