<?php

namespace app\controllers;

use app\core\Controller;

class HomeController extends Controller
{

    // display main page
    public function index()
    {

        $data['action'] = ROOT_NAME . 'home/success';
        $this->view('home', $data);
    }

    public function success()
    {
        
        return $this->view('form-success', []);
    }
}
