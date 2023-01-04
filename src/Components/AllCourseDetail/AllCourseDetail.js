import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
const AllCourseDetail = (props) => {
    const {img, name, price, Instructor, ratings, person,} = props.course;
    return (
        <div>
            <div className='text-left p-5'>
            <img className='md:w-96 md:h-56 sm:w-72 sm:h-48 border-black border-2' src={img} alt="" />
            <h1 className='font-bold'>{name}</h1>
            <p><small>{Instructor}</small></p>
            <div className='flex items-center'>
            <p className='mr-2'>{ratings}</p>
            <p className='mr-2'>
                <small className='text-orange-400'>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
                </small>
            </p>
            <p>{person}</p>
            </div>
            <p><span className='font-bold mr-2'>${price} </span> <del className='text-slate-500'>$84</del></p>

        </div>
        </div>
    );
};

export default AllCourseDetail;