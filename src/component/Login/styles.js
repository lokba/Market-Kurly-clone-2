import styled from "styled-components";

export const LoginBox = styled.div`
    width:100%;

    .loginForm{
        width:340px;
        margin:0 auto;
        padding-top:90px;
        padding-bottom:120px;
    }

    .login_tit{
        font-size:20px;
        line-height:20px;
        text-align:center;
        font-weight :800;
        padding-bottom:36px;
    }

    .write_form{
        display:flex;
        flex-direction:column;
    }

    .write_form > input{
        height:54px;
        padding:0 19px;
        border:1px solid #ccc;
        border-radius:3px;
        font-size:14px;
        line-height:20px;
        outline:none;
        background-color:#fff;
        margin-bottom:10px;
    }

    .login_subInfo{
        display:flex;
        justify-content: space-between;
        font-size:13px;
        align-items: center;
        padding-bottom:28px;
    }

    .clickBox{
        display: flex;
        align-items: center;
        cursor:pointer;
    }

    .clickBox>div{
        padding-left:3px;
    }

    .checkbox_save img{
        margin-bottom:1px;
    }

    .off{
        display:none;
    }

    .login_search{
        color:black;
    }

    .bar{
        background-color:#333;
        width:1px;
        margin:0 3px;
        height:10px;
        display:inline-block;
    }

    .btnBox{
        display:flex;
        flex-direction: column;   
    }
    .btnBox>a{
        display:block;
    }

    .btnBox span{
        display:block;
        border:1px solid #5f0081;
        height:54px;
        border-radius:3px;
        text-align:center;
        font-size:16px;
        font-weight:500;
        line-height: 51px;
        cursor:pointer;
        
    }

    .loginBtn{
        background-color:#5f0080;
        color:white;
        margin-bottom:10px;
    }

    .registerBtn{
        background-color:#fff;
        color:#5f0080;
    }

`;
