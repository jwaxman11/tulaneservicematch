Survey
    .StylesManager
    .applyTheme("modern");

const surveyJson = {"title":"Tulane Service Match Survey","description":"Answering These Questions Will Help Us Recommend The Most Suitable Volunteering Service For You","pages":[{"name":"page1","elements":[{"type":"checkbox","name":"question1","title":"Do you require remote volunteering?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"}],"maxSelectedChoices":1},{"type":"checkbox","name":"question3","title":"Do you have access to a car?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"}]},{"type":"ranking","name":"question2","title":"Rank the following by your level of interest","isRequired":true,"choices":[{"value":"item1","text":"Gardening"},{"value":"item2","text":"Painting"},{"value":"item3","text":"Tutoring"},{"value":"item4","text":"Construction work"}]},{"type":"checkbox","name":"question4","title":"Are you comfortable working with children?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"}]}]}]}



    

const survey = new Survey.Model(surveyJson);

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

survey.onComplete.add(alertResults);

$(function() {
    $("#surveyContainer").Survey({ 
			model: survey,
			onComplete: sendDataToServer 
			})
});
