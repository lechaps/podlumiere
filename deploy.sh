#!/bin/sh
# deploy.sh

# Tar Website
cd public 
tar -cf Website.tar  *   

# Transfert
curl -T Website.tar -u $FTP_USER:$FTP_PASS $FTP_HOST

#Connection & deTar & delete
ssh $SSH_CONNECTION -p 5022 
cd public_html && tar -xvf Website.tar && rm Website.tar
