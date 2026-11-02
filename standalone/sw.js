var CACHE='pardes-standalone-v2';
var FILES=["./", "index.html", "olvaso.css", "app.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png", "fonts/SourceSerif4-normal-400-600-latin.woff2", "fonts/SourceSerif4-normal-400-600-latin-ext.woff2", "fonts/SourceSerif4-italic-400-latin.woff2", "fonts/SourceSerif4-italic-400-latin-ext.woff2", "fonts/IBMPlexSans-normal-400-600-latin.woff2", "fonts/IBMPlexSans-normal-400-600-latin-ext.woff2"];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(h){return h||fetch(e.request)}));
});
