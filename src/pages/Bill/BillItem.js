import { useState } from 'react';
import { BlurredBackground } from '~/components/BlurredBackground';

function BillItem({ bill }) {
    const [seeDetails, setSeeDetails] = useState(false);

    const handleSeeDetails = () => {
        setSeeDetails(!seeDetails);
    };

    return (
        <div>
            {seeDetails && (
                <BlurredBackground onClick={handleSeeDetails}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-[500px] h-[96%] bg-white rounded-xl shadow-lg px-4 py-2"
                    >
                        <div className="flex items-center justify-between border-b pb-4">
                            <h1 className="text-[20px] font-medium">Chi tiết hóa đơn</h1>
                            <div>
                                <p className="text-[18px] text-blue-600 font-normal flex items-center justify-center mb-1">
                                    #{bill.id}
                                </p>
                                <p
                                    className={`${
                                        bill.status === 1
                                            ? 'bg-green-300 text-green-600'
                                            : !bill.status
                                            ? 'bg-yellow-300 text-yellow-600'
                                            : 'bg-red-300 text-red-600'
                                    } w-[200px] text-[18px] font-normal flex items-center justify-center mx-4 py-1 rounded-l-full rounded-r-full`}
                                >
                                    {bill.status === 1
                                        ? 'Đã thanh toán'
                                        : !bill.status
                                        ? 'Chưa thanh toán'
                                        : 'Hóa đơn bị hủy'}
                                </p>
                            </div>
                            <button
                                onClick={handleSeeDetails}
                                className="p-1 bg-slate-300 rounded-full shadow-md hover:scale-105 act:scale-100 transition-all"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="grid gap-2 py-2 pl-4 mb-2">
                            <p>
                                <span className="font-medium">Thu ngân: </span> {bill.staff_cashier}
                            </p>
                            <p>
                                <span className="font-medium">Bàn: </span> {bill.number}
                            </p>
                            <p>
                                <span className="font-medium">Thời gian vào: </span> {bill.time_in}
                            </p>
                            <p>
                                <span className="font-medium">Thời gian ra: </span> {bill.time_out === '' ? '- -' : bill.time_out }
                            </p>
                        </div>

                        <div className="border-2 h-[50%] border-black relative">
                            <ul className="grid grid-cols-4 py-4 border-b-2 border-black font-medium">
                                <li className="text-center">Tên món</li>
                                <li className="text-center">SL</li>
                                <li className="text-center">Đơn giá</li>
                                <li className="text-center">Thành tiền</li>
                            </ul>
                            <div className="h-[66%] overflow-x-scroll hide-scrollbar">
                                {bill.foods.map((food) => (
                                    <ul className="grid grid-cols-4 py-2 border-b border-black">
                                        <li className="text-[13px] font-medium text-center pl-[2px]">{food.name}</li>
                                        <li className="text-center">{food.quantity}</li>
                                        <li className="text-center">{food.price}</li>
                                        <li className="text-center">{food.quantity * food.price}</li>
                                    </ul>
                                ))}
                            </div>
                            <div className="w-full absolute flex font-medium items-center justify-between bottom-0 bg-white px-8 py-4 border-t-2 border-black">
                                <p>Tổng tiền</p>
                                <p>{bill.foods.reduce((total, food) => food.price + total, 0)}đ</p>
                            </div>
                        </div>

                        <div>
                            <div className="w-full text-[18px] flex font-medium items-center justify-between pl-4 pr-8 my-3">
                                <p>Tiền thanh toán</p>
                                <p>{bill.payment}đ</p>
                            </div>
                            <div className="w-full text-[18px] flex font-medium items-center justify-between pl-4 pr-8">
                                <p>Tiền trả lại khách</p>
                                <p>{bill.payment - bill.foods.reduce((total, food) => (food.price * food.quantity) + total, 0)}đ</p>
                            </div>
                        </div>
                    </div>
                </BlurredBackground>
            )}
            <div className="w-full py-4 bg-white grid grid-cols-6 border-b">
                <p className="text-[18px] text-blue-600 font-normal flex items-center justify-center">#{bill.id}</p>
                <p
                    className={`${
                        bill.status === 1
                            ? 'bg-green-300 text-green-600'
                            : bill.status === 0
                            ? 'bg-yellow-300 text-yellow-600'
                            : 'bg-red-300 text-red-600'
                    }  text-[16px] font-normal flex items-center justify-center mx-5 py-[2px] rounded-l-full rounded-r-full`}
                >
                    {bill.status === 1 ? 'Đã thanh toán' : !bill.status ? 'Chưa thanh toán' : 'Hóa đơn bị hủy'}
                </p>
                <p className="text-[18px] font-normal flex items-center justify-center">{bill.time_in}</p>
                <p className="text-[18px] font-normal flex items-center justify-center">
                    {bill.time_out === '' ? '- -' : bill.time_out }
                </p>
                <p className="text-[18px] font-normal flex items-center justify-center">
                    {bill.status !== 2 ? bill.foods.reduce((total, food) => food.price + total, 0) : '0'}đ
                </p>
                <div
                    onClick={handleSeeDetails}
                    className="flex items-center justify-center text-black font-medium cursor-pointer"
                >
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
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default BillItem;
