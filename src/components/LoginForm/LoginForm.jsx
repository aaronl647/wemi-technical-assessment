import React, { useState } from 'react'
import "./LoginForm.css"

function LoginForm() {
  const [username, setUsername] = useState('')
  const [dateSelect, setDateSelect] = useState('')

  const handleSubmit = async (e) => {
    /*
      Async function will go here in preparation for the user to type in their username and date to acquire a token for login authentication
      The username and dateSelect states will be sent over to the userService for authentication to login to the app.
    */
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" onChange={e => { setUsername(e.target.value) }} value={username} placeholder="Username" />
        </div>

        <div className="form-group">
          <input placeholder="Date" className="ui-datepicker" type="date" onChange={e => { setDateSelect(e.target.value) }} value={dateSelect} />
        </div>
        <div className="form-group">
          <input value="Get Token" className="button" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
