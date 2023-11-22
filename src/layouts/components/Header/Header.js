import { Search } from '../Search';
import { Account } from '../Account';
import images from '~/assets/images'
import { Link } from 'react-router-dom';
import configs from '~/configs';

const users = [
    {
        position: 'Quản lý',
        image: 'https://images.pexels.com/photos/18923481/pexels-photo-18923481/free-photo-of-dan-ong-t-i-hinh-bong-hut-thu-c-la.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'admin@gmail.com',
    },
];

function Header() {
    return (
        <header className="flex items-center justify-between px-4 border-b z-50">
            <div className="w-[200px] flex items-center justify-center">
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 mx-4 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg> */}

                <Link to={configs.routes.home}><img className="w-[56px] cursor-pointer" src={images.logo} alt="" /></Link>
            </div>

            <Search />

            <Account users={users[0]} />
        </header>
    );
}

export default Header;
