import { Button } from '~/components/Button';
import { FormCalendar } from '~/components/Forms';

function BillHeader({ setDateBefore, setDateAfter }) {
    return (
        <div className="flex w-full items-center mb-2">
            <h1 className="text-[28px] font-semibold grow">
                <i>Quản lý hóa đơn</i>
            </h1>
            <div className="flex">
                <div className="flex grow">
                    <div className="mr-8">
                        <p className="text-5 font-medium mb-2">Từ ngày</p>
                        <FormCalendar setDate={setDateBefore} />
                    </div>
                    <div>
                        <p className="text-5 font-medium mb-2">Đến ngày</p>
                        <FormCalendar setDate={setDateAfter} />
                    </div>
                </div>
                <span className="flex items-center ml-20">
                    <Button onClick={() => alert('Xuất file thành công')} confirm>
                        Xuất Excel
                    </Button>
                </span>
            </div>
        </div>
    );
}

export default BillHeader;
