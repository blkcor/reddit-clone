import { authModalState } from '@/src/atoms/AuthModalAtom';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';


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
            {modalState.views === 'signup' && 'SignUp'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Modal Body
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AuthModel;


