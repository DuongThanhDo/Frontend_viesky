/* eslint-disable react-hooks/exhaustive-deps */
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import { printDate } from '~/functions';

function FormCalendar({ setDate }) {
    const [defaultDisplay, setDefaultDisplay] = useState(true);
    const [input, setInput] = useState(false);
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        if (!defaultDisplay && !input) setDate(value);
    }, [input]);

    const handleClick = () => {
        setDefaultDisplay(false);
        setInput(!input);
    };

    return (
        <div>
            <div className="relative">
                <p onClick={handleClick} className="w-[120px] h-[40px] p-2 bg-white shadow-lg mb-2 rounded-md z-40">
                    {defaultDisplay ? '' : printDate(value, 2)}
                </p>
                {input && (
                    <>
                        <div
                            onClick={() => setInput(false)}
                            className="w-[100vw] h-[100vh] fixed top-0 right-0 z-30"
                        ></div>
                        <div className="absolute left-0 z-40">
                            <Calendar
                                className={'shadow-lg rounded-md'}
                                calendarType="iso8601"
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default FormCalendar;
