import React from "react";
import Card from "./Card";
const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  function getCourses() {
    if(category == 'All'){
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
        // console.log(allCourses)
      });
      return allCourses;
    }
    else{
      return courses[category];
    }
    }
  return (
    <>
      <div>
        {getCourses().map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default Cards;
