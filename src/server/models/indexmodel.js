const rp = require('request-promise');
class indexModel{
   constructor(ctx){
     this.ctx=ctx;
   }
   updateNum(){
       const option={
           url:'http://jsonplaceholder.typicode.com/posts',
           methods:'GET',
       }
       return  new Promise((resolve,reject)=>{
          rp(option).then(function(result){
            //console.log(result,1)
              const info=JSON.parse(result);

              if(info){
                  resolve({ 
                      data:info
                  })
              }else{
                  reject();
              }
              console.log(info);
          })
       })
   }
}

module.exports = indexModel