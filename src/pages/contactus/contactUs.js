import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
           <h1>ContactUs</h1> 
           <div className='row p-5'>
<Link to="/contact/login" className="col-3 text-decoration-none text-black fs-5">log in</Link>
<Link to="/contact/register" className="col-2 text-decoration-none text-black fs-5">register</Link>
           </div>

           <Outlet/>
        </div>
    );
}

export default ContactUs;
