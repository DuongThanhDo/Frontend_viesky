import { useContext } from 'react';
import { Button } from '~/components/Button';
import { changeDate, firstDayOfWeek, printMonthAndYearOfWeek } from '~/functions';
import { CalendarContext } from './Calendar';

function CalendarHeader() {
    const context = useContext(CalendarContext)

    return (
        <div className="w-full flex items-center justify-between mt-1 mb-6">
            <div className="flex items-center justify-between">
                <h1 className="text-[28px] font-semibold mr-[100px]">
                    <i>Lịch làm việc</i>
                </h1>

                <div className="flex items-center justify-between">
                    <Button onClick={() => context.setFirstDayOfWeek(firstDayOfWeek(new Date()))} white>
                        Hôm nay
                    </Button>
                    <span className="mx-4"></span>
                    <div className="flex">
                        <svg
                            onClick={() => context.setFirstDayOfWeek(changeDate(context.firstDayOfWeek_, -7))}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-10 h-10 p-2 bg-white rounded-full shadow-lg active:bg-gray-100 cursor-pointer transition-all"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <svg
                            onClick={() => context.setFirstDayOfWeek(changeDate(context.firstDayOfWeek_, 7))}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-10 h-10 p-2 bg-white rounded-full shadow-lg active:bg-gray-100 cursor-pointer transition-all mx-2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <p className="text-[18px]">
                        {printMonthAndYearOfWeek(context.firstDayOfWeek_, changeDate(context.firstDayOfWeek_, 6))}
                    </p>
                </div>
            </div>

            <div className="flex">
                {/* <Button confirm>Xét duyệt</Button>
                <span className="mx-4"></span>
                <Button onClick={() => alert('Chức năng chỉ dành cho nhân viên!')} confirm>Đăng kí</Button>
                <span className="mx-4"></span> */}
                <Button onClick={() => context.setStatusEdit(true)} confirm>Chỉnh sửa</Button>
            </div>
        </div>
    );
}

export default CalendarHeader;
