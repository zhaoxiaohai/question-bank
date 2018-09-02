const indexModel=require('../models/indexmodel');
const indexController={
    index(){
        return async(ctx,next)=>{
            ctx.body=await ctx.render('index.html',{
                title:'题库'
            })
        }
    },
    update(){
        return async(ctx,next)=>{
          const indexM=new indexModel();
          ctx.body=await indexM.updateNum();
        }
    }
}

module.exports =indexController;