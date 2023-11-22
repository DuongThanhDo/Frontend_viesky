import { Button } from '~/components/Button';
import { getLocal, setLocal } from '~/functions/func_LocalStorage';

function SupplierHeader({ setFormAddSupplier, setCreateId, finalId, suppliersLocal, setSuppliersLocal, setCheckboxAll }) {
    const handleAdd = () => {
        let id_ = 'su' + (Number(finalId()) + 1);
        setCreateId(id_);
        setFormAddSupplier(true);
    };

    const handleDelete = () => {
        let text = 'Điều này sẽ làm mất đi tất cả dữ liệu liên quan! Vẫn tiếp tục xóa ?';
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            let tempSupplier = suppliersLocal.filter(
                (supplier) => supplier.isChecked === false || supplier.isChecked === undefined,
            );
            setCheckboxAll(false)
            setLocal('suppliers', tempSupplier)
            setSuppliersLocal(getLocal('suppliers'));
        }
    };

    return (
        <div className="flex items-center my-5">
            <h1 className="text-[28px] font-semibold grow"><i>Danh sách nhà cung cấp</i></h1>
            <div className="flex">
                <Button onClick={handleAdd} confirm>
                    Thêm
                </Button>
                <span className="mx-6"></span>
                <Button onClick={handleDelete} cancel>
                    Xóa
                </Button>
            </div>
        </div>
    );
}

export default SupplierHeader;
