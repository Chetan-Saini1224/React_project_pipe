import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
min-height: 628px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background-color: #ff4e00;
background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
`

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px){
    height: 80%;
}
`


export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen  and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}

`
export const SignInInfo = styled.h1`
width: 600px;
color: #fff;
font-size: 20px;
font-weight: 400;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-left: 1rem;

span
{
    align-self: flex-start;
    margin-bottom: 5px;
}
`

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
@media screen and (max-width: 480px){
    padding: 10px;
}
`

export const Form = styled.form`
background: #fff;
opacity: 0.9;
max-width: 400px;
height: 500px;
width: 100%;
z-index: 1;
align-self: center;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400px){
    padding: 32px 32px;
}

`

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #ff4e00;
font-size: 20px;
font-weight: 400;
text-align: center;
`
export const FormLabel = styled.label`
margin-bottom: 8px;
font-size:  14px;
color: #ff4e00;
`

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: 2px solid #ec9f05;
border-radius: 4px;
outline: none;
`
export const FormButton = styled.button`
background: #ff4e00;
padding:  16px 0;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`


export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`










































