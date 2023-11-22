import FormTable from './FormTable';

function FormExchangeTable({ onClick, onClickCancel }) {
    return (
        <FormTable onClickCancel={onClickCancel} onClickConfirm={onClick} formEditTable>
            <div>
                <div className="my-10">
                    <p className="text-[22px] font-semibold mb-3">Bàn hiện tại</p>
                    <input
                        type="number"
                        className="w-[100%] px-4 py-2 border border-blue-500 rounded-lg text-[28px] outline-none font-semibold"
                    />
                </div>
                <div className="my-10">
                    <p className="text-[22px] font-semibold mb-3">Đến bàn</p>
                    <input
                        type="number"
                        className="w-[100%] px-4 py-2 border border-blue-500 rounded-lg text-[28px] outline-none font-semibold"
                    />
                </div>
            </div>
        </FormTable>
    );
}

export default FormExchangeTable;
