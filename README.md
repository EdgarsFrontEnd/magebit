## Created by Edgars Pujats

- Email: ep98@inbox.lv
- Phone: +371 27878291

## Installation

- You will need server to execute PHP, i advise using XAMPP local server.
- Rename root folder to challenge2 or:
  - change root/public/.htaccess line2 to RewriteBase /YOUR_ROOT_NAME/public
  - change root/app/config.php line12 to define('ROOT_NAME', DS . 'YOUR_ROOT_NAME' . DS);
- Watch sass to generate css file

## App Logic

- App is structured in MVC pattern, in this case with no models (not needed)
- Single entry point public/index.php
- .htaccess file denies access to app files
- using twig template engine for layouts and dynamic pages
- using builder pattern js validation for method chaining and readability
- has app/core/router.php class for URL requests, invalid request redirects to 404 page
- has config file for absolute paths, later database credentials
- uses namespaces and composer for autoloading files
- uses scss preprocessor for better style structure and vendor prefixes

App is scalable and easy to maintain, as project would grow, there would be models, php validation etc.
