<?php
// handles url requests: finds controller and it's method, passes arguments to that method (if any)
// no nested folders inside controllers allowed

declare(strict_types=1);

namespace app\core;

use app\core\Controller;

class Router extends Controller
{

  private $currentController = 'home';
  private $currentMethod = 'index';
  private $params = [];

  public function __construct()
  {

    $url = $this->getUrl();
    // var_dump($this->getUrl());

    // find and instantiate controller
    if ($url) {

      if(file_exists(CONTROLLER_PATH . $url[0]. 'Controller.php')){
        $this->currentController = $url[0];
        unset($url[0]);
      } else return $this->notFound();
    }
    
    require_once CONTROLLER_PATH . $this->currentController . 'Controller.php';

    $controller = "app\\controllers\\" . $this->currentController . 'Controller';
    $this->currentController = new $controller;

    // find and call method
    if(isset($url[1])){
      if(method_exists($this->currentController, $url[1])){
        $this->currentMethod = $url[1];
        unset($url[1]);
      } else return $this->notFound();
    }

    $this->params = $url ? array_values($url) : [];

    call_user_func_array([$this->currentController, $this->currentMethod], $this->params);

  }

  private function getUrl(): ?array
  {

    if (isset($_GET['url'])) {
      $url = rtrim($_GET['url'], '/');
      $url = filter_var($url, FILTER_SANITIZE_URL);
      $url = explode('/', $url);

      return $url;
    }

    return NULL;
  }

  private function notFound(): void
  {
    
    parent::__construct();

    $data['assets_path'] = ASSETS_PATH;
    echo $this->twig->render('pages/status/404.twig', $data);
  }
}