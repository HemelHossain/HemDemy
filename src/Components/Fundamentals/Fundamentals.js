import React from 'react';
import './Fundamentals.css'
const Fundamentals = (props) => {
    const{name, description} = props.path;
    return (
        <div className='text-left border-shadow pl-4 py-5 mb-10'>
           <h1 className='text-xl font-bold'>{name}</h1>
           <p className='text-slate-500 mt-2'>{description}</p>
           <button className='btn-color mt-4 mb-2'>View</button>
        </div>
    );
};

export default Fundamentals;