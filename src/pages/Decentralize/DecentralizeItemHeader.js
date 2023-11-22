import DecentralizeItem from './DecentralizeItem';

function DecentralizeItemHeader({ functions }) {
    return (
        <>
            <tr className="bg-white border-b">
                <td className="text-center text-[18px] font-medium py-3 bg-blue-300">{functions.page}</td>
                <td className="bg-blue-300"></td>
            </tr>
            {functions.page_function.map((functionItem, index) => (
                <DecentralizeItem is functionItem={functionItem} key={index} />
            ))}
        </>
    );
}

export default DecentralizeItemHeader;
