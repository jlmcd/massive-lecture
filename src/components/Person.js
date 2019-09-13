import React, { useState } from 'react'
import axios from 'axios'

export default ({ id, phone, name, address, deleteFn }) => {
  const [edit, toggleEdit] = useState(false)
  const [newName, changeName] = useState(name)
  const [newAddress, changeAddress] = useState(address)
  const [newPhone, changePhone] = useState(phone)

  const saveData = () => {
    axios.put(`/api/class/${id}`, {
      name: newName,
      address: newAddress,
      phone: newPhone
    })
    toggleEdit(false)
  }

  return (
    <div className="person">
      {edit ? (
        <>
          <input
            className="content"
            onChange={e => changeName(e.target.value)}
            type="text"
            value={newName}
            placeholder="Name"
          />
          <input
            className="content"
            onChange={e => changeAddress(e.target.value)}
            type="text"
            value={newAddress}
            placeholder="Address"
          />
          <input
            className="content"
            onChange={e => changePhone(e.target.value)}
            type="tel"
            value={newPhone}
            placeholder="Phone"
          />
          <div className="buttons">
            <button onClick={() => deleteFn()}>Delete</button>
            <button onClick={() => saveData()}>Save</button>
          </div>
        </>
      ) : (
        <>
          <h1 className="content">{newName}</h1>
          <h2 className="content">{newAddress}</h2>
          <h2 className="content" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
            {newPhone}
          </h2>
          <div className="buttosans">
            <div className="placeholder"></div>
            <button onClick={() => toggleEdit(true)}>Edit</button>
          </div>
        </>
      )}
    </div>
  )
}
