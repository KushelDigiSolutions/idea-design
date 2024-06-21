import React from 'react'
import { useState } from 'react';

const filterform = () => {
    const [show ,setShow]=useState(false);
    const clickHandler=()=>{
        setShow(!show)
    }
  return (
   <>
     <div className="filter-keys">
            <div className="filter-keys-top">
                <div className="filter-keys-tophead">
                    <h3>Filter</h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_804_2141" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_804_2141)">
                            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#495D71" />
                        </g>
                    </svg>
                </div>
                <div className="filter-keys-bootom">
                    <div className="filter-keys-bootom-text">
                        <h3>Available ASAP</h3>
                        <p>Available within the next 14 days</p>
                    </div>
                    <div className="switch-round">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
            <form className='filter-form' action="">
                <div className="filter-form-section">
                    <div className="filter-form-labels">
                        <label htmlFor="year">Years of experience</label>
                    </div>

                    <select  id='year' placeholder="year">
                        <option value="0">year</option>
                        <option value="1">All</option>
                        <option value="">Below 1 year</option>
                        <option value="">1-2 years</option>
                        <option value="">3-5 years</option>
                        <option value="">5-8 years</option>
                        <option value="">5+ years</option>  
                    </select >
                    {/* <button onClick={clickHandler}> year
                    <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    {
                        show && (
                            <div className="drop-down-year">
                              <p>All</p>
                              <p>Below 1 year</p>
                              <p>3-5 years</p>
                              <p>5-8 years</p>
                              <p>5+ years</p>
                            </div>
                    )} */}
                    
                    
                </div>
                <div className="filter-form-section">
                    <div className="filter-form-labels">
                        <label htmlFor="country">Country</label>
                    </div>

                    <input type="text" id='country' name='country' placeholder='country' />
                </div>
                <div className="filter-form-section">
                    <div className="filter-form-labels">
                        <label htmlFor="gender">Gender</label>
                    </div>

                    <select  id='gender'>
                        <option value="0">gender</option>
                        <option value="1">Male</option>
                        <option value="">Female</option>
                        <option value="">Bigender</option>
                        <option value="">Non-conforming</option>
                        <option value="">Non Binary</option>
                        
                    </select >
                </div>
                <div className="filter-form-section">
                    <div className="filter-form-labels">
                        <label htmlFor="language">Language</label>
                    </div>

                    <input type="text" id='language' name='language' placeholder='language' />
                </div>
            </form>
        </div>
   </>
  )
}

export default filterform
