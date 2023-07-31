import React from "react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"


export default function UsersTable() {
    
    const [data, setData] = useState([]) 
    useEffect(() => {
       axios.get('http://localhost:3031/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    
    return (
      <div>
        <table className="table p-6 bg-white shadow-md rounded-xl min-w-screen">
          <thead>
            {" "}
            <th className="p-6">View all users</th>
          </thead>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              return (
                <tr key={i} className="p-3 ">
                  <td className="p-6">{d.id}</td>
                  <td className="p-6">{d.username}</td>
                  <td className="p-6">{d.email}</td>
                  <td className="p-6">{d.gender}</td>
                  <td className="p-6">{d.age}</td>
                  <td className="p-6">{d.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}