"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import menu from "../../public/images/menu.png"
import close from "../../public/images/close.png"
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [openMenu, setOpenMenu] = useState(false);

  const stylePeer = {
    top: openMenu ? "65px" : "-400px",
  }

  const [showSidebar , setShowSidebar] = useState(false);

  return (
    <>
    <div className="centere-in-max">

      <nav
        className="navbar navbar-expand-lg navbar-dark padd-navbar"
        style={{ backgroundColor: "#ffff" }}
      >
        <div className="container-fluid d-flex justify-content-between">
          <div className="logo-navbar loho-font">
            <a className="navbar-brand fs-3 fw-bold" href="#">
              Whims
            </a>
          </div>
          <div className="hamburger-icon">
            <i className="fas fa-bars" />
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent rifht-text-font"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-6 fw-normal"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-6 fw-normal" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-6 fw-normal" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-6 fw-normal" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-primary me-2 navbar-round"
                  href="#"
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
               <Link href="/becomeprofessional"> <button className="btn btn-outline-primary navbar-round">
                  Become Professional
                </button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

       {/* this is for mobile navbar  */}
       <div className='mobileNavItem'>
        <button><span>Login</span></button>
        <Image
        onClick={()=>setShowSidebar(true)}
      src={menu}
      width={24}
      height={24}
      alt="Picture of the author"
    />
       </div>
      
    </div>


    {/* this is sidebar of navbar  */}
{
  showSidebar && 

<div className="sidebarwrap">

  <div className="sidebarCont">

     {/* first section  */}
     <div className="sidFrist">

{/* left side */}
<div className="sideleft">

<h3>Menu</h3>
<h4>Services</h4>
<h4>About</h4>
<h4>Support</h4>
</div>

{/* right side  */}
<div className="sideRight">

<Image
onClick={()=>setShowSidebar(false)}
      src={close}
      width={24}
      height={24}
      alt="Picture of the author"
    />


</div>

     </div>

     {/* second section  */}
     <button className='becomButtn'><span>Become a Professional</span></button>

  </div>

</div>

}

  </>
  
  );
};

export default Header;
