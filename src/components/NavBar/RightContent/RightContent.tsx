import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthorButtons from './AuthorButtons';

type RightContentProps = {

};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <Flex justify="center" align="center">
        <AuthorButtons />
      </Flex>
    </>
  )
}
export default RightContent;
