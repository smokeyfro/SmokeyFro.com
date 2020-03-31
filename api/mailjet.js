const got = require('got').default

const mailjet = got.extend({
  prefixUrl: 'https://api.mailjet.com/v3.1/',
  username: process.env.MAILJET_PUBLIC_KEY,
  password: process.env.MAILJET_SECRET_KEY
})

async function send (order) {
  const messagePayload = {
    Messages: [
      // Message
      {
        To: [
          {
            Email: process.env.SF_MAILJET_OWNER_EMAIL,
            Name: process.env.SF_MAILJET_OWNER_NAME
          }
        ],
        TemplateID: parseInt(process.env.SF_MAILJET_MESSAGE_TEMPLATE_ID),
        TemplateLanguage: true,
        Variables: {
          name: contact.Name,
          email: contact.Email,
          message: contact.Message
        }
      },
      {
        To: [
          {
            Email: process.env.SF_MAILJET_OWNER_EMAIL,
            Name: process.env.SF_MAILJET_OWNER_NAME
          }
        ],
        TemplateID: parseInt(process.env.SF_MAILJET_QUOTE_TEMPLATE_ID),
        TemplateLanguage: true,
        Variables: {
          name: contact.Name,
          email: contact.Email,
          message: contact.Message,
          budget: quote.Budget,
          website: quote.Website
        }
      },
      // Sender Email (Message)
      {
        To: [
          {
            Email: contact.Email,
            Name: contact.Name
          }
        ],
        TemplateID: parseInt(process.env.SF_MAILJET_SENDER_MESSAGE_TEMPLATE_ID),
        TemplateLanguage: true,
        Variables: {
            name: contact.Name,
            email: contact.Email,
            message: contact.Message
        }
      },
      // Sender Email (Quote)
      {
        To: [
          {
            Email: contact.Email,
            Name: contact.Name
          }
        ],
        TemplateID: parseInt(process.env.SF_MAILJET_SENDER_QUOTE_TEMPLATE_ID),
        TemplateLanguage: true,
        Variables: {
          name: contact.Name,
          email: contact.Email,
          message: contact.Message,
          budget: quote.Budget,
          website: quote.Website
        }
      },
    ]
  }

  return mailjet.post('send', { json: messagePayload })
}

module.exports = { send }
