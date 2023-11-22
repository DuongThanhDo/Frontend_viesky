import TypeOfFoodItem from './TypeOfFoodItem';

function TypeOfFood({ select, setSelect }) {

    return (
        <div className="flex justify-between grow">
            <TypeOfFoodItem
                select={select === 'Tất cả'}
                onClick={() => setSelect('Tất cả')}
                title={'Tất cả'}
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-[65%] h-[65%]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        />
                    </svg>
                }
            />
            <TypeOfFoodItem
                select={select === 'Khai vị'}
                onClick={() => setSelect('Khai vị')}
                title={'Khai vị'}
                image={
                    'https://png.pngtree.com/thumb_back/fh260/background/20220301/pngtree-tasty-salad-snack-appetizer-pepper-photo-image_5085130.jpg'
                }
            />
            <TypeOfFoodItem
                select={select === 'Món chính'}
                onClick={() => setSelect('Món chính')}
                title={'Món chính'}
                image={
                    'https://png.pngtree.com/png-clipart/20220228/original/pngtree-cartoon-raw-meat-steaks-beef-vector-illustration-png-image_7323995.png'
                }
            />
            <TypeOfFoodItem
                select={select === 'Tráng miệng'}
                onClick={() => setSelect('Tráng miệng')}
                title={'Tráng miệng'}
                image={'https://phunugioi.com/wp-content/uploads/2022/02/Anh-Do-An-Cute-2.jpg'}
            />
            <TypeOfFoodItem
                select={select === 'Đồ uống'}
                onClick={() => setSelect('Đồ uống')}
                title={'Đồ uống'}
                image={
                    'https://png.pngtree.com/png-vector/20230823/ourmid/pngtree-cartoon-line-drink-icon-with-two-straws-vector-png-image_6859507.png'
                }
            />
        </div>
    );
}

export default TypeOfFood;
