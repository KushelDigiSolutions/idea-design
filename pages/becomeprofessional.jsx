import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
const becomeprofessional = () => {
    return (

        <>
        <Header />
            <div id="professional">
                <div className="proffesional-container">
                    <div className="professsional-main">
                        <div className="profeesional-search">
                            <input type="text" placeholder="Search for any help" />
                            <svg
                                width={18}
                                height={19}
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.6 18.8974L10.3 12.5974C9.8 12.9974 9.225 13.3141 8.575 13.5474C7.925 13.7808 7.23333 13.8974 6.5 13.8974C4.68333 13.8974 3.14583 13.2683 1.8875 12.0099C0.629167 10.7516 0 9.2141 0 7.39743C0 5.58076 0.629167 4.04326 1.8875 2.78493C3.14583 1.5266 4.68333 0.89743 6.5 0.89743C8.31667 0.89743 9.85417 1.5266 11.1125 2.78493C12.3708 4.04326 13 5.58076 13 7.39743C13 8.13076 12.8833 8.82243 12.65 9.47243C12.4167 10.1224 12.1 10.6974 11.7 11.1974L18 17.4974L16.6 18.8974ZM6.5 11.8974C7.75 11.8974 8.8125 11.4599 9.6875 10.5849C10.5625 9.70993 11 8.64743 11 7.39743C11 6.14743 10.5625 5.08493 9.6875 4.20993C8.8125 3.33493 7.75 2.89743 6.5 2.89743C5.25 2.89743 4.1875 3.33493 3.3125 4.20993C2.4375 5.08493 2 6.14743 2 7.39743C2 8.64743 2.4375 9.70993 3.3125 10.5849C4.1875 11.4599 5.25 11.8974 6.5 11.8974Z"
                                    fill="#909CA8"
                                />
                            </svg>
                        </div>
                        <div className="profeesional-filter">
                            <button>
                                <svg
                                    width={20}
                                    height={18}
                                    viewBox="0 0 20 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.75 17.1474C14.7 17.1474 13.8125 16.7849 13.0875 16.0599C12.3625 15.3349 12 14.4474 12 13.3974C12 12.3474 12.3625 11.4599 13.0875 10.7349C13.8125 10.0099 14.7 9.64743 15.75 9.64743C16.8 9.64743 17.6875 10.0099 18.4125 10.7349C19.1375 11.4599 19.5 12.3474 19.5 13.3974C19.5 14.4474 19.1375 15.3349 18.4125 16.0599C17.6875 16.7849 16.8 17.1474 15.75 17.1474ZM15.75 15.1474C16.2333 15.1474 16.6458 14.9766 16.9875 14.6349C17.3292 14.2933 17.5 13.8808 17.5 13.3974C17.5 12.9141 17.3292 12.5016 16.9875 12.1599C16.6458 11.8183 16.2333 11.6474 15.75 11.6474C15.2667 11.6474 14.8542 11.8183 14.5125 12.1599C14.1708 12.5016 14 12.9141 14 13.3974C14 13.8808 14.1708 14.2933 14.5125 14.6349C14.8542 14.9766 15.2667 15.1474 15.75 15.1474ZM2 14.3974V12.3974H10V14.3974H2ZM4.25 8.14743C3.2 8.14743 2.3125 7.78493 1.5875 7.05993C0.8625 6.33493 0.5 5.44743 0.5 4.39743C0.5 3.34743 0.8625 2.45993 1.5875 1.73493C2.3125 1.00993 3.2 0.64743 4.25 0.64743C5.3 0.64743 6.1875 1.00993 6.9125 1.73493C7.6375 2.45993 8 3.34743 8 4.39743C8 5.44743 7.6375 6.33493 6.9125 7.05993C6.1875 7.78493 5.3 8.14743 4.25 8.14743ZM4.25 6.14743C4.73333 6.14743 5.14583 5.9766 5.4875 5.63493C5.82917 5.29326 6 4.88076 6 4.39743C6 3.9141 5.82917 3.5016 5.4875 3.15993C5.14583 2.81826 4.73333 2.64743 4.25 2.64743C3.76667 2.64743 3.35417 2.81826 3.0125 3.15993C2.67083 3.5016 2.5 3.9141 2.5 4.39743C2.5 4.88076 2.67083 5.29326 3.0125 5.63493C3.35417 5.9766 3.76667 6.14743 4.25 6.14743ZM10 5.39743V3.39743H18V5.39743H10Z"
                                        fill="#0A243F"
                                    />
                                </svg>
                                <span>Filters</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="professional-first">
                <div className="proffesional-first-container">
                    <div className="professsional-first-main">
                        <div className="professsional-first-padding">
                            <div className="profeesional-first-card">
                                <img src="./images/law1.png" alt="" />
                                <p>Law</p>
                            </div>
                        </div>
                        <div className="professsional-first-padding">
                            <div className="profeesional-first-card">
                                <img src="./images/doctor1.png" alt="" />
                                <p>Law</p>
                            </div>
                        </div>
                        <div className="professsional-first-padding">
                            <div className="profeesional-first-card">
                                <img src="./images/education1.png" alt="" />
                                <p>Law</p>
                            </div>
                        </div>
                        <div className="professsional-first-padding">
                            <div className="profeesional-first-card">
                                <img src="./images/architect1.png" alt="" />
                                <p>Law</p>
                            </div>
                        </div>
                        <div className="professsional-first-padding">
                            <div className="profeesional-first-card">
                                <img src="./images/law1.png" alt="" />
                                <p>Law</p>
                            </div>
                        </div>
                        <div className="professsional-first-padding">
                            <div className="profeesional-first-card">
                                <img src="./images/law1.png" alt="" />
                                <p>Law</p>
                            </div>
                        </div>
                        <div className="professsional-first-padding">
                            <div className="profeesional-first-card">
                                <img src="./images/law1.png" alt="" />
                                <p>Law</p>
                            </div>
                        </div>
                        <div className="professsional-first-padding">
                            <div className="profeesional-first-card">
                                <img src="./images/law1.png" alt="" />
                                <p>Law</p>
                            </div>
                        </div>
                        <div className="professsional-first-padding">
                            <div className="profeesional-first-card">
                                <img src="./images/law1.png" alt="" />
                                <p>Law</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="professional-second">
                <div className="proffesional-second-container">
                    <div className="professsional-second-main">
                        <div className="second-profeessional-card">
                            <div className="second-profesional-img">
                                <img src="./images/profesional-doctor.png" alt="" />
                            </div>
                            <div className="professional-second-bottom">
                                <div className="head-profesional-second">
                                    <h2>Brooklyn Simmons</h2>
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.0386 18.0457L7.77191 19.2176L6.30947 17.1266L3.75785 17.1109L3.43467 14.5797L1.18263 13.38L2.07274 10.9886L0.636196 8.87975L2.53569 7.17593L2.24373 4.64102L4.71745 4.0151L5.63697 1.63487L8.11822 2.23024L10.0386 0.549973L11.9589 2.23024L14.4402 1.63487L15.3597 4.0151L17.8334 4.64102L17.5414 7.17593L19.4409 8.87975L18.0044 10.9886L18.8945 13.38L16.6425 14.5797L16.3193 17.1109L13.7677 17.1266L12.3052 19.2176L10.0386 18.0457Z"
                                            fill="#0B48B6"
                                        />
                                        <ellipse
                                            cx="10.038"
                                            cy="10.0214"
                                            rx="6.68571"
                                            ry="6.68571"
                                            fill="#0B56E4"
                                        />
                                        <path
                                            d="M12.4378 7.76271L13.2107 8.56535L8.95977 12.6589L6.85889 10.558L7.64681 9.77007L8.97442 11.0976L12.4378 7.76271Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div className="description-second-profeessional">
                                    <svg
                                        width={21}
                                        height={19}
                                        viewBox="0 0 21 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.66675 19C2.11675 19 1.64591 18.8042 1.25425 18.4125C0.862581 18.0208 0.666748 17.55 0.666748 17V6C0.666748 5.45 0.862581 4.97917 1.25425 4.5875C1.64591 4.19583 2.11675 4 2.66675 4H6.66675V2C6.66675 1.45 6.86258 0.979167 7.25425 0.5875C7.64592 0.195833 8.11675 0 8.66675 0H12.6667C13.2167 0 13.6876 0.195833 14.0792 0.5875C14.4709 0.979167 14.6667 1.45 14.6667 2V4H18.6667C19.2167 4 19.6876 4.19583 20.0792 4.5875C20.4709 4.97917 20.6667 5.45 20.6667 6V17C20.6667 17.55 20.4709 18.0208 20.0792 18.4125C19.6876 18.8042 19.2167 19 18.6667 19H2.66675ZM8.66675 4H12.6667V2H8.66675V4ZM4.66675 6H2.66675V17H4.66675V6ZM14.6667 17V6H6.66675V17H14.6667ZM16.6667 6V17H18.6667V6H16.6667Z"
                                            fill="#0A243F"
                                        />
                                    </svg>
                                    <div className="description-left-profesional">
                                        <h2>
                                            Research articles, case studies, clinical practice updates.
                                        </h2>
                                        <p>
                                            <svg
                                                width={15}
                                                height={15}
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.21354 0.972581C7.39298 0.5875 7.94052 0.587499 8.11996 0.972579L9.82081 4.62258C9.89368 4.77895 10.042 4.88671 10.2132 4.90768L14.2102 5.39738C14.6319 5.44904 14.8011 5.96978 14.4903 6.25944L11.5445 9.00496C11.4183 9.12257 11.3617 9.29693 11.3946 9.46626L12.164 13.4189C12.2452 13.8359 11.8022 14.1578 11.4307 13.9517L7.90927 11.9985C7.75841 11.9148 7.57508 11.9148 7.42423 11.9985L3.90279 13.9517C3.53127 14.1578 3.08831 13.8359 3.16948 13.4189L3.93888 9.46626C3.97184 9.29693 3.91519 9.12257 3.78899 9.00496L0.843225 6.25944C0.532443 5.96978 0.701639 5.44904 1.12332 5.39738L5.12028 4.90768C5.2915 4.88671 5.43982 4.77895 5.51268 4.62258L7.21354 0.972581Z"
                                                    fill="#FFC200"
                                                />
                                            </svg>
                                            <span>New</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="second-profesional-bg-bootom">
                                    <div className="bg-bottom-left">
                                        <p>Experience</p>
                                        <h3>8 years</h3>
                                    </div>
                                    <div className="bg-bootom-right">
                                        <h3>(28)</h3>
                                        <p>reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="second-profeessional-card">
                            <div className="second-profesional-img">
                                <img src="./images/profesional-doctor.png" alt="" />
                            </div>
                            <div className="professional-second-bottom">
                                <div className="head-profesional-second">
                                    <h2>Brooklyn Simmons</h2>
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.0386 18.0457L7.77191 19.2176L6.30947 17.1266L3.75785 17.1109L3.43467 14.5797L1.18263 13.38L2.07274 10.9886L0.636196 8.87975L2.53569 7.17593L2.24373 4.64102L4.71745 4.0151L5.63697 1.63487L8.11822 2.23024L10.0386 0.549973L11.9589 2.23024L14.4402 1.63487L15.3597 4.0151L17.8334 4.64102L17.5414 7.17593L19.4409 8.87975L18.0044 10.9886L18.8945 13.38L16.6425 14.5797L16.3193 17.1109L13.7677 17.1266L12.3052 19.2176L10.0386 18.0457Z"
                                            fill="#0B48B6"
                                        />
                                        <ellipse
                                            cx="10.038"
                                            cy="10.0214"
                                            rx="6.68571"
                                            ry="6.68571"
                                            fill="#0B56E4"
                                        />
                                        <path
                                            d="M12.4378 7.76271L13.2107 8.56535L8.95977 12.6589L6.85889 10.558L7.64681 9.77007L8.97442 11.0976L12.4378 7.76271Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div className="description-second-profeessional">
                                    <svg
                                        width={21}
                                        height={19}
                                        viewBox="0 0 21 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.66675 19C2.11675 19 1.64591 18.8042 1.25425 18.4125C0.862581 18.0208 0.666748 17.55 0.666748 17V6C0.666748 5.45 0.862581 4.97917 1.25425 4.5875C1.64591 4.19583 2.11675 4 2.66675 4H6.66675V2C6.66675 1.45 6.86258 0.979167 7.25425 0.5875C7.64592 0.195833 8.11675 0 8.66675 0H12.6667C13.2167 0 13.6876 0.195833 14.0792 0.5875C14.4709 0.979167 14.6667 1.45 14.6667 2V4H18.6667C19.2167 4 19.6876 4.19583 20.0792 4.5875C20.4709 4.97917 20.6667 5.45 20.6667 6V17C20.6667 17.55 20.4709 18.0208 20.0792 18.4125C19.6876 18.8042 19.2167 19 18.6667 19H2.66675ZM8.66675 4H12.6667V2H8.66675V4ZM4.66675 6H2.66675V17H4.66675V6ZM14.6667 17V6H6.66675V17H14.6667ZM16.6667 6V17H18.6667V6H16.6667Z"
                                            fill="#0A243F"
                                        />
                                    </svg>
                                    <div className="description-left-profesional">
                                        <h2>
                                            Research articles, case studies, clinical practice updates.
                                        </h2>
                                        <p>
                                            <svg
                                                width={15}
                                                height={15}
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.21354 0.972581C7.39298 0.5875 7.94052 0.587499 8.11996 0.972579L9.82081 4.62258C9.89368 4.77895 10.042 4.88671 10.2132 4.90768L14.2102 5.39738C14.6319 5.44904 14.8011 5.96978 14.4903 6.25944L11.5445 9.00496C11.4183 9.12257 11.3617 9.29693 11.3946 9.46626L12.164 13.4189C12.2452 13.8359 11.8022 14.1578 11.4307 13.9517L7.90927 11.9985C7.75841 11.9148 7.57508 11.9148 7.42423 11.9985L3.90279 13.9517C3.53127 14.1578 3.08831 13.8359 3.16948 13.4189L3.93888 9.46626C3.97184 9.29693 3.91519 9.12257 3.78899 9.00496L0.843225 6.25944C0.532443 5.96978 0.701639 5.44904 1.12332 5.39738L5.12028 4.90768C5.2915 4.88671 5.43982 4.77895 5.51268 4.62258L7.21354 0.972581Z"
                                                    fill="#FFC200"
                                                />
                                            </svg>
                                            <span>New</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="second-profesional-bg-bootom">
                                    <div className="bg-bottom-left">
                                        <p>Experience</p>
                                        <h3>8 years</h3>
                                    </div>
                                    <div className="bg-bootom-right">
                                        <h3>(28)</h3>
                                        <p>reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="second-profeessional-card">
                            <div className="second-profesional-img">
                                <img src="./images/profesional-doctor.png" alt="" />
                            </div>
                            <div className="professional-second-bottom">
                                <div className="head-profesional-second">
                                    <h2>Brooklyn Simmons</h2>
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.0386 18.0457L7.77191 19.2176L6.30947 17.1266L3.75785 17.1109L3.43467 14.5797L1.18263 13.38L2.07274 10.9886L0.636196 8.87975L2.53569 7.17593L2.24373 4.64102L4.71745 4.0151L5.63697 1.63487L8.11822 2.23024L10.0386 0.549973L11.9589 2.23024L14.4402 1.63487L15.3597 4.0151L17.8334 4.64102L17.5414 7.17593L19.4409 8.87975L18.0044 10.9886L18.8945 13.38L16.6425 14.5797L16.3193 17.1109L13.7677 17.1266L12.3052 19.2176L10.0386 18.0457Z"
                                            fill="#0B48B6"
                                        />
                                        <ellipse
                                            cx="10.038"
                                            cy="10.0214"
                                            rx="6.68571"
                                            ry="6.68571"
                                            fill="#0B56E4"
                                        />
                                        <path
                                            d="M12.4378 7.76271L13.2107 8.56535L8.95977 12.6589L6.85889 10.558L7.64681 9.77007L8.97442 11.0976L12.4378 7.76271Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div className="description-second-profeessional">
                                    <svg
                                        width={21}
                                        height={19}
                                        viewBox="0 0 21 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.66675 19C2.11675 19 1.64591 18.8042 1.25425 18.4125C0.862581 18.0208 0.666748 17.55 0.666748 17V6C0.666748 5.45 0.862581 4.97917 1.25425 4.5875C1.64591 4.19583 2.11675 4 2.66675 4H6.66675V2C6.66675 1.45 6.86258 0.979167 7.25425 0.5875C7.64592 0.195833 8.11675 0 8.66675 0H12.6667C13.2167 0 13.6876 0.195833 14.0792 0.5875C14.4709 0.979167 14.6667 1.45 14.6667 2V4H18.6667C19.2167 4 19.6876 4.19583 20.0792 4.5875C20.4709 4.97917 20.6667 5.45 20.6667 6V17C20.6667 17.55 20.4709 18.0208 20.0792 18.4125C19.6876 18.8042 19.2167 19 18.6667 19H2.66675ZM8.66675 4H12.6667V2H8.66675V4ZM4.66675 6H2.66675V17H4.66675V6ZM14.6667 17V6H6.66675V17H14.6667ZM16.6667 6V17H18.6667V6H16.6667Z"
                                            fill="#0A243F"
                                        />
                                    </svg>
                                    <div className="description-left-profesional">
                                        <h2>
                                            Research articles, case studies, clinical practice updates.
                                        </h2>
                                        <p>
                                            <svg
                                                width={15}
                                                height={15}
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.21354 0.972581C7.39298 0.5875 7.94052 0.587499 8.11996 0.972579L9.82081 4.62258C9.89368 4.77895 10.042 4.88671 10.2132 4.90768L14.2102 5.39738C14.6319 5.44904 14.8011 5.96978 14.4903 6.25944L11.5445 9.00496C11.4183 9.12257 11.3617 9.29693 11.3946 9.46626L12.164 13.4189C12.2452 13.8359 11.8022 14.1578 11.4307 13.9517L7.90927 11.9985C7.75841 11.9148 7.57508 11.9148 7.42423 11.9985L3.90279 13.9517C3.53127 14.1578 3.08831 13.8359 3.16948 13.4189L3.93888 9.46626C3.97184 9.29693 3.91519 9.12257 3.78899 9.00496L0.843225 6.25944C0.532443 5.96978 0.701639 5.44904 1.12332 5.39738L5.12028 4.90768C5.2915 4.88671 5.43982 4.77895 5.51268 4.62258L7.21354 0.972581Z"
                                                    fill="#FFC200"
                                                />
                                            </svg>
                                            <span>New</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="second-profesional-bg-bootom">
                                    <div className="bg-bottom-left">
                                        <p>Experience</p>
                                        <h3>8 years</h3>
                                    </div>
                                    <div className="bg-bootom-right">
                                        <h3>(28)</h3>
                                        <p>reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="professional-third">
                <div className="proffesional-third-container">
                    <div className="professsional-third-main">
                        <div className="salah-content-main professional-four">
                            <div className="salah-slider-images  profesional0imges">
                                <img src="./images/descover.png" alt="" />
                            </div>
                            <div className="salah-all-content proffesionL-PADDING">
                                <div className="salah-content-main-head">
                                    <h2>Vibha Finaviya CA</h2>
                                </div>
                                <div className="salah-content-flex">
                                    <div className="salah-slider-icon">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_205_70"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={2}
                                                y={2}
                                                width={24}
                                                height={24}
                                            >
                                                <rect x={2} y={2} width={24} height={24} fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_205_70)">
                                                <path
                                                    d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                                                    fill="#0A243F"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="salah-slider-para">
                                        <p>
                                            Research articles, case studies, clinical practice updates.
                                        </p>
                                        <div className="salah-slider-flex">
                                            <div className="salah-slider-star-icon">
                                                <svg
                                                    width={14}
                                                    height={15}
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                                        fill="#FFC200"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="salah-slider-para2">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="salah-slider-flex-main">
                                    <div className="salah-expirience">
                                        <div className="salah-slider-flex-1">
                                            <p>Experience</p>
                                        </div>
                                        <div className="salah-slider-flex-2">
                                            <p>8 years</p>
                                        </div>
                                    </div>
                                    <div className="salah-reviews">
                                        <div className="salah-slider-main-1">
                                            <p>(28)</p>
                                        </div>
                                        <div className="salah-28years">
                                            <p>reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="salah-content-main professional-four">
                            <div className="salah-slider-images  profesional0imges">
                                <img src="./images/descover.png" alt="" />
                            </div>
                            <div className="salah-all-content proffesionL-PADDING">
                                <div className="salah-content-main-head">
                                    <h2>Vibha Finaviya CA</h2>
                                </div>
                                <div className="salah-content-flex">
                                    <div className="salah-slider-icon">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_205_70"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={2}
                                                y={2}
                                                width={24}
                                                height={24}
                                            >
                                                <rect x={2} y={2} width={24} height={24} fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_205_70)">
                                                <path
                                                    d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                                                    fill="#0A243F"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="salah-slider-para">
                                        <p>
                                            Research articles, case studies, clinical practice updates.
                                        </p>
                                        <div className="salah-slider-flex">
                                            <div className="salah-slider-star-icon">
                                                <svg
                                                    width={14}
                                                    height={15}
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                                        fill="#FFC200"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="salah-slider-para2">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="salah-slider-flex-main">
                                    <div className="salah-expirience">
                                        <div className="salah-slider-flex-1">
                                            <p>Experience</p>
                                        </div>
                                        <div className="salah-slider-flex-2">
                                            <p>8 years</p>
                                        </div>
                                    </div>
                                    <div className="salah-reviews">
                                        <div className="salah-slider-main-1">
                                            <p>(28)</p>
                                        </div>
                                        <div className="salah-28years">
                                            <p>reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="salah-content-main professional-four">
                            <div className="salah-slider-images  profesional0imges">
                                <img src="./images/descover.png" alt="" />
                            </div>
                            <div className="salah-all-content proffesionL-PADDING">
                                <div className="salah-content-main-head">
                                    <h2>Vibha Finaviya CA</h2>
                                </div>
                                <div className="salah-content-flex">
                                    <div className="salah-slider-icon">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_205_70"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={2}
                                                y={2}
                                                width={24}
                                                height={24}
                                            >
                                                <rect x={2} y={2} width={24} height={24} fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_205_70)">
                                                <path
                                                    d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                                                    fill="#0A243F"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="salah-slider-para">
                                        <p>
                                            Research articles, case studies, clinical practice updates.
                                        </p>
                                        <div className="salah-slider-flex">
                                            <div className="salah-slider-star-icon">
                                                <svg
                                                    width={14}
                                                    height={15}
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                                        fill="#FFC200"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="salah-slider-para2">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="salah-slider-flex-main">
                                    <div className="salah-expirience">
                                        <div className="salah-slider-flex-1">
                                            <p>Experience</p>
                                        </div>
                                        <div className="salah-slider-flex-2">
                                            <p>8 years</p>
                                        </div>
                                    </div>
                                    <div className="salah-reviews">
                                        <div className="salah-slider-main-1">
                                            <p>(28)</p>
                                        </div>
                                        <div className="salah-28years">
                                            <p>reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="salah-content-main professional-four">
                            <div className="salah-slider-images  profesional0imges">
                                <img src="./images/descover.png" alt="" />
                            </div>
                            <div className="salah-all-content proffesionL-PADDING">
                                <div className="salah-content-main-head">
                                    <h2>Vibha Finaviya CA</h2>
                                </div>
                                <div className="salah-content-flex">
                                    <div className="salah-slider-icon">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_205_70"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={2}
                                                y={2}
                                                width={24}
                                                height={24}
                                            >
                                                <rect x={2} y={2} width={24} height={24} fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_205_70)">
                                                <path
                                                    d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                                                    fill="#0A243F"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="salah-slider-para">
                                        <p>
                                            Research articles, case studies, clinical practice updates.
                                        </p>
                                        <div className="salah-slider-flex">
                                            <div className="salah-slider-star-icon">
                                                <svg
                                                    width={14}
                                                    height={15}
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                                        fill="#FFC200"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="salah-slider-para2">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="salah-slider-flex-main">
                                    <div className="salah-expirience">
                                        <div className="salah-slider-flex-1">
                                            <p>Experience</p>
                                        </div>
                                        <div className="salah-slider-flex-2">
                                            <p>8 years</p>
                                        </div>
                                    </div>
                                    <div className="salah-reviews">
                                        <div className="salah-slider-main-1">
                                            <p>(28)</p>
                                        </div>
                                        <div className="salah-28years">
                                            <p>reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="professional-third">
                <div className="proffesional-third-container">
                    <div className="professsional-third-main">
                        <div className="salah-content-main professional-four">
                            <div className="salah-slider-images  profesional0imges">
                                <img src="./images/descover.png" alt="" />
                            </div>
                            <div className="salah-all-content proffesionL-PADDING">
                                <div className="salah-content-main-head">
                                    <h2>Vibha Finaviya CA</h2>
                                </div>
                                <div className="salah-content-flex">
                                    <div className="salah-slider-icon">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_205_70"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={2}
                                                y={2}
                                                width={24}
                                                height={24}
                                            >
                                                <rect x={2} y={2} width={24} height={24} fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_205_70)">
                                                <path
                                                    d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                                                    fill="#0A243F"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="salah-slider-para">
                                        <p>
                                            Research articles, case studies, clinical practice updates.
                                        </p>
                                        <div className="salah-slider-flex">
                                            <div className="salah-slider-star-icon">
                                                <svg
                                                    width={14}
                                                    height={15}
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                                        fill="#FFC200"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="salah-slider-para2">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="salah-slider-flex-main">
                                    <div className="salah-expirience">
                                        <div className="salah-slider-flex-1">
                                            <p>Experience</p>
                                        </div>
                                        <div className="salah-slider-flex-2">
                                            <p>8 years</p>
                                        </div>
                                    </div>
                                    <div className="salah-reviews">
                                        <div className="salah-slider-main-1">
                                            <p>(28)</p>
                                        </div>
                                        <div className="salah-28years">
                                            <p>reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="salah-content-main professional-four">
                            <div className="salah-slider-images  profesional0imges">
                                <img src="./images/descover.png" alt="" />
                            </div>
                            <div className="salah-all-content proffesionL-PADDING">
                                <div className="salah-content-main-head">
                                    <h2>Vibha Finaviya CA</h2>
                                </div>
                                <div className="salah-content-flex">
                                    <div className="salah-slider-icon">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_205_70"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={2}
                                                y={2}
                                                width={24}
                                                height={24}
                                            >
                                                <rect x={2} y={2} width={24} height={24} fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_205_70)">
                                                <path
                                                    d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                                                    fill="#0A243F"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="salah-slider-para">
                                        <p>
                                            Research articles, case studies, clinical practice updates.
                                        </p>
                                        <div className="salah-slider-flex">
                                            <div className="salah-slider-star-icon">
                                                <svg
                                                    width={14}
                                                    height={15}
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                                        fill="#FFC200"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="salah-slider-para2">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="salah-slider-flex-main">
                                    <div className="salah-expirience">
                                        <div className="salah-slider-flex-1">
                                            <p>Experience</p>
                                        </div>
                                        <div className="salah-slider-flex-2">
                                            <p>8 years</p>
                                        </div>
                                    </div>
                                    <div className="salah-reviews">
                                        <div className="salah-slider-main-1">
                                            <p>(28)</p>
                                        </div>
                                        <div className="salah-28years">
                                            <p>reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="salah-content-main professional-four">
                            <div className="salah-slider-images  profesional0imges">
                                <img src="./images/descover.png" alt="" />
                            </div>
                            <div className="salah-all-content proffesionL-PADDING">
                                <div className="salah-content-main-head">
                                    <h2>Vibha Finaviya CA</h2>
                                </div>
                                <div className="salah-content-flex">
                                    <div className="salah-slider-icon">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_205_70"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={2}
                                                y={2}
                                                width={24}
                                                height={24}
                                            >
                                                <rect x={2} y={2} width={24} height={24} fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_205_70)">
                                                <path
                                                    d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                                                    fill="#0A243F"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="salah-slider-para">
                                        <p>
                                            Research articles, case studies, clinical practice updates.
                                        </p>
                                        <div className="salah-slider-flex">
                                            <div className="salah-slider-star-icon">
                                                <svg
                                                    width={14}
                                                    height={15}
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                                        fill="#FFC200"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="salah-slider-para2">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="salah-slider-flex-main">
                                    <div className="salah-expirience">
                                        <div className="salah-slider-flex-1">
                                            <p>Experience</p>
                                        </div>
                                        <div className="salah-slider-flex-2">
                                            <p>8 years</p>
                                        </div>
                                    </div>
                                    <div className="salah-reviews">
                                        <div className="salah-slider-main-1">
                                            <p>(28)</p>
                                        </div>
                                        <div className="salah-28years">
                                            <p>reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="salah-content-main professional-four">
                            <div className="salah-slider-images  profesional0imges">
                                <img src="./images/descover.png" alt="" />
                            </div>
                            <div className="salah-all-content proffesionL-PADDING">
                                <div className="salah-content-main-head">
                                    <h2>Vibha Finaviya CA</h2>
                                </div>
                                <div className="salah-content-flex">
                                    <div className="salah-slider-icon">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_205_70"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={2}
                                                y={2}
                                                width={24}
                                                height={24}
                                            >
                                                <rect x={2} y={2} width={24} height={24} fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_205_70)">
                                                <path
                                                    d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                                                    fill="#0A243F"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="salah-slider-para">
                                        <p>
                                            Research articles, case studies, clinical practice updates.
                                        </p>
                                        <div className="salah-slider-flex">
                                            <div className="salah-slider-star-icon">
                                                <svg
                                                    width={14}
                                                    height={15}
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                                        fill="#FFC200"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="salah-slider-para2">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="salah-slider-flex-main">
                                    <div className="salah-expirience">
                                        <div className="salah-slider-flex-1">
                                            <p>Experience</p>
                                        </div>
                                        <div className="salah-slider-flex-2">
                                            <p>8 years</p>
                                        </div>
                                    </div>
                                    <div className="salah-reviews">
                                        <div className="salah-slider-main-1">
                                            <p>(28)</p>
                                        </div>
                                        <div className="salah-28years">
                                            <p>reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>


    )
}

export default becomeprofessional
