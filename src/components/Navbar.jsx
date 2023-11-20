import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <nav className="header">
            {/* <div className="logo">
                <Link className='logo-button' to={"/"}>
                    <img src='/vite.svg' />
                </Link>
            </div> */}
            <div >
                <Link className='wallet-button'
                    to={"/"}
                >
                    Arweave For Everyone
                </Link>
            </div>
            <div >
                <Link to={"/about/"} className='wallet-button'>
                    About
                </Link>
            </div>
            <div className='connect'>
                <div >

                </div>
            </div>
        </nav>
    )
}

export default Navbar;