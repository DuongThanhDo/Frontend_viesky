/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { Button } from '~/components/Button';
import configs from '~/configs';

function Login() {
    const [inputName, setInputName] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = () => {
        if (inputName === '123' && inputPassword === '123') {
            localStorage.setItem('IS_LOGIN', JSON.stringify(true, undefined, 4));

            alert('Đăng nhập thành công!');
        } else {
            alert('Đăng nhập thất bại!');
        }
    };

    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-penetration2">
            <div className="w-[760px] h-[500px] flex bg-white rounded-2xl shadow-2xl overflow-hidden relative">
                <Link
                    to={configs.routes.home}
                    className="absolute top-[16px] right-[24px] p-1 shadow-lg rounded-full bg-gray-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
                <div className="w-[54%]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://s3-alpha-sig.figma.com/img/39c7/7545/be15d82905460f6f7c30738af425c2bb?Expires=1701043200&Signature=cANMx5V1-MCMXbmh61ykZnWV4DintKy8Z8iBSQKav6Q1R4EKDsR95W0jxyY0Yn4~ki~bWPtUk91VZ0qLlc4QtCooLwZtvc0S39QF6d~kbAGuZqkq8rob3~BOn3iJIzzYs2kVZgGplHwlRRyu3QkMbFEYbH07WCzKi4J411oNgfKk84vZFAUvofzEdgZ3v~N1~ywRPKYzigM2nZSKsKKLscHUpG-3xHG1aysKqdhZ2nxhpggoFc0BBk7QefAZd9UmF8fCKrlHPTLWdaK0ZzCDVO0znutIrXR4ji82A281rmLyaIwPE9wTSquYLxldh~VGm7D5JxlOBfbeh4aWaWFa9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                    />
                </div>

                <div className="grow flex flex-col items-center py-4 px-8 gap-5">
                    <div className="w-[80px]">
                        <img className="w-full" src={images.logo} alt="" />
                    </div>

                    <div className="w-full">
                        <p className="text-[14px] text-gray-500 mb-3">Xin chào trở lại!</p>
                        <p className="text-[14px] font-medium text-blue-500">Đăng nhập vào tài khoản của bạn</p>
                    </div>

                    <div className="w-full">
                        <label htmlFor="user-name" className="text-[14px] font-medium text-gray-600">
                            Tên đăng nhập
                        </label>
                        <input
                            onChange={(e) => setInputName(e.target.value)}
                            value={inputName}
                            id="user-name"
                            className="w-full p-2 border border-gray-500 outline-none mt-1 rounded-md"
                            placeholder="Nhập 123"
                        />
                    </div>

                    <div className="w-full mb-3">
                        <label htmlFor="user-password" className="text-[14px] font-medium text-gray-600">
                            Mật khẩu
                        </label>
                        <div className="flex items-center gap-2 w-full p-2 border border-gray-500 mt-1 rounded-md ">
                            <input
                                className=" grow outline-none"
                                onChange={(e) => setInputPassword(e.target.value)}
                                value={inputPassword}
                                type={`${showPassword ? 'text' : 'password'}`}
                                id="user-password"
                                placeholder="Nhập 123"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                )}
                            </svg>
                        </div>
                    </div>

                    <Button
                        onClick={handleLogin}
                        width={'w-full'}
                        to={inputName === '123' && inputPassword === '123' ? configs.routes.home : configs.routes.login}
                        confirm
                    >
                        Đăng nhập
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
