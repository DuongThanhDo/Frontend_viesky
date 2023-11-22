import { BlurredBackground } from '~/components/BlurredBackground';

function FormSeeDetailsGoods({ setSeeDetails, data, act }) {
    return (
        <BlurredBackground onClick={() => setSeeDetails(false)}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[900px] min-h-[50%] bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4"
            >
                <div className="flex items-center justify-between border-b pb-4">
                    <h1 className="text-[20px] font-medium">Phiếu {act} kho</h1>

                    <button
                        onClick={() => setSeeDetails(false)}
                        className="p-1 bg-slate-300 rounded-full shadow-md hover:scale-105 act:scale-100 transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-4 font-medium">
                    <p>
                        Mã phiếu: #<span>{data.id}</span>
                    </p>
                    {act === 'nhập' && (
                        <>
                            <p>
                                Ngày {act}: <span>{data.date_added}</span>
                            </p>
                            <p>
                                Nhà cung cấp: <span>{data.supplier}</span>
                            </p>
                        </>
                    )}
                    {act === 'xuất' && (
                        <p>
                            Ngày {act}: <span>{data.date_get_goods}</span>
                        </p>
                    )}
                </div>

                <div className="relative w-full h-[200px] bg-gray-100 overflow-scroll hide-scrollbar mb-2">
                    <table className="w-full">
                        <thead className="bg-blue-300 sticky top-0">
                            <tr>
                                <th className="py-2">Mã hàng hóa</th>
                                <th>Tên hàng hóa</th>
                                <th>Đơn vị tính</th>
                                <th>Số lượng</th>
                                {act === 'nhập' && (
                                    <>
                                        <th>Đơn giá</th>
                                        <th>Hạn sử dụng</th>
                                        <th>Thành tiền</th>
                                    </>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data.goods.map((goodsItem, index) => (
                                <tr key={index}>
                                    <td className="text-center py-2">#{goodsItem.id}</td>
                                    <td className="text-center">{goodsItem.name}</td>
                                    <td className="text-center">{goodsItem.unit}</td>
                                    <td className="text-center">{goodsItem.quantity}</td>
                                    {act === 'nhập' && (
                                        <>
                                            <td className="text-center">{goodsItem.price}</td>
                                            <td className="text-center">{goodsItem.date_expiry}</td>
                                            <td className="text-center">{goodsItem.quantity * goodsItem.price}</td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {act === 'nhập' && (
                    <p className="mb-4 text-[28px] font-medium">
                        Tổng tiền:{' '}
                        <span className="text-red-500">
                            {data.goods.reduce((t, good) => good.price * good.quantity + t, 0)}đ
                        </span>
                    </p>
                )}
            </div>
        </BlurredBackground>
    );
}

export default FormSeeDetailsGoods;
