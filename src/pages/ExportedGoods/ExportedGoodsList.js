function ExportedGoodsList({ children }) {
    return ( 
        <div className="h-[82%] bg-white overflow-scroll hide-scrollbar shadow-xl">
            <table className="w-full">
                <thead className="bg-green-500 text-white sticky top-0">
                    <tr>
                        <th>Mã phiếu</th>
                        <th className="py-5 border-b">Ngày xuất</th>
                        <th>Xem chi tiết</th>
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
}

export default ExportedGoodsList