#!/bin/sh
# deploy.sh

cd public && tar -cvf Website.tar - * 

curl -T "FTPWebsite.tar" -u $FTP_USER:$FTP_PASS $FTP_HOST
