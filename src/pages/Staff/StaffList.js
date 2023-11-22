/* eslint-disable react-hooks/exhaustive-deps */
function StaffList({
    children,
    staffsLocal,
    setStaffsLocal,
    checkboxAll,
    setCheckboxAll,
}) {

    const handleOnChangAll = (e) => {
        let tempstaff = staffsLocal.map((staff) => ({ ...staff, isChecked: e.target.checked }));
        setCheckboxAll(e.target.checked);
        setStaffsLocal(tempstaff);
    };

    return (
        <div className=" h-[73%] bg-black z-10">
            <div className="h-[100%]">
                <div className="flex items-center bg-green-500 border-b">
                    <div className="w-[80px] h-full flex items-center justify-center">
                        <input
                            checked={checkboxAll}
                            onChange={handleOnChangAll}
                            className="w-7 h-7 shadow-md cursor-pointer"
                            type="checkbox"
                        />
                    </div>
                    <div className="w-full py-5 grid grid-cols-5">
                        <p className="text-[18px] text-white font-medium text-center">Mã nhân viên</p>
                        <p className="text-[18px] text-white font-medium text-center">Tên nhân viên</p>
                        <p className="text-[18px] text-white font-medium text-center">Chức vụ</p>
                        <p className="text-[18px] text-white font-medium text-center">Số điện thoại</p>
                        <p className="text-[18px] text-white font-medium text-center">#</p>
                    </div>
                </div>
                <div className="h-full bg-white overflow-x-scroll hide-scrollbar">{children}</div>
            </div>
        </div>
    );
}

export default StaffList;
