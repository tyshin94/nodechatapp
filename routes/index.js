var express = require('express');
var router = express.Router();

/* 메인페이지 요청 및 응답처리 라우팅메소드 */
// http://localhost:3000
router.get('/', function(req, res, next) {
  res.render('index', { title: '안녕하세요.' });
});


// 회원가입 웹페이지 요청과 응답처리 라우팅 메소드
// http://localhost:3000/member/entry
router.get('/member/entry', function(req, res) {

  //res 객체는 서버에서 웹브라우저로 결과값을 전달하는 http response 객체를 말합니다.
  //res.render('지정한 뷰파일 경로와 이름') 메소드는 
  //웹브라우저로 전달합니다.
  res.render('entry.ejs');

});


// 채팅 웹페이지 요청과 응답처리 라우팅 메소드
// http://localhost:3000/chat
router.get('/chat', function(req, res){
  //웹채팅 뷰파일(chat.ejs)의 내용을 웹브라우저로 전달
  res.render('chat.ejs');



});



module.exports = router;