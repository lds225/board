//로그인 유효성 검사
$(function(){

    document.getElementById('login').onclick = function(){
        // 인풋 값 가져오기
        let userId = $('#userId');
        let userPassword = $('#userPassword');

        // 유효성 검사 객체
        let ckIdpw = RegExp(/^[a-zA-Z0-9]+$/);

        // 없을 때
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

