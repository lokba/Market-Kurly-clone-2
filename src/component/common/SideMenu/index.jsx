import React from 'react';

const SideMenu = () => {
    return (
        <>
            <div className="side_menu">
                <div className="side_menu_img">
                    <img src="images/icons/side_btn.png" />
                </div>
                <div className="side_menu_box">등급별 혜택</div>
                <div className="side_menu_box">레시피</div>
                <div className="side_menu_box">베스트 후기</div>
                <div className="recent_good">
                    <div className="ico_side">
                        <img src="images/icons/ico_side_up.png" />
                    </div>
                    <div className="recent_good_txt">최근 본 상품</div>
                    <div className="recent_img">
                        <img src="images/icons/ico_center.jpeg" />
                    </div>
                    <div className="ico_side">
                        <img src="images/icons/ico_side_down.png" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideMenu;