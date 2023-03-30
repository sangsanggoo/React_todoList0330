/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export const mainSide =css`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    height: 800px;
    width: 250px;
    background-color: gray;
    transition: left 1s ease;
    left: -250px;
    top: 0;
`
export const mainSideMenu =css`
    display: flex;
    align-items: center;
    padding-left : 20px;
    font-size: 20px;
    border-bottom: 0.5px solid white;
    width: 230px;
    height: 50px;
    &:hover {
        background-color: #dbdbdb;
        border: 1px solid black;
    }

`
export const hiddenButton = css`
    position: absolute;
    transform: translateY(-50%);
    height: 40px;
    width: 20px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    top: 50%;
    margin-left: 240px;
    transition: left 1s ease;
    &:hover {
        background-color: #dbdbdb;

    }
    &:focus {
        background-color: #dbdbdb;
        
    }
`
export const container = css`
    position: relative;
    margin: 50px auto;
    border: 2px solid #dbdbdb;
    width: 600px;
    height: 800px;
    background-color: white;
    overflow: hidden;
`
export const mainContainer = css`
    margin: 10px auto;
    width: 550px;
    height: 100%;
    
`
export const mainHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 20px;
`
export const mainTitle = css`
    margin: auto;
    font-size: 40px;
`

export const todoInputContainer = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;


    width: 70%;
    height: 40px;
`

export const todoInput = css`
    border: 1px solid #dbdbdb;
    padding: 0 100px;
    width: 100%;
    height: 100%;
    border-radius: 5px;

    transition: padding 0.5s ease;
    justify-content: center;

    &:focus {
        padding: 0px 10px;
        background-color: #dbdbdb;
    }
`

export const addTodoButton = css`
    position: absolute;

    font-size: 20px;
    padding: auto;
    width : 40px;
    height: 40px;
    border: 1px solid #dbdbdb;

    background-color: white;
    font-weight: 600;
    cursor: pointer;
`
export const contentHeader =css`
    height: 650px;
    width: 560px;
    border: 1px solid #dbdbdb;
`
export const todoContentList =css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px;
    margin: 0px;
    width: 550px;
    height: 90%;
    overflow-y: auto;
`
export const todoContent =css`
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    height: 130px;
    width: 250px;
    
`
export const todoContentHeader = css`
    display: flex;
    height: 25%;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    

`

export const todoContentMain = css`
    display: flex;
    height: 50%;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    
`
export const todoContentMainClear = css`
    display: flex;
    height: 50%;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    background-color: #000000aa;
    
`
export const todoContentFooter = css`
    display: flex;
    width: 100%;
    height: 25%;
    justify-content: flex-end;
`
export const todoButton = css`
    width: 50px;
    height: 25px;
    margin-right:5px;
    margin-top: 2px;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    &:hover {
        background-color: #dbdbdb;
    }
`
export const clear = css`
    position: absolute;
    z-index: 99;
    background-color: #000000aa;
    width: 100%;
    height: 100%;
`
export const modalground = css`
    display: flex;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100%;
    width: 100%;
    background-color: #000000aa;
    align-items: center;
    justify-content: center;
`
export const modalcontainer = css`
    display: flex;
    background-color: white;
    width: 600px;
    height: 400px;
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: column;
`

export const modalheader = css`
    border-bottom: 1px solid #dbdbdb;
    height: 20%;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`

export const modalMain = css`
    border: 1px solid #dbdbdb;
    height: 60%;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    
`

export const modalFooter = css`
    display: flex;
    justify-content: flex-end;
`
export const modifyButton = css`
    height: 60px;
    width: 70px;
    margin-right: 20px;
    margin-top: 8px;
`
export const cancelButton = css`
    height: 60px;
    width: 70px;
    margin-right: 20px;
    margin-top: 8px;
`