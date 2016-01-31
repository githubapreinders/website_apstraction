<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'apstraction_nl');

/** MySQL database username */
define('DB_USER', 'apstraction_nl');

/** MySQL database password */
define('DB_PASSWORD', 'TqBLTPwK');

/** MySQL hostname */
define('DB_HOST', 'apstraction.nl.mysql');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'QGn&!*4s$RV.S3YvK->?CSe4lic35=^^');
define('SECURE_AUTH_KEY',  'ss^,q9(9YIi71i&F&;llyd,xui$&ehR%');
define('LOGGED_IN_KEY',    '%VY@FbIsu}Q{[L:BZ1=u([[v86o$R!8p');
define('NONCE_KEY',        'NdwWz4B5{Zr]q-v4m2Ht6AF5QmwtxSp)');
define('AUTH_SALT',        ')2zlb*gr>|TVD{6OHX)5Zy{KGxO2:ma1');
define('SECURE_AUTH_SALT', '(<}^0dgFGb1#~%/p21#v8$/l/HJ7Sz7%');
define('LOGGED_IN_SALT',   '}4Kro$U|Xn&W[Kqdj|<R}JL4>I7ux[v>');
define('NONCE_SALT',       'a;m/_b_5L~KzsWS%5c4jSY0P@{NE:veF');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'blog0_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', 'en_GB');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/** 
 * Prevent file editing from WP admin.
 * Just set to false if you want to edit templates and plugins from WP admin.  
 */
define('DISALLOW_FILE_EDIT', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');