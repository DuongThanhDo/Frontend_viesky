import { useRef } from 'react';
import { Link } from 'react-router-dom';
import configs from '~/configs';

function DiningRoomTable({ tables, select, setCheckbox, checkbox }) {
    const checkbox_ = useRef();

    const handleChangeCheckbox_ = () => {
        let arrCheckbox = [...checkbox];
        if (checkbox_.current.checked) {
            setCheckbox([...arrCheckbox, tables.number].sort());
        } else {
            setCheckbox(() => arrCheckbox.filter((item) => item !== tables.number).sort());
        }
    };

    return (
        <div
            className={`p-4 min-w-[180px] h-[120px] rounded-3xl relative cursor-pointer
                ${tables.status ? 'bg-yellow-500' : 'bg-green-500'}
            `}
        >
            <Link
                className=" rounded-2xl h-[100%] z-10 bg-white flex flex-col justify-center items-center hover:bg-gray-200 transition-all"
                to={`${configs.routes.sell}/${tables.number}`}
            >
                <h2 className="text-[18px] font-semibold">Bàn {tables.number}</h2>
                <p className="my-[1px]">{tables.status ? 'Có khách' : 'Trống'}</p>
                <p className="font-medium">{tables.seats} ghế</p>
            </Link>

            {select && (
                <input
                    onChange={handleChangeCheckbox_}
                    ref={checkbox_}
                    className="w-8 h-8 cursor-pointer absolute top-[-10px] right-[-12px] shadow-lg"
                    type="checkbox"
                />
            )}
        </div>
    );
}

export default DiningRoomTable;
