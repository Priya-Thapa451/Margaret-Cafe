import React from "react";
import { Link } from "react-router-dom";

export default function OurCourse() {
  const courses = [
    { id: 1, title: "Barista" },
    { id: 2, title: "Bakery" },
    
  ];

  const Courses = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Available Courses
        </h1>
        <ul className="space-y-4">
          {courses.map((course) => (
            <li
              key={course.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Link
                to={`/course/${course.id}`}
                className="text-xl text-blue-600 hover:text-blue-800"
              >
                {course.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}
