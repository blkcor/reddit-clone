import { authModalState } from '@/src/atoms/AuthModalAtom';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './Login';

type AuthInputsProps = {

};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState)

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      width='100%'
      mt={4}
    >
      {modalState.views === 'login' && <Login />}
      {/* {modalState.views === 'signup' && <SignUp />} */}
    </Flex>
  )
}
export default AuthInputs;
