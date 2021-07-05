import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Header from '../component/common/Header/index';

const HeaderContainer = ({ match }) => {
    const gnu_menu_lists = [
        {
            menu_txt: "채소",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "친환경",
                "고구마·감자·당근",
                "시금치·쌈채소·나물",
                "브로콜리·파프리카·양배추",
                "양파·대파·마늘·배추",
                "오이·호박·고추",
                "냉동·이색·간편채소",
                "콩나물·버섯",
            ]
        },
        {
            menu_txt: "과일·견과·쌀",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "친환경",
                "제철과일",
                "국산과일",
                "수입과일",
                "간편과일",
                "냉동·건과일",
                "견과류",
                "쌀·잡곡",
            ]
        },
        {
            menu_txt: "수산·해산·건어물",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "제철수산",
                "생선류",
                "굴비·반건류",
                "오징어·낙지·문어",
                "새우·게·랍스터",
                "해산물·조개류",
                "수산가공품",
                "김·미역·해조류",
                "건어물·다시팩",
            ]
        },
        {
            menu_txt: "정육·계란",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "국내산 소고기",
                "수입산 소고기",
                "돼지고기",
                "계란류",
                "닭·오리고기",
                "양념육·돈까스",
                "양고기",
            ]
        },
        {
            menu_txt: "국·반찬·메인요리",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "국·탕·찌개",
                "밀키트·메인요리",
                "밑반찬",
                "김치·젓갈·장류",
                "두부·어묵·부침개",
                "베이컨·햄·통조림",
            ]
        },
        {
            menu_txt: "샐러드·간편식",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "샐러드·닭가슴살",
                "도시락·밥류",
                "파스타·면류",
                "떡볶이·튀김·순대",
                "피자·핫도그·만두",
                "폭립·떡갈비·안주",
                "죽·스프·카레",
                "선식·시리얼",
            ]
        },
        {
            menu_txt: "면·양념·오일",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "파스타·면류",
                "식초·소스·드레싱",
                "양념·액젓·장류",
                "식용유·참기름·오일",
                "소금·설탕·향신료",
                "밀가루·가루·믹스",
            ]
        },
        {
            menu_txt: "생수·음료·우유·커피",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "생수·탄산수",
                "음료·주스",
                "우유·두유·요거트",
                "커피",
                "차",
            ]
        },
        {
            menu_txt: "간식·과자·떡",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "과자·스낵·쿠키",
                "초콜릿·젤리·캔디",
                "떡·한과",
                "아이스크림",
            ]
        },
        {
            menu_txt: "베이커리·치즈·델리",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "식빵·빵류",
                "잼·버터·스프레드",
                "케이크·파이·디저트",
                "치즈",
                "델리",
                "올리브·피클",
            ]
        },
        {
            menu_txt: "건강식품",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "영양제",
                "유산균",
                "홍삼·인삼·꿀",
                "건강즙·건강음료",
                "건강분말·건강한",
                "다이어트·이너뷰티",
                "유아동",
            ]
        },
        {
            menu_txt: "생활용품·리빙",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "휴지·티슈",
                "여성·위생용품",
                "세제·청소용품",
                "하훼·인테리어소품",
                "의약외품·마스크",
                "생활잡화·문구",
                "캠핑용품",
            ]
        },
        {
            menu_txt: "스킨케어·메이크업",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "스킨·미스트·패드",
                "에센스·엠플·로션",
                "크림·오일",
                "클렌징",
                "마스크팩",
                "선케어",
                "메이크업",
                "맨즈케어",
                "뷰티소품·기기",
            ]
        },
        {
            menu_txt: "헤어·바디·구강",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "구강·면도",
                "샴푸·컨디셔너",
                "트리트먼트·팩",
                "헤어에센스·면모",
                "바디워시·스크럽",
                "바디로션·크림",
                "핸드·립·데오",
                "헤어·바디소품",
            ]
        },
        {
            menu_txt: "주방용품",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "주방소모품·잡화",
                "주방·조리도구",
                "냄비·팬·솥",
                "보관용기·텀블러",
                "식기·테이블웨어",
                "컵·잔·커피도구",
            ]
        },
        {
            menu_txt: "가전제품",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "주방가전",
                "생활가전",
                "계절가전",
                "디지털·PC",
                "대형·설치가전",
            ]
        },
        {
            menu_txt: "베이비·키즈",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "분유·간편·이유식",
                "이유식 재료",
                "간식·음식·음료",
                "건강식품",
                "이유·수유용품",
                "기저귀·물티슈",
                "세제·위생용품",
                "스킨·구강케어",
                "완구·잡화류",
            ]
        },
        {
            menu_txt: "반려동물",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
                "강아지 간식",
                "강아지 주식",
                "고양이 간식",
                "고양이 주식",
                "반려동물 용품",
                "배변·위생",
                "소용량·샘플",
            ]
        },
        {
            menu_txt: "컬리의 추천",
            menu_imgURL: "/images/icons/icon_veggies_inactive_pc@2x.1586324570.png",
            sub_menu: [
            ]
        },
    ];

    const [onIcon, setOnIcon] = useState({
        onLocate: false,
        onCart: false,
        onAll: false,
    });

    const onLocateOver = () => {
        setOnIcon({
            onLocate: true
        });

        const location_subinfo = document.querySelector(".location_subinfo");
        location_subinfo.style.display = "block";
    }
    const onLocateOut = () => {
        setOnIcon({
            onLocate: false
        });
        const location_subinfo = document.querySelector(".location_subinfo");
        location_subinfo.style.display = "none";
    }

    const onCartOver = () => {
        setOnIcon({
            onCart: true
        });
    };

    const onCartOut = () => {
        setOnIcon({
            onCart: false
        });

    };

    const onAllOver = () => {
        setOnIcon({
            onAll: true
        });

        let gnb_menu = document.querySelector(".gnb_menu");
        let category_tit = document.querySelector(".category_tit");

        gnb_menu.style.display = "block";
        category_tit.style.color = "#5f0080";
        category_tit.style.fontWeight = "700";
    };

    const onAllOut = () => {
        setOnIcon({
            onAll: false
        });
        let gnb_menu = document.querySelector(".gnb_menu");
        let category_tit = document.querySelector(".category_tit");

        gnb_menu.style.display = "none";
        category_tit.style.color = "black";
        category_tit.style.fontWeight = "400";

    };


    const onMenuInfoOver = () => {
        let subinfo = document.querySelector(".subinfo");
        subinfo.style.display = "block";
    }

    const onMenuInfoOut = () => {
        let subinfo = document.querySelector(".subinfo");
        subinfo.style.display = "none";
    }

    const onCategoryInfoOver = () => {
        let gnb_menu = document.querySelector(".gnb_menu");
        gnb_menu.style.width = "440px";

    }
    const onCategoryInfoOut = () => {
        let gnb_menu = document.querySelector(".gnb_menu");
        gnb_menu.style.width = "219px";
    }

    let url = match.path;
    let urlProp;

    if (url.includes("best")) {
        urlProp = "best";
    }
    else if (url.includes("new")) {
        urlProp = "new";
    }
    else if (url.includes("sale")) {
        urlProp = "sale";
    }
    else if (url.includes("event")) {
        urlProp = "event";
    }

    return (
        <Header
            lists={gnu_menu_lists}
            urlProp={urlProp}
            onLocateOver={onLocateOver}
            onLocateOut={onLocateOut}
            onCartOver={onCartOver}
            onCartOut={onCartOut}
            onAllOver={onAllOver}
            onAllOut={onAllOut}
            onMenuInfoOver={onMenuInfoOver}
            onMenuInfoOut={onMenuInfoOut}
            onCategoryInfoOver={onCategoryInfoOver}
            onCategoryInfoOut={onCategoryInfoOut}
            onIcon={onIcon}
        />
    );
};

export default withRouter(HeaderContainer);