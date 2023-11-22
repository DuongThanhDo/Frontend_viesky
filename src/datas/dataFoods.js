const foods = [
    {
        id: 'f1',
        name: 'Bò hầm rau củ kiểu Pháp',
        type: 'Món chính',
        price: 1000,
        image: 'https://fujifoods.vn/wp-content/uploads/2021/12/bo-ham-nam-1.jpg',
        quantity_sold: 1200,
        quantity: 0,
        status: 'đang',
        node: ''
    },
    {
        id: 'f2',
        name: 'Salad đậu đen Mexico',
        type: 'Khai vị',
        price: 1000,
        image: 'https://hrv.com.vn/wp-content/uploads/2021/04/salad-bo-kieu-mexico-mon-an-tot-cho-suc-khoe-va-ngon-mieng-guacamole2.jpg',
        quantity_sold: 1500,
        quantity: 0,
        status: 'chưa',
        node: ''
    },
    {
        id: 'f3',
        name: 'Bruschetta của Ý',
        type: 'Món chính',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1530,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f4',
        name: 'Soup Solyanka',
        type: 'Món chính',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurzYUyTd7-DXeugkVBGcrW2MsAl9zjEgm2w&usqp=CAU',
        quantity_sold: 1430,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f5',
        name: 'Bruschetta của Ý',
        type: 'Tráng miệng',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f6',
        name: 'Bruschetta của Ý',
        type: 'Món chính',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f7',
        name: 'Bruschetta của Ý',
        type: 'Món chính',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f8',
        name: 'Bruschetta của Ý',
        type: 'Tráng miệng',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f9',
        name: 'Bruschetta của Ý',
        type: 'Tráng miệng',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f10',
        name: 'Bruschetta của Ý',
        type: 'Đồ uống',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f11',
        name: 'Bruschetta của Ý',
        type: 'Đồ uống',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f12',
        name: 'Bruschetta của Ý',
        type: 'Đồ uống',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f13',
        name: 'Bruschetta của Ý',
        type: 'Đồ uống',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f14',
        name: 'Bruschetta của Ý',
        type: 'Đồ uống',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f15',
        name: 'Bruschetta của Ý',
        type: 'Đồ uống',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f16',
        name: 'Bruschetta của Ý',
        type: 'Đồ uống',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
    {
        id: 'f17',
        name: 'Bruschetta của Ý',
        type: 'Đồ uống',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5wr39WtZ-A7Q-OeTTq_MrPXArjy6WfBT8A&usqp=CAU',
        quantity_sold: 1100,
        quantity: 0,
        status: 'đã',
        node: ''
    },
]

const typeFood = ['Khai vị', 'Món chính', 'Tráng miệng', 'Đồ uống']

export { foods, typeFood }