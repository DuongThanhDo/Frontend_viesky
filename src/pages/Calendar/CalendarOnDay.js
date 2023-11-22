import { useContext } from 'react';
import { CalendarContext } from './Calendar';
import { changeDate, printDate } from '~/functions';

function CalendarOnDay({ interval }) {
    const context = useContext(CalendarContext);

    const handleAddToCalendar = (id, name, index) => {
        const tempCalendar = context.calendarsLocal;

        let check = 0;

        let checkExist = 0;

        const tempDate = tempCalendar.filter((item) => item.id === id);

        if (tempDate.length === 0) {
            const newDate = {
                id: context.calendarsLocal[context.calendarsLocal.length - 1].id + 1,
                date: printDate(changeDate(context.firstDayOfWeek_, index), 1),
                morning: [],
                afternoon: [],
                evening: [],
            };

            checkExist = 1;

            tempDate.push(newDate);
        }

        if (interval === 'BUỔI SÁNG' && !tempDate[0].morning.includes(name)) {
            tempDate[0].morning.push(name);
            check = 1;
        } else if (interval === 'BUỔI CHIỀU' && !tempDate[0].afternoon.includes(name)) {
            tempDate[0].afternoon.push(name);
            check = 1;
        } else if (interval === 'BUỔI TỐI' && !tempDate[0].evening.includes(name)) {
            tempDate[0].evening.push(name);
            check = 1;
        }

        tempCalendar.sort((a, b) => new Date(a.date) - new Date(b.date));

        if (checkExist) context.setCalendarsLocal([...tempCalendar, ...tempDate]);
        else if (check) context.setCalendarsLocal([...tempCalendar]);
    };

    const handleDeleteToCalendar = (id, index) => {
        const tempCalendar = context.calendarsLocal;

        const tempDate = tempCalendar.filter((item) => item.id === id);

        if (interval === 'BUỔI SÁNG') {
            tempDate[0].morning.splice(index, 1);
        } else if (interval === 'BUỔI CHIỀU') {
            tempDate[0].afternoon.splice(index, 1);
        } else {
            tempDate[0].evening.splice(index, 1);
        }

        context.setCalendarsLocal([...tempCalendar]);
    };

    return (
        <>
            <tr>
                <td colSpan="7" className="bg-gray-300 text-[16px] font-medium">
                    {interval}
                </td>
            </tr>
            <tr className="h-[200px] bg-white align-top">
                {context.dayOnWeek.map((day, indexDay) => (
                    <td key={indexDay} className="h-[200px] border border-gray-400 ">
                        {changeDate(context.firstDayOfWeek_, indexDay + 1) > new Date() && context.statusEdit && (
                            <div className="w-full flex items-center justify-center mt-2">
                                <svg
                                    onClick={() => handleAddToCalendar(day.id, context.nameStaff, indexDay)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="w-7 h-7 cursor-pointer drop-shadow-xl bg-gray-100 rounded-full active:scale-95 transition-all"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        )}
                        {/* eslint-disable-next-line no-whitespace-before-property */}
                        {(interval === 'BUỔI SÁNG'
                            ? day.morning
                            : interval === 'BUỔI CHIỀU'
                            ? day.afternoon
                            : day.evening
                        ).map((item, index) => (
                            <p
                                key={index}
                                className="p-1 bg-blue-200 text-blue-600 font-medium mx-4 my-2 rounded-xl relative"
                            >
                                {changeDate(context.firstDayOfWeek_, indexDay + 1) > new Date() && context.statusEdit && (
                                    <svg
                                        onClick={() => handleDeleteToCalendar(day.id, index)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-white rounded-full bg-red-500 p-1 cursor-pointer shadow-lg absolute right-[-5px] top-[-5px] transition-all active:scale-95"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}

                                {item}
                            </p>
                        ))}
                    </td>
                ))}
            </tr>
        </>
    );
}

export default CalendarOnDay;
