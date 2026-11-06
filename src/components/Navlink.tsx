import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface NavLinkProps {
    to: string;
    children: ReactNode;
    scrolled?: boolean;
    tabIndex?: number;
}


const NavLink = ({ to, children, tabIndex }: NavLinkProps) => {
    return (
        <Link
            to={`${to}`}
            className="text-white hover:text-main-color transition duration-100 ease-in"
        >
            {children}
        </Link>
    );
};

export default NavLink;