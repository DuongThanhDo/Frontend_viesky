import { useEffect, useState } from 'react';
import { BlurredBackground } from '~/components/BlurredBackground';
import { Button } from '~/components/Button';
import { setLocal } from '~/functions/func_LocalStorage';

function SupplierList({
    children,
    id,
    setFormAddSupplier,
    formAddSupplier,
    setSupplierItem,
    suppliersLocal,
    setSuppliersLocal,
    checkboxAll,
    setCheckboxAll,
}) {
    const [inputName, setInputName] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputPhoneNumber, setInputPhoneNumber] = useState('');

    useEffect(() => {
        setInputName('');
        setInputAddress('');
        setInputPhoneNumber('');
    }, [formAddSupplier]);

    const handleSave = () => {
        const supplier = {};
        supplier.id = id;
        supplier.name = inputName;
        supplier.address = inputAddress;
        supplier.phone_number = inputPhoneNumber;
        setSupplierItem(supplier);
        setFormAddSupplier(false);
        setLocal([...suppliersLocal, supplier])
        alert('Thêm thành công');
    };

    const handleOnChangAll = (e) => {
        let tempSupplier = suppliersLocal.map((supplier) => ({ ...supplier, isChecked: e.target.checked }));
        setCheckboxAll(e.target.checked);
        setSuppliersLocal(tempSupplier);
    };

    return (
        <div className=" h-[73%] z-10">
            {formAddSupplier && (
                <BlurredBackground onClick={() => setFormAddSupplier(false)}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-[600px] h-[400px] bg-white rounded-xl shadow-2xl py-6 px-10 grid grid-cols-1"
                    >
                        <h1 className="text-[26px] font-medium">
                            <i>Thêm nhà cung cấp</i>
                        </h1>
                        <p className="text-[18px] font-medium">
                            Mã nhà cung cấp: <span className="text-blue-600 ml-16">#{id}</span>
                        </p>
                        <div className="flex w-full justify-between items-center">
                            <p className="text-[18px]">Tên nhà cung cấp</p>
                            <input
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                                className="w-[60%] h-[40px] border border-black outline-none rounded-md px-3"
                            />
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <p className="text-[18px]">Địa chỉ</p>
                            <input
                                value={inputAddress}
                                onChange={(e) => setInputAddress(e.target.value)}
                                className="w-[60%] h-[40px] border border-black outline-none rounded-md px-3"
                            />
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <p className="text-[18px]">Số điện thoại</p>
                            <input
                                value={inputPhoneNumber}
                                onChange={(e) => setInputPhoneNumber(e.target.value)}
                                className="w-[60%] h-[40px] border border-black outline-none rounded-md px-3"
                            />
                        </div>
                        <div className="flex justify-end items-center">
                            <Button confirm onClick={handleSave}>
                                Lưu
                            </Button>
                            <span className="mx-5"></span>
                            <Button onClick={() => setFormAddSupplier(false)} cancel>
                                Hủy
                            </Button>
                        </div>
                    </div>
                </BlurredBackground>
            )}
            <div className="h-[100%]">
                <div className="flex items-center bg-blue-600 border-b sticky top-0">
                    <div className="w-[80px] h-full flex items-center justify-center">
                        <input
                            checked={checkboxAll}
                            onChange={handleOnChangAll}
                            className="w-7 h-7 shadow-md cursor-pointer"
                            type="checkbox"
                        />
                    </div>
                    <div className="w-full py-5 grid grid-cols-5">
                        <p className="text-[18px] text-white font-medium text-center">Mã</p>
                        <p className="text-[18px] text-white font-medium text-center">Tên</p>
                        <p className="text-[18px] text-white font-medium text-center">Địa chỉ</p>
                        <p className="text-[18px] text-white font-medium text-center">SĐT</p>
                        <p className="text-[18px] text-white font-medium text-center">#</p>
                    </div>
                </div>
                <div className="h-full bg-white overflow-x-scroll hide-scrollbar">{children}</div>
            </div>
        </div>
    );
}

export default SupplierList;
