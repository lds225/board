

// function addList(){
//     document.querySelector('.get').append(list);
// }

// ajax
// get 요청하는 자원이 보인다 보내는 데이터에 한계가 있음 이동이나 데이터 가져올 때 쓰임
// post request에 있어서 url에 붙어서 가지않아 보이지 않아 데이터에 한계 없고 보안이 필요한 데이터를 보낼 때 쓰임


document.getElementById("cancle").onclick = function(){
    let can = confirm('취소하시겠습니까?');
    if(can == true) {
        window.location.href = "../board.html";  
    }else {
        return false;
    }
};

$(function(){

    $('#go').click(function(){
        const writer = $("#writer").val();
        const subject = $("#subject").val();
        const content = $("#content").val();
        

      

        const sendData = {
            "writer": writer,
            "subject": subject,
            "content": content,
        };

        if(writer === ""){
            alert('이름을 입력해 주세요.');        
            return;
        }

        if(subject === ""){
            alert('제목을 입력해 주세요.');        
            return;
        }

        if(content === ""){
            alert('내용을 입력해 주세요.');        
            return;
        }
       
        $.ajax({
            url: 'http://officialad.net/haneum/board',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify(sendData),
            success: function(){
                alert('게시글 등록완료!');
                location.href = '../board.html'
            }
        });
    });
    

});