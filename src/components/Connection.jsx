import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "../utils/constant";
import connectionReducer, { addConnections } from "../utils/connectionSlice";
import { useDispatch, useSelector } from "react-redux";

const Connection = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [check, setCheck] = useState(false);
  const getConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);

      setUser(res.data.data);
      setCheck(true);
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getConnection();
  }, []);
  if (!connections) return;
  if (connections.length === 0) return <h1>NO connections</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl">Connection</h1>
      {/* <ul className="border border-teal-300">
  {user && user.length > 0 ? (
    user.map((item, index) => (
      <div key={index}>
        <li>{item.firstName}  {item.lastName}</li>  
        <img src={item.photoUrl} alt="kuch" />
      </div>
    ))
  ) : (
    <p>No connections</p>
  )}
</ul> */}
      {connections.map((connection) => {
        const {firstName,lastName,age,photoUrl,about,gender}=connection
        return (
          <div key={connection._id} className=" flex m-4 p-4 border rounded-lg bg-base-300">
            <div> <img alt="photo" className="w-40 rounded-full"  src={photoUrl} /> </div>
            <div className="text-left mx-4"> <p> {firstName} {lastName}</p>
           { age &&gender&&  <p>Age: {age+" "+ gender}</p>}
            <p>{about}</p></div>
           
           
          </div>
        );
      })}
    </div>
  );
};

export default Connection;
