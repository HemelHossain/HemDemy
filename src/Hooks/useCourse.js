import { useEffect, useState } from "react";

const useCourse = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourse(data));
    },[])
    return [courses, setCourse];
};

export default useCourse;