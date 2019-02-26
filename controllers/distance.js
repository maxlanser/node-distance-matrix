const axios = require('axios');

function googleApi(req, res) {

    const originLatitude = req.body.origlatitude;
    const originLongitude = req.body.origlongitude;
    const destinationLatitude = req.body.destlatitude;
    const destinationLongitude = req.body.destlongitude;


    //Please insert your ApiKey in this place
    const apiKey='';

    const apiUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json';

    let googleData = {};

    axios.get(apiUrl,{
            params: {
                units: 'metric',
                language: 'en',
                origins: `${originLatitude},${originLongitude}`,
                destinations: `${destinationLatitude},${destinationLongitude}`,
                key: apiKey 
            }
        })
        .then(function ({data}) {
            const { status } = data;

            if ( status != 'OK' || !data.destination_addresses[0] || !data.origin_addresses[0] ) {
                res.render('error', {
                    data
                });
            } else {
                googleData = data.rows[0].elements[0] || '';

                res.render('index', {
                    googleData
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

function googleApiIndex(req, res) {
    res.render('index');
}

module.exports = {
    googleApiIndex,
    googleApi
};