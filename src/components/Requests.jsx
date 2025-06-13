import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "../utils/constant";
import { addRequests, removeRequests } from "../utils/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import connectionReducer, { addConnections } from "../utils/connectionSlice";
const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
 const [loading, setLoading] = useState(false);
  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/recieved`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.error("Error fetching requests:", error.message);
    }
  };
  // const pendingreq=async (status,from)=>{
  //   try {
  //     console.log(status)
  //     console.log(from)
  //     console.log("hi")
  //     // const res = await axios.post(`${BASE_URL}/request/review/${status}/${from}`, {
  //     //   withCredentials: true,
  //     // });
  //     const res = await axios.post(`${BASE_URL}/request/review/${status}/${from}`, {
  //       withCredentials: true,
  //     });
  //     console.log(res.data.data);
  //    dispatch(addConnections(res.data.data));
  //   } catch (error) {
  //     console.error("Error fetching requests:", error);
  //   }
  // }
  const pendingreq = async (status, from) => {
    try {
      console.log(status);
      console.log(from);
      console.log("hi");
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${from}`,
        {}, 
        { withCredentials: true } 
      );
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
      dispatch(removeRequests(from));
      setLoading(!loading)
    } catch (error) {
      console.error("Error fetching requests:", error.message);
    }
  };
  

  useEffect(() => {
    fetchRequests();
  }, [loading]);

  if (!requests || requests.length === 0) {
    return <h1 className="text-center text-xl my-10">No requests received</h1>;
  }

  return (
    <div className="text-center my-10 px-4">
      <h1 className="font-bold text-3xl mb-6">Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((connection) => {
          const { firstName, lastName, age, photoUrl, about, gender } =
            connection.fromUserId;

          return (
            <div
              key={connection._id}
              className="bg-gray-800 shadow-lg border rounded-lg p-6 flex flex-col items-center text-center"
            >
              <img
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
                src={photoUrl}
              />
              <div className="mb-4">
                <p className="text-lg font-semibold">
                  {firstName} {lastName}
                </p>
                {age && gender && (
                  <p className="text-gray-500 text-sm">
                    Age: {age} | Gender: {gender}
                  </p>
                )}
                <p className="text-gray-700 mt-2">{about}</p>
              </div>
              <div className="flex gap-4">
                {/* {console.log(connection.fromUserId._id)}; */}
                <button onClick={()=>pendingreq("accepted",connection.fromUserId._id)} className="btn btn-outline text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                  Accept
                </button>
                <button className="btn btn-outline text-red-600 border-red-600 hover:bg-red-600 hover:text-white">
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
