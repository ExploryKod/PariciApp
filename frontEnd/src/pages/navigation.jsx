import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import "../styles/global-styles/navigation.css";


// Il s'agit du header : sa partie navigation
export function Navigation() {

    window.addEventListener('scroll', function() {
        
        const header = document.querySelector(".navigation");
      
        
        if(Math.round(window.pageYOffset) > 0) {
            header.classList.add("sticky");
            
        } else {
            header.classList.remove("sticky");
            
        }

      });

    return (

        <>
            <Outlet />
        
            <div className='navigation'>
              
                <div className='nav-links-container'>
                    <NavLink className='nav-link' to="/Home"><span class="material-icons">home</span></NavLink>
                    <NavLink className='nav-link' to="/AllCircuits"><span class="material-icons">toc</span></NavLink>
                    <NavLink className='nav-link' to="/circuits-de-groupe"><span class="material-icons">group_add</span></NavLink>
                    <NavLink className='nav-link' to="/login"><span class="material-icons">account_circle</span></NavLink>
                </div>
            </div>



        </>
    )
}

export default Navigation;