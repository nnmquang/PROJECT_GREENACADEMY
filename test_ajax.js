$.ajax({
    url: '', //đia chỉ service API, server
    method: '', //GET, POST, PUT, DELETE
    data: '',
    /*
       - parametter nằm ở url. vnexpress.net/tin-tuc/?q=hhfhdsjfhdskhfjsdhjkf
       - data: 
         + www form: ?a=dsfsdfdsf&b=sdfsdfdsf
         + json (plan text):*/

    /* phương thức khi server trả lời thành công, trả về kết quả */
    sucess: function(data) {
        console.log(data);
    },
    /* phương thức khi server trả lời thành công, nhưng có lỗi xảy ra */
    error: function(err) {
        console.log(err);
    }
});