from flask import Flask, jsonify

from openai import OpenAI
import os


OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

api_key = OPENAI_API_KEY
client = OpenAI()


response = client.chat.completions.create(
  model="gpt-4-vision-preview",
  messages=[
    {
      "role": "user",
      "content": [
        {"type": "text", "text": "What kind of {'bacteria'} is this? It was sampled from the {'air'}, incubated for 3-5 days at 35 degrees C, then transferred to a 25 degrees C incubator for 5-7 days. List all of your guesses."},
        {
          "type": "image_url",
          "image_url": {
            "url": "https://i.imgur.com/d0aYtWj.jpg",
          },
        },
      ],
    }
  ],
  max_tokens=300,
)


OpenAiResponse = response.choices[0].message.content
print(OpenAiResponse)

app = Flask(__name__)

# A simple route that returns a message
@app.route('/')
def hello_world():
    return OpenAiResponse

if __name__ == '__main__':
    app.run(debug=True)
