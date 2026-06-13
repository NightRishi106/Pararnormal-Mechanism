import https from 'https';

https.get("https://id-preview--eb9c1bc9-e6be-4ffa-8276-7def2a142e0e.lovable.app/assets/index-DkzOwJij.js", (res) => {
  console.log("Status Code:", res.statusCode);
}).on('error', (err) => {
  console.error(err.message);
});
