# Moonshot 🌕

A client/server repo representing a MVP implementation of a portion of the Moonpay app for tech demo purposes. 

The backend which can be seeded with token data from moonpays currencies api page, provides a simple rest api with basic authentication which the client can consume.

The frontend is a react native application.

<div style='text-align:center'>
<img src=".readme_resources/moonshot-screen.jpg" width="350" />
</div>


## Tech Stack
Backend:
- Postgres
- TypeORM
- Express

Client:
  - React Native



## Get started

1. Install dependencies

   Detailed readme's in the respective client and server folders. In short run npm install in both client and server folders.
  
   ```bash
   npm install
    ```
    

2. Start the client and server apps in seperate terminal window

  Client:
   ```bash
    npx expo start
   ```
   Server:
   ```bash
    npm start
   ```

3. Launch [expo](https://docs.expo.dev/) on mobile device and scan the qr code in the client terminal window to launch the app 