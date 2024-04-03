from flask import Flask, render_template, request, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

RESPONSES_KEY = "responses"

app = Flask(__name__)
app.config['SECRET KEY'] = "secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

@app.route("/")
def show_survey_start():
    #start surveys
    return render_template("survey_start.html", survey = survey)

@app.route("/begin", methods=["POST"])
def start_survey():
    #clear responses
    session[RESPONSES_KEY] = []
    return redirect("/questions/0")

@app.route("/answer", methods=["POST"])
def handle_question():
   #get response choice
   choice = request.form['answer']
   #add response
   responses = session[RESPONSES_KEY]
   responses.append(choice)
   session[RESPONSES_KEY] = responses

   if(len(responses) == len(survey.questions)):
       #answered all questions
       return redirect("/complete")
   else:
       return redirect (f"/questions/{len(responses)}")
   
@app.route("/questions/<int:qid>")
def show_question(qid):
    #show current question
    responses = session.get(RESPONSES_KEY)

    if(responses is None):
        #trying to access question too soon
        return redirect("/")
    if(len(responses) == len(survey.questions)):
        #answered all questions
        return redirect("/complete")
    if(len (responses) != qid):
        #trying to answer out of order
        flash(f"Invalid question id: {qid}.")
        return redirect(f"/questions/{len(responses)}")
    
    question = survey.questions[qid]
    return render_template("questions.html", question_num=qid, question=question)

@app.route("/complete")
def complete():
    #completed survey
    return render_template("completion.html")