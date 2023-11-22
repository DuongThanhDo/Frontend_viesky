import { useContext } from 'react';
import { changeDate, checkToDay } from '~/functions';
import { CalendarContext } from './Calendar';
import CalendarOnDay from './CalendarOnDay';

function CalendarTable() {
    const context = useContext(CalendarContext)

    return (
        <div className="h-[89%] overflow-scroll hide-scrollbar shadow-xl">
            <table className="w-full border border-gray-400">
                <thead className="bg-blue-600 sticky top-0 z-10">
                    <tr>
                        {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'].map((day, index) => (
                            <th className="border bg-blue-600 border-gray-400 py-2" key={index}>
                                <p className="text-gray-50 text-[20px] font-normal">{day}</p>
                                <p
                                    className={` text-[20px] ${
                                        checkToDay(changeDate(context.firstDayOfWeek_, index), new Date())
                                            ? 'text-gray-100'
                                            : 'text-gray-800'
                                    }`}
                                >
                                    {changeDate(context.firstDayOfWeek_, index).getDate()}
                                </p>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="text-center">
                    <CalendarOnDay interval={'BUỔI SÁNG'} />           
                    <CalendarOnDay interval={'BUỔI CHIỀU'} />           
                    <CalendarOnDay interval={'BUỔI TỐI'} />           
                </tbody>
            </table>
        </div>
    );
}

export default CalendarTable;
