import { LoginRequired } from '~/components/LoginRequired';
import { getLocal } from '~/functions/func_LocalStorage';

function Search() {
    const IS_LOGIN = getLocal('IS_LOGIN')
    return (
        <div className="flex w-[500px] h-[40px] items-center px-8 border border-solid border-gray-300 rounded-s-full rounded-e-full relative overflow-hidden">
            {!IS_LOGIN && <LoginRequired />}
            <input className="grow border-none outline-none text-base" placeholder="Tìm kiếm..." />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 cursor-pointer ml-2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        </div>
    );
}

export default Search;
