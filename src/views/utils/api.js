import { get, post } from './http';

//登录
export const login = (p) => post('/api/login', p);
