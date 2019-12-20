#!/bin/sh
# deploy.sh
set -e

wput --basename=/public -u /public/*.* ftp://$FTP_USER:$FTP_PASS@$FTP_HOST
