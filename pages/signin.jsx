import React from 'react'
import Header22 from './components/Header22'
import Link from 'next/link'

const signin = () => {
  return (
  <>
  <Header22 />
  <div className="sigin" id="Sign-in-containt">
  <div className="sigin_container">
    <div className="sigin-main">
      <div className="input-collection">
        <div className="sub-input-coolection">
          <h2>Sign in</h2>
          <div className="top-1sec">
            <div className="signup-with">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={32} height={32} fill="url(#pattern0_212_33)" />
                <defs>
                  <pattern
                    id="pattern0_212_33"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_212_33"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_212_33"
                    width={90}
                    height={90}
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <p>Continue with Google</p>
            </div>
            <div className="signup-with">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={32} height={32} fill="url(#pattern0_212_41)" />
                <defs>
                  <pattern
                    id="pattern0_212_41"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_212_41"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_212_41"
                    width={90}
                    height={90}
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <p>Continue with Facebook</p>
            </div>
            <div className="or-option">
              <hr />
              <h2>or</h2>
              <hr />
            </div>
          </div>
          <div className="top-2sec">
            <div className="user-detail-input">
              <input type="text" id="email" placeholder="Email" />
            </div>
            <div className="user-detail-input">
              <input type="text" id="password" placeholder="Password" />
              <svg
                width={22}
                height={16}
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 12.6924C12.25 12.6924 13.3125 12.2549 14.1875 11.3799C15.0625 10.5049 15.5 9.44238 15.5 8.19238C15.5 6.94238 15.0625 5.87988 14.1875 5.00488C13.3125 4.12988 12.25 3.69238 11 3.69238C9.75 3.69238 8.6875 4.12988 7.8125 5.00488C6.9375 5.87988 6.5 6.94238 6.5 8.19238C6.5 9.44238 6.9375 10.5049 7.8125 11.3799C8.6875 12.2549 9.75 12.6924 11 12.6924ZM11 10.8924C10.25 10.8924 9.6125 10.6299 9.0875 10.1049C8.5625 9.57988 8.3 8.94238 8.3 8.19238C8.3 7.44238 8.5625 6.80488 9.0875 6.27988C9.6125 5.75488 10.25 5.49238 11 5.49238C11.75 5.49238 12.3875 5.75488 12.9125 6.27988C13.4375 6.80488 13.7 7.44238 13.7 8.19238C13.7 8.94238 13.4375 9.57988 12.9125 10.1049C12.3875 10.6299 11.75 10.8924 11 10.8924ZM11 15.6924C8.56667 15.6924 6.35 15.0132 4.35 13.6549C2.35 12.2965 0.9 10.4757 0 8.19238C0.9 5.90905 2.35 4.08822 4.35 2.72988C6.35 1.37155 8.56667 0.692383 11 0.692383C13.4333 0.692383 15.65 1.37155 17.65 2.72988C19.65 4.08822 21.1 5.90905 22 8.19238C21.1 10.4757 19.65 12.2965 17.65 13.6549C15.65 15.0132 13.4333 15.6924 11 15.6924ZM11 13.6924C12.8833 13.6924 14.6125 13.1965 16.1875 12.2049C17.7625 11.2132 18.9667 9.87572 19.8 8.19238C18.9667 6.50905 17.7625 5.17155 16.1875 4.17988C14.6125 3.18822 12.8833 2.69238 11 2.69238C9.11667 2.69238 7.3875 3.18822 5.8125 4.17988C4.2375 5.17155 3.03333 6.50905 2.2 8.19238C3.03333 9.87572 4.2375 11.2132 5.8125 12.2049C7.3875 13.1965 9.11667 13.6924 11 13.6924Z"
                  fill="#909CA8"
                />
              </svg>
            </div>
            <div className="forget-pasword">
              <h2>
              <Link href="./forgotpassword">Forgot your password? </Link> 
              </h2>
            </div>
          </div>
          <div className="top-2sec">
            <div className="bg-bootom-change">
              <h2>Sign in</h2>
            </div>
            <div className="create-acount">
              <h2>
                <span>or </span>
                <Link href="./signup">
             Create Account </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default signin
