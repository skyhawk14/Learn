//**Notes:  URI: universal remote identifier AKA: address   **/

browser client uses XMLHttpRequest object to exchange data with a server behind the scenes. This means that it can update parts of a web page without reloading the whole page.

//**Notes:  AJAX: Asynchronous JavaScript and XML    **/

Browser uses a URI to talk to a server.
URI has multiple components:
It starts with a protocol (http, https, ftp, ldap, mailto, file etc.).

http protocol says that the format for a requst needs to be in a certain format.
The format is: https://www.example.com:port/path/to/resource?name1=value1&name2=value2

if no port is mentioned then the default port is 80. Why port is 80? Because it is the default port for http protocol.

Remember whenever you access a web page, your query initiats a TCP connection with a server on port 80

Ports are nothing but end points. Ports helps computer to understand what to do with the data they receive.

Emails go to differnt port, web pages go to different port, etc.

Browser communicate with web servers using http

HTTP can be used to transfer all sorts of data Text, HTMK, XML, Images, Videos, Javascript, etc.Because it is a text based protocol, it is easy to read and understand.

Sometimes it is useful to store the data you want to send in some kind of format like JSON or XML.

JSON: JavaScript Object Notation
XML: Extensible Markup Language

Browser offer 4 main ways to place data into the HTTP GET or POST request
1. LINKS, click on link triggers an HTTP GET request with query params
2. Submitting a form can trigger an HTTP GET or POST request.
3. Cookies: Web server can ask the web browser to keep a piece of data and this data is reportedly sent back to the server with every subsequent request.
4. using AJAX to send an HTTP request from JavaScript code running in the browser. We can make GET, POST, PUT, DELETE requests.

