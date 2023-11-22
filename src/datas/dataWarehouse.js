const goods = [
    {
        id: 'w1',
        name: 'Gạo nàng thơm',
        unit: 'kg',
    },
    {
        id: 'w2',
        name: 'Thịt bò thăn lát',
        unit: 'kg',
    },
    {
        id: 'w3',
        name: 'Thịt ba chỉ',
        unit: 'kg',
    },
    {
        id: 'w4',
        name: 'Thịt heo đùi non',
        unit: 'kg',
    },
    {
        id: 'w5',
        name: 'Thịt gà ta',
        unit: 'kg',
    },
    {
        id: 'w6',
        name: 'Tôm sú',
        unit: 'kg',
    },
    {
        id: 'w7',
        name: 'Thịt bò Wagyu',
        unit: 'kg',
    },
    {
        id: 'w8',
        name: 'Trứng gà',
        unit: 'quả',
    },
    {
        id: 'w9',
        name: 'Nước mắm Phú Quốc',
        unit: 'lít',
    },
    {
        id: 'w10',
        name: 'Nước ngọt Coca- Cola',
        unit: 'thùng',
    },
];

const units = ['kg', 'quả', 'lít', 'chai', 'thùng'];

const receipts = [
    {
        id: 'r1',
        date_added: '2023-09-03 9:22:00',
        supplier: 'Cửa hàng cung cấp thịt Tư Lửa',
        goods: [
            {
                id: 'w1',
                name: 'Nước ngọt Coca',
                unit: 'thùng',
                quantity: 100,
                price: 10,
                date_expiry: '2023-09-06 9:25:00',
            },
        ],
    },
    {
        id: 'r2',
        date_added: '2023-09-03 9:22:00',
        supplier: 'Cherry Store',
        goods: [
            {
                id: 'w8',
                name: 'Trứng gà',
                unit: 'quả',
                quantity: 100,
                price: 20,
                date_expiry: '2023-09-06 9:25:00',
            },
        ],
    },
    {
        id: 'r3',
        date_added: '2023-06-03 9:22:00',
        supplier: 'Cherry Store',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
                price: 20,
                date_expiry: '2023-09-03 9:25:00',
            },
        ],
    },
    {
        id: 'r4',
        date_added: '2023-09-09 9:26:00',
        supplier: 'Cherry Store',
        goods: [
            {
                id: 'w5',
                name: 'Thịt gà ta',
                unit: 'kg',
                quantity: 100,
                price: 20,
                date_expiry: '2023-09-12 9:26:00',
            },
        ],
    },
];

const deliveryBills = [
    {
        id: 'd1',
        date_get_goods: '2023-09-03 7:22:00',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
            },
        ],
    },
    {
        id: 'd2',
        date_get_goods: '2023-09-03 7:26:00',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
            },
        ],
    },
    {
        id: 'd3',
        date_get_goods: '2023-09-04 7:20:00',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
            },
        ],
    },
    {
        id: 'd4',
        date_get_goods: '2023-09-04 7:22:00',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
            },
        ],
    },
    {
        id: 'd5',
        date_get_goods: '2023-09-05 7:28:00',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
            },
        ],
    },
    {
        id: 'd6',
        date_get_goods: '2023-09-06 7:22:00',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
            },
        ],
    },
    {
        id: 'd7',
        date_get_goods: '2023-09-07 7:18:00',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
            },
        ],
    },
    {
        id: 'd8',
        date_get_goods: '2023-09-08 7:21:00',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
            },
        ],
    },
    {
        id: 'd9',
        date_get_goods: '2023-09-09 7:16:00',
        goods: [
            {
                id: 'w10',
                name: 'Nước ngọt Coca- Cola',
                unit: 'thùng',
                quantity: 100,
            },
        ],
    },
];

export { goods, receipts, deliveryBills, units };
