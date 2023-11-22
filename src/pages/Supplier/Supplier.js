/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import SupplierHeader from './SupplierHeader';
import SupplierItem from './SupplierItem';
import SupplierList from './SupplierList';
import { finalId } from '~/functions';
import { getLocal, setLocal } from '~/functions/func_LocalStorage';

function Supplier() {
    const [suppliersLocal, setSuppliersLocal] = useState(getLocal('suppliers'));

    const [formAddSupplier, setFormAddSupplier] = useState(false);
    const [supplierItem, setSupplierItem] = useState({ id: '', name: '', address: '', phone_number: '' });
    const [createId, setCreateId] = useState('');
    const [checkboxAll, setCheckboxAll] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        if (supplierItem.id === '') return; 
        setLocal('suppliers', [...suppliersLocal, supplierItem])
        setSuppliersLocal(getLocal('suppliers'));
        setSupplierItem({ id: '', name: '', address: '', phone_number: '' });
        console.log('ok');
    }, [supplierItem]);

    return (
        <div className="px-6 h-full pt-2">
            <SupplierHeader
                setCheckboxAll={setCheckboxAll}
                suppliersLocal={suppliersLocal}
                setSuppliersLocal={setSuppliersLocal}
                finalId={() => finalId(suppliersLocal.length === 0 ? 0 : suppliersLocal[suppliersLocal.length - 1].id, 2)}
                setCreateId={setCreateId}
                setFormAddSupplier={setFormAddSupplier}
            />
            <SupplierList
                id={createId}
                checkboxAll={checkboxAll}
                setCheckboxAll={setCheckboxAll}
                setSuppliersLocal={setSuppliersLocal}
                suppliersLocal={suppliersLocal}
                setSupplierItem={setSupplierItem}
                formAddSupplier={formAddSupplier}
                setFormAddSupplier={setFormAddSupplier}
            >
                {suppliersLocal.map((supplier, index) => (
                    <SupplierItem
                        setSuppliersLocal={setSuppliersLocal}
                        suppliersLocal={suppliersLocal}
                        key={index}
                        supplier={supplier}
                    />
                ))}
            </SupplierList>
        </div>
    );
}

export default Supplier;
