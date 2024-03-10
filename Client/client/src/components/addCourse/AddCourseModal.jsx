import React from "react";
import AddCourse from "./AddCourse.jsx";

export default function AddCourseModal({ onClose }) {
  return (
    <div className="flex justify-center text-white fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button className="place-self-end" onClick={onClose}>
          X
        </button>
        <AddCourse />
      </div>
    </div>
  );
}
