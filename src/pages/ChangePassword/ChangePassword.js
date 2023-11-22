import { Button } from '~/components/Button';
import InputPassword from './InputPassword';
import configs from '~/configs';

function ChangePassword() {
    const handleConfirm = () => {
        let text = 'Bạn muốn cập nhật lại mật khẩu!';
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            
        }
    };

    return (
        <div className="w-[100%] h-[100%] flex items-center justify-center">
            <div className="w-[800px] h-[500px] bg-white shadow-xl p-8 rounded-2xl">
                <div className="border-b pb-4">
                    <h1 className="text-2xl font-semibold text-#1C71FF mb-2">Đổi mật khẩu</h1>
                    <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu với người khác</p>
                </div>

                <div className="px-[120px] pt-[60px]">
                    <div className="">
                        <InputPassword title={'Mật khẩu hiện tại'} />
                        <InputPassword title={'Mật khẩu mới'} />
                        <InputPassword title={'Xác nhận mật khẩu'} />
                    </div>

                    <div className="flex justify-end items-center mt-[40px]">
                        <Button confirm to={configs.routes.home} onClick={handleConfirm}>
                            Xác nhận
                        </Button>
                        <span className='mx-6'></span>
                        <Button cancel to={configs.routes.home}>
                            Hủy
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
