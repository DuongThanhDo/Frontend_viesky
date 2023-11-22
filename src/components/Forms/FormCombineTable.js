    import FormTable from "./FormTable";

function FormCombineTable({ onClick, onClickCancel, values }) {
    return (
        <FormTable onClickCancel={onClickCancel} onClickConfirm={onClick} formEditTable>
            <div>
                <h1 className="text-[24px] font-medium text-center mb-10 leading-7">Chọn những bàn cần gộp với nhau</h1>

                <div className="my-10">
                    <p className="text-[18px] font-medium mb-2">Bạn đã chọn bàn số</p>
                    <input className="w-[100%] px-4 py-2 border border-blue-500 rounded-lg text-[36px] font-semibold" value={values.join(', ')} disabled />
                </div>
            </div>
        </FormTable>
    );
}

export default FormCombineTable;
