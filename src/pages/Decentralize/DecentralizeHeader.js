import { Button } from '~/components/Button';
import configs from '~/configs';
import { positions } from '~/datas/dataStaff';

function DecentralizeHeader() {
    return (
        <div className='flex mt-1 mb-6'>
            <h1 className="text-[28px] font-semibold grow">
                <i>Phân quyền nhân viên</i>
            </h1>

            <div className='flex items-center gap-20'>
                <div className='flex items-center'>
                    <p className='w-[100px] font-medium text-[18px]'>Chức vụ</p>
                    <select
                        name="type"
                        id="type"
                        className="w-[100%] border-2 text-[16px] font-normal border-gray-400 rounded-md p-2 outline-none mt-[3px]"
                    >
                        {positions.map((item, index) => (
                            <option key={index}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className='flex'>
                    <Button to={configs.routes.staff} onClick={() => alert('Lưu thành công!')} confirm>Lưu</Button>
                    <span className='mx-6'></span>
                    <Button to={configs.routes.staff} cancel>Hủy</Button>
                </div>
            </div>
        </div>
    );
}

export default DecentralizeHeader;
