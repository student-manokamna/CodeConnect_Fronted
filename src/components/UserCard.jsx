import React from 'react'

const UserCard = ({user}) => {
    const {firstName,lastName,age,gender,about}=user;
    console.log(user) 
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
    <figure>
      <img
        src={"https://th.bing.com/th?id=OIP.9vm7eDbnZS6Yy4ETUfEBAgHaGw&w=261&h=238&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName +" "+ lastName}</h2>
      {age&&gender&&<p>{age +  " "+ gender}</p>}
      <p>{about}</p>
      <div className="card-actions justify-center my-4">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Intersted</button>
      </div>
    </div>
  </div>
  )
}

export default UserCard