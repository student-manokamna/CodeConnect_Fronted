import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constant";
import UserCard from "./UserCard";
import axios from "axios";
const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  // const dispatch=useDispatch()
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [age, setage] = useState(user.age);
  const [gender, setgender] = useState(user.gender);
  const [about, setabout] = useState(user.about);
  const [error, setError] = useState();
  const [showtoast, setshowtoast] = useState(false);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/profile/view`, {
          withCredentials: true,
        });
        console.log("by");
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err.message);
        setError("Failed to load profile data.");
      }
    };

    fetchProfile();
  }, []);
  //   const handlesave=async ()=>{
  //     try{
  //     console.log(BASE_URL +"/profile/edit")
  //     const res = await axios.patch(
  //       "http://localhost:7777/profile/edit",
  //       {
  //           firstName,
  //           lastName,
  //           age,
  //           gender,
  //           about,
  //       },
  //       {
  //           withCredentials: true,

  //       }
  //   );
  //   console.log("hi",res.data)
  //     dispatch(addUser(res?.data?.data))
  //   }
  //   catch(err){
  //     console.log(err)
  //     console.error("Error Message:", err.message); // General error message
  //   console.error("Error Config:", err.config);   // Request configuration details
  //   console.error("Error Response:", err.response); // Response (if available)
  //   console.error("Error Request:", err.request); // Request details
  //   console.error("Error Details:", err.toJSON());
  //     setError(err.message)
  //   }
  // }
  const handlesave = async () => {
    // Set loading state
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          firstName,
          lastName,
          age,
          gender,
          about,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      setshowtoast(true);
      setTimeout(() => {
        setshowtoast(false);
      }, 3000);
      // Optionally navigate or show success message
    } catch (err) {
      console.error("Error Message:", err.message);
      setError("Failed to save profile data."); // Set a user-friendly error message
    }
  };
  //   const handlesave=async ()=>{
  //     try{
  //     console.log(BASE_URL +"/test")
  //     const res=await axios.patch(BASE_URL +"/test",{firstName,lastName,about,age,gender},{
  //       withCredentials:true,
  //     })
  //     // dispatch(addUser(res?.data?.data))
  //   }
  //   catch(err){
  //     setError(err.message)
  //   }
  // }
  return (
    <div className="flex justify-evenly">
      <div className="flex justify-center">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">FirstName:{firstName}</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Enter Email Id"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">lastName:{lastName}</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Enter Email Id"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setlastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">age:{age}</span>
                </div>
                <input
                  type="text"
                  value={age}
                  placeholder="Enter Email Id"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setage(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">about:{about}</span>
                </div>
                <input
                  type="text"
                  value={about}
                  placeholder="Enter Email Id"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setabout(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">gender:{gender}</span>
                </div>
                <input
                  type="text"
                  value={gender}
                  placeholder="Enter Email Id"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setgender(e.target.value)}
                />
              </label>
            </div>

            <div className="card-actions justify-center m-2">
              <button className="btn btn-primary " onClick={handlesave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2>{error}</h2>
      <UserCard user={{ firstName, lastName, about, age, gender }} />
      {showtoast && (
        <div className="toast toast-center toast-middle">
          <div className="alert alert-success">
            <span>Profile updated successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
