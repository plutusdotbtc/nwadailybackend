module.exports = {
    index: async ctx => {
            const results = await strapi.query('email').find({ email: ctx.request.body.email })
            console.log(results)
            const payload = await ctx.request.body
            payload.subscribeDate = await results[0].subscribeDate
            payload.source = await results[0].source
            console.log(payload)
            const info = await strapi.services.unsubscribe.create(payload)
            await strapi.services.email.delete({id:results[0].id})
            //testing
            //testing
            return info
    }
}