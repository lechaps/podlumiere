#!/bin/sh
# deploy.sh

ls

hugo

ls

cd public

lftp ftp://$FTP_USER:$FTP_PASS@$FTP_HOST -e "set ssl:verify-certificate no;mirror -e -R; quit"
