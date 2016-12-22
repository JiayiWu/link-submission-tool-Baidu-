<?php
/**
 * Created by PhpStorm.
 * User: StevenWu
 * Date: 16/12/21
 * Time: 上午12:03
 */

namespace Home\Controller;


use Think\Controller;
use Home\Service\SubmitService as ss;
class SubmitController extends Controller
{
    public function submitLink(){

  $ss = new ss();
        $this->ajaxReturn($ss->submitLink(),"JSON");
    }
}