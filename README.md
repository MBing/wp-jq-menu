# Some plugin for a wordpress theme

## How to use
Put the `.js` file in the `js` folder of your theme.
Register and Enqueue the script in the `functions.php` file of your theme.
Add jQuery as a dependency.
```php
wp_register_script('mbMenuScript', $get_template_directory_uri() . '/js/mbmenuscript.js', 'jquery', '1.0', TRUE);
wp_enqueue_script('mbMenuScript');
```


Make sure the images are in the root of your website:
`http://yourdomain.com/assets/mb-menu-plugin/[some title].jpg`

P.S. Sample attached images are from [Unsplash](https://unsplash.com/)
