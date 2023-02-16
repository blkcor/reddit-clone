import { Button } from '@chakra-ui/react';
import React from 'react';
import AuthModel from '../../Model/AuthModal/AuthModal';
import { authModalState } from '@/src/atoms/AuthModalAtom';
import { useRecoilState } from 'recoil';


const AuthorButtons: React.FC = () => {
  const [_, setModalState] = useRecoilState(authModalState)
  const handleOpen = () => {
    setModalState({
      open: true,
      views: 'login'
    })
  }
  return (
    <>
      <AuthModel />
      <Button
        variant="outline"
        height='28px'
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => {
          setModalState({
            open: true,
            views: 'login'
          })
        }}
      >Log in</Button>

      <Button
        height='28px'
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() => {
          setModalState({
            open: true,
            views: 'signup'
          })
        }}
      >Sign up</Button>

    </>
  )
}
export default AuthorButtons;
