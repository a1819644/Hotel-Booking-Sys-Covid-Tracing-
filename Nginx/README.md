* Nginx Installation
Follow the introduction

https://www.nginx.com/resources/wiki/start/topics/tutorials/install/

* Modifiy the configuration of Nginx
Please replace the nginx.conf to the nginx installed folder.

Or you could find information on

https://www.nginx.com/resources/wiki/start/topics/examples/full/

However, our system uses https protocol, the related configuration is as follows

http://nginx.org/en/docs/http/configuring_https_servers.html

* Config SSL protocol to supply https
Please copy cert.key & cert.pem to the the nginx installed folder.

If the certificate does not work normally, please apply for a private certification by yourself through the openssl command.

openssl req -newkey rsa:2048 -nodes -keyout cert.key -x509 -days 365 -out cert.pem

* Modify the hosts file in your OS
For example:

#test https

127.0.0.1 www.submarineapp.com

* Run the Nginx and booking service

Run command:

boli@BodeMacBook-Pro nginx % nginx 

at the the nginx installed folder

Reboot the nginx:

boli@BodeMacBook-Pro nginx % nginx -s reload

Stop the nginx:

boli@BodeMacBook-Pro nginx % nginx -s stop

* Visit website using

https://www.submarineapp.com/


