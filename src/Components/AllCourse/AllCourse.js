import React from 'react';
import useCourse from '../../Hooks/useCourse';
import AllCourseDetail from '../AllCourseDetail/AllCourseDetail';

const AllCourse = () => {
    const [courses, setCourse] = useCourse();
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-6  sm:3/4 mt-28 mx-auto'>
            {courses.map(course => <AllCourseDetail key={course.id} course={course}></AllCourseDetail>)}
            </div>
        </div>
    );
};

export default AllCourse;