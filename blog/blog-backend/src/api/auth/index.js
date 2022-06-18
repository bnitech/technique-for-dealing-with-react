import Router from 'koa-router';
import * as autCtrl from './auth.ctrl.js';

const auth = new Router();

auth.post('/register', autCtrl.register);
auth.post('/login', autCtrl.login);
auth.post('/check', autCtrl.check);
auth.post('/logout', autCtrl.logout);

export default auth;
