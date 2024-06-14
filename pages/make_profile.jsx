import React from 'react'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";

const make_profile = () => {
    return (
        <>
            <Header />
            <div id="make_profile">
                <div className="details">
                    <div className="content">
                        <div className="right_section_make">
                            <div className='right_content'>
                                <div className='right_details'>
                                    <p className='para1'>STEP 1 of 4</p>
                                    <h1>Hello, Yogesh kumar!
                                        What’s your origin story?.</h1>
                                    <p className='para2'>Upload profile photo *</p>
                                    <div className='profile'>
                                        <div>
                                            <img src="./images/User Profile.png" alt="" />
                                        </div>
                                        <div className='profile_sec'>
                                            <p className='para1'>Select a file</p>
                                            <p>Make sure the file is below 2MB</p>
                                        </div>
                                    </div>
                                    <div className='profile2'>
                                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.95 13.55L12.6 7.9L11.175 6.475L6.95 10.7L4.85 8.6L3.425 10.025L6.95 13.55ZM8 20C5.68333 19.4167 3.77083 18.0875 2.2625 16.0125C0.754167 13.9375 0 11.6333 0 9.1V3L8 0L16 3V9.1C16 11.6333 15.2458 13.9375 13.7375 16.0125C12.2292 18.0875 10.3167 19.4167 8 20ZM8 17.9C9.73333 17.35 11.1667 16.25 12.3 14.6C13.4333 12.95 14 11.1167 14 9.1V4.375L8 2.125L2 4.375V9.1C2 11.1167 2.56667 12.95 3.7 14.6C4.83333 16.25 6.26667 17.35 8 17.9Z" fill="#0B48B6" />
                                        </svg>
                                        <p>With a clearer picture, your application has
                                            a higher chance of being successful.</p>

                                    </div>
                                    <form>
                                        <fieldset>
                                           
                                            <div className="mb-3">
                                                <label htmlFor="disabledTextInput" className="form-label">
                                                What gender do you identify as?*
                                                </label>
                                                <select id="disabledTextInput" className="form-select">
                                                    <option>Select one</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="disabledSelect" className="form-label">
                                                Which is country do you live?*
                                                </label>
                                                <select id="disabledSelect" className="form-select">
                                                    <option>Select one</option>
                                                </select>
                                            </div>
                                            
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </fieldset>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="left_section_make">
                            <div className='left_section'>
                                <h2>Your next chapter, <span>made possible </span>by Mentoring</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default make_profile
