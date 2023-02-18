import { authModalState } from '@/src/atoms/AuthModalAtom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';


const AuthModel: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState)
  const handleClose = () => {
    setModalState(prev => {
      return {
        ...prev,
        open: false
      }
    })
  }
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalState.views === 'login' && 'Login'}
            {modalState.views === 'signup' && 'Sign Up'}
            {modalState.views === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'>
            <Flex
              direction='column'
              align='center'
              justify='center'
              w='70%'
              border='1px solid red'
            >
              {/* <OAuthButton /> */}
              <AuthInputs />
              {/* <ResetPassword/> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AuthModel;


