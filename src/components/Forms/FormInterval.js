import { useEffect, useState } from 'react';
import { Radio } from '../Input';
import FormCalendar from './FormCalendar';
import { Button } from '../Button';
import { changeDate } from '~/functions';

function FormInterval({ setDateBefore_, setDateAfter_, onClickCancel, onClickConfirm }) {
    const [custom, setCustom] = useState(false);

    useEffect(() => {
        setCustom(false);
    }, []);

    const handleClickToDay = () => {
        setDateBefore_(new Date());
        setDateAfter_(new Date());
        setCustom(false);
    };

    const handleClickYesterday = () => {
        setDateBefore_(changeDate(new Date(), -1));
        setDateAfter_(changeDate(new Date(), -1));
        setCustom(false);
    };

    const handleClick7Day = () => {
        setDateBefore_(changeDate(new Date(), -7));
        setDateAfter_(changeDate(new Date(), -1));
        setCustom(false);
    };

    const handleClick30Day = () => {
        setDateBefore_(changeDate(new Date(), -30));
        setDateAfter_(changeDate(new Date(), -1));
        setCustom(false);
    };
    return (
        <div>
            <div onClick={onClickCancel} className="w-[100vw] h-[100vh] fixed top-0 right-0 z-30"></div>
            <div className="min-w-[520px] rounded-lg shadow-xl absolute px-6 py-4 bg-white mt-2 flex gap-4 z-40">
                <div className="min-w-[180px] flex flex-col gap-2 border-r pr-4 z-40">
                    <Radio onClick={handleClickToDay} id="today" name="interval">
                        Hôm nay
                    </Radio>
                    <Radio onClick={handleClickYesterday} id="yesterday" name="interval">
                        Hôm qua
                    </Radio>
                    <Radio onClick={handleClick7Day} id="7-day" name="interval">
                        7 ngày qua
                    </Radio>
                    <Radio onClick={handleClick30Day} id="30-day" name="interval">
                        30 ngày qua
                    </Radio>
                    <Radio id="custom" name="interval" onClick={() => setCustom(!custom)}>
                        Tùy chỉnh
                    </Radio>
                </div>

                {custom && (
                    <div className="flex grow">
                        <div className="mr-8">
                            <p className="text-5 font-medium mb-2">Từ ngày</p>
                            <FormCalendar setDate={setDateBefore_} />
                        </div>
                        <div>
                            <p className="text-5 font-medium mb-2">Đến ngày</p>
                            <FormCalendar setDate={setDateAfter_} />
                        </div>
                    </div>
                )}

                <div className="flex items-center absolute bottom-4 right-6">
                    <Button onClick={onClickConfirm} confirm>
                        Cập nhật
                    </Button>
                    <span className="mx-4"></span>
                    <Button onClick={onClickCancel} cancel>
                        Hủy
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FormInterval;
