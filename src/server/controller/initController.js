const index = require('./indexController');
const controllerInit={
   init(app,router){
      app.use(router(_ => {
        _.get('/index/update', index.update());
        _.post('/name/:id', (ctx, next) => {
          // ...
        })
      }))
    
   }
}

module.exports = controllerInit


