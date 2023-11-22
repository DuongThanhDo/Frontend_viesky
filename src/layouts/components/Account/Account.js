import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import configs from '~/configs';
import { Button } from '~/components/Button';
import { getLocal } from '~/functions/func_LocalStorage';

function Account({ users }) {
    const IS_LOGIN = getLocal('IS_LOGIN')

    return (
        <>
            <Tippy
                interactive
                delay={[0, 400]}
                render={(attrs) => (
                    <div className="w-[200px] rounded-lg overflow-hidden shadow-lg bg-white" tabIndex="-1" {...attrs}>
                        <MenuItem
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                    />
                                </svg>
                            }
                            title={'Đổi mật khẩu'}
                            to={configs.routes.changePassword}
                        />
                    </div>
                )}
            >
                {IS_LOGIN ? (
                    <div className="flex items-center w-[200px] h-[50px] bg-#DBE7F5 p-3 rounded-lg cursor-pointer">
                        <img
                            className="w-[32px] h-[32px] rounded-full object-cover mr-3"
                            src={users.image}
                            alt={users.position}
                        />
    
                        <div>
                            <h2 className="text-[14px] font-medium">{users.position}</h2>
                            <p className="text-[12px] text-#194764">{users.email}</p>
                        </div>
                    </div>
                ) : (
                    <Button to={configs.routes.login} cancel>
                        Đăng nhập
                    </Button>
                )}
            </Tippy>
        </>
    );
}

export default Account;
