function ImportedGoodsList({ children }) {
    return ( 
        <div className="h-[82%] bg-white overflow-scroll hide-scrollbar shadow-xl">
            <table className="w-full">
                <thead className="bg-green-500 text-white sticky top-0">
                    <tr>
                        <th>Mã phiếu</th>
                        <th>Ngày nhập</th>
                        <th className="w-[400px] py-5 border-b">Tên hàng hóa</th>
                        <th>Tổng tiền</th>
                        <th>Xem chi tiết</th>
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
}

export default ImportedGoodsList