import React, { useEffect, useState } from "react";
import './card.css'; 

function ProfileCard() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5&seed=abc") // Fetch 5 user profiles
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
  };

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  const user = users[currentIndex];

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      

      {/* Profile Card */}
      <div className="bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl p-8 w-[500px] h-[250px] flex items-center space-y-4">
        {/* Image Section */}
        <img
          className=" w-44 h-44 rounded-md border-2 border-gray-300"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />

        {/* Details Section */}
        <div className="ml-10  pb-10 ">
          <h2 className="text-2xl font-bold text-gray-800">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Gender:</span> {user.gender}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
        </div>
      </div>

     
      <div className=" mt-16">

        {/* Previous Button */}
        <button
            className="left-70 bg-blue-500 text-white px-8 py-3 rounded-md mr-24 hover:bg-richblack-800 hover:shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)]"
            onClick={handlePrevious}
        >
            Previous
        </button>

            {/* Next Button */}
        <button
            className="right-80 bg-blue-500 text-white px-10 py-3 rounded-md hover:bg-richblack-800 hover:shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)]"
            onClick={handleNext}
        >
            Next
        </button>

    
      </div>
    </div>
  );
}

export default ProfileCard;
