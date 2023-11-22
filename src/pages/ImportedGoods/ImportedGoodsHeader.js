import { Button } from '~/components/Button';
import configs from '~/configs';

function ImportedGoodsHeader({ onClick }) {
    return (
        <div className="flex items-center justify-between my-5">
            <h1 className="text-[28px] font-semibold">
                <i>Quản lý nhập kho</i>
            </h1>
            <div className="flex">
                <Button onClick={onClick} green>Tạo phiếu nhập kho</Button>
                <span className="mx-6"></span>
                <Button to={configs.routes.inventory} confirm>
                    Trở lại
                </Button>
            </div>
        </div>
    );
}

export default ImportedGoodsHeader;
