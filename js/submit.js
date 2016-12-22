/**
 * Created by StevenWu on 16/12/20.
 */

$(function () {

    textareaInit();



    var isInit = true;
    submit(isInit);
    $('#url-sum').focus(function () {
        if(isInit == true) {
            isInit = false;
            textareaFocus();
        }
    });
    $('#url-sum').blur(function () {
        var ha = $('#url-sum').html();
        if($('#url-sum').val()==""){
            isInit = true;
            textareaInit();
        }
    });
});

function submit(isInit) {
    $('#buttom-sbm').click(function () {
        if(!isInit) {
            jQuery.ajax({
                url: 'submit/link',
                cache: false,
                type: "post",
                data: {
                    url: $('#url').val(),
                    token: $('#token').val(),
                    sum: $('#url-sum').val()
                },
                success: function (data) {

                    if (data.state == true) {
                        swal("成功!", data.message, "success")
                    } else {
                        swal("失败!", data.message, "error")
                    }

                },
                error: function (data) {
                    swal("服务器错误!", "服务器错误,请联系管理员bestwujiayi@gmail.com", "error")
                }
            })
        }else {
            swal(":)", "请填写您要推送的网址", "info")
        }
    });
}

function textareaInit() {
    var val= "您每次最多可提交10条链接，每行一条\r\n示例如下:\r\nwww.site.com/xxxx\r\nwww.site.com/xxxx";
    $('#url-sum').val(val);
}

function textareaFocus() {
    $('#url-sum').val("");
}