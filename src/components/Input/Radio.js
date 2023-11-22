function Radio({ name, id, onClick, children }) {
    return (
        <div className="w-full flex items-center px-2 rounded-lg shadow-lg gap-2 text-[18px] font-medium bg-gray-50 hover:bg-gray-200 transition-all">
            <input className=" cursor-pointer" type="radio" id={id} name={name} />
            <label className="w-full py-2 cursor-pointer" htmlFor={id}>
                <p onClick={onClick}>{children}</p>
            </label>
        </div>
    );
}

export default Radio;
