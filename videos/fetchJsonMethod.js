// 1. fetch
// 2. axios

const URL = `https://fakestoreapi.com/products/1`

async function fetchData (){
  const response = await fetch(URL)
  console.log(response)
  // response.json method do below operation
  // 1. read the response body
  //  a. read the body as a stream with the help of a reader
  const reader = response.body.getReader()
  reader.read().then(({done, value}) => {
    console.log(done, value)
    reader.read().then(({done, value}) => {
      console.log(done, value)
    })
  })
  // 2. parse the body as JSON
  // 3. return the result
  // const data = response.json()
  // console.log(data)
}

fetchData()