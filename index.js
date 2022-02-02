Survey
    .StylesManager
    .applyTheme("modern");

const surveyJson = {"title":"Tulane Service Match Survey","description":"Answering These Questions Will Help Us Recommend The Most Suitable Volunteering Service For You","pages":[{"name":"page1","elements":[{"type":"checkbox","name":"question1","title":"Do you require remote volunteering?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"}],"maxSelectedChoices":1}]}]}

    

const survey = new Survey.Model(surveyJson);

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

survey.onComplete.add(alertResults);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});
