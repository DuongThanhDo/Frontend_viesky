/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BlurredBackground } from '../BlurredBackground';
import { positions } from '~/datas/dataStaff';
import { Button } from '../Button';
import { setLocal } from '~/functions/func_LocalStorage';

function FormStaff({ id, setFormStaffs, setData, data, title, setSelectStaff, selectStaff }) {
    const [inputPasword, setInputPasword] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputDateOfBirth, setInputDateOfBirth] = useState('');
    const [inputGender, setInputGender] = useState('Chưa có');
    const [inputPositions, setInputPositions] = useState(positions[0]);
    const [inputAddress, setInputAddress] = useState('');
    const [inputNumberPhone, setInputNumberPhone] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (selectStaff === undefined) return;
        if (selectStaff.isSeeDetails !== undefined) setIsDisabled(true);

        setInputPasword(selectStaff.password);
        setInputName(selectStaff.name);
        setInputDateOfBirth(selectStaff.date_of_birth);
        setInputGender(selectStaff.gender);
        setInputPositions(selectStaff.position);
        setInputAddress(selectStaff.address);
        setInputNumberPhone(selectStaff.number_phone);
    }, []);

    const handleSave = () => {
        if (selectStaff === undefined) {
            const staff = {};
            staff.id = id;
            staff.password = inputPasword;
            staff.name = inputName;
            staff.position = inputPositions;
            staff.date_of_birth = inputDateOfBirth;
            staff.gender = inputGender;
            staff.address = inputAddress;
            staff.number_phone = inputNumberPhone;
            setLocal('staffs', [...data, staff])
            setData([...data, staff]);
        } else {
            const tempData = data;
            tempData.map((item) => {
                if (item.id === selectStaff.id) {
                    item.password = inputPasword;
                    item.name = inputName;
                    item.position = inputPositions;
                    item.date_of_birth = inputDateOfBirth;
                    item.gender = inputGender;
                    item.address = inputAddress;
                    item.number_phone = inputNumberPhone;
                }
            });
            setLocal('staffs', [...tempData])
            setData([...tempData]);
            setSelectStaff();
        }

        setFormStaffs(false);
        alert(`${title} thành công`);
    };

    const handleCancel = () => {
        setSelectStaff();
        setFormStaffs(false);
        setIsDisabled(false);
    };

    return (
        <BlurredBackground onClick={handleCancel}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[840px] bg-white rounded-xl shadow-2xl p-10 grid grid-cols-1"
            >
                <h1 className="text-[28px] font-medium pb-4 border-b mb-4">
                    <i>{title}</i>
                </h1>

                <div className="text-[18px] font-medium grid grid-cols-2 gap-x-16 gap-y-6 px-5">
                    <p>
                        Mã nhân viên:{' '}
                        <span className="text-red-500 font-semibold">
                            #{selectStaff !== undefined ? selectStaff.id : id}
                        </span>
                    </p>
                    <div className="flex items-center gap-3">
                        <p>Giới tính</p>
                        <select
                            disabled={isDisabled}
                            onChange={(e) => setInputGender(e.target.value)}
                            value={inputGender}
                            name="type"
                            id="type"
                            className="w-[40%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-[3px]"
                        >
                            {['Chưa có', 'Nam', 'Nữ'].map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>Mật khẩu</p>
                        <input
                            disabled={isDisabled}
                            onChange={(e) => setInputPasword(e.target.value)}
                            value={inputPasword}
                            className="w-[100%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-[3px]"
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                    <div>
                        <p>Chức vụ</p>
                        <select
                            disabled={isDisabled}
                            onChange={(e) => setInputPositions(e.target.value)}
                            value={inputPositions}
                            name="type"
                            id="type"
                            className="w-[100%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-[3px]"
                        >
                            {positions.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>Tên nhân viên</p>
                        <input
                            disabled={isDisabled}
                            onChange={(e) => setInputName(e.target.value)}
                            value={inputName}
                            className="w-[100%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-[3px]"
                            placeholder="Nhập tên nhân viên"
                        />
                    </div>
                    <div>
                        <p>Địa chỉ</p>
                        <input
                            disabled={isDisabled}
                            onChange={(e) => setInputAddress(e.target.value)}
                            value={inputAddress}
                            className="w-[100%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-[3px]"
                            placeholder="Nhập địa chỉ"
                        />
                    </div>
                    <div>
                        <p>Ngày sinh</p>
                        <input
                            disabled={isDisabled}
                            onChange={(e) => setInputDateOfBirth(e.target.value)}
                            value={inputDateOfBirth}
                            className="w-[100%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-[3px]"
                            placeholder="yyyy-MM-dd"
                        />
                    </div>
                    <div>
                        <p>Số điện thoại</p>
                        <input
                            disabled={isDisabled}
                            onChange={(e) => setInputNumberPhone(e.target.value)}
                            value={inputNumberPhone}
                            className="w-[100%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-[3px]"
                            placeholder="Nhập số điện thoại"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-[40px]">
                    {!isDisabled && (
                        <>
                            <Button onClick={handleSave} confirm>
                                <p className=" text-[24px]">Lưu</p>
                            </Button>
                            <span className="mx-6"></span>
                        </>
                    )}
                    <Button onClick={handleCancel} cancel>
                        <p className=" text-[24px]">Hủy</p>
                    </Button>
                </div>
            </div>
        </BlurredBackground>
    );
}

export default FormStaff;
