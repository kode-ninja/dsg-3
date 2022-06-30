import {Link, useMatch, useResolvedPath} from "react-router-dom";

const NavLink = ({to, children}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link to={to} className={match ? 'active' : ''}>{children}</Link>
    );
}

export default NavLink;