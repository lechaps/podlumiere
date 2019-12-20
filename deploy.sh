#!/bin/sh
# deploy.sh

cd public 

tar -cf Website.tar  *   

curl -T Website.tar -u $FTP_USER:$FTP_PASS $FTP_HOST
