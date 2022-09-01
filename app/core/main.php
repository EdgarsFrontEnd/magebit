<?php
// Application starts here

require_once dirname(__DIR__) . '/config.php';
require_once APP_ROOT . 'vendor/autoload.php';

use app\core\Router;

$router = new Router();
