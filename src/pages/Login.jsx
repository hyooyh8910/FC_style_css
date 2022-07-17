import React, { useRef } from 'react'

const Login = () => {
  const [loginInfo, setLoginInfo] = React.useState({
    userEmail: '',
    userPassword: '',
  })

  const emailRef = useRef(null)
  const pwRef = useRef(null)

  return (
    <>
      <div>
        <input
          className="form-input"
          name="userEmail"
          defaultValue={loginInfo.userEmail}
          ref={emailRef}
          required
        ></input>
      </div>
      <div>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="min. 8 char"
          maxLength="20"
          defaultValue={loginInfo.userPassword}
          ref={pwRef}
          required
        ></input>
      </div>
    </>
  )
}

export default Login
