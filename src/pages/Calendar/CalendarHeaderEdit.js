import { useContext, useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import { staffs } from '~/datas';
import { CalendarContext } from './Calendar';
import { getLocal, setLocal } from '~/functions/func_LocalStorage';

function CalendarHeaderEdit() {
    const context = useContext(CalendarContext);

    const [calendarsLocalStorage] = useState(getLocal('calendars'));


    const handleSave = () => {
        setLocal('calendars', context.calendarsLocal);
        alert('Lưu thành công!');
        context.setStatusEdit(false);
    };

    const handleCancel = () => {
        context.setCalendarsLocal([...calendarsLocalStorage]);
        context.setStatusEdit(false);
    };

    useEffect(() => {
        context.setNameStaff(staffs[0].name.split(' ')[staffs[0].name.split(' ').length - 1]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-full flex items-center justify-between mt-1 mb-6">
            <div className="flex items-center justify-between">
                <h1 className="text-[28px] font-semibold mr-[100px]">
                    <i>Chỉnh sửa lịch làm việc</i>
                </h1>
            </div>

            <div className="flex">
                <div className="flex items-center justify-between">
                    <p className="text-[18px] font-medium">Tên nhân viên: </p>
                    <select
                        onChange={(e) => context.setNameStaff(e.target.value)}
                        className="min-w-[100px] border border-gray-500 outline-none p-2 rounded-lg cursor-pointer ml-2"
                        name="goods"
                        id="goods"
                    >
                        {staffs.map((staff) => (
                            <option key={staff.id}>{staff.name.split(' ')[staff.name.split(' ').length - 1]}</option>
                        ))}
                    </select>
                </div>
                <span className="mx-6"></span>
                <Button onClick={handleSave} confirm>
                    Lưu
                </Button>
                <span className="mx-6"></span>
                <Button onClick={handleCancel} cancel>
                    Hủy
                </Button>
            </div>
        </div>
    );
}

export default CalendarHeaderEdit;
