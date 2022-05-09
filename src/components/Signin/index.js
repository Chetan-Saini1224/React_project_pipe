import React from 'react'
import { Container, Form, FormContent,SignInInfo, FormH1, FormInput, FormLabel, FormWrap, Icon,Text,FormButton } from './SigninElements'

const SignIn = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">HO</Icon>

                <FormContent>
                <SignInInfo>
                <span>1) Pigeon Steel Wire Reinforced LPG Hose.</span>
                <span>2) Gasman Metal LPG  Pipe Flexible Hose.</span>
                <span>3) LPG 3-Layer Gas Pipe.</span>
                </SignInInfo> 
                    <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton> 
                        <Text>Forget Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn;