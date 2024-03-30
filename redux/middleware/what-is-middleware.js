const log = console.log
const store = {
  dispatch(action){
    log('Dispatch is called', action)
  }
}

//  step 1
/**Notes:  store.dispatch({
  type: 'ADD_TO_DO'
})    **/

// step2
// log('Dispatch is getting called')
// store.dispatch({
//   type: 'ADD_TO_DO'
// })
// log('Dispatch called successfully')


// step 3

// function logger (store, action){
//   log('Dispatch is getting called')
//   store.dispatch(action)
//   log('Dispatch called successfully')
// }
// logger(store, {
//   type: 'LOGGER_TO_DO'
// })

// function reportCrash(store, action) {
//   log('Report crash is getting called')
//   store.dispatch(action)
//   log('Report crash called successfully')
// }
// reportCrash(store, {
//   type: 'REPORT_CRASH'
// })

// const next = store.dispatch
// store.dispatch = function dispatchAndLog(action) {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('next state')
//   return result
// }
// store.dispatch({
//   type: 'ADD_TO_DO'
// })

// function logger(store) {
//   const next = store.dispatch

//   return function dispatchAndLog(action) {
//     console.log('dispatchAndLog dispatching', action)
//     let result = next(action)
//     console.log('dispatchAndLog next state')
//     return result
//   }
// }

function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log('logger dispatching', action)
      let result = next(action)
      console.log('logger next state')
      return result
    }
  }
}

function crashReporting(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log('crashReporting dispatching', action)
      let result = next(action)
      console.log('crashReporting next state')
      return result
    }
  }
}


// function crashReporting(store) {
//   const next = store.dispatch

//   return function crashReporting(action) {
//     console.log('crashReporting dispatching', action)
//     let result = next(action)
//     console.log('crashReporting next state')
//     return result
//   }
// }
// loggger  crashReporting  store.dispatch
// 
function applyMiddleWare(store, middlewares){
  middlewares = middlewares.slice()
  middlewares.reverse()
  const next = store.dispatch
  // Transform dispatch function with each middleware.
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch)
  })
}

applyMiddleWare(store, [logger, crashReporting])
store.dispatch({
  type: 'MANI'
})