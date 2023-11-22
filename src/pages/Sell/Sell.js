import { useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import { DiningRoomTable } from '~/components/DiningRoomTable';
import { FormAddTable, FormCombineTable, FormExchangeTable, FormRemoveTable } from '~/components/Forms';
import { getLocal } from '~/functions/func_LocalStorage';

function Sell() {
    const [tablesLocal, setTablesLocal] = useState(getLocal('tables'));
    const [tables_, setTables_] = useState(getLocal('tables'));
    
    const [formTable, setFormTable] = useState({ action: '', status: false });
    const [select, setSelect] = useState(false);
    const [numberBtn, setNumberBtn] = useState(0);
    const [checkbox, setCheckbox] = useState([]);

    useEffect(() => {
        localStorage.setItem('tables', JSON.stringify(tables_));
        setTablesLocal(getLocal('tables'));
    }, [tables_]);

    // ADD Table
    const confirmAddTables = () => {
        let table = [];
        let numberTMP = tables_.length;
        for (let i = 0; i < numberBtn; i++) {
            const tableTMP = {
                number: numberTMP + 1,
                status: false,
                seats: 4,
            };
            numberTMP += 1;

            table = [...table, { ...tableTMP }];
        }
        alert('Thêm bàn thành công');
        setNumberBtn(0);
        setFormTable(() => ({ action: '', status: false }));
        setTables_([...tables_, ...table]);
    };

    const handleAddTable = () => {
        setFormTable(() => {
            if (formTable.status === false || formTable.action !== 'add') {
                if (select) setSelect(!select);
                return { action: 'add', status: true };
            } else {
                if (select) setSelect(!select);
                return { action: '', status: false };
            }
        });
    };

    // Remove Table
    const confirmRemoveTables = () => {
        let text = 'Điều này sẽ làm mất đi tất cả dữ liệu liên quan! Vẫn tiếp tục xóa ?';
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            let table = tables_.splice(0, tables_.length - numberBtn);
            alert('Xóa bàn thành công');
            setNumberBtn(0);
            setFormTable(() => ({ action: '', status: false }));
            setTables_(table);
        }
    };

    const handleRemoveTable = () => {
        setFormTable(() => {
            if (formTable.status === false || formTable.action !== 'remove') {
                if (select) setSelect(!select);
                return { action: 'remove', status: true };
            } else {
                if (select) setSelect(!select);
                return { action: '', status: false };
            }
        });
    };

    // Combine Table
    const confirmCombineTables = () => {
        alert('Gộp bàn thành công');
        if (select) setSelect(!select);
        setFormTable(() => ({ action: '', status: false }));
    };

    const handleCombineTable = () => {
        setFormTable(() => {
            if (formTable.status === false || formTable.action !== 'combine') {
                if (!select) setSelect(!select);
                setCheckbox([]);
                return { action: 'combine', status: true };
            } else {
                setSelect(!select);
                return { action: '', status: false };
            }
        });
    };

    // Exchange table
    const confirmExchangeTables = () => {
        alert('Đổi bàn thành công');
        setFormTable(() => ({ action: '', status: false }));
    };

    const handleExchangeTable = () => {
        setFormTable(() => {
            if (formTable.status === false || formTable.action !== 'exchange') {
                if (select) setSelect(!select);
                return { action: 'exchange', status: true };
            } else {
                if (select) setSelect(!select);
                return { action: '', status: false };
            }
        });
    };

    const cancelTables = () => {
        setNumberBtn(0);
        if (select) setSelect(!select);
        setFormTable(() => ({ action: '', status: false }));
    };

    return (
        <div className={`p-6 ${formTable.status && 'flex'}`}>
            <div className="grow">
                <h1 className="text-[26px] font-semibold mb-4">
                    <i>Chọn bàn để bán hàng</i>
                </h1>
                <div
                    className={`${
                        formTable.status ? 'grid-cols-3 pt-3 pr-5 h-[450px]' : 'grid-cols-5 h-[440px]'
                    } overflow-y-scroll grid gap-x-10 gap-y-6 mb-10 grid-rows-auto30 w-[100%] overflow-hidden hide-scrollbar`}
                >
                    {tablesLocal.length > 0 &&
                        tablesLocal.map((table) => (
                            <DiningRoomTable
                                key={table.number}
                                tables={table}
                                select={select}
                                setCheckbox={setCheckbox}
                                checkbox={checkbox}
                            />
                        ))}
                </div>

                <div className="flex w-[100%] h-[74px] justify-center">
                    <div className="flex px-6 py-3 gap-6 bg-white justify-center rounded-md shadow-lg">
                        <Button onClick={handleAddTable} act={formTable.action === 'add'} sell>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-green-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <span className="ml-1">Thêm bàn</span>
                        </Button>
                        <Button onClick={handleRemoveTable} act={formTable.action === 'remove'} sell>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-red-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <span className="ml-1">Xóa bàn</span>
                        </Button>
                        <Button onClick={handleCombineTable} act={formTable.action === 'combine'} sell>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-yellow-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                                />
                            </svg>

                            <span className="ml-1">Gộp bàn</span>
                        </Button>
                        <Button onClick={handleExchangeTable} act={formTable.action === 'exchange'} sell>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-violet-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                            </svg>

                            <span className="ml-1">Đổi bàn</span>
                        </Button>
                    </div>
                </div>
            </div>

            {formTable.status && (
                <div className="w-[40%] pl-[64px] pr-10">
                    {formTable.action === 'add' && (
                        <FormAddTable
                            onClickCancel={cancelTables}
                            numberBtn={numberBtn}
                            setNumberBtn={setNumberBtn}
                            onClick={confirmAddTables}
                        />
                    )}
                    {formTable.action === 'remove' && (
                        <FormRemoveTable
                            onClickCancel={cancelTables}
                            numberBtn={numberBtn}
                            setNumberBtn={setNumberBtn}
                            onClick={confirmRemoveTables}
                        />
                    )}
                    {formTable.action === 'combine' && (
                        <FormCombineTable
                            values={checkbox}
                            onClick={confirmCombineTables}
                            onClickCancel={cancelTables}
                        />
                    )}
                    {formTable.action === 'exchange' && (
                        <FormExchangeTable onClick={confirmExchangeTables} onClickCancel={cancelTables} />
                    )}
                </div>
            )}
        </div>
    );
}

export default Sell;
