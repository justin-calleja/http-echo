# Intention

The goal of this package is to provide one way of testing an HTTP client.

# Existing /.\*echo.\*/ modules at the time

* https://www.npmjs.com/package/http-echo
    - Nothing to do with what I'm looking for. The idea seems to be, "send me query parameters which will tell me what to 'echo' back with".
* https://www.npmjs.com/package/node-echo-server
    - Does not return the response to the client, only echoes it back to the servers stdout.
* https://www.npmjs.com/package/http-echo-server
    - Close. Returns the response but keeps connection open for 2 seconds after first data received and then closes the clients connection.
    Server remains open to serve other requests. Still, the 2 second wait is unnecessary for what I had in mind. Also, I would like to instruct
    the server when to shut down from the client.
* https://www.npmjs.com/package/echo.js
    - echo.js is pretty close. The only thing it seems to have missing is the ability to instruct the server to shut down from the client.