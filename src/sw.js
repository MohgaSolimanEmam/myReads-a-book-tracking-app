//i'm caching the html , css , js and json files which will be trigerred using the service worker install 
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('reactnd-project-myreads-starter-master').then(function (cache) {
            //array of all the pathes that will get me the caches from

            return cache.addAll(
                [
                    '/',
                    '/App.js',
                    '/App.css',
                    '/App.test.js',
                    '/Book.js',
                    '/BooksAPI.js',
                    '/BooksShelf.js',
                    '/BooksSearch.js',
                    '/BooksList.js',
                    '/data/restaurants.json',
                    '/index.css',
                    '/index.js',
                    '/search.js'

                ]
            );
        })catch((error) => {
            console.log(error);
        })
	);
});

//problem of activation solved from one of the p6 study group videos

self.addEventListener('activate', function (event) {
    event.waitUntil(

        caches.keys().then(function (cachename) {

            return Promise.all(

                cachename.filter(function (cachename) {
                    return cachename.startWith('restaurant-') && cachename != staticCacheName;
                }).map(function (cachename) {
                    return cache.delete(cachename);
                })

            );

        })

    );

});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (responseFromWork) {
            //return the response 
            return responseFromWork || fetch(event.request)
        })

    );
});

