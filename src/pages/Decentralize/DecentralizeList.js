function DecentralizeList({ children }) {
    return (  
        <div className="h-[90%] overflow-scroll hide-scrollbar shadow-xl">
        <table className="w-full">
            <thead className="bg-green-500 text-[20px] font-medium text-white sticky top-0">
                <tr>
                    <th className="py-5">Hành động</th>
                    <th>Chọn quyền</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    </div>
    );
}

export default DecentralizeList;