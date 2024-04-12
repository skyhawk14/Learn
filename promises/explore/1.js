const urls = ['a1.js', 'a2.js', 'a3.js']
const fetchPromise = function(url){
  return fetch(url)
  // return new Promise((res, rej)=>{
  //   setTimeout(()=>{
  //     res(url)
  //     console.log('url', url, 'kaise ho rha h ye')
  //   }, 2000)
  // })
}

// for(let i=0; i<3;i++){
//   console.log('before', i);
//   fetchPromise(urls[i]).then(v=>{
//     console.log(i, v);
//   })
//   console.log('after', i);
// }

const newUrls = urls.map(fetchPromise)
Promise.all(newUrls).then(v=>{
  console.log('resolve with ', v);
}).catch(e=>{
  console.log('failed with', e);
})