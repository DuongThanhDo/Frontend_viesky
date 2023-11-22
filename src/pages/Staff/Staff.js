/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import StaffHeader from './StaffHeader';
import StaffItem from './StaffItem';
import StaffList from './StaffList';
import { finalId } from '~/functions';
import { FormStaff } from '~/components/Forms';
import { getLocal, setLocal } from '~/functions/func_LocalStorage';

function Staff() {
    const [staffsLocal, setStaffsLocal] = useState(getLocal('staffs'));

    const [formStaffs, setFormStaffs] = useState(false);
    const [staffsItem, setStaffsItem] = useState();
    const [createId, setCreateId] = useState('');
    const [selectStaff, setSelectStaff] = useState();
    const [checkboxAll, setCheckboxAll] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        if (staffsItem === undefined) return;
        setLocal('staffs', [...staffsLocal, staffsItem])
        setStaffsLocal([...staffsLocal, staffsItem]);
        setStaffsItem();
    }, [staffsItem]);

    return (
        <div className="px-6 h-full pt-2">
            {formStaffs && (
                <FormStaff
                    setData={setStaffsLocal}
                    data={staffsLocal}
                    id={createId}
                    setStaffsItem={setStaffsItem}
                    formStaffs={formStaffs}
                    setFormStaffs={setFormStaffs}
                    selectStaff={selectStaff}
                    setSelectStaff={setSelectStaff}
                    title={selectStaff === undefined ? 'Thêm nhân viên' : 'Sửa nhân viên'}
                />
            )}
            <StaffHeader
                setCheckboxAll={setCheckboxAll}
                staffsLocal={staffsLocal}
                setStaffsLocal={setStaffsLocal}
                finalId={() => finalId(staffsLocal.length === 0 ? 0 : staffsLocal[staffsLocal.length - 1].id, 2)}
                setCreateId={setCreateId}
                setFormStaffs={setFormStaffs}
            />
            <StaffList
                setStaffsLocal={setStaffsLocal}
                staffsLocal={staffsLocal}
                checkboxAll={checkboxAll}
                setCheckboxAll={setCheckboxAll}
            >
                {staffsLocal.map((staff, index) => (
                    <StaffItem
                        setFormStaffs={setFormStaffs}
                        setSelectStaff={setSelectStaff}
                        setStaffsLocal={setStaffsLocal}
                        staffsLocal={staffsLocal}
                        key={index}
                        staff={staff}
                    />
                ))}
            </StaffList>
        </div>
    );
}

export default Staff;
