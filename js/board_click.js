

// function addList(){
//     document.querySelector('.get').append(list);
// }

// ajax
// get 요청하는 자원이 보인다 보내는 데이터에 한계가 있음 이동이나 데이터 가져올 때 쓰임
// post request에 있어서 url에 붙어서 가지않아 보이지 않아 데이터에 한계 없고 보안이 필요한 데이터를 보낼 때 쓰임


document.getElementById("list").onclick = function(){
    window.location.href = "/board.html";  
};



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

            let date = new Date(boardData.regDate);

            function getFormatDate(date){
                let year = date.getFullYear();
                let month = ( 1 + date.getMonth());
                let day = date.getDate();
                let hour = date.getHours();
                let minute = date.getMinutes();

                month = month >= 10 ? month : '0' + month;
                day = day >= 10 ? day : '0' + day;
                hour = hour >= 10 ? hour : '0' + hour;
                minute = minute >= 10 ? minute : '0' + minute;
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
            }

            boardData.regDate =  getFormatDate(date);

            boardContent += `<li>
                    <h3 id="subject">`+boardData.subject+`</h3>
                </li>
                <li>
                    <p id="name">`+boardData.writer+`</p>
                    <p id="regDate">`+boardData.regDate+`</p>
                    <p id="views">조회 <span>`+boardData.views+`</span></p>
                </li>
                <li>
                <p id="content">
                    `+boardData.content+`
                </p>
                </li>
            `;
            console.log(b.message);
            document.getElementById("bCon").innerHTML = boardContent;

            }
        });
    
    // 게시물 삭제
    $('#del').click(function(){
        let ask = confirm('삭제하시겠습니까?');

        if(ask) {
            $.ajax({
                url: 'http://officialad.net/haneum/board',
                type: 'DELETE',
                dataType : 'JSON',
                contentType : 'application/json',
                data: JSON.stringify({
                    "num" : locationNum
                }),
                success: function(){

                    alert("삭제되었습니다.");
                    window.location.href = '/board.html';
                }
    
            });
        }

        
    });

    $('#cor').on("click",function(){
        document.location.href = `/board_change.html?num=`+locationNum+``;
    });
});