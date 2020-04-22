import React, { useState, useEffect } from 'react';
import CourseForm from './CourseForm';
import courseStore from '../stores/courseStore';
import PageNotFound from './PageNotFound';
import { toast } from 'react-toastify';
import * as courseActions from '../actions/courseActions';

const ManageCoursePage = (props) => {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = 'Title is required';
    if (!course.authorId) _errors.authorId = 'Select an required';
    if (!course.category) _errors.category = 'Category is required';

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  const handleSubmit = (event) => {
    // calling preventDefualt to avoid default behavior of browser of posting back to the server
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push('/courses');
      toast.success('Course saved');
    });
  };

  if (!course) {
    return <PageNotFound />;
  } else
    return (
      <>
        <h2>Manage Courses</h2>
        <CourseForm
          errors={errors}
          course={course}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </>
    );
};

export default ManageCoursePage;
