function StaffItem({ staff, setStaffsLocal, staffsLocal, setSelectStaff, setFormStaffs }) {
    const handleCheckbox = (e) => {
        let tempStaff = staffsLocal.map((staffItem) =>
            staffItem.id === staff.id ? { ...staffItem, isChecked: e.target.checked } : staffItem,
        );
        setStaffsLocal(tempStaff);
    };

    const handleEdit = (e) => {
        setSelectStaff({ ...staff });
        setFormStaffs(true);
    };

    const handleSeeDetails = (e) => {
        setSelectStaff({ ...staff, isSeeDetails: true });
        setFormStaffs(true);
    };

    return (
        <div className="flex items-center border-b">
            <div className="w-[80px] h-full flex items-center justify-center">
                <input
                    checked={staff?.isChecked || false}
                    onChange={handleCheckbox}
                    className="w-6 h-6 shadow-md cursor-pointer"
                    type="checkbox"
                />
            </div>
            <div className="w-full py-[13px] grid grid-cols-5 gap-1 text-[18px] font-normal text-center">
                <p>#{staff.id}</p>

                <p>{staff.name}</p>
                <p>{staff.position}</p>
                <p>{staff.number_phone}</p>

                <div className="flex items-center justify-center cursor-pointer">
                    <svg
                        onClick={handleSeeDetails}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <span className="mx-3"> I </span>

                    <svg
                        onClick={handleEdit}
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
                </div>
            </div>
        </div>
    );
}

export default StaffItem;
