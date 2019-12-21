#!/bin/sh
# deploy.sh


lftp ftp://$FTP_USER:$FTP_USER@$FTP_HOST -e "set ssl:verify-certificate no;mirror -e -R public / ; quit"
