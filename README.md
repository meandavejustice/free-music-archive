# Free Music Archive API

Basic wrapper around the [free music archive](http://freemusicarchive.org/) [api](http://freemusicarchive.org/api/).

## Usage

#### Main Endpoints

Main endpoints include the following methods:
* `recent`
* `featured`
* `tracks`
* `albums`
* `artists`
* `genres`

.. and are accessed like the following example:

``` javascript
var fma = require('free-music-archive');

fma.recent({limit: 2}, function(err, results) {
  if (err) console.error(err);
  console.log(JSON.stringify(results, null, 2));
})

```

#### Search

The search method is accessed a bit differently.

``` javascript
fma.search('woolen men', {limit: 10}, function(err, results) {
  if (err) console.error(err);
  console.log(JSON.stringify(results, null, 2));
})

```

You can also pass the query to the options object.

``` javascript
fma.search(null, {limit: 10, q: 'Annea Lockwood '}, function(err, results) {
  if (err) console.error(err);
  console.log(JSON.stringify(results, null, 2));
})

```
