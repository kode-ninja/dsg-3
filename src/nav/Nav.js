import NavLink from "./NavLink";

const Nav = () => {

    return (
        <ul className="nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/requests">Page w/ Requests</NavLink></li>
        </ul>
    );
}

export default Nav;