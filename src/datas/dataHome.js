const staffs = [
    {
        name: 'Nguyễn Văn Tín',
        position: 'Nhân viên điểm món',
        shift: 'Ca chiều',
    },
    {
        name: 'Nguyễn Văn Hùng',
        position: 'Nhân viên bếp',
        shift: 'Ca sáng',
    },
    {
        name: 'Nguyễn Văn Chính',
        position: 'Nhân viên phục vụ',
        shift: 'Ca sáng',
    },
    {
        name: 'Nguyễn Văn Dương',
        position: 'Nhân viên thu ngân',
        shift: 'Ca sáng',
    },
];

const multiTableState = [
    {
        number: 1,
        status: 'Hoàn thành',
        dishComplete: 0,
        dishUnfinished: 8
    },
    {
        number: 2,
        status: 'Đang làm',
        dishComplete: 2,
        dishUnfinished: 4
    },
    {
        number: 4,
        status: 'Chưa làm',
        dishComplete: 6,
        dishUnfinished: 0
    },
    {
        number: 5,
        status: 'Hoàn thành',
        dishComplete: 0,
        dishUnfinished: 5
    },
]

export { staffs, multiTableState }
