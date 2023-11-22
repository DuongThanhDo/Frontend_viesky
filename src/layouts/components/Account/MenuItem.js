import { Link } from "react-router-dom";

function MenuItem({ icon, title, to }) {
    return ( 
        <Link className="flex items-center p-4 cursor-pointer hover:bg-gray-100 font-semibold transition-all" to={to}>
            {icon}
            <p className="ml-2">{title}</p>
        </Link>
    );
}

export default MenuItem;