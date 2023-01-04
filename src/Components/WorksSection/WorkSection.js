import React from 'react';

const WorkSection = () => {
    return (
        <div className='mt-36'>
            <h1 className='text-5xl'>Why Hem-Demy Works</h1>
            <div className='md:flex md:items-center  mt-20 md:mx-48'>
                <div className='md:w-72 sm:w-1/2 inline'>
                    <img className='h-28 w-28 mx-auto' src="https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png" alt="" />
                    <h1 className='text-base'>Personalized learning</h1>
                    <p className='md:text-center md:mr-4 '>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                </div>
                <div className='w-72 inline'>
                    <img className='h-28 w-28 mx-auto' src="https://cdn.kastatic.org/images/lohp/trusted_content_icon.png" alt="" />
                    <h1 className='text-base'>Trusted content</h1>
                    <p className='md:mr-4'>Created by experts, Hem-Demy library of trusted practice and lessons covers Web-Development, Machine-learning  more.</p>
                </div>
                <div className='w-72 h-52 inline'>
                    <img className='h-28 w-28 mx-auto' src="https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png" alt="" />
                    <h1 className='text-base'>Tools to empower teachers</h1>
                    <p>With Hem-Demy, teachers can identify gaps in their students understanding, tailor instruction, and meet the needs of every student.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;