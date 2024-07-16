from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/api/bot', methods=['POST'])
def bot_interaction():
    data = request.json
    user_id = data.get('user_id')
    message = data.get('message')
    bot_type = data.get('bot_type', 'gpt')  # Default to GPT if not specified

    if bot_type == 'gpt':
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": message}]
        )
        bot_response = response.choices[0].message['content']
    else:
        # Implement other bot types here
        bot_response = "Bot type not implemented yet."

    # Here you could save the interaction to a database, keyed by user_id

    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(debug=True, port=5000)