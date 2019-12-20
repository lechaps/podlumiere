#!/bin/sh
# deploy.sh

tar -cvf "FTPWebsite.tar" public/

curl -T "FTPWebsite.tar" -u $FTP_USER:$FTP_PASS $FTP_HOST
