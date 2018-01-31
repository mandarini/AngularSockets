# Angular Sockets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6

## Based on

[this](https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial/) websocket socket.io setup tutorial

## Description

We are creating a server and a client that listens for incoming messages.

The server can run on a mobile device and thus emit messages to the client.

The messages are information about the device status.

The result is to maniputale graphics on the screen with our mobile device.

## How to

### Run the server

First we need to get the server running:

```
cd browserServer/
node app.js
```

This will run your express server.

Then, in the same directory (browserServer), in a new terminal, run:

```
ng serve --host 0.0.0.0
```

That way, we will be able to access our local address from a mobile device connected **to the same network**.

Now, navigate from your mobile device or from your browser to:

`<your local IP address>:4200`

where the application is running.

You can find your local IP address running

```
ifconfig
```

Than would be one of your inet addresses.


### Run the client

```
cd browserClient/
ng serve --port 4000
```

You need to specify another port than the default 4200, because the server is already running on 4200.

### Finally, send a message!

Now, either click the send message button or move your phone around, and see the result in your browser!
