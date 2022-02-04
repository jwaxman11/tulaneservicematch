Survey
    .StylesManager
    .applyTheme("modern");

const surveyJson = {"title":"Service Match Survey","description":"Answering These Questions Will Help Us Recommend The Most Suitable Volunteering Service For You","pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"Do you require remote volunteering?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"}]},{"type":"radiogroup","name":"question3","title":"Do you have access to a car?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"}]},{"type":"ranking","name":"question2","title":"Rank the following by your level of interest","isRequired":true,"choices":[{"value":"item1","text":"Gardening"},{"value":"item2","text":"Painting"},{"value":"item3","text":"Tutoring"},{"value":"item4","text":"Construction work"}]},{"type":"radiogroup","name":"question4","title":"Are you comfortable working with children?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"}]},{"type":"radiogroup","name":"question5","title":"Do you prefer","choices":[{"value":"item1","text":"Working on a semester-long project"},{"value":"item2","text":"Weekly service"},{"value":"item3","text":"No preference"}]},{"type":"radiogroup","name":"question6","title":"Do you prefer","choices":[{"value":"item1","text":"Team work"},{"value":"item2","text":"Individual work"},{"value":"item3","text":"No preference"}]},{"type":"checkbox","name":"question7","title":"Which days of the week are you available","choices":[{"value":"item1","text":"Monday"},{"value":"item2","text":"Tuesday"},{"value":"item3","text":"Wednesday"},{"value":"item4","text":"Thursday"},{"value":"item5","text":"Friday"},{"value":"item6","text":"Saturday"},{"value":"item7","text":"Sunday"}],"hasSelectAll":true}]}]}


    

const survey = new Survey.Model(surveyJson);

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

//given CPS data, make a dataframe of the volunteering orgs and ideal answers 
function dataframe() {
	
}



survey.onComplete.add(alertResults);

$(function() {
    $("#surveyContainer").Survey({ 
			model: survey,
			onComplete: sendDataToServer 
			})
});
