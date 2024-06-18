import React from 'react'

const changesbg = () => {
    return (
        <>
            <div className="change-bg">
                <div className="change-bg-container">
                    <div className="change-bg-main">

                        <div className="change-bg-head">
                            <p>Background photo</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_804_2141" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_804_2141)">
                                    <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#495D71" />
                                </g>
                            </svg>
                        </div>
                        <div className="change-bg-mid-black">
                            <img src="./images/banner.png" alt="" />
                        </div>
                        <div className="change-bg-booto-btn">
                            <div className="chanfe-bg-left">
                                <p>Delete photo</p>
                            </div>
                            <div className="chanfe-bg-right-btn">
                                <button className="chanfe-bg-right-btn1">Change photo</button>
                                <button className="chanfe-bg-right-btn2">Apply</button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default changesbg
