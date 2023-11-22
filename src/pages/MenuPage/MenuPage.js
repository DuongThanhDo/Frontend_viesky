import { useState } from 'react';
import { Button } from '~/components/Button';
import { Food } from '~/components/Food';
import { FormGoods } from '~/components/Forms';
import { TypeOfFood } from '~/components/TypeOfFood';
import { finalId } from '~/functions';
import { getLocal, setLocal } from '~/functions/func_LocalStorage';

function MenuPage() {
    const [foodsLocal, setFoodsLocal] = useState(getLocal('foods'));

    const [selectType, setSelectType] = useState('Tất cả');
    const [formAddFood, setFormAddFood] = useState(false);
    const [selectFood, setSelectFood] = useState({});

    const handleDeleteFood = () => {
        let text = 'Điều này sẽ làm mất đi tất cả dữ liệu liên quan! Vẫn tiếp tục xóa ?';
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            let tempFoods = foodsLocal.filter((food) => food.isChecked === false || food.isChecked === undefined);
            setLocal('foods', tempFoods)
            setFoodsLocal(tempFoods);
        }
    };

    const createId = () => {
        let id_ = 'f' + (Number(finalId(foodsLocal.length === 0 ? 0 : foodsLocal[foodsLocal.length - 1].id, 1)) + 1);
        return id_;
    };

    return (
        <div className="p-6">
            {formAddFood && (
                <FormGoods
                    setSelectFood={setSelectFood}
                    selectFood={selectFood}
                    setData={setFoodsLocal}
                    data={foodsLocal}
                    id={createId()}
                    title={selectFood.id !== undefined ? 'Sửa món' : 'Thêm món'}
                    setDisplayStatus={setFormAddFood}
                />
            )}
            <div className="flex items-center justify-between gap-[200px] mb-2">
                <TypeOfFood select={selectType} setSelect={setSelectType} />

                <div>
                    <Button onClick={() => setFormAddFood(!formAddFood)} confirm>
                        Thêm
                    </Button>
                    <span className="mx-6"></span>
                    <Button onClick={handleDeleteFood} cancel>
                        Xóa
                    </Button>
                </div>
            </div>

            <div className="h-[480px] grid grid-cols-5 justify-items-center gap-6 overflow-scroll overflow-x-hidden hide-scrollbar pt-4 pr-3">
                {foodsLocal.map((food, index) => {
                    if (selectType === 'Tất cả') {
                        return (
                            <Food
                                menu
                                setDisplayStatus={setFormAddFood}
                                setSelectFood={setSelectFood}
                                datas={foodsLocal}
                                setDatas={setFoodsLocal}
                                key={food.id}
                                foods={food}
                            />
                        );
                    } else if (food.type === selectType)
                        return (
                            <Food
                                menu
                                setDisplayStatus={setFormAddFood}
                                setSelectFood={setSelectFood}
                                datas={foodsLocal}
                                setDatas={setFoodsLocal}
                                key={food.id}
                                foods={food}
                            />
                        );
                    return '';
                })}
            </div>
        </div>
    );
}

export default MenuPage;
