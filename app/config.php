<?php
// if this file location were to change then ROOT_PATH needs to be adjusted accordingly

// DIR
defined('DS') ? null : define('DS', DIRECTORY_SEPARATOR);
define('ROOT_PATH', dirname(dirname(__FILE__)) . DS);
define('APP_ROOT', ROOT_PATH . 'app' . DS);
define('PUBLIC_ROOT', ROOT_PATH . 'public' . DS);
define('CORE_PATH', APP_ROOT . 'core' . DS);
define('CONTROLLER_PATH', APP_ROOT . 'controllers' . DS);
define('VIEW_PATH', APP_ROOT . 'views' . DS);
define('ROOT_NAME', DS . 'challenge2' . DS);
define('ASSETS_PATH', ROOT_NAME . 'public' . DS . 'assets' . DS);
