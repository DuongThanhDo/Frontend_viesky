import { useState } from 'react';
import { Button } from '~/components/Button';
import { FoodHome } from '~/components/Food';
import { LoginRequired } from '~/components/LoginRequired';
import { StatisticalHome } from '~/components/Statistical';
import configs from '~/configs';
import { foods } from '~/datas/dataFoods';
import { multiTableState, staffs } from '~/datas/dataHome';
import { dataChart } from '~/datas/dataRevenue';
import { addZero } from '~/functions/func_Date';
import { getLocal } from '~/functions/func_LocalStorage';

const foodsLocal = foods.sort((a, b) => b.quantity_sold - a.quantity_sold).slice(0, 4);

function Home() {
    const [billsLocal] = useState(getLocal('bills'));

    const IS_LOGIN = getLocal('IS_LOGIN')
    const d = new Date();

    return (
        <div className="px-8 pt-4">
            <p className="text-[20px] font-normal text-gray-600 mb-3">
                <i> 
                    Ngày {addZero(d.getDate())} tháng {addZero(d.getMonth() + 1)} năm {d.getFullYear()}
                </i>
            </p>

            <div className="grid grid-cols-4 gap-10 mb-3">
                <StatisticalHome
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-act"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                        </svg>
                    }
                    colorBg={'bg-#D5E6FB'}
                    title={'Tổng số hóa đơn'}
                    content={`${billsLocal.length}`}
                />
                <StatisticalHome
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-violet-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                            />
                        </svg>
                    }
                    colorBg={'bg-violet-200'}
                    title={'Doanh thu'}
                    content={dataChart.reduce((t, item) => (item.revenue + t), 0) + 'đ'}
                />
                <StatisticalHome
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-red-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                        </svg>
                    }
                    colorBg={'bg-red-200'}
                    title={'Món đã hết'}
                    content={'4'}
                />
                <StatisticalHome
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-green-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                        </svg>
                    }
                    colorBg={'bg-green-200'}
                    title={'Món đang làm'}
                    content={'24'}
                />
            </div>

            <div className="bg-white px-6 pt-2 pb-6 rounded-xl shadow-lg mb-3">
                <div className="flex items-center justify-between text-[18px] font-medium mb-2">
                    <h2 className="drop-shadow">Bán chạy</h2>
                    <p className="drop-shadow">Trong tuần</p>
                </div>

                <div className="flex gap-10 justify-center">
                    {foodsLocal.map((food) => (
                        <FoodHome key={food.id} foods={food} />
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between gap-10">
                <div className="w-[50%] bg-white rounded-lg shadow-lg px-6 pt-3 pb-6">
                    <div className="flex justify-between border-b pb-3 font-bold">
                        <h1>Lịch làm việc của nhân viên</h1>
                        <div className="relative px-4 py-[2px] rounded-s-full rounded-e-full overflow-hidden">
                            {!IS_LOGIN && <LoginRequired />}
                            <Button to={configs.routes.calendar} seeAll className="flex items-center cursor-pointer">
                                <p>Xem tất cả</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.2}
                                    stroke="currentColor"
                                    className="w-5 h-5 ml-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>

                    <table className="w-[100%] border">
                        <thead>
                            <tr className="w[30%]">
                                <th>Tên nhân viên</th>
                                <th>Chức vụ</th>
                                <th>Ca làm việc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffs.map((staff, index) => (
                                <tr className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`} key={index}>
                                    <td className="flex justify-center py-[5px] text-[14px] font-normal">
                                        {staff.name}
                                    </td>
                                    <td className="pl-[84px] text-[14px] font-normal">{staff.position}</td>
                                    <td className="pl-[40px] text-[14px] font-normal">{staff.shift}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="w-[50%] bg-white rounded-lg shadow-lg px-6 pt-3 pb-6">
                    <div className="flex justify-between border-b pb-3 font-bold">
                        <h1>Tình trạng lên món</h1>
                        <div className="relative px-4 py-[2px] rounded-s-full rounded-e-full overflow-hidden">
                            {!IS_LOGIN && <LoginRequired />}
                            <Button to={configs.routes.sell} seeAll className="flex items-center cursor-pointer">
                                <p>Xem tất cả</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.2}
                                    stroke="currentColor"
                                    className="w-5 h-5 ml-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>

                    <table className="w-[100%] border">
                        <thead>
                            <tr className="w[30%]">
                                <th>Số bàn</th>
                                <th>Tình trạnh chế biến</th>
                                <th>Số món</th>
                            </tr>
                        </thead>
                        <tbody>
                            {multiTableState.map((state, index) => (
                                <tr className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`} key={index}>
                                    <td className="flex justify-center py-[5px] text-[14px] font-normal">
                                        {state.number}
                                    </td>
                                    <td
                                        className={`${
                                            state.status === 'Hoàn thành'
                                                ? 'text-green-500'
                                                : state.status === 'Đang làm'
                                                ? 'text-yellow-500'
                                                : state.status === 'Chưa làm'
                                                ? 'text-red-500'
                                                : ''
                                        }
                                         pl-[100px] text-[14px] font-semibold`}
                                    >
                                        {state.status}
                                    </td>
                                    <td className="pl-[60px] text-[14px] font-semibold">
                                        <span className="text-red-500">{state.dishComplete}</span>/
                                        <span className="text-green-500">{state.dishUnfinished}</span>/
                                        <span>{state.dishComplete + state.dishUnfinished}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
