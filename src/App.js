import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import Person from './components/Person'
import AddPerson from './components/AddPerson'

function App() {
  const [classList, updateClassList] = useState([])
  useEffect(() => {
    axios.get('/api/class').then(res => updateClassList(res.data))
  }, [])

  const deletePerson = id => {
    axios.delete(`/api/class/${id}`)
    const newList = [...classList]
    const index = newList.findIndex(el => el.id === id)
    newList.splice(index, 1)
    updateClassList(newList)
  }

  const addPerson = (newPerson) => {
    axios.post('/api/class', newPerson).then(res => {
      updateClassList([...classList, res.data[0]])
    })
  }

  return (
    <div className="App">
      <h1>Class List</h1>
      {classList.map(person => (
        <Person
          key={person.id}
          id={person.id}
          name={person.name}
          address={person.address}
          phone={person.phone}
          deleteFn={() => deletePerson(person.id)}
        />
      ))}
      <AddPerson addFn={addPerson} />
    </div>
  )
}

export default App
