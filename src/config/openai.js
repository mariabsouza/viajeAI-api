const { Configuration, OpenAIApi } = require('openai')
require("dotenv").config()

module.exports = class openai{

	static configuration(){
		const configuration = new Configuration({
			//apiKey: process.env.OPENAI_API_KEY
			apiKey: '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'
		})

		return new OpenAIApi(configuration)
	}

	static textCompletion ({prompt}) {
    return 	{
			model:"text-davinci-003",
			prompt:`${prompt}`,
			temperature:0.5,
			max_tokens: 3500,
			top_p:1,
			frequency_penalty: 0.5,
			presence_penalty: 0
		}
  }
}