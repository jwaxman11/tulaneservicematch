Survey.StylesManager.applyTheme("modern");

var surveyJSON = {
                "title":"Service Match Survey",
                "description":"Answering These Questions Will Help Us Recommend The Most Suitable Volunteering Service For You",
                "pages":[{"name":"page1",
                "elements":[{"type":"checkbox",
                "name":"question1",
                "title":"Do you require remote volunteering?","isRequired":true,
                "choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"}],
                "maxSelectedChoices":1},{"type":"ranking","name":"question2",
                "title":"Rank the following hobbies",
                "isRequired":true,
                "choices":[{"value":"1","text":"Gardening"},{"value":"item2","text":"Painting"},{"value":"item3","text":"Tutoring"},{"value":"item4","text":"Building"}],"choicesOrder":"asc"}]}]}


const survey = new Survey.Model(surveyJson);

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

survey.onComplete.add(alertResults);


$(function() {
    $("#surveyContainer").Survey({ model: survey });
   print("SUrvey?");
});
