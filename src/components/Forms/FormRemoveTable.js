import FormTable from './FormTable';

function FormRemoveTable({ onClick, onClickCancel, setNumberBtn, numberBtn }) {
    return (
        <FormTable formEditTable onClickConfirm={onClick} onClickCancel={onClickCancel}>
            <div className="">
                <h1 className="mb-4 text-[20px] font-medium">Chọn số lượng bàn cần xóa</h1>

                <div className="flex flex-col gap-2 items-center">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <button
                            onClick={() => setNumberBtn(index + 1)}
                            className="block w-[100%] py-3 bg-blue-300 text-[20px] font-medium rounded-md transition-all hover:bg-blue-400"
                            key={index}
                        >
                            {item}
                        </button>
                    ))}
                    <div className='text-center'>
                        <p className="mt-2">Số bàn đã chọn</p>
                        <p className="text-2xl text-red-700 font-semibold">{numberBtn}</p>
                    </div>
                </div>
            </div>
        </FormTable>
    );
}

export default FormRemoveTable;
