function FoodHome({ foods }) {
    return (
        <div className="w-[220px] bg-#D5E6FB shadow-lg font-medium px-4 py-2 flex flex-col items-center rounded-lg">
            <p>{foods.name}</p>
            <img className="w-[60%] h-[60px] object-cover rounded-md my-2" src={foods.image} alt={foods.name} />
            <p>{foods.quantity_sold}</p>
        </div>
    );
}

export default FoodHome;
