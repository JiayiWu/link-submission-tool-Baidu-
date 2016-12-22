<?php

/**
 * Created by PhpStorm.
 * User: StevenWu
 * Date: 16/12/22
 * Time: 下午7:31
 */
namespace Home\Service;
use Home\Config\MessageInfo;
class SubmitService
{
    public function submitLink(){
        $data = I('post.');
        if($data == null||$data['sum'] == null || $data['url'] == null || $data['token'] == null )
            return new MessageInfo(false,null,"相关参数不能为空");
        $urls = preg_split('/[;\r\n]+/s',$data['sum']);
        $orl = "";
        if($data['original'] == '1'){
            $orl = "&type=original";
        }
        $api = 'http://data.zz.baidu.com/urls?site='.$data['url'].'&token='.$data['token'].$orl;
        $ch = curl_init();
        $options =  array(
            CURLOPT_URL => $api,
            CURLOPT_POST => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POSTFIELDS => implode("\n", $urls),
            CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
        );
        curl_setopt_array($ch, $options);
        $test = curl_exec($ch);
        $result = json_decode($test);
        if( $result == null || $result->error !=null ){
            return new MessageInfo(false,null,"地址或密匙错误,请重新输入");
        }else{
            return new MessageInfo(true,null,"成功推送".$result->success.'条');
        }
    }
}