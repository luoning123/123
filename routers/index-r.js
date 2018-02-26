var exp = require('express');
var router = exp.Router();

router.get('/',function(req,res){
	res.send('ok---这是router的文件,这里就变成首页了');
})

router.get('/login',function(req,res){
	var uname = 'yunhe';
	var pwd = '123';

	var un = req.query.username;//从服务短获取的数据
	var pw = req.query.pw;
	if(un===uname&&pw===pwd){
		res.send('成功登陆！')
		}else{
			res.send('密码错误！')
			}
	
})

module.exports=router;


