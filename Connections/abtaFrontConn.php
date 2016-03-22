<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_abtaFrontConn = "localhost:8888";
$database_abtaFrontConn = "db99712_advantage";
$username_abtaFrontConn = "mrtrix";
$password_abtaFrontConn = "jazzaj64";
$abtaFrontConn = mysql_pconnect($hostname_abtaFrontConn, $username_abtaFrontConn, $password_abtaFrontConn) or trigger_error(mysql_error(),E_USER_ERROR); 
?>