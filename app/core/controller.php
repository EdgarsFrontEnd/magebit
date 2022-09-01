<?php
// allows templating, different layouts and component includes
// uses twig (templating engine) for separation of concerns and readability purposes

declare(strict_types=1);

namespace app\core;

class Controller
{

  private $layout = 'default';
  protected $twig;

  public function __construct()
  {

    $loader = new \Twig\Loader\FilesystemLoader(VIEW_PATH);
    $this->twig = new \Twig\Environment($loader);
  }

  public function setLayout(string $layout): void
  {

    $this->layout = $layout;
  }

  public function view(string $template, array $data = []): void
  {

    extract($data);

    $data['assets_path'] = ASSETS_PATH;

    if (file_exists(VIEW_PATH . 'pages/' . $template . '.twig')) {

      $data['template'] = $template;
      echo $this->twig->render('layout' . DS . $this->layout . '.twig', $data);
      return;
    }

    echo $this->twig->render('pages/status/404.twig', $data);
  }
}
