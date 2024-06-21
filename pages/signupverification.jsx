import React from 'react'
import Header22 from './components/Header22'
const signupverification = () => {
  return (
  <>
  <Header22 />
  <div className="sign-up-verify" id="sign-up-verify">
  <div className="sign-up-verify-container">
    <div className="sign-up-verify-main">
      <div className="sign-up-verify-xyyz">
        <div className="sign-up-verify-containt">
          <h1>Sign up</h1>
          <input type="email" id="email" placeholder="Email" />
          <div className="sign-up-verify-bttn">
            <button>Verify OTP</button>
          </div>
          <p>
            Didn't receive the verification otp ? <span>Resend OTP</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default signupverification
