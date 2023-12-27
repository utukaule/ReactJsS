import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
const Card = (props) => {
  let course = props.course;
  let likedCourse = props.likedCourse;
  let setLikedCourse = props.setLikedCourse;

  function clickHandler() {
    //logic
    if (likedCourse.includes(course.id)) {
      //pehele se like huwa pada he
      setLikedCourse((prev) => prev.filter((cid) => cid !== course.id));
      console.log("removed");
    } else {
      //pehle se like nahi he ye course
      // insert karna h ye course liked course me
      if (likedCourse.length == 0) {
        setLikedCourse([course.id]);
      } else {
        // non-empty pehle se
        setLikedCourse((prev) => [...prev, course.id]);
      }
      console.log("course added");
    }
  }
  return (
    <div className="w-[300px] rounded-md bg-black bg-opacity-80 text-white overflow-hidden">
      <div className="relative">
        <img src={course.image.url} />
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-2 grid place-content-center">
          <button onClick={clickHandler}>
            {!likedCourse.includes(course.id) ? (
              <FcLikePlaceholder size="1.4rem" />
            ) : (
              <FcLike size="1.4rem" />
            )}
          </button>
        </div>
      </div>
      <div>
        <p className="p-4 font-bold text-1xl">{course.title}</p>
        <p className="ps-4 pe-4 pb-4">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
