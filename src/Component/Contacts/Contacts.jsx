
import Navbar from '../../pages/Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Contacthome from './Contacthome';

const Contacts = () => {
    return (
        <div className='min-h-screen '>
            <div className="flex sticky top-0 z-10 bg-littledark ">
                <Navbar></Navbar>
            </div>

        <Contacthome/>



            <Footer />
        </div>
    );
};

export default Contacts;