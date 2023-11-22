import { useState } from 'react';
import { FormInterval } from '~/components/Forms';
import { changeDate } from '~/functions';

function RevenueHeader({ setDateBefore, setDateAfter, total }) {
    const [dateBefore_, setDateBefore_] = useState(changeDate(new Date(), -7));
    const [dateAfter_, setDateAfter_] = useState(new Date());
    const [formInterval, setFormInterval] = useState(false);

    const handleUpdate = () => {
        setFormInterval(false);
        setDateBefore(dateBefore_);
        setDateAfter(dateAfter_);
    };

    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-[28px] font-semibold">
                <i>Thống kê doanh thu</i>
            </h1>
            <div className="relative">
                <div
                    className="py-3 px-6 rounded-lg bg-blue-600 text-white font-medium text-[18px] shadow-lg cursor-pointer flex justify-between gap-3"
                    onClick={() => setFormInterval(!formInterval)}
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
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                    </svg>

                    <p>Chọn khoảng thời gian</p>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        {!formInterval ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        )}
                    </svg>
                </div>

                {formInterval && (
                    <FormInterval
                        setDateBefore_={setDateBefore_}
                        setDateAfter_={setDateAfter_}
                        onClickConfirm={handleUpdate}
                        onClickCancel={() => setFormInterval(false)}
                    />
                )}
            </div>
            <div className="text-[20px] font-medium py-4 px-8 rounded-2xl shadow-blue-300 shadow-lg bg-white text-center ml-6 al">
                <p className="text-blue-700">Tổng doanh thu</p>
                <p className="text-[32px] text-gray-900">{total}đ</p>
            </div>
        </div>
    );
}

export default RevenueHeader;
