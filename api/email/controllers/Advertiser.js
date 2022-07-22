module.exports = {
    index: async ctx => {
      console.log(ctx.request.body)
        await strapi.plugins['email'].services.email.send({
          to: ctx.request.body.email,
          from: "Daniel Fritsche <daniel@northwestarkansasdaily.com>",
          cc: ["luke@northwestarkansasdaily.com"],
          replyTo: "daniel@northwestarkansasdaily.com",
          subject: "Thanks for reaching out!",
          html: `<p style="font-family:Helvetica;line-height:20px;margin-top:0px;color:rgb(32,32,32);font-size:15px">Hi Friend,</p><p style="font-family:Helvetica;line-height:20px;margin-top:0px;color:rgb(32,32,32);font-size:15px">I saw that you inquired about partnering with NWA Daily for advertising. We would love to hear more about your company or organization and how we could help if you have time this week for a quick call?</p><p style="font-family:Helvetica;line-height:20px;margin-top:0px;color:rgb(32,32,32);font-size:15px">If so we'd love to chat with you and answer any questions you might have. You can pick a time on our <a href="https://calendly.com/d/cj7-726-4mp/nwa-daily-advertising">calendar here!</a></p><p style="font-family:Helvetica;line-height:20px;margin-top:0px;color:rgb(32,32,32);font-size:15px">Look forward to speaking with you!</p><p style="font-family:Helvetica;line-height:20px;margin-top:0px;color:rgb(32,32,32);font-size:15px">Daniel Fritsche</p>`
        });
        // adsf
        ctx.send("Email sent")
    }
}
