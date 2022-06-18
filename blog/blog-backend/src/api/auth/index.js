const Router = require('koa-router');
import * as autCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/register', autCtrl.register);
auth.post('/login', autCtrl.login);
auth.post('/check', autCtrl.check);
auth.post('/logout', autCtrl.logout);

export default auth;
