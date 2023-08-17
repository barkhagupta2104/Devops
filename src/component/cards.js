import React from "react";
import Card from './card'
import { useState } from "react";

const  Cards = ({props}) => {
    let courses = props.courses;
    let Category = props.Category;

    const [LikedCourses ,setLikedCourses] = useState([]);
    const getCourses = () =>{
     
       if(Category ==="All")
       {
        let allcourses = [];
        
            Object.values(courses).forEach((courseCategory) =>{

                courseCategory.forEach((course) =>{
                    allcourses.push(course);
                
                })  
            })
            return allcourses;
       }
     else{
        return courses[Category];
     }
        
  

}
return(
    <div className="flex flex-wrap justify-center gap-4 mb-4">
    {
       getCourses().map((course) => {
        return(
       <Card key={course.id} course = {course} 
        LikedCourses = { LikedCourses}
        setLikedCourses = {setLikedCourses}
       />
        )
       })
       }
    </div>
)
}



export default Cards;