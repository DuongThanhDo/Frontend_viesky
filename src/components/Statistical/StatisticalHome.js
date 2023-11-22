function StatisticalHome({ title, icon, content, colorBg }) {
    return (
        <div className="w-[100%] h-[140px] shrink bg-white rounded-2xl py-4 px-6 shadow-lg">
            <div className="flex items-center">
                <div className={`${colorBg} w-[40px] h-[40px] flex items-center justify-center rounded-lg mr-6`}>
                    {icon}
                </div>
                <p className="text-[18px] font-semibold">{title}</p>
            </div>
            <div className="flex justify-center mt-3">
                <p className="text-[28px] font-bold">{content}</p>
            </div>
        </div>
    );
}

export default StatisticalHome;
