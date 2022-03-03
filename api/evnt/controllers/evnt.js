module.exports = {
    create: async ctx => {
        if (Array.isArray(ctx.request.body)) 
        {
            console.log(ctx.request.body)
            return await Promise.all(ctx.request.body.map(strapi.services.evnt.create)); 
        } 
        else 
        { 
            return strapi.services.evnt.create(ctx.request.body); 
        }
    }
}