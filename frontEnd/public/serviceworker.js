const CACHE_VERSION = "version-1";
const urlsUsedToCache = ['index.html', 'offlineParici.html'];

// We install the service worker
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsUsedToCache);
            })
    )
});

// We listened to every requests.
this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
                    .catch(() => caches.match('offlineParici.html'))
        })
    )
 });


/** 
 * Event listener to activate the service worker 
 * We also want to keep only useful request as our cache_version (version-1 stated above)
 * So we have a condition to only activate if we have this cache version stored in our cachesList array.
 * */ 
 this.addEventListener('activate', (event) => {
    const cachesList = [];
    cachesList.push(CACHE_VERSION);

    event.waitUntil(
        caches.keys().then((cacheVersions) => Promise.all(
            cacheVersions.map((cacheVersion) => {
                if(!cachesList.includes(cacheVersion)) {
                    return caches.delete(cacheVersion);
                }
            })
        ))
            
    )
});