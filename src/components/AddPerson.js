import React, { useState } from 'react'

export default props => {
  const [name, changeName] = useState(props.name)
  const [address, changeAddress] = useState(props.address)
  const [phone, changePhone] = useState(props.phone)

  const addPerson = () => {
    props.addFn({ name, address, phone })
    changeName('')
    changeAddress('')
    changePhone('')
  }

  return (
    <div className="person">
      <input
        className="content"
        onChange={e => changeName(e.target.value)}
        type="text"
        value={name}
        placeholder="Name"
      />
      <input
        className="content"
        onChange={e => changeAddress(e.target.value)}
        type="text"
        value={address}
        placeholder="Address"
      />
      <input
        className="content"
        onChange={e => changePhone(e.target.value)}
        type="tel"
        value={phone}
        placeholder="Phone"
      />
      <div className="buttons">
        <button onClick={() => addPerson()}>
          Add
        </button>
      </div>
    </div>
  )
}
