import style from './Nav.css';

function Nav(){
    return(
        <div>
            <div className="topnav">
                <a className="active" href="/">Home </a>
                <a className="inactive" href="animals">Animals </a>
                <a className="inactive" href="">About</a>
            </div>
        </div>
    );
}

export default Nav;