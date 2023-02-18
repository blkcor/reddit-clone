import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    emial: '',
    password: ''
  });
  return (
    <form action="">
      <Input></Input>
      <Input></Input>
    </form>
  )
}
export default Login;
