(function() {
  'use strict';

      window.github = window.github || {};
      window.github.search = search;
      window.github.get = get;


        /**
         * @param {String} query search github repositories
         * @param {String} token a user token required to do a search
         * @return {Promise}
         */
        function search(query, token) {

         return $.ajax({
            url: 'https://api.github.com/search/repositories?q=' + query,
            method: 'GET',
            dataType: 'json',
            headers: {
              authorization: 'token ' + token
            }
          });

        }

        console.log(search);

        function get(token, url) {
          return $.ajax({
            url: url.split('{')[0],
            method: 'GET',
            dataType: 'json',
            headers: {
              authorization: 'token ' + token
            }
          });
        }

        console.log(get)




}());
