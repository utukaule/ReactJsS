import React from "react";

const Card = (props) => {
  let course = props.course;
  return (
    <>
      <div>
        <img
          src={course.image.url}
          alt=""
          style={{
            width: "200px",
            height: "150px",
          }}
        />
      </div>
      <div>
        <h5>{course.title}</h5>
      </div>
      <div>
        <p>
          {course.description.length > 50
            ? course.description.substr(0,100) + "..."
            : course.description}
        </p>
      </div>
    </>
  );
};

export default Card;
