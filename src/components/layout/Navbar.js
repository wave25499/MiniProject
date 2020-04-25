import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { Spinner } from 'reactstrap';

const Navbar = () => {
    return(
        <nav className="black">
            <div>
                <Spinner color="light" />
                <Link to='/' className="">เว็บไซต์สำหรับคนรักอนิเมะ</Link>
            </div>
        </nav>
    )
}

export default Navbar