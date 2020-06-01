@ECHO OFF 

SET dbhost=localhost
SET dbuser=root
SET sqlbin=C:\tools\mysql-8.0.19-winx64\bin
%sqlbin%\mysql.exe -h %dbhost% -u %dbuser%  < ./sql/createSchema.sql
%sqlbin%\mysql.exe -h %dbhost% -u %dbuser% < ./sql/createTable.sql
%sqlbin%\mysql.exe -h %dbhost% -u %dbuser% < ./sql/initData.sql

ECHO Finished!
PAUSE

@ECHO Done! 