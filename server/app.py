# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

keyword_responses = {
    ("hello","hi"): [("Hi there!", 0.8), ("Hello!", 0.7)],
    ("how", "are", "you"): [("I'm good, thank you!", 0.9), ("Doing well, thanks!", 0.8)],
    ("bye",): [("Goodbye!", 0.8), ("See you later!", 0.7)],
    ("sad", "miserable"): [("It will get better soon.", 0.9), ("I'm here for you.", 0.8)],
    ("depressed"):[("You're not alone in your struggles.If you want,you can check out directory of mental health representatives",0.9)],
    ("exhausted","tired","overworked","overwhelmed"):[("You have immense responsibilties to deal with,it's alright to admit it's a little too much",0.8),("If it's possible,take a complete day off and get yourself some rest",0.8)],
} 

@app.route('/', methods=['POST','GET'])
def send_message():
    if request.method == 'POST':
        data = request.json
        response = generate_response(data)
        return jsonify({'response': response})
    else:
        return jsonify({'response ':"Hi there,I am a bot"})

def generate_response(message):
    tokens = message.lower().split()
    for keywords, responses in keyword_responses.items():
        if any(keyword in tokens for keyword in keywords):
            response_weight = sum(weight for _, weight in responses) / len(responses)
            return max(responses, key=lambda x: x[1])[0]

    
    return "I'm not sure how to respond to that."


if __name__ == '__main__':
    app.run(debug=True)
