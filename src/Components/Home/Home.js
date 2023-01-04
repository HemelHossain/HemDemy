import React from 'react';
import banner from '../../images/banner.png'
import CourseSection from '../CourseSection/CourseSection';
import WorkSection from '../WorksSection/WorkSection';
import './Home.css'
const Home = () => {
    return (
        <div>
                           {/*   Banner Section  */}
            <div className='md:flex md:justify-between mt-28 md:mx-24 sm:flex-row items-center'>
                <div className='w-2/4 sm:mx-auto'>
                    <h1 className='text-6xl font-bold'>Learn to code <span className='block text-orange-600'>Faster.</span></h1>
                    <h4 className='text-3xl'>Fireship is a <span className='text-orange-600'>blazingly fast</span> && <span className='text-green-600'>highly-amusing</span> way to level up your programming skills.</h4>
                    <button>Start Here</button>
                </div>
                <div className='w-2/5 sm:mx-auto sm:mt-16'>
                    <img src={banner} alt="" />
                </div>
            </div>
                           {/* Course Section  */}
            <CourseSection>
            </CourseSection>  

                           {/* Works Section */}
            <WorkSection></WorkSection>               
        </div>    
    );
};

export default Home;