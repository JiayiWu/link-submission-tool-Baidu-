<?php
/**
 * Created by PhpStorm.
 * User: StevenWu
 * Date: 16/12/21
 * Time: 上午12:03
 */

namespace Home\Controller;


use Think\Controller;
use Home\Model\SubmitModel as smodel;
class SubmitController extends Controller
{
    public function submitLink(){
        $smodel = new smodel();
        $this->ajaxReturn($smodel->submitLink(),"JSON");
    }
}