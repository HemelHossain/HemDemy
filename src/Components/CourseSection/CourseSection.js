import useCourse from '../../Hooks/useCourse';
import CourseDetail from '../CourseDetail/CourseDetail';

const CourseSection = () => {
    const [courses, setCourse] = useCourse();

    return (
        <div>
        <div className='grid grid-cols-2 md:gap-x-24 md:gap-y-8 md:w-3/5 sm:3/4 mt-28 mx-auto'>
            {(courses.slice(0, 4)).map(course => <CourseDetail key={course.id} course={course}></CourseDetail>)}     
        </div>
        </div>
    );
};

export default CourseSection;