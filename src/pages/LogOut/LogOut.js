import { Button } from "~/components/Button";
import configs from "~/configs";

function LogOut() {
    const handleLogOut = () => {
        alert('Đăng xuất thành công!')
        localStorage.setItem('IS_LOGIN', JSON.stringify(false, undefined, 4));
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-[500px] h-[340px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div className="w-[100px]">
                    <img
                        className="w-full"
                        src="https://s3-alpha-sig.figma.com/img/3d12/8ed9/4d33aec24ff177135172e5aa562c5371?Expires=1701043200&Signature=ee49iHwBUnRMAowUUehECbMUwOl9M1BrRyA5IaI37n47pAIUUeArhbiOiFjLGTO8oJWRqUKHLRpTLH2fxbb048ZDCelsjEtYWvxeh5YpHpZjrX3lYW052Orl1VQqlmR~x8sauROGdoJvsXxAw3CDgnqeX1Ahf-3sTli72FXVqS-aZKff503NSghco5Ob-eq8SsA2uuwWB~K0gIrreww6YrhMUB0jDtV7ltgWKDg4nW0BEQbgsV6Q7GxHa1luTqjhma11OPa9UwIbqiFPWG0~ZJs9HAECCrmBkkXUEqmgh2HYDQkxK2a6uPc6Y9hjsF-sHhDYzNnhXtOOF2G7l3T6kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                    />
                </div>
                <p className="text-[22px] font-medium my-9">Bạn muốn đăng xuất khỏi tài khoản này</p>

                <div className="mt-5 flex">
                    <Button onClick={handleLogOut} to={configs.routes.home} confirm>Đăng xuất</Button>
                    <span className="mx-10"></span>
                    <Button to={configs.routes.home} cancel>Hủy</Button>
                </div>
            </div>
        </div>
    );
}

export default LogOut;
