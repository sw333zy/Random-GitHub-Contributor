(function() {
    'use strict';

    window.github = window.github || {};


    $('#search')
        .on('submit', function find(event) {
            event.preventDefault();

            var token = $('.api').val();
            console.log(token)
            var query = $('.query').val();
        })

    .then(function handleSuccess(data) {
        console.log('success', data);

        var randomRepository = data.items;
        var randomSelector = randomRepository[Math.ceil(Math.random() * randomRepository.length)]
        var url = randomSelector.repos_url;
        var a = window.github.get(token, url);
        return a;
    })

    .fail(function handleSuccess(xhr) {
        console.log('failure', xhr)
    });

}());
