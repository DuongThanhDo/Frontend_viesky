import { Button } from '~/components/Button';
import configs from '~/configs';

function InventoryControlHeader() {
    return (
        <div className='flex items-center justify-between my-5'>
            <h1 className="text-[28px] font-semibold">
                <i>Quản lý kiểm kho</i>
            </h1>
            <div className='flex'>
                <span className='mx-6'></span>
                <Button to={configs.routes.inventory} confirm>
                    Trở lại
                </Button>
            </div>
        </div>
    );
}

export default InventoryControlHeader;
