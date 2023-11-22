import { NavLink } from 'react-router-dom';

function SidebarItem({ icon, title, to }) {
    return (
        <NavLink
            className={(nav) =>
                `flex mx-[22px] my-[6px] rounded-lg px-[18px] py-[6px] hover:bg-#D5E6FB hover:text-act text-[14px] font-semibold transition-all ${
                    nav.isActive ? 'text-act bg-#D5E6FB' : ''
                }`
            }
            to={to}
        >
            {icon}
            <p className="ml-3">{title}</p>
        </NavLink>
    );
}

export default SidebarItem;
