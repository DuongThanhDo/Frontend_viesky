import { Button } from '../Button';

function FormTable({
    to,
    children,
    onClickConfirm,
    onClickSave,
    onClickCancel,
    formEditTable = false,
    formBill = false,
    formPay = false,
}) {
    return (
        <div className="max-w-[400px] h-[100%] bg-white rounded-lg shadow-lg border border-act px-4 py-6">
            <div className="h-[90%] flex justify-center items-center">{children}</div>
            {formEditTable ? (
                <div className="flex justify-between px-10">
                    <Button onClick={onClickConfirm} confirm>
                        Xác nhận
                    </Button>
                    <Button onClick={onClickCancel} cancel>
                        Hủy
                    </Button>
                </div>
            ) : formBill ? (
                <div className="flex justify-between gap-2">
                    <Button onClick={onClickConfirm} confirm>
                        <span className='text-[14px]'>Thanh toán</span>
                    </Button>
                    <Button onClick={onClickSave} save>
                        Lưu
                    </Button>
                    <Button to={to} onClick={onClickCancel} cancel>
                        Hủy
                    </Button>
                </div>
            ) : formPay ? (
                <div className="flex justify-between px-4">
                    <Button to={to} onClick={onClickConfirm} confirm>
                        In hóa đơn
                    </Button>
                    <Button onClick={onClickCancel} cancel>
                        Hủy
                    </Button>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default FormTable;
