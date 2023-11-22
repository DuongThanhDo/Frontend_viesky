import { Button } from '~/components/Button';
import configs from '~/configs';

function InventoryHeader() {
    return (
        <div className='flex items-center justify-between my-5'>
            <h1 className="text-[28px] font-semibold">
                <i>Tồn kho</i>
            </h1>
            <div className='flex'>
                <Button to={configs.routes.importedGoods} green>
                    Quản lý nhập kho
                </Button>
                <span className='mx-6'></span>
                <Button to={configs.routes.exportedGoods} green>
                    Quản lý xuất kho
                </Button>
                <span className='mx-6'></span>
                <Button to={configs.routes.warehouse} confirm>
                    Trở lại
                </Button>
            </div>
        </div>
    );
}

export default InventoryHeader;
