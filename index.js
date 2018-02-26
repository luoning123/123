var exp = require('express');
var app = exp();
var bodyParser = require('body-parser');

app.use('/',require('./routers/index-r.js'));//可以指定名称不写默认会找index.js的文件
app.use(exp.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:true}))

app.post('/login',function(req,res){
	var uname = 'yunhe';
	var pwd = '123';

	var un = req.body.username;//如果是post方式req.body.username;
	var pw = req.body.pw;
	if(un===uname&&pw===pwd){
		res.send('成功登陆！')
		}else{
			res.send('密码错误1！')
			}	
})

app.listen(80,function(){
	console.log('服务启动了。。。')
})