document.addEventListener("DOMContentLoaded", function()
{
    let MainDiv = document.createElement("div");
    MainDiv.id="MainDiv";
    let picture = document.createElement("img");
    picture.id = "ball";
    picture.src = "ball.png";
    let question = document.createElement("input");
    question.type = "text";
    question.name = "question";
    question.id = "question";
    question.placeholder = "Введіть ваше запитання...";
    let answer = document.createElement("p");
    answer.id = "answer";
    answer.innerHTML = "";
    let body = document.body;
    body.appendChild(MainDiv); 
    MainDiv.appendChild(picture);
    MainDiv.appendChild(question);
    MainDiv.appendChild(answer);
    picture.addEventListener("click", function()
    {
        let textInput = question.value;
        if(textInput == "")
            answer.innerHTML = "Введіть питання...";
        else
        {
                answer.innerHTML = generateRandomAnswer();
                question.value = "";
                question.placeholder = "Введіть ваше запитання...";
        }
    });
    function generateRandomAnswer() {
        const answers = [
            "Так",
            "Ні",
            "Можливо"
        ];
        const index = Math.floor(Math.random() * answers.length);
        return answers[index];
    }
});