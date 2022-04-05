import * as fromCourse from './course.actions';

describe('loadCourses', () => {
  it('should return an action', () => {
    expect(fromCourse.loadCourses().type).toBe('[Course] Load Courses');
  });
});
