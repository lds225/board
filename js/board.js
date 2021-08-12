

// function addList(){
//     document.querySelector('.get').append(list);
// }

// ajax
// get 요청하는 자원이 보인다 보내는 데이터에 한계가 있음 이동이나 데이터 가져올 때 쓰임
// post request에 있어서 url에 붙어서 가지않아 보이지 않아 데이터에 한계 없고 보안이 필요한 데이터를 보낼 때 쓰임


$(function(){
    $.ajax({
        url: 'http://officialad.net/haneum/boards?page='+1+'&size='+10,
        // page 와 size 값 따로 주기 
        type : 'GET',
        contentType : 'JSON',
        success: function(k){
            let board = k.data.boards;
            let list = "";

            for(let i = 0; i < board.length; i++) {
                // let btn = document.getElementById('btn');

                let date = new Date(board[i].regDate);

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

                board[i].regDate =  getFormatDate(date);


                list += `<ul class="list listValue" id="listValue">
                <li class="number">
                `+board[i].num+`
                </li>
                <li class="title">
                <a href= "board_click.html?num=`+board[i].num+`">
                `+board[i].subject+`
                </a>
                </li>
                <li class="date">
                `+board[i].regDate+`
                </li>
                <li class="view">
                `+board[i].views+`
                </li>
                <li class="name">
                `+board[i].writer+`
                </li>
                </ul>
                `;
            }
            document.getElementById("get").innerHTML = list;
    
            $('.totalCon').text(k.totalContent);
    
            if(k.totalPage != 1){
                let page = "";
    
                for(let i = 0; i < k.totalPage; i++ ){
                    let n = i + 1;
                    page.id = n;
    
                    page += `
                        <li id="`+n+`">`+n+`</li>
                    `;
                }
                document.getElementById("pageN").innerHTML = page;
    
    
    
            }
            $("#pageN > li").click(function(){
            let val = $(this).attr("id");
                getBoard(val);
            });
        }
        
    });

});


function getBoard(pageNum){
    $.ajax({
        url: 'http://officialad.net/haneum/boards?page='+pageNum+'&size='+10,
        // page 와 size 값 따로 주기 
        type : 'GET',
        contentType : 'JSON',
        success: function(k){
            let board = k.data.boards;
            let list = "";

            for(let i = 0; i < board.length; i++) {
                // let btn = document.getElementById('btn');
                list += `<ul class="list listValue" id="listValue">
                <li class="number">
                `+board[i].num+`
                </li>
                <li class="title">
                `+board[i].subject+`
                </li>
                <li class="date">
                `+board[i].regDate+`
                </li>
                <li class="view">
                `+board[i].views+`
                </li>
                <li class="name">
                `+board[i].writer+`
                </li>
                </ul>
                `;
                
            }
            document.getElementById("get").innerHTML = list;


    
            $('.totalCon').text(k.totalContent);
    
            if(k.totalPage != 1){
                let page = "";
    
                for(let i = 0; i < k.totalPage; i++ ){
                    let n = i + 1;
                    page.id = n;
    
                    page += `
                        <li id="`+n+`">`+n+`</li>
                    `;
                }
                document.getElementById("pageN").innerHTML = page;
    
    
    
            }
            $("#pageN > li").click(function(){
                let val = $(this).attr("id");
                getBoard(val);
            });
        }
        
    });
}

document.getElementById("writeBtn").onclick = function(){
    window.location.href = "../board_inner.html"  
};
