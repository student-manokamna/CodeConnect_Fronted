import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import BASE_URL from '../utils/constant'
import { removeUser } from '../utils/userSlice'

const Navbar = () => {
  const user=useSelector((store)=>store.user)
  const dispatch=useDispatch(); 
  const navigate=useNavigate();
  const [scroll,setscroll]=useState(false)
  useEffect(()=>{
    const handlescroll=()=>{
       const scrollTop = window.scrollY;
     setscroll(scrollTop > 50);
    }
    window.addEventListener('scroll', handlescroll);
    
  return () => window.removeEventListener('scroll', handlescroll);

  },[])
  const handleLogout=async ()=>{
    try{
      // console.log("hello")
      await axios.post(BASE_URL+"/logout",{},{
        withCredentials:true
      })
      dispatch(removeUser())
     return  navigate("/login")
    }
    catch(err){
      console.log(err)
    }
  }
  return (
   <div
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out navbar  ${
    scroll
      ? 'bg-black/20 backdrop-blur-md border-b border-gray-800/50'
      : 'bg-gray-900'
  }`}
>
        <div className="flex-1">
          <Link to="/feed" className="btn btn-ghost text-xl">Dev Tinder</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
               {
           user&& <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
               } 
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connection">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <Link to="/premium">Premium</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Navbar