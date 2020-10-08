var async = require('async');
var fetch = require('node-fetch');

exports._getAlbum = function (req, res, nectia) {
    async.waterfall(
        [
            function (callback) {
                return checkData(callback);
            },
            function (resultado, callback) {
                res.send(resultado);
            }
        ],
        function (err, status) {
            res.send(nectia.constants.INTERNAL_ERROR);
        }
    );

    async function checkData(cb) {

        let params = req.query;
        if (typeof params.value == 'undefined' || params.value == '')
          res.send(nectia.constants.BAD_REQUEST);
        else{

          const result = await fetch(`https://api.spotify.com/v1/search?q=${params.value}&type=album`, {
              method: 'GET',
              headers: {'Authorization' : 'Bearer ' + nectia.spotify_token}
          });
          const data = await result.json();
          
          return cb(null, data.albums);
        }
    }
}