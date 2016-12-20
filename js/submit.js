/**
 * Created by StevenWu on 16/12/20.
 */


function submit() {
    $('#logout').click(function () {
        jQuery.ajax({
            url: 'submit/link',
            cache: false,
            data:{
                url:$('#url').value(),
                token:$('#token').value(),
                sum:$('#url-sum').value()
            },
            success: function(data) {
                
            },
            error:function (data) {
                
            }
        })
    });
}

function textareaInit() {
    var val= "您每次最多可提交10条链接，每行一条\r\n示例如下:\r\nwww.site.com/xxxx\r\nwww.site.com/xxxx";
    $('#url-sum').html(val);
}

function textareaFocus() {
    $('#url-sum').html("");
}