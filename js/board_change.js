

// function addList(){
//     document.querySelector('.get').append(list);
// }

// ajax
// get 요청하는 자원이 보인다 보내는 데이터에 한계가 있음 이동이나 데이터 가져올 때 쓰임
// post request에 있어서 url에 붙어서 가지않아 보이지 않아 데이터에 한계 없고 보안이 필요한 데이터를 보낼 때 쓰임

$(function(){
    let locationName = window.location.href;
    let locationNum = locationName.charAt(locationName.length-1);

    $.ajax({
        url: 'http://officialad.net/haneum/board?num='+locationNum+'',
        type: 'GET',
        dataType: 'JSON',
        success: function(b){

        let boardData = b.data;
        let boardContent = "";
        
        boardContent += `<li>
        <p>`+boardData.writer+`</p>
        <input type="text" id="subject" value="`+boardData.subject+`">
        </li>
        <li>
        <textarea name="content" id="content">`+boardData.content+`</textarea>
        </li>
        `;
        console.log(b.message);
        document.getElementById("bChange").innerHTML = boardContent;

        }
    });
    
    $('#cancle').on('click',function(){
        let ask = confirm("취소하시겠습니까?");
        if(ask){
            window.location.href = `./board_click.html?num=`+locationNum+``;
        } else {
            return false;
        }
    });

    

    $('#go').on('click',function(){
        const corCon = $('#content').val();
        const corSub = $('#subject').val();

        let ask = confirm("등록하시겠습니까?");
        if(ask){
            // 수정하기

            $.ajax({
                url: 'http://officialad.net/haneum/board',
                type: 'PATCH',
                contentType : 'application/json',
                dataType: 'JSON',
                data: JSON.stringify({
                    "num" : locationNum,
                    "content" : corCon,
                    "subject" : corSub
                }),
                success:function(){
                    alert('등록완료!');
                    window.location.href = `./board_click.html?num=`+locationNum+``;
                }

            });
            
        } else {
            return false;
        }
    });

});

