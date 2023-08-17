import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, LikedCourses, setLikedCourses }) => {
  function clickHandler() {
    if (LikedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed");
    } else {
      if (LikedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("liked successfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="Course" />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center">
          <button onClick={clickHandler}>
          
            {
              LikedCourses.includes(course.id) ?  (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
            }
          </button>
        </div>
      </div>
      <div className="ml-4 mr-4 pb-3">
        <p className="text-white text-bold font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">
        
        {course.description.length>100 ?
        (course.description.substr(0,100) + " ..." ) :
        (course.description)
        }
        </p>
      </div>
    </div>
  );
};

export default Card;
