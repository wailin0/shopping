import {FaHome, FaTag, FaUserCircle} from "react-icons/fa";

const BottomTab = () => {
    return (
        <div className='bottom-tab'>
            <div>
                <FaHome size={17}/>
                <p>Home</p>
            </div>
            <div>
                <FaTag size={17}/>
                <p>Offer</p>
            </div>
            <div>
                <FaUserCircle size={17}/>
                <p>User</p>
            </div>

        </div>
    )
}

export default BottomTab
