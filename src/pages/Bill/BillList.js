function BillList({ children }) {
    return (
        <div className="h-[74%]">
            <div className="w-full py-5 bg-blue-600 grid grid-cols-6">
                {['Mã hóa đơn', 'Trạng thái', 'Thời gian vào', 'Thời gian ra', 'Tổng tiền', 'Chi tiết Hóa Đơn'].map(
                    (item, index) => (
                        <p className="text-[18px] text-white font-medium text-center" key={index}>
                            {item}
                        </p>
                    ),
                )}
            </div>
            <div className="h-full bg-white overflow-x-scroll hide-scrollbar">{children}</div>
        </div>
    );
}

export default BillList;
