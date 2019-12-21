#!/bin/sh
# deploy.sh

cd public 

tar -cf Website.tar  *   

curl -T Website.tar -u $FTP_USER:$FTP_PASS $FTP_HOST

ssh $SSH_CONNECTION -p 5022 

cd public_html && tar -xvf Website.tar && rm Website.tar
