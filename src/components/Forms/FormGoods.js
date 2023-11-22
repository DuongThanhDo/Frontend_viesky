/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */

import { typeFood } from '~/datas/dataFoods';
import { BlurredBackground } from '../BlurredBackground';
import { Button } from '../Button';
import { useEffect, useState } from 'react';
import { setLocal } from '~/functions/func_LocalStorage';

function FormGoods({ setDisplayStatus, title, id, setData, data, selectFood, setSelectFood }) {
    const [inputName, setInputName] = useState('');
    const [inputType, setInputType] = useState(typeFood[0]);
    const [inputPrice, setInputPrice] = useState('');
    const [imageFood, setImageFood] = useState('');
    const [statusImageFood, setStatusImageFood] = useState(false);

    useEffect(() => {
        if (selectFood.id !== undefined) {
            setInputName(selectFood.name);
            setInputType(selectFood.type);
            setInputPrice(selectFood.price);
            setImageFood(selectFood.image);
            setStatusImageFood(true);
        }
    }, []);

    const handleChangeFileImage = (e) => {
        let img = URL.createObjectURL(e.target.files[0]);
        setImageFood(img);
        setStatusImageFood(true);
    };

    const handleDeleteImage = () => {
        setStatusImageFood(false);
    };

    const handleEditFood = () => {
        if (selectFood.id !== undefined) {
            let tempData = data;
            tempData.map((item) => {
                if (item.id === selectFood.id) {
                    item.name = inputName;
                    item.type = inputType;
                    item.price = inputPrice;
                    item.image = imageFood;
                }
            });
            setSelectFood({});
            setLocal('foods', [...tempData])
            setData([...tempData]);
        } else {
            const tempFoods = {};
            tempFoods.id = id;
            tempFoods.name = inputName;
            tempFoods.type = inputType;
            tempFoods.price = inputPrice !== '' ? inputPrice : 0 ;
            tempFoods.image = imageFood;
            setLocal('foods', [...data, tempFoods])
            setData([...data, tempFoods]);
        }   
        setDisplayStatus(false);
        alert(`${title} thành công`)
    };

    const handleCancel = () => {
        if (selectFood.id !== undefined) {
            setSelectFood({});
        }
        setDisplayStatus(false);
    };

    return (
        <BlurredBackground onClick={handleCancel}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[800px] h-[520px] bg-white shadow-xl rounded-2xl p-6"
            >
                <h1 className="text-[28px] font-medium pb-4 border-b mb-4">
                    <i>{title}</i>
                </h1>

                <div className="w-full gap-20 flex justify-between px-6">
                    <div className="w-[50%] text-[18px] font-medium flex flex-col gap-4">
                        <p>
                            Mã món:{' '}
                            <span className="text-red-500 font-semibold">#{selectFood.id !== undefined ? selectFood.id : id}</span>
                        </p>
                        <div>
                            <p>Tên món</p>
                            <input
                                onChange={(e) => setInputName(e.target.value)}
                                value={inputName}
                                className="w-[100%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-1"
                                placeholder="Nhập tên món"
                            />
                        </div>
                        <div>
                            <p>Loại món</p>
                            <select
                                onChange={(e) => setInputType(e.target.value)}
                                value={inputType}
                                name="type"
                                id="type"
                                className="w-[100%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-1"
                            >
                                {typeFood.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <p>Đơn giá</p>
                            <input
                                onChange={(e) => setInputPrice(e.target.value)}
                                value={inputPrice}
                                className="w-[100%] border-2 text-[16px] font-normal border-blue-400 rounded-md p-2 outline-none mt-1"
                                placeholder="Nhập đơn giá"
                            />
                        </div>
                    </div>
                    <div className="w-[50%] flex flex-col items-center">
                        <div className="w-[100%]">
                            <p className="text-[18px] font-medium mb-2">Ảnh món</p>
                            <div className="h-[260px] w-[100%] border-2 border-blue-400 border-dashed rounded-md overflow-hidden relative">
                                <input
                                    className="hidden"
                                    onChange={(e) => handleChangeFileImage(e)}
                                    type="file"
                                    id="fileImage"
                                />
                                <label
                                    htmlFor="fileImage"
                                    className="h-[100%] w-[100%] flex items-center justify-center cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-10 h-10 text-gray-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                </label>
                                {statusImageFood && (
                                    <>
                                        <img
                                            className="w-full h-full absolute top-0 right-0 object-cover"
                                            src={imageFood}
                                            alt=""
                                        />
                                        <button
                                            onClick={handleDeleteImage}
                                            className="p-1 bg-slate-300 rounded-full shadow-md hover:scale-105 act:scale-100 transition-all absolute top-[10px] right-[10px] "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-7 h-7"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-[40px]">
                    <Button onClick={handleEditFood} confirm>
                        Lưu
                    </Button>
                    <span className="mx-6"></span>
                    <Button onClick={handleCancel} cancel>
                        Hủy
                    </Button>
                </div>
            </div>
        </BlurredBackground>
    );
}

export default FormGoods;
