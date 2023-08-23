//socket.io 팩키지 참조 
const SocketIO = require("socket.io");



//socket.js모듈 기능정의 
module.exports =(server)=>{

    //웹브라우저인 클라이언트와의 실시간 통신을 위한 io객체 생성
    const io = SocketIO(server,{path:"/socket.io"});


    //서버측 io객체가 클라이언트(사용자 웹브라우저)와 연결이 완료된 상태에서
    //상호간 메시지를 주고받는다.
    io.on("connection",(socket)=>{

        //io객체는 클라이언트 연결이 된상태에서 상호 메시지를 주고받을수 있습니다.

        //socket.ion('클라이언트에서 보내주는 메시지를 수신할 이벤트명')
        socket.on("broadcast",function(msg){

            //현재 서버소켓에 연결된 모든 클라이언트(웹브라우저사용자)에게
            //수신한 메시지를 일괄 전송(브로드캐스팅)합니다.
            //io.emit('클라이언트 이벤트 수신기명',보내는메시지데이터);
            io.emit("receiveAll",msg);
            //socket.broadcast.emit("receive",msg);
        });



    });




}