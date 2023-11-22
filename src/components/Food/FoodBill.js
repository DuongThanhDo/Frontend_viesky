import { useEffect, useState } from 'react';

function FoodBill({ foods, rerender, setRerender, setFoodItemact }) {
    const [total, setTotal] = useState(0);
    const [quantityFood, setQuantityFood] = useState(foods.quantity);

    const handleReduceQuantity = () => {
        if (quantityFood > 1) {
            foods.quantity = foods.quantity - 1;
            setQuantityFood(quantityFood - 1);
        }
    };

    const handleIncreaseQuantity = () => {
        foods.quantity = foods.quantity + 1;
        setQuantityFood(quantityFood + 1);
    };

    const handleDeleteFoodItem = () => {
        setFoodItemact(foods);
    };

    useEffect(() => {
        setQuantityFood(foods.quantity);
        setTotal(() => foods.price * quantityFood);
        setRerender(!rerender);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [foods.quantity, quantityFood]);

    return (
        <div className="max-h-[94px] min-h-[94px] p-2 mb-2 border border-blue-300 rounded-xl shadow-lg bg-white flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="w-[60px] h-[42px] rounded-2xl overflow-hidden shadow-md mr-2">
                        <img className="w-[100%] h-[100%] object-cover" src={foods.image} alt={foods.name} />
                    </div>
                    <div>
                        <h2 className="w-[124px] leading-4 font-medium">{foods.name}</h2>
                        <div className="flex items-center gap-2">
                            <span
                                className={`w-4 h-4 rounded-full ${
                                    foods.status === 'đã'
                                        ? 'bg-green-400'
                                        : foods.status === 'đang'
                                        ? 'bg-yellow-400'
                                        : 'bg-red-400'
                                }`}
                            ></span>
                            <p className="text-[14px] font-semibold text-red-600">{foods.price}đ</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center">
                        {/* eslint-disable-next-line no-const-assign */}
                        <button
                            onClick={handleReduceQuantity}
                            className="w-5 h-5 border rounded-sm flex items-center justify-center cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            </svg>
                        </button>
                        <p className="mx-2">{quantityFood}</p>
                        <button
                            onClick={handleIncreaseQuantity}
                            className="w-5 h-5 border rounded-sm flex items-center justify-center cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-red-600 font-medium">{total}đ</p>
                </div>
            </div>
            <div className="flex justify-between">
                <input
                    className="grow px-2 text-[14px] outline-none border border-blue-400 rounded-lg"
                    placeholder="Chú thích..."
                />
                <div
                    onClick={handleDeleteFoodItem}
                    className="w-6 h-6 border border-gray-700 text-grborder-gray-700 rounded-full ml-2 shadow-md bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4  "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default FoodBill;
