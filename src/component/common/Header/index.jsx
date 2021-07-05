import React, { useEffect, useState } from 'react';
import { HeaderBox, NavBox } from './styles';

const Header = ({ lists, urlProp }) => {

    useEffect(() => {
        if (urlProp) {
            let menu = document.querySelector(`#${urlProp}`);
            menu.classList.add("menu_on");
        }
    }, [urlProp]);

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

    let gnb_menu_list = document.querySelectorAll(".gnb_menu_list");
    const gnb_menu_lists = Array.from(gnb_menu_list);

    gnb_menu_lists.map(value => value.addEventListener("mouseover", () => {
        value.classList.add("current");
        const currentInfo = value.querySelector(".sub_menu");
        const currentParent = value.querySelector(".inner_menu");
        currentInfo.style.display = "block";
        currentParent.style.color = "#5f0080";
        currentParent.style.fontWeight = "700";

        const inner_menu = value.querySelector('.inner_menu');
        let all_icon = inner_menu.querySelector('img');
        all_icon.setAttribute('src', '/images/icons/icon_veggies_active_pc@2x.1586324570.png');
    }))


    gnb_menu_lists.map(value => value.addEventListener("mouseout", () => {
        value.classList.remove("current");
        const currentInfo = value.querySelector(".sub_menu");
        const currentParent = value.querySelector(".inner_menu");


        const inner_menu = value.querySelector('.inner_menu');
        let all_icon = inner_menu.querySelector('img');
        all_icon.setAttribute('src', '/images/icons/icon_veggies_inactive_pc@2x.1586324570.png');

        currentInfo.style.display = "none";
        currentParent.style.color = "black";
        currentParent.style.fontWeight = "400";
    }))


    return (
        <>
            <HeaderBox>
                <div id="userMenu">
                    <a href="/">
                        <img alt="" src="/images/icons/delivery.png" />
                    </a>
                    <div id="menu_lists">
                        <div id="register">
                            <a href="/shop/member/join">
                                <li className="register_link">회원가입</li>
                            </a>
                        </div>
                        <div id="login">
                            <a href="/shop/member/login">
                                <li>로그인</li>
                            </a>
                        </div>
                        <div id="info" onMouseOver={onMenuInfoOver} onMouseOut={onMenuInfoOut}>
                            <li>고객센터</li>
                            <img alt="" src="/images/icons/ico_down.png" />
                            <ul className="subinfo">
                                <li>공지사항</li>
                                <li>자주하는 질문</li>
                                <li>1:1 문의</li>
                                <li>상품 제안</li>
                                <li>에코포장 피드백</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="logoArea">
                    <a href="/" id="logo">
                        <img alt="" src="/images/icons/logo_x2.png" />
                    </a>
                </div>
            </HeaderBox>
            <NavBox>
                <div id="category" onMouseOver={onAllOver} onMouseOut={onAllOut}>
                    <div className="category_info" >
                        {
                            onIcon.onAll ?
                                (<img alt="" id="location_img" src="/images/icons/ico_gnb_all_checked.png" />)
                                :
                                (<img alt="" id="location_img" src="/images/icons/ico_all.png" />)
                        }
                        <li className="category_tit">전체 카테고리</li>
                    </div>
                    <div className="gnb_menu" onMouseOver={onCategoryInfoOver} onMouseOut={onCategoryInfoOut}>
                        <ul>
                            {
                                lists.map(
                                    list => (
                                        <li className="gnb_menu_list" >
                                            <div className="inner_menu" >
                                                <img alt="" className="i_menu_img" src={list.menu_imgURL} />
                                                <div className="i_menu_txt">{list.menu_txt}</div>
                                            </div>
                                            <ul className="sub_menu">
                                                {
                                                    list.sub_menu.map(menu =>
                                                    (
                                                        <li>{menu}</li>
                                                    )
                                                    )
                                                }
                                            </ul>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
                <a href="/shop/goods/goods_list/new">
                    <li id="new" className="menu">신상품</li>
                </a>
                <a href="/shop/goods/goods_list/best">
                    <li id="best" className="menu">베스트</li>
                </a>
                <a href="/shop/goods/goods_list/sale">
                    <li id="sale" className="menu">알뜰쇼핑</li>
                </a>
                <a href="/shop/goods/event">
                    <li id="event" className="menu">특가/혜택</li>
                </a>
                <div id="search">
                    <input />
                    <img alt="" src="/images/icons/ico_search.png" />
                </div>
                <div id="location" onMouseOver={onLocateOver} onMouseOut={onLocateOut}>
                    {
                        onIcon.onLocate ?
                            (<img alt="" id="location_img" src="/images/icons/ico_delivery_setting_checked.svg" />)
                            :
                            (<img alt="" id="location_img" src="/images/icons/ico_location.svg" />)
                    }
                    <div className="location_subinfo">
                        <div><span>배송지를 등록</span>하고</div>
                        <div>구매 가능한 상품을 확인하세요!</div>
                        <div className="location_btn_box">
                            <a href="/shop/member/login">
                                <div className="location_loginBtn locationBtn">로그인</div>
                            </a>
                            <div className="location_addressBtn locationBtn">
                                <img alt="" src="/images/icons/ico_search_white.png" />
                                <div>주소검색</div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/shop/goods/goods_cart" id="cart" onMouseOver={onCartOver} onMouseOut={onCartOut}>
                    {
                        onIcon.onCart ?
                            (<img alt="" id="location_img" src="/images/icons/ico_cart_checked.svg" />)
                            :
                            (<img alt="" id="cart_img" src="/images/icons/ico_cart.svg" />)
                    }
                </a>
            </NavBox>
        </>
    );
};

export default Header;