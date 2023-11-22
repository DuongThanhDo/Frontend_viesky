import { useState } from 'react';

function DecentralizeItem({ functionItem }) {
    const [isCheckbox, setIsCheckbox] = useState(false);

    return (
        <tr onClick={() => setIsCheckbox(!isCheckbox)} className="bg-white border-b cursor-pointer">
            <td className="text-center py-3">{functionItem}</td>
            <td className="text-center">
                <input checked={isCheckbox} readOnly className="w-5 h-5 shadow-md cursor-pointer" type="checkbox" />
            </td>
        </tr>
    );
}

export default DecentralizeItem;
