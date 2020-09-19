import { createContext } from 'react';
import initialState from './initialState';

const LoginContext = createContext(initialState);
export default LoginContext;
