<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'rohan_phoneResq');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'password');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'f+8]3fD0|]{h8{L>h%?QH6a;f#.B|C<pQylJ)~>V{&IVO>xWHE8ofY`;ARZ!6JgT');
define('SECURE_AUTH_KEY',  '*:c(+Rw7^f)(^B76dgBJ#-*>`Z-:%j6n&fHz/I%8]9&Kn;qP$~i$HVFR}olZfE(a');
define('LOGGED_IN_KEY',    '-]|3mfg$Oyxkl}v:lGZ]9Ee+oX+2px=E7u,},]}}sB,zD0.g=p~/DO^`|1m01Q9{');
define('NONCE_KEY',        'Ra,D?U$|6weM6^N2jKE-`Ntv5Qzc`n(Xuf9d%7VsTJ:%HZ~G0Z?$|6iLF82|1]U!');
define('AUTH_SALT',        'DQo[|=eP(Ghc|F-94[qq$?7yg 08mg->B)S&`LudAZzuL8<$~H+v,4yLm`+#KN[`');
define('SECURE_AUTH_SALT', '&xpmsMy[bA2+|osNC6m>[NJke*(:*sr)5-|ewQ+fd*n{h!H[w+lAqRHa$5xx]^/b');
define('LOGGED_IN_SALT',   'wd6wj960i|hvk=A=m{~iw,=PnS<||,=*m+bMpP)_tRD^R+%u:k~anH}[}fu4xG8(');
define('NONCE_SALT',       '}%nbAL.5VyUMwa{z`27u` d@TVd=z,RLJW5/|TY2azVj~b!;X_I2InkW-;w._LA-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
