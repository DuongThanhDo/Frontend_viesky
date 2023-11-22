import { Button } from '~/components/Button';
import configs from '~/configs';
import { getLocal, setLocal } from '~/functions/func_LocalStorage';

function WarehouseHeader({ setFormAddGoods, setCreateId, finalId, goodsLocal, setGoodsLocal, setCheckboxAll }) {
    const handleAdd = () => {
        let id_ = 'w' + (Number(finalId()) + 1);
        setCreateId(id_);
        setFormAddGoods(true);
    };

    const handleDelete = () => {    
        let text = 'Điều này sẽ làm mất đi tất cả dữ liệu liên quan! Vẫn tiếp tục xóa ?';
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            let tempGoods = goodsLocal.filter(
                (goods) => goods.isChecked === false || goods.isChecked === undefined,
            );
            setCheckboxAll(false)
            setLocal('goods', tempGoods)
            setGoodsLocal(getLocal('goods'));
        }
    };

    return (
        <div className="flex items-center my-5">
            <h1 className="text-[28px] font-semibold grow"><i>Quản lý hàng hóa</i></h1>
            <div className="flex">
                <Button onClick={handleAdd} confirm>
                    Thêm
                </Button>
                <span className="mx-6"></span>
                <Button onClick={handleDelete} cancel>
                    Xóa
                </Button>
                <span className="mx-6"></span>
                <Button to={configs.routes.inventory} green>
                    TỒN KHO
                </Button>
            </div>
        </div>
    );
}

export default WarehouseHeader;
