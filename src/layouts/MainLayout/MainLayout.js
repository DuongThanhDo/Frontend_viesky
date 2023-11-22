import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

function MainLayout({ children }) {
    return (
        <div className=''>
            <Header />

            <div className='flex h-[calc(100vh-56px)]'>
                <Sidebar />
                <div className='grow h-[100%] bg-#D5E6FB'>{children}</div>
            </div>
        </div>
    );
}

export default MainLayout;
