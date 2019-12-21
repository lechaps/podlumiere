#!/bin/sh
# deploy.sh


lftp ftp://$FTP_USER:$FTP_PASS@$FTP_HOST -e "set ssl:verify-certificate no;mirror -e -R public / ; quit"
