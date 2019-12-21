#!/bin/sh
# deploy.sh

ls

cd public

lftp ftp://$FTP_USER:$FTP_PASS@$FTP_HOST -e "set ssl:verify-certificate no;mirror -e -R -v"
