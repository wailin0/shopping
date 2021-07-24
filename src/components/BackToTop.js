import {FaArrowCircleUp} from "react-icons/fa";
import {useState} from "react";


const BackToTop = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)


    return (
        <FaArrowCircleUp className="back-to-top" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    );
}

export default BackToTop
