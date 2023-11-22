/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { dataChart } from '~/datas/dataRevenue';
import { useEffect, useState } from 'react';
import { changeDate, checkToDay, printDate } from '~/functions';

function RevenueChart({ dateBefore, dateAfter, setTotal }) {
    const [dataChart_, setDataChart_] = useState([]);

    useEffect(() => {
        const tempWeek = [];
        let date = dateBefore;

        while (date >= dateBefore && date <= dateAfter) {
            let check = 0;
            // eslint-disable-next-line no-loop-func, array-callback-return
            dataChart.map((item) => {
                if (checkToDay(new Date(item.date), date)) {
                    tempWeek.push({
                        date: printDate(new Date(item.date), 3),
                        revenue: item.revenue,
                    });
                    check = 1;
                    return;
                }
            });
            if (!check) {
                tempWeek.push({
                    date: printDate(date, 3),
                    revenue: 0,
                });
            }
            date = changeDate(date, 1);
        }

        setTotal(tempWeek.reduce((t, item) => (item.revenue + t), 0))
        setDataChart_(tempWeek);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateBefore, dateAfter]);

    const data = {
        labels: dataChart_.map((item) => item.date),
        datasets: [
            {
                label: 'Biểu đồ doanh thu',
                data: dataChart_.map((item) => item.revenue),
            },
        ],
    };

    return (
        <div className="w-[100%] h-[78%] flex items-center justify-center bg-white rounded-xl shadow-xl">
            <div className="w-[70%]">
                <Bar data={data} />
            </div>
        </div>
    );
}

export default RevenueChart;
