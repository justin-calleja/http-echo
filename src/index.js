const Buffer = require('safe-buffer').Buffer;
const NetcatServer = require('netcat/server');

const nc = new NetcatServer();

// nc.port(2389).k().listen().pipe(process.stdout);

// nc.port(2389).wait(2000).listen().pipe(process.stdout);

// nc.port(2389).wait(2000).listen();

const line1 = 'HTTP/1.1 200 OK';

nc.port(2389).k().listen().on('data', (sock, data) => {
  let res = line1+ '\n\n' + data.toString();
  sock.write(res);
  sock.end();
});
