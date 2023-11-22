function InventoryControlList({ children }) {
    return ( 
        <div className="h-[82%] overflow-scroll hide-scrollbar shadow-xl">
            <table className="w-full">
                <thead className="bg-green-500 text-white sticky top-0">
                    <tr>
                        <th>Mã hàng hóa</th>
                        <th className="w-[400px] py-5 border-b">Tên hàng hóa</th>
                        <th>Đơn vị tính</th>
                        <th className="">Số lượng</th>
                        <th>Ngày nhập</th>
                        <th>Hạn sử dụng</th>
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
}

export default InventoryControlList