import { Link, Outlet } from 'react-router-dom';
import Navbar from '../final/components/Navbar';
const SharedLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className='section' id='shared'>
                <Outlet />
            </section>
        </>
    );
};
export default SharedLayout;
