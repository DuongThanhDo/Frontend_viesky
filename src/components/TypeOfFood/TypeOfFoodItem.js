function TypeOfFoodItem({ image, icon, title, select, onClick }) {
    return (
        <div
            className={`${
                select && 'bg-gray-50 shadow-lg'
            } w-[120px] h-[140px] flex flex-col justify-center items-center rounded-[30px] cursor-pointer transition-all hover:scale-105`}
            onClick={onClick}
        >
            <div className="w-[90px] h-[80px] rounded-full bg-white border border-black shadow-lg mb-2 overflow-hidden flex justify-center items-center">
                {icon ? icon : <img className="w-[100%] h-[100%] object-cover" src={image} alt={title} />}
            </div>
            <p>{title}</p>
        </div>
    );
}

export default TypeOfFoodItem;
