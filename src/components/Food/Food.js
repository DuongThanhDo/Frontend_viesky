function Food({ foods, onClick, sell = false, menu = false, datas, setDatas, setSelectFood, setDisplayStatus }) {
    const handleCheckbox = (e) => {
        let tempDatas = datas.map((data) => (data.id === foods.id ? { ...data, isChecked: e.target.checked } : data));
        setDatas(tempDatas);
    };

    const handleEditFood = () => {
        setDisplayStatus(true);
        setSelectFood(foods);
    };

    return (
        <div className="w-[100%] h-[220px] bg-white rounded-xl shadow-xl p-4 relative">
            <div className="w-[100%] h-[50%] rounded-lg shadow-md overflow-hidden ">
                <img className="w-[100%] h-[100%] object-cover" src={foods.image} alt={foods.name} />
            </div>
            <h1 className="text-[18px] h-[40px] leading-5 font-medium mt-2 mb-1">{foods.name}</h1>
            <p>{foods.type}</p>
            <p className="font-bold text-red-600">{foods.price}đ</p>
            {sell ? (
                <button
                    onClick={() => onClick(foods)}
                    className="w-8 h-8 text-[20px] rounded-full shadow-md text-white bg-green-400 flex items-center justify-center absolute bottom-[12px] right-[12px] hover:scale-110 transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </button>
            ) : menu ? (
                <>
                    <button
                        onClick={handleEditFood}
                        className="w-8 h-8 text-[20px] rounded-full shadow-md text-black bg-gray-100 flex items-center justify-center absolute bottom-[12px] right-[12px] hover:scale-110 transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 drop-shadow-lg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                        </svg>
                    </button>
                    <input
                        onChange={handleCheckbox}
                        className="w-8 h-8 cursor-pointer absolute top-[-10px] right-[-12px] shadow-lg"
                        type="checkbox"
                    />
                </>
            ) : (
                ''
            )}
        </div>
    );
}

export default Food;
