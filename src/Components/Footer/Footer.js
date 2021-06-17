import React from 'react';
import {
    Footer
} from './FooterStyle';



const footer = () => {
    return (
        <Footer>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="stage right-blk">
                <img className="box bounce-6" src="images/kid-boy.jpg" alt="ABCD" />
            </div>
            <div className="stage left-blk">
                <img className="box bounce-6" src="images/kid-2.jpg" alt="ABCD" />
            </div>
        </Footer>
    )
}

export default footer;