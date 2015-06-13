var qs = require('querystring');
var request = require('request');

function endpoint(route, options, cb) {
  if (typeof options === 'function') cb = options;

  request('http://freemusicarchive.org/'+route+'?'+qs.stringify(options),
    function(err, res, body) {
      if (err) cb(err);
      else if (res.statusCode == 200) cb(null, JSON.parse(body));
    }
  )
}

function search(query, options, cb) {
  if (typeof options === 'function') cb = options;
  if (typeof options !== 'object') options = {q: query};
  else if(!options.q) options.q = query;

  request('http://freemusicarchive.org/api/trackSearch?'+qs.stringify(options),
    function(err, res, body) {
      if (err) cb(err);
      else if (res.statusCode == 200) cb(null, JSON.parse(body));
    }
  )
}

module.exports = {
  recent: function(options, cb) {endpoint("recent.json", options, cb)},
  featured: function(options, cb) {endpoint("featured.json", options, cb)},
  tracks: function(options, cb) {endpoint("api/get/tracks.json", options, cb)},
  albums: function(options, cb) {endpoint("api/get/albums.json", options, cb)},
  artists: function(options, cb) {endpoint("api/get/artists.json", options, cb)},
  genres: function(options, cb) {endpoint("api/get/genres.json", options, cb)},
  search: search
}
