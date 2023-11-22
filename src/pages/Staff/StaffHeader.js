import { Button } from '~/components/Button';
import configs from '~/configs';
import { setLocal } from '~/functions/func_LocalStorage';

function StaffHeader({ setFormStaffs, setCreateId, finalId, staffsLocal, setStaffsLocal, setCheckboxAll }) {
    const handleAdd = () => {
        let id_ = 'st' + (Number(finalId()) + 1);
        setCreateId(id_);
        setFormStaffs(true);
    };

    const handleDelete = () => {    
        let text = 'Điều này sẽ làm mất đi tất cả dữ liệu liên quan! Vẫn tiếp tục xóa ?';
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            let tempStaff = staffsLocal.filter(
                (staff) => staff.isChecked === false || staff.isChecked === undefined,
            );
            setCheckboxAll(false)
            setLocal('staffs', tempStaff)
            setStaffsLocal(tempStaff);
        }
    };

    return (
        <div className="flex items-center my-5">
            <h1 className="text-[28px] font-semibold grow"><i>Quản lý nhân viên</i></h1>
            <div className="flex">
                <Button onClick={handleAdd} confirm>
                    Thêm
                </Button>
                <span className="mx-6"></span>
                <Button onClick={handleDelete} cancel>
                    Xóa
                </Button>
                <span className="mx-6"></span>
                <Button to={configs.routes.decentralize} green>
                    PHÂN QUYỀN
                </Button>
            </div>
        </div>
    );
}

export default StaffHeader;
