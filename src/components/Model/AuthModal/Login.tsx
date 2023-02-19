import { authModalState } from '@/src/atoms/AuthModalAtom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {
};


const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value })
  }
  const handleSubmit = () => {
    console.log(loginForm)
    console.log('get it😀')
  }
  return (
    <>
      <form>
        <Input
          type='email'
          placeholder='email'
          mb={2}
          name='email'
          onChange={handleInputChange}
          fontSize='10pt'
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: 'white',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus={{
            outline: 'none',
            bg: 'white',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          bg='gray.50'
        />

        <Input
          name='password'
          type='password'
          placeholder='password'
          onChange={handleInputChange}
          fontSize='10pt'
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: 'white',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus={{
            outline: 'none',
            bg: 'white',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          bg='gray.50'
        />
        <Button
          onClick={handleSubmit}
          width='100%'
          height='36px'
          mt={2}
          mb={4}
        >Log In</Button>
      </form >
      <Flex fontSize='9pt' justifyContent='center'>
        <Text mr={1}>New Here?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          onClick={() => setAuthModalState(prev => ({
            ...prev,
            views: 'signup'
          }))}>
          SIGN UP</Text>
      </Flex ></>
  )
}
export default Login;
