import React from 'react'
import Footer from './components/Footer'
import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

const professional_details = () => {
    return (
        <>
            <Header />
            <div id="iwhims-professional-details">
                <div className="iwhims-professional-banner">
                    <div className="iwhims-professional-container" />
                </div>
                <div className="iwhims-professional-banner1">
                    <div className="iwhims-professional-container1">
                        <div className="iwhims-professional-main-content">
                            <div className="iwhims-professional-content1">
                                <div className="iwhims-professional-image-left">
                                    <img src="/images/iwhims-image1.png" alt="" />
                                </div>
                                <div className="iwhims-professional-content-main">
                                    <h1>Vibha Finaviya</h1>
                                    <div className="iwhims-professional-content-flex">
                                        <div className="iwhims-svg">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <mask
                                                    id="mask0_779_652"
                                                    style={{ maskType: "alpha" }}
                                                    maskUnits="userSpaceOnUse"
                                                    x={0}
                                                    y={0}
                                                    width={24}
                                                    height={24}
                                                >
                                                    <rect width={24} height={24} fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_779_652)">
                                                    <path
                                                        d="M4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V8C2 7.45 2.19583 6.97917 2.5875 6.5875C2.97917 6.19583 3.45 6 4 6H8V4C8 3.45 8.19583 2.97917 8.5875 2.5875C8.97917 2.19583 9.45 2 10 2H14C14.55 2 15.0208 2.19583 15.4125 2.5875C15.8042 2.97917 16 3.45 16 4V6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4ZM10 6H14V4H10V6ZM6 8H4V19H6V8ZM16 19V8H8V19H16ZM18 8V19H20V8H18Z"
                                                        fill="#495D71"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="iwhims-paragraph234">
                                            <p>
                                                Research articles, case studies, clinical practice updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="iwhims-container-professional">
                                <div className="iwhims-professional-content-left">
                                    <div className="iwhims-professional-content-buttons">
                                        <div className="iwhims-button-group">
                                            <button type="submit">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <mask
                                                        id="mask0_585_235"
                                                        style={{ maskType: "alpha" }}
                                                        maskUnits="userSpaceOnUse"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={24}
                                                    >
                                                        <rect width={24} height={24} fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_585_235)">
                                                        <path
                                                            d="M6 14H14V12H6V14ZM6 11H18V9H6V11ZM6 8H18V6H6V8ZM2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z"
                                                            fill="#0A243F"
                                                        />
                                                    </g>
                                                </svg>
                                                <span>Chat</span>
                                            </button>
                                        </div>
                                        <div className="iwhims-button-group1">
                                            <button type="submit">
                                                <svg
                                                    width={21}
                                                    height={21}
                                                    viewBox="0 0 21 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.9 19.95C10.75 19.9833 10.6 20 10.45 20H10C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10V10.45C20 10.6 19.9833 10.75 19.95 10.9L18 10.3V10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18H10.3L10.9 19.95ZM18.525 20.5L14.25 16.225L13 20L10 10L20 13L16.225 14.25L20.5 18.525L18.525 20.5Z"
                                                        fill="#0A243F"
                                                    />
                                                </svg>
                                                <span>Follow</span>
                                            </button>
                                        </div>
                                        <div className="iwhims-button-group2">
                                            <button type="submit">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <mask
                                                        id="mask0_585_259"
                                                        style={{ maskType: "alpha" }}
                                                        maskUnits="userSpaceOnUse"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={24}
                                                    >
                                                        <rect width={24} height={24} fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_585_259)">
                                                        <path
                                                            d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z"
                                                            fill="#0A243F"
                                                        />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="iwhims-professional-banner2">
                    <div className="iwhims-professional-container2">
                        <div className="iwhims-professional-content-main-main">
                            <div className="iwhims-professional-content2">
                                <div className="iwhims-professional-main-content1">
                                    <div className="iwhims-professional-content-flex-main">
                                        <div className="iwhims-heading">
                                            <h2>Overview</h2>
                                        </div>
                                        <div className="iwhims-heading2">
                                            <h2>Review</h2>
                                        </div>
                                    </div>

                                    {/* first section ........... */}
                                    {/* <div>
                                        <div class="iwhims-professional-content-para">
                                            <p>Hi, I’m Vibha and I have over 7 years of experience in Analytics and Data Sciences. I
                                                am
                                                currently working as a Senior Data Scientist in a tech company based out USA. I
                                                enjoy
                                                sharing my experience and helping the community in my spare time. I craft end-to-end
                                                data products and provide actionable insights in my daily routines to help business
                                                improve day by day. Love to discuss anything related data science, job search,
                                                interview
                                                preparation.
                                            </p>
                                        </div>
                                        <div class="iwhims-professional-contain-main">
                                            <div class="iwhims-professional-content-main-flex2">
                                                <div class="iwhims-professional-flex-main-content0">
                                                    <p>Expertise</p>
                                                    <div class="iwhims-professional-contnet-button3">
                                                        <button type="submit">Data Sciences</button>
                                                    </div>
                                                </div>
                                                <div class="iwhims-professional-flex-main-content1">
                                                    <p>City</p>
                                                    <div class="iwhims-button">
                                                        <div class="iwhims-professional-contnet-button0">
                                                            <button type="submit">In</button>
                                                        </div>
                                                        <div class="iwhims-professional-contnet-button1">
                                                            <button type="submit">Delhi</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="iwhims-professional-flex-main-content2">
                                                    <p>Language</p>
                                                    <div class="iwhims-button">
                                                        <div class="iwhims-professional-contnet-button">
                                                            <button type="submit">Hindi</button>
                                                        </div>
                                                        <div class="iwhims-professional-contnet-button2">
                                                            <button type="submit">English</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="iwhims-professional-content-main123">
                                                <div class="iwhims-professional-second-card">
                                                    <div class="iwhims--para">
                                                        <h2>Experience</h2>
                                                    </div>
                                                    <div class="iwhims-professional-card-main">
                                                        <div class="iwhims-border-para">
                                                            <p>As a Data Science</p>
                                                        </div>
                                                        <div class="iwhims-profwsssional-button">
                                                            <button type="submit">7 Years</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="iwhims-professional-third-card">
                                                <h2>Achievements</h2>
                                                <div class="iwhims-professional-XYZ">
                                                    <div class="iwhims-professional-flex">
                                                        <div class="iwhims-professional-cartificate">
                                                            <div class="iwhims-professional-icons">
                                                                <img src="./images/edu.png" alt="" />
                                                            </div>
                                                            <div class="iwhims-professional">
                                                                <h2>XYZ Certificate</h2>
                                                                <p>See credentials</p>
                                                            </div>
                                                        </div>
                                                        <div class="iwhims-professional-dates">
                                                            <p>14 Jun, 2022</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="iwhims-professional-XYZ">
                                                    <div class="iwhims-professional-flex1">
                                                        <div class="iwhims-professional-cartificate">
                                                            <div class="iwhims-professional-icons">
                                                                <img src="./images/edu.png" alt="" />
                                                            </div>
                                                            <div class="iwhims-professional">
                                                                <h2>XYZ Certificate</h2>
                                                                <p>See credentials</p>
                                                            </div>
                                                        </div>
                                                        <div class="iwhims-professional-dates">
                                                            <p>14 Jun, 2022</p>
                                                        </div>


                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* first end section ............. */}


                                    {/* second section ............. */}
                                    <div>
                                        <div className="iwhims-dynamic-content">
                                            <div className="iwhims-review-heading2">
                                                <h2>People often say</h2>
                                            </div>
                                            <div className="iwhims-reviews-container-content">
                                                <div className="iwhims-review-content-main-para">
                                                    <div className="iwhims-review-icons-para-content">
                                                        <img src="/images/review-image.svg" alt="" />
                                                    </div>
                                                    <div className="iwhims-review-heading-para">
                                                        <h2>Wade Warren</h2>
                                                        <p>Practice</p>
                                                    </div>
                                                </div>
                                                <div className="iwhims-para">
                                                    <span>May 28, 2024</span>
                                                </div>
                                                <div className="iwhims-para2">
                                                    <p>
                                                        She had a positive approach, the conversation was more on
                                                        the side of how I should approach my problems and it really
                                                        helped me a lot.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="iwhims-reviews-container-content">
                                                <div className="iwhims-review-content-main-para">
                                                    <div className="iwhims-review-icons-para-content">
                                                        <img src="/images/review-image.svg" alt="" />
                                                    </div>
                                                    <div className="iwhims-review-heading-para">
                                                        <h2>Brooklyn Simmons</h2>
                                                        <p>Practice</p>
                                                    </div>
                                                </div>
                                                <div className="iwhims-para">
                                                    <span>May 28, 2024</span>
                                                </div>
                                                <div className="iwhims-para2">
                                                    <p>
                                                        Our chat was about motivation and some reality check. Please
                                                        do take a session.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="iwhims-reviews-container-content">
                                                <div className="iwhims-review-content-main-para">
                                                    <div className="iwhims-review-icons-para-content">
                                                        <img src="/images/review-image.svg" alt="" />
                                                    </div>
                                                    <div className="iwhims-review-heading-para">
                                                        <h2>Jerome Bell</h2>
                                                        <p>Practice</p>
                                                    </div>
                                                </div>
                                                <div className="iwhims-para">
                                                    <span>May 28, 2024</span>
                                                </div>
                                                <div className="iwhims-para3">
                                                    <p>
                                                        Our chat was about motivation and some reality check. Please
                                                        do take a session.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="iwhims-dynamic-icons">
                                            <div className="iwhims-synamic-icons-container">
                                                <div className="button-group">
                                                    <svg
                                                        width={10}
                                                        height={12}
                                                        viewBox="0 0 8 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.5 12L0.5 6L6.5 0L7.9 1.4L3.3 6L7.9 10.6L6.5 12Z"
                                                            fill="#0A243F"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="button-group1">
                                                    <svg
                                                        width={6}
                                                        height={12}
                                                        viewBox="0 0 6 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M5.226 12H3.594V4.231H0.925V3.058C2.455 3.024 3.509 2.174 3.764 0.984H5.226V12Z"
                                                            fill="#0A243F"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="button-group1">
                                                    <svg
                                                        width={8}
                                                        height={12}
                                                        viewBox="0 0 8 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.897 4.945L0.231 4.741C0.214 4.588 0.214 4.435 0.214 4.299C0.214 2.412 1.608 0.728999 4.022 0.728999C6.385 0.728999 7.745 2.276 7.745 4.112C7.745 5.557 6.929 6.713 5.671 7.512L3.495 8.906C2.866 9.314 2.305 9.773 2.152 10.453H7.813V12H0.095C0.129 10.198 0.843 8.821 2.713 7.614L4.549 6.424C5.586 5.761 6.062 4.979 6.062 4.129C6.062 3.126 5.382 2.191 3.988 2.191C2.543 2.191 1.863 3.194 1.863 4.452C1.863 4.605 1.88 4.775 1.897 4.945Z"
                                                            fill="#0A243F"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="button-group1">
                                                    <svg
                                                        width={9}
                                                        height={13}
                                                        viewBox="0 0 9 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.325 6.883L2.509 5.506L5.756 2.514H0.486V0.984H7.966V2.48L4.821 5.387C6.436 5.387 8.221 6.475 8.221 8.736C8.221 10.589 6.793 12.272 4.226 12.272C1.676 12.272 0.231 10.606 0.129 8.804L1.761 8.43C1.829 9.892 2.883 10.81 4.209 10.81C5.722 10.81 6.538 9.875 6.538 8.77C6.538 7.325 5.382 6.713 4.294 6.713C3.954 6.713 3.614 6.781 3.325 6.883Z"
                                                            fill="#0A243F"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="button-group1">
                                                    <svg
                                                        width={9}
                                                        height={12}
                                                        viewBox="0 0 9 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M0.095 9.518V7.597L4.821 0.984H7.116V7.971H9.003V9.518H7.116V12H5.501V9.518H0.095ZM5.501 7.971V2.582L1.625 7.971H5.501Z"
                                                            fill="#0A243F"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="button-group">
                                                    <svg
                                                        width={13}
                                                        height={4}
                                                        viewBox="0 0 13 4"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M0.69 1.912C0.69 1.249 1.2 0.722 1.863 0.722C2.526 0.722 3.053 1.249 3.053 1.912C3.053 2.575 2.526 3.085 1.863 3.085C1.2 3.085 0.69 2.575 0.69 1.912ZM5.43805 1.912C5.43805 1.249 5.94805 0.722 6.61105 0.722C7.27405 0.722 7.80105 1.249 7.80105 1.912C7.80105 2.575 7.27405 3.085 6.61105 3.085C5.94805 3.085 5.43805 2.575 5.43805 1.912ZM10.1861 1.912C10.1861 1.249 10.6961 0.722 11.3591 0.722C12.0221 0.722 12.5491 1.249 12.5491 1.912C12.5491 2.575 12.0221 3.085 11.3591 3.085C10.6961 3.085 10.1861 2.575 10.1861 1.912Z"
                                                            fill="#0A243F"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="button-group">
                                                    <svg
                                                        width={8}
                                                        height={12}
                                                        viewBox="0 0 8 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.5 -5.24537e-07L7.5 6L1.5 12L0.1 10.6L4.7 6L0.100001 1.4L1.5 -5.24537e-07Z"
                                                            fill="#0A243F"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* second end section .............. */}
                                </div>

                            </div>
                            <div className="iwhims-professional-cards-container">
                                <div className="iwhims-content-card-flex234">
                                    <div className="iwhims-professional-flex2">
                                        <div className="iwhims-professional-code">
                                            <h2>Community</h2>
                                            <div className="iwhims-professional-community">
                                                <div className="iwhims-professional-followers">
                                                    <div className="iwhims-icons-professional">
                                                        <svg
                                                            width={48}
                                                            height={48}
                                                            viewBox="0 0 48 48"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                                                                fill="#E2EBFC"
                                                            />
                                                            <mask
                                                                id="mask0_596_602"
                                                                style={{ maskType: "alpha" }}
                                                                maskUnits="userSpaceOnUse"
                                                                x={10}
                                                                y={10}
                                                                width={28}
                                                                height={28}
                                                            >
                                                                <rect
                                                                    x="10.6665"
                                                                    y="10.6667"
                                                                    width="26.6667"
                                                                    height="26.6667"
                                                                    fill="#0B56E4"
                                                                />
                                                            </mask>
                                                            <g mask="url(#mask0_596_602)">
                                                                <path
                                                                    d="M16.2222 35.1111C15.6111 35.1111 15.088 34.8935 14.6528 34.4583C14.2176 34.0231 14 33.5 14 32.8889V17.3333C14 16.7222 14.2176 16.1991 14.6528 15.7639C15.088 15.3287 15.6111 15.1111 16.2222 15.1111H17.3333V12.8889H19.5556V15.1111H28.4444V12.8889H30.6667V15.1111H31.7778C32.3889 15.1111 32.912 15.3287 33.3472 15.7639C33.7824 16.1991 34 16.7222 34 17.3333V22.5278C34 22.8426 33.8935 23.1065 33.6806 23.3194C33.4676 23.5324 33.2037 23.6389 32.8889 23.6389C32.5741 23.6389 32.3102 23.5324 32.0972 23.3194C31.8843 23.1065 31.7778 22.8426 31.7778 22.5278V21.7778H16.2222V32.8889H22.6667C22.9815 32.8889 23.2454 32.9954 23.4583 33.2083C23.6713 33.4213 23.7778 33.6852 23.7778 34C23.7778 34.3148 23.6713 34.5787 23.4583 34.7917C23.2454 35.0046 22.9815 35.1111 22.6667 35.1111H16.2222ZM30.6667 36.2222C29.1296 36.2222 27.8194 35.6806 26.7361 34.5972C25.6528 33.5139 25.1111 32.2037 25.1111 30.6667C25.1111 29.1296 25.6528 27.8194 26.7361 26.7361C27.8194 25.6528 29.1296 25.1111 30.6667 25.1111C32.2037 25.1111 33.5139 25.6528 34.5972 26.7361C35.6806 27.8194 36.2222 29.1296 36.2222 30.6667C36.2222 32.2037 35.6806 33.5139 34.5972 34.5972C33.5139 35.6806 32.2037 36.2222 30.6667 36.2222ZM32.5278 33.3056L33.3056 32.5278L31.2222 30.4444V27.3333H30.1111V30.8889L32.5278 33.3056Z"
                                                                    fill="#0B56E4"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="iwhims-followers-flex">
                                                        <h2>102K</h2>
                                                        <p>Followers</p>
                                                    </div>
                                                </div>
                                                <div className="iwhims-professional-followers">
                                                    <div className="iwhims-icons-professional">
                                                        <svg
                                                            width={48}
                                                            height={48}
                                                            viewBox="0 0 48 48"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                                                                fill="#E2EBFC"
                                                            />
                                                            <mask
                                                                id="mask0_596_602"
                                                                style={{ maskType: "alpha" }}
                                                                maskUnits="userSpaceOnUse"
                                                                x={10}
                                                                y={10}
                                                                width={28}
                                                                height={28}
                                                            >
                                                                <rect
                                                                    x="10.6665"
                                                                    y="10.6667"
                                                                    width="26.6667"
                                                                    height="26.6667"
                                                                    fill="#0B56E4"
                                                                />
                                                            </mask>
                                                            <g mask="url(#mask0_596_602)">
                                                                <path
                                                                    d="M16.2222 35.1111C15.6111 35.1111 15.088 34.8935 14.6528 34.4583C14.2176 34.0231 14 33.5 14 32.8889V17.3333C14 16.7222 14.2176 16.1991 14.6528 15.7639C15.088 15.3287 15.6111 15.1111 16.2222 15.1111H17.3333V12.8889H19.5556V15.1111H28.4444V12.8889H30.6667V15.1111H31.7778C32.3889 15.1111 32.912 15.3287 33.3472 15.7639C33.7824 16.1991 34 16.7222 34 17.3333V22.5278C34 22.8426 33.8935 23.1065 33.6806 23.3194C33.4676 23.5324 33.2037 23.6389 32.8889 23.6389C32.5741 23.6389 32.3102 23.5324 32.0972 23.3194C31.8843 23.1065 31.7778 22.8426 31.7778 22.5278V21.7778H16.2222V32.8889H22.6667C22.9815 32.8889 23.2454 32.9954 23.4583 33.2083C23.6713 33.4213 23.7778 33.6852 23.7778 34C23.7778 34.3148 23.6713 34.5787 23.4583 34.7917C23.2454 35.0046 22.9815 35.1111 22.6667 35.1111H16.2222ZM30.6667 36.2222C29.1296 36.2222 27.8194 35.6806 26.7361 34.5972C25.6528 33.5139 25.1111 32.2037 25.1111 30.6667C25.1111 29.1296 25.6528 27.8194 26.7361 26.7361C27.8194 25.6528 29.1296 25.1111 30.6667 25.1111C32.2037 25.1111 33.5139 25.6528 34.5972 26.7361C35.6806 27.8194 36.2222 29.1296 36.2222 30.6667C36.2222 32.2037 35.6806 33.5139 34.5972 34.5972C33.5139 35.6806 32.2037 36.2222 30.6667 36.2222ZM32.5278 33.3056L33.3056 32.5278L31.2222 30.4444V27.3333H30.1111V30.8889L32.5278 33.3056Z"
                                                                    fill="#0B56E4"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="iwhims-followers-flex">
                                                        <h2>502</h2>
                                                        <p>Following</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iwhims-professional-cards-2">
                                    <div className="iwhims-professional-cards-main">
                                        <div className="iwhims-professional-cards-content">
                                            <div className="iwhims-professional-caards-first-section">
                                                <h2>Available sessions</h2>
                                                <p>Sessions from the options based on your needs</p>
                                                <div className="iwhims-prodfessional-dates">
                                                    <div className="iwhims-profesional-right-card">
                                                        <span>Mon</span>
                                                        <p>03 Jun</p>
                                                    </div>
                                                    <div className="iwhims-profesional-right-card">
                                                        <span>Tue</span>
                                                        <p>04 Jun</p>
                                                    </div>
                                                    <div className="iwhims-profesional-right-card">
                                                        <span>Wed</span>
                                                        <p>05 Jun</p>
                                                    </div>
                                                    <div className="iwhims-profesional-right-card">
                                                        <span>Thu</span>
                                                        <p>06 Jun</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iwhims-professional-right-card-section2">
                                                <div className="iwhims-professional-icons-paara">
                                                    <h2>Available time slots</h2>
                                                    <div className="iwhims-professional-cardss">
                                                        <div className="iwhims-professional-icons-cards">
                                                            <div className="iwhims-scheduled-cards">
                                                                <p>04:20PM</p>
                                                            </div>
                                                            <div className="iwhims-scheduled-cards">
                                                                <p>04:20PM</p>
                                                            </div>
                                                            <div className="iwhims-scheduled-cards">
                                                                <p>04:20PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="iwhims-professional-icons-cards">
                                                            <div className="iwhims-scheduled-cards">
                                                                <p>04:20PM</p>
                                                            </div>
                                                            <div className="iwhims-scheduled-cards">
                                                                <p>04:20PM</p>
                                                            </div>
                                                            <div className="iwhims-scheduled-cards">
                                                                <p>04:20PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="button-group-iwhims-professional">
                                                            <button type="submit">Book a Appointment</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iwhims-professional-third-cards-last">
                                    <div className="iwhims-professional-third-last">
                                        <div className="iwhims-professional-social">
                                            <h2>Social Profile</h2>
                                        </div>
                                        <div className="iwhims-professional-icons-flex">
                                            <div className="iwhims-facebook">
                                                <img src="/images/facebook.svg" alt="" />
                                            </div>
                                            <div className="iwhims-facebook">
                                                <img src="/images/instagram.svg" alt="" />
                                            </div>
                                            <div className="iwhims-facebook">
                                                <img src="/images/TwitterLogo.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default professional_details
