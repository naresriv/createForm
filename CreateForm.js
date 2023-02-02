import React, { useState } from 'react'
import UseArray from './UseArray';

const UseStaeObject = () => {
  const [name, setName] = useState({ FirstName: "", LastName: "", address: "" });
  const [data, setData] = useState([])

  const AddDetails = (e) => {
    e.preventDefault()
    setData((prev) => [...prev, { name }])
    e.target.reset();
  }

  return (
    <div>
      <div style={{ background: "#5a5a5a", padding: "3rem", color:"#ffff", fontWeight:"400" }}>
        <input type="text" value={name.FirstName} onChange={(e) => setName(e.target.value )} placeholder="fisrt name" />
        <input type="text" value={name.LastName} onChange={(e) => setName( e.target.value )} placeholder="last name" />
        <input type="textr" value={name.address} onChange={(e) => setName( e.target.value )} placeholder="address" />
        <button onClick={AddDetails}> Add Details </button>

        <div>
          {data.map((item) => {
            return (
              <div>
                <p>
                  {item.name.FirstName}
                  <span style={{ marginLeft: "3rem" }}>{item.name.LastName}</span>
                  <span style={{ marginLeft: "3rem" }}>{item.name.address}</span>
                  <span style={{ marginLeft: "3rem", cursor:"pointer" }}>Update</span>
                  <span style={{ marginLeft: "3rem", cursor:"pointer" }}>Delete</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
</div
