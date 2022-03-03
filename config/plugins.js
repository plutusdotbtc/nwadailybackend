 module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
            defaultFrom: 'crew@northwestarkansasdaily.com',
            defaultReplyTo: 'crew@northwestarkansasdaily.com'
        }
    }
 });