
$(function(){

    document.getElementById('not').onclick = function(){
        let ask = confirm("취소하시겠습니까?");
        if(ask) {
            window.location.href = "/board.html";
        } else {
            return false;
        }
    };

    document.getElementById('join').onclick = function(){
        // 인풋 값 가져오기
        let userName = $('#userName');
        let userId = $('#userId');
        let userPassword = $('#userPassword');

        // 유효성 검사 객체
        let ckName = RegExp(/^[가-힣]+$/);
        let ckIdpw = RegExp(/^[a-zA-Z0-9]+$/);

        // 없을 때
        if(userName.val() == ""){
            alert('이름 없다~');
            userName.focus();
            return false;
        }
        if(userId.val() == ""){
            alert('아이디 없다~');
            userId.focus();
            return false;

        }
        if(userPassword.val() == ""){
            alert('비밀번호 없다~');
            userPassword.focus();
            return false;

        }
        if(!ckName.test(userName.val())){
            alert('누구인가');
            userName.focus();
            return false;
        }
        if(!ckIdpw.test(userId.val())){
            alert('아이디는 영어랑 숫자');
            userId.focus();
            return false;
        }
        if(!ckIdpw.test(userPassword.val())){
            alert('비밀번호는 영어랑 숫자');
            userPassword.focus();
            return false;
        }
        else{
            alert('어서와~');
            window.location.href = "/board.html";
        }

    }

    





});

