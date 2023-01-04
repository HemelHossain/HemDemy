import React, { useEffect, useState } from 'react';
import Fundamentals from '../Fundamentals/Fundamentals';

const LearningPath = () => {
    const [paths, setPaths] = useState([]);
    useEffect(() => {
        fetch('fundamental.json')
        .then(res => res.json())
        .then(data => setPaths(data));
    }, [])
    return (
        <div className='text-left mx-auto md:w-3/5 sm:w-4/5 mt-20'>
            <h1 className='text-4xl font-bold'>
                Learning Paths
            </h1>
            <p className='mt-6 '>
            Whether you're a beginner just starting out or an experienced developer looking for courses to enhance your skills and reach higher levels of software engineering, these learning paths will help you achieve your goal.
            </p>
            <div className='mx-auto  mt-8'>
                {paths.map(path => <Fundamentals key={path.id} path={path}></Fundamentals>)}
            </div>
            
        </div>
    );
};

export default LearningPath;