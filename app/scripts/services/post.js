'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://forOM.firebaseIO.com/posts/:id.json');
});