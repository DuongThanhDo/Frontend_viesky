export const checkToDay = (date1, date2) => {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
};

export const addZero = (number) => {
    if (Number(number) < 10) return '0' + number;

    return number;
};

export const printDate = (date, type) => {
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const date_ = addZero(date.getDate());
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());

    console.log(month, date_);

    // yyyy-MM-dd
    if (type === 1) {
        return year + '-' + month + '-' + date_;
    }

    // dd-MM-yyyy
    if (type === 2) {
        return date_ + '-' + month + '-' + year;
    }

    // dd-MM
    if (type === 3) {
        return date_ + '-' + month;
    }

    // yyyy-MM-dd hh:mm:ss
    return year + '-' + month + '-' + date_ + ' ' + hours + ':' + minutes + ':' + seconds;
};

export const changeDate = (date, index) => {
    let date_ = date;

    return new Date(new Date(date_).setDate(new Date(date_).getDate() + index));
};

export const firstDayOfWeek = (date) => {
    let date_ = date;
    let i = 7;

    while (i > 0) {
        if (date_.getDay() === 1) return date_;
        date_ = changeDate(date_, -1);
        i = i - 1;
    }

    return;
};

export const printMonthAndYearOfWeek = (dateFirst, dateLast) => {
    const yearFirst = dateFirst.getFullYear();
    const yearLast = dateLast.getFullYear();
    const monthFirst = addZero(dateFirst.getMonth() + 1);
    const monthLast = addZero(dateLast.getMonth() + 1);

    if (dateFirst.getFullYear() !== dateLast.getFullYear()) {
        return 'Tháng ' + monthFirst + ', ' + yearFirst + ' - Tháng ' + monthLast + ', ' + yearLast;
    }

    if (dateFirst.getMonth() !== dateLast.getMonth()) {
        return 'Tháng ' + monthFirst + ' - Tháng ' + monthLast + ', ' + yearFirst;
    }

    return 'Tháng ' + monthFirst + ', ' + yearFirst;
};
