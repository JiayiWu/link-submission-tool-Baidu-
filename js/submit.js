/**
 * Created by StevenWu on 16/12/20.
 */


function submit() {
    $('#logout').click(function () {
        jQuery.ajax({
            url: 'user/logout',
            cache: false,
            success: function(data) {
                if(data.state == true){
                    var object = data.object;
                    var date = [];
                    var chardata = [];
                    for (var i=0;i<object.length;i++){
                        date.push(object[i].date);
                        chardata.push(object[i].calorie);
                    }
                    var max = object[object.length-1];
                    chart.drawMapChart(max.running_percent,max.swimming_percent,max.cycling_percent,max.walking_percent,max.sitting_percent);
                    chart.drawCalChart(date,chardata);

                }
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