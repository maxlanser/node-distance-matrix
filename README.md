## Google Distance Matrix Api

This is an example of using the [Google Distance Matrix Api](https://developers.google.com/maps/documentation/distance-matrix/start) service. This works on NodeJS Express server. 

To start trying or using the Google Distance Matrix Api service you need to get your personal ApiKey from Google, for this you need to go to the [Google Cloud Console](https://console.cloud.google.com/home/dashboard) section, create your application and generate ApiKey for it.

:white_check_mark: When you have your ApiKey it needs to be inserted into the file `controllers/distance.js` as shown below:

    //Please insert your ApiKey in this place
    const apiKey='';

:white_check_mark: Next you need to have [NodeJS](https://nodejs.org) installed. After that, you need to install all the necessary packages in order to do this by opening the terminal in the root folder of this project and run the following command:

    npm install

:white_check_mark: When the installation is complete, you can start the server with the command:

    node server

In the terminal you should see a message:

    Server started


:+1: :+1: :+1: :smiley: 

:white_check_mark: Now you can open your favorite browser and go to:

    http://localhost:3000/


### Description

The following packages are used here:

- [axios](https://github.com/axios/axios)
- [cors](https://www.npmjs.com/package/cors)
- [express](https://expressjs.com/)
- [pug](https://pugjs.org)
- [bulma](https://bulma.io/)

**Axios** is a very convenient package for performing POST and GET requests.

**Cors** is a plugin for Express to enable CORS support.

**Experss** is a convenient, simple and small NodeJS server.

**Pug** is a very handy tool for rendering clean and good HTML.

**Bulma** is a very cool CSS Framework, I used it for styling.

*Good Luck*  :ok_hand::ok_hand::ok_hand:



