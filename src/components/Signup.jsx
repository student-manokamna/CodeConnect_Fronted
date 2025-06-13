import axios from 'axios';
import  { useState } from 'react'


import { useNavigate } from 'react-router-dom';
import BASE_URL from '../utils/constant';
const Signup = () => {

const navigate=useNavigate()
    const [emailId,setEmailId]=useState("");
    const [passWord,setPassWord]=useState("");
    const [firstName,setfirstName]=useState("");
    const [lastName,setlastName]=useState("");
     
    const [error ,SetError]=useState("");
    const handlelogin=async ()=>{
        try{
            await axios.post(BASE_URL+"/signup",{
                firstName,
                lastName,
                emailId:emailId,
                passWord:passWord
            },{
                
                    withCredentials:true 
                
            })
            // console.log(result)
            // dispatch(addUser(result.data))
           return  navigate("/login")
        }
        catch(err){
          SetError(err?.response?.data||"something went wrong")
            // console.log(err)
        }
    }
  //   const handlelogin=async ()=>{
  //     try{
  //         const result=await axios.get(BASE_URL+"/profile/view",{
              
  //                 withCredentials:true 
              
  //         })
  //         // console.log(result)
  //         console.log(result)
  //     }
  //     catch(err){
  //       SetError(err?.response?.data||"something went wrong")
  //         // console.log(err)
  //     }
  // }
  return (
    <div className='flex justify-center'>
        <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">Signup</h2>
    <div>
    <label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">EmailId:{emailId}</span>
   
  </div>
  <input type="text" value={emailId}  placeholder="Enter Email Id" className="input input-bordered w-full max-w-xs" onChange={(e)=>
    setEmailId(e.target.value)
  } />
 
</label>
<label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">Password</span>
   
  </div>
  <input type="text" value={passWord} placeholder="Enter PassWord" className="input input-bordered w-full max-w-xs" onChange={(e)=>
    setPassWord(e.target.value)} />
 
</label>
<label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">firstName</span>
   
  </div>
  <input type="text" value={firstName} placeholder="Enter firstName" className="input input-bordered w-full max-w-xs" onChange={(e)=>
    setfirstName(e.target.value)} />
 
</label>
<label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">lastName</span>
   
  </div>
  <input type="text" value={lastName} placeholder="Enter LastName" className="input input-bordered w-full max-w-xs" onChange={(e)=>
    setlastName(e.target.value)} />
 
</label>
    </div>
    <p>{error}</p>
    <div className="card-actions justify-center m-2">
      <button className="btn btn-primary " onClick={handlelogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Signup