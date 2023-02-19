import { authModalState } from '@/src/atoms/AuthModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';



const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassWord: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value })
  }
  const handleSubmit = () => {
    console.log(signUpForm)
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
          mb={2}
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
          name='confirmPassword'
          type='confirmPassword'
          placeholder='confirmPassword'
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
        >Sign Up</Button>
      </form >
      <Flex fontSize='9pt' justifyContent='center'>
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          onClick={() => setAuthModalState(prev => ({
            ...prev,
            views: 'login'
          }))}>
          Log In</Text>
      </Flex ></>
  )
}
export default SignUp;
