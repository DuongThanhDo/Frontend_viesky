import { useEffect, useState } from 'react';
import { FormSeeDetailsGoods } from '~/components/Forms';

function ImportedGoodsItem({ receipt }) {
    const [total, setTotal] = useState(0);
    const [seeDetails, setSeeDetails] = useState(false);

    useEffect(() => {
        const total_ = receipt.goods.reduce((t, good) => good.price * good.quantity + t, 0);
        setTotal(total_);
    }, [receipt.goods, total]);

    return (
        <tr className="bg-white border-b">
            <td className="text-center py-[18px]">#{receipt.id}</td>
            <td className="text-center">{receipt.date_added}</td>
            <td className="w-[600px] text-center">{receipt.supplier}</td>
            <td className="text-center">{total}</td>
            <td>
                {seeDetails && <FormSeeDetailsGoods data={receipt} act={'nhập'} setSeeDetails={setSeeDetails} />}
                <div onClick={() => setSeeDetails(true)} className="flex items-center justify-center cursor-pointer">
                    <svg
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
                </div>
            </td>
        </tr>
    );
}

export default ImportedGoodsItem;
