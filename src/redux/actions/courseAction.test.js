import * as courseAction from "./courseAction";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";

describe("createCourseSuccess", () => {
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    // arrange
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course,
    };

    // act
    const action = courseAction.createCourseSuccess(course);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
