import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";


const Home = () => {
    return (
        <div className='flex border-[.5px] border-white sm:h-[450px] md:h-[550px] rounded-md overflow-hidden'>
            <Sidebar />
            <MessageContainer />
        </div>
    );
};
export default Home;