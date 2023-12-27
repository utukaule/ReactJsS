import React, { useState } from "react";
import Card from "./Card";
const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourse, setLikedCourse] = useState([]);
  // console.log(data)
  function getCourses() {
    if (category == "All") {
      let allCourses = [];
      // Object.values(data.foreach(array=>{
      //   array.foreach(courseData=>{
      //     allCourses.push(courseData);
      //   })
      // }))
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      // main sirff specific category ka data array karunga
      return courses[category];
    } 
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 -mb-48">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourse={likedCourse}
          setLikedCourse={setLikedCourse}
        />
      ))}
    </div>
  );
};

export default Cards;
