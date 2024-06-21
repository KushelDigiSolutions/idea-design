import React from 'react'
import Header22 from './components/Header22'

const forgotpassword = () => {
  return (
  <>
  <Header22/>
  <div className="forget-pasword" id="forget-pasword">
  <div className="forget-pasword-container">
    <div className="forget-pasword-main">
      <div className="forgot-pass-xyyz">
        <div className="forget-pasword-containt">
          <h1>Forgot your password?</h1>
          <p>
            Enter the email address associated with your account and we’ll send
            you a link to reset your password.
          </p>
          <input type="email" id="email" placeholder="Email" />
          <div className="forgot-bttn">
            <button>Send password reset instructions</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default forgotpassword
