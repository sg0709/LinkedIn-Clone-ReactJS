import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Redirect } from 'react-router';

export const Login = (props) => {
    return (
        <Container>
            {
                props.user && 
                <Redirect to = '/home' />
            }
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt=""/>
                </a>
                <div>
                    <Join>
                        Join Now    
                    </Join>
                    <SignIn>
                        Sign in
                    </SignIn>
                </div>
            </Nav>
            <Section>
                <Welcome>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg"/>
                </Welcome>
                <Form>
                    <Google onClick = {() => props.signIn()}>
                        <img src="/images/google.svg" alt=""/>
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
};

const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
        width: 135px;
        height: 35px;
        @media (max-width: 768px)
        {
            padding: 0 5px;
        }
    }
    @media (max-width: 350px){
        flex-direction: column;
        &>a{
            margin-bottom: 20px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 2px;
    color: rgb(0,0,0,0.7);
    margin-right: 12px;
    transition-duration: 150ms;
    &:hover{
        background-color: rgb(0,0,0,0.08);
        color: rgb(0,0,0,0.9);
        cursor: pointer;
    }
`;

const SignIn = styled.a`
    font-size: 16px;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    margin-right: 12px;
    transition-duration: 150ms;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    &:hover{
        background-color: rgb(112,181,249,0.18);
        color: #0a66c2;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Section = styled.div`
    display: flex;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    align-items: center;
    flex-wrap: wrap;
    padding: 60px 0;
    width: 100%;
    max-width: 1128px;
    align-content: start;
    margin: auto;
    position: relative;

    @media (max-width:768px)
    {
        margin: auto;
        padding: 40px;
        min-height: 0px;
    }
`;

const Welcome = styled.div`
    width: 100%;
    h1{
        padding: 0px;
        width: 55%;
        font-size: 55px;
        font-weight: 200;
        color: #2977c9;
        line-height: 70px;

        @media (max-width: 768px) {
            text-align: center;
            font-size: 30px;
            width: 100%;
            line-height: 2;
        }
    }

    img{
        width: 760px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right:-180px;

        @media (max-width:768px)
        {
            //top: 230px;
            position: inherit;
            flex-direction: column;
            width: initial;
            height: initial;

        }
    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    height: 56px;
    align-items: center;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    width: 100%;
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }

`;


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);