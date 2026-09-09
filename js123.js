
const tests = [

[
{
text:"Какой HTTP-метод обычно используется для получения данных с сервера?",
options:["GET","POST","DELETE","PUT"],
correct:0,
category:"Web",
explanation:"GET используется для получения данных с сервера и обычно не предназначен для изменения ресурса.",
link:"https://developer.mozilla.org/ru/docs/Web/HTTP/Reference/Methods/GET"
},

{
text:"Что вернёт выражение '5' == 5 в JavaScript?",
options:["true","false","Ошибка","undefined"],
correct:0,
category:"JavaScript",
explanation:"Оператор == выполняет нестрогое сравнение и может преобразовывать типы перед сравнением.",
link:"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Equality"
},

{
text:"Какое свойство CSS отвечает за внутренний отступ элемента?",
options:["margin","padding","gap","border"],
correct:1,
category:"CSS",
explanation:"Padding задаёт расстояние между содержимым элемента и его границей.",
link:"https://developer.mozilla.org/ru/docs/Web/CSS/Reference/Properties/padding"
},

{
text:"Что такое облачные технологии?",
options:[
"Хранение и использование ресурсов удалённых серверов через интернет",
"Работа только с USB",
"Работа без интернета",
"Использование оперативной памяти"
],
correct:0,
category:"Технологии",
explanation:"Облачные технологии позволяют использовать удалённые серверы для хранения данных и выполнения вычислений.",
link:"https://developer.mozilla.org/ru/docs/Learn_web_development"
},

{
text:"Как безопаснее всего хранить пароль пользователя?",
options:[
"В открытом виде",
"В виде хеша с солью",
"В обычном текстовом файле",
"В cookie без защиты"
],
correct:1,
category:"Безопасность",
explanation:"Пароли не должны храниться в открытом виде. Для их хранения применяют специальные алгоритмы хеширования с солью.",
link:"https://developer.mozilla.org/ru/docs/Web/Security"
},

{
text:"Почему O(n) обычно лучше O(n²) для большого количества данных?",
options:[
"O(n) не использует память",
"Рост количества операций у O(n) линейный",
"O(n²) не использует циклы",
"Разницы нет"
],
correct:1,
category:"Алгоритмы",
explanation:"При увеличении размера данных количество операций O(n) растёт линейно, а O(n²) — значительно быстрее.",
link:"https://developer.mozilla.org/ru/docs/Glossary/Big_O_notation"
},

{
text:"Какая из систем является реляционной базой данных?",
options:["MongoDB","Redis","MySQL","Firebase"],
correct:2,
category:"Базы данных",
explanation:"MySQL является реляционной системой управления базами данных и работает с таблицами и SQL.",
link:"https://dev.mysql.com/doc/"
},

{
text:"Какой протокол используется для защищённого соединения сайта?",
options:["HTTP","FTP","HTTPS","SMTP"],
correct:2,
category:"Безопасность",
explanation:"HTTPS защищает соединение между браузером и сервером с использованием TLS.",
link:"https://developer.mozilla.org/ru/docs/Glossary/HTTPS"
},

{
text:"Что такое supervised learning?",
options:[
"Обучение модели на размеченных данных",
"Обучение без данных",
"Создание сайта",
"Ручное программирование всех ответов"
],
correct:0,
category:"AI",
explanation:"При обучении с учителем модель получает данные, для которых известны правильные ответы или целевые значения.",
link:"https://developers.google.com/machine-learning/intro-to-ml/supervised-learning"
},

{
text:"Что произойдёт при display: none?",
options:[
"Элемент станет прозрачным",
"Элемент исчезнет и не будет занимать место",
"Элемент увеличится",
"Элемент станет красным"
],
correct:1,
category:"CSS",
explanation:"display:none полностью убирает элемент из отображения и обычного потока страницы.",
link:"https://developer.mozilla.org/ru/docs/Web/CSS/Reference/Properties/display"
}
],

[
{
text:"Какой HTML-тег используется для создания ссылки?",
options:["<a>","<link>","<url>","<href>"],
correct:0,
category:"HTML",
explanation:"Элемент <a> создаёт гиперссылку. Адрес указывается в атрибуте href.",
link:"https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/a"
},

{
text:"Что вернёт выражение 10 > 5 && 3 < 2?",
options:["true","false","10","undefined"],
correct:1,
category:"JavaScript",
explanation:"Второе условие ложно, поэтому оператор && возвращает false.",
link:"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND"
},

{
text:"Как включить Flexbox для элемента?",
options:[
"display: flex",
"position: flex",
"flex: display",
"layout: flex"
],
correct:0,
category:"CSS",
explanation:"Flexbox включается с помощью свойства display: flex.",
link:"https://developer.mozilla.org/ru/docs/Web/CSS/Guides/Flexible_box_layout"
},

{
text:"Что такое API?",
options:[
"Интерфейс взаимодействия между программами",
"База данных",
"Язык программирования",
"Графический редактор"
],
correct:0,
category:"Web",
explanation:"API предоставляет правила и интерфейсы, через которые разные программы могут взаимодействовать.",
link:"https://developer.mozilla.org/ru/docs/Glossary/API"
},

{
text:"Что делает оператор ===?",
options:[
"Сравнивает только значения",
"Сравнивает значение и тип",
"Всегда возвращает true",
"Проверяет только тип"
],
correct:1,
category:"JavaScript",
explanation:"=== выполняет строгое сравнение без неявного преобразования типов.",
link:"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Strict_equality"
},

{
text:"Какой формат часто используется для обмена структурированными данными?",
options:["JSON","PNG","MP3","EXE"],
correct:0,
category:"Web",
explanation:"JSON является распространённым текстовым форматом для передачи структурированных данных.",
link:"https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting/JSON"
},

{
text:"Что вернёт массив при обращении к несуществующему индексу?",
options:["undefined","null","false","Ошибка"],
correct:0,
category:"JavaScript",
explanation:"Если элемента массива по указанному индексу нет, JavaScript возвращает undefined.",
link:"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array"
},

{
text:"Какой атрибут содержит альтернативный текст изображения?",
options:["title","src","alt","text"],
correct:2,
category:"HTML",
explanation:"Атрибут alt задаёт альтернативный текст изображения.",
link:"https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/img"
},

{
text:"Для чего используется SQL SELECT?",
options:[
"Удаление таблицы",
"Получение данных",
"Создание изображения",
"Шифрование пароля"
],
correct:1,
category:"Базы данных",
explanation:"SELECT используется для получения данных из базы данных.",
link:"https://dev.mysql.com/doc/refman/8.4/en/select.html"
},

{
text:"Что означает debugging?",
options:[
"Создание дизайна",
"Поиск и исправление ошибок",
"Загрузка сайта",
"Создание базы данных"
],
correct:1,
category:"Программирование",
explanation:"Debugging — процесс поиска, анализа и исправления ошибок в программе.",
link:"https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting/What_went_wrong"
}
]

];


let currentTest = 0;
let questions = tests[0];
let current = 0;
let answers = [];
let timerId = null;
let seconds = 900;


/* НАВИГАЦИЯ */

function showSection(id){

    document.querySelectorAll("section").forEach(section=>{
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* ЗАПУСК */

function startTest(testNumber){

    currentTest = testNumber;
    questions = tests[testNumber];

    current = 0;
    answers = [];

    clearInterval(timerId);

    seconds = 900;

    showSection("test");

    renderQuestion();

    startTimer();
}


function restartCurrentTest(){
    startTest(currentTest);
}


function startOtherTest(){

    const nextTest = currentTest === 0 ? 1 : 0;

    startTest(nextTest);
}


/* ТАЙМЕР */

function startTimer(){

    updateTimer();

    timerId = setInterval(()=>{

        seconds--;

        updateTimer();

        if(seconds <= 0){

            clearInterval(timerId);

            showResult();
        }

    },1000);
}


function updateTimer(){

    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const timer = document.getElementById("timer");

    timer.textContent =
        String(minutes).padStart(2,"0")
        + ":"
        + String(secs).padStart(2,"0");

    timer.classList.toggle("low",seconds <= 60);
}


/* ВОПРОС */

function renderQuestion(){

    const q = questions[current];

    document.getElementById("progressText").textContent =
        "Вопрос " + (current + 1) + " из " + questions.length;

    document.getElementById("progress").style.width =
        ((current + 1) / questions.length * 100) + "%";

    document.getElementById("category").textContent =
        q.category;

    document.getElementById("question").textContent =
        q.text;

    const container = document.getElementById("options");

    container.innerHTML = "";

    q.options.forEach((text,index)=>{

        const option = document.createElement("div");

        option.className = "option";

        option.textContent = text;

        if(answers[current] === index){
            option.classList.add("selected");
        }

        option.onclick = ()=>{
            selectAnswer(index);
        };

        container.appendChild(option);
    });

    document.getElementById("prev").disabled =
        current === 0;

    document.getElementById("next").disabled =
        answers[current] === undefined;

    document.getElementById("next").textContent =
        current === questions.length - 1
        ? "Показать результат"
        : "Следующий вопрос";
}


/* ОТВЕТ */

function selectAnswer(index){

    answers[current] = index;

    document.querySelectorAll(".option").forEach((option,i)=>{

        option.classList.toggle(
            "selected",
            i === index
        );

    });

    document.getElementById("next").disabled = false;
}


/* НАЗАД */

function previousQuestion(){

    if(current > 0){

        current--;

        renderQuestion();
    }
}


/* ВПЕРЁД */

function nextQuestion(){

    if(answers[current] === undefined){
        return;
    }

    if(current === questions.length - 1){

        clearInterval(timerId);

        showResult();

        return;
    }

    current++;

    renderQuestion();
}


/* ЗАВЕРШЕНИЕ */

function openFinish(){

    const answered =
        answers.filter(a=>a !== undefined).length;

    document.getElementById("modalText").textContent =
        "Вы ответили на "
        + answered
        + " из "
        + questions.length
        + " вопросов. Завершить тест?";

    document.getElementById("modal").classList.add("active");
}


function closeFinish(){

    document.getElementById("modal").classList.remove("active");
}


function finishTest(){

    closeFinish();

    clearInterval(timerId);

    showResult();
}


/* РЕЗУЛЬТАТ */

function showResult(){

    clearInterval(timerId);

    let score = 0;

    questions.forEach((q,i)=>{

        if(answers[i] === q.correct){
            score++;
        }

    });

    const percent =
        Math.round(score / questions.length * 100);

    document.getElementById("score").textContent =
        score + " из " + questions.length;

    document.getElementById("percent").textContent =
        "Правильных ответов: " + percent + "%";


    let level;
    let message;


    if(score <= 3){

        level = "Начальный уровень";

        message =
            "Стоит ещё поработать над основами IT.";

    }else if(score <= 6){

        level = "Базовый уровень";

        message =
            "У вас есть базовые знания. Можно продолжать развиваться.";

    }else if(score <= 8){

        level = "Хороший уровень";

        message =
            "Хороший результат. Вы уверенно знаете основные темы.";

    }else{

        level = "Продвинутый уровень";

        message =
            "Отличный результат. У вас высокий уровень знаний.";

    }


    document.getElementById("level").textContent =
        level;

    document.getElementById("message").textContent =
        message;


    renderSkills();

    renderMistakes();

    showSection("result");
}


/* НАВЫКИ */

function renderSkills(){

    const container =
        document.getElementById("skillsContainer");

    container.innerHTML = "";

    const categories = {};


    questions.forEach((q,i)=>{

        if(!categories[q.category]){

            categories[q.category] = {
                total:0,
                correct:0
            };

        }

        categories[q.category].total++;

        if(answers[i] === q.correct){

            categories[q.category].correct++;
        }

    });


    Object.keys(categories).forEach(category=>{

        const data = categories[category];

        const percent =
            Math.round(
                data.correct / data.total * 100
            );


        const div =
            document.createElement("div");

        div.className = "skill";

        div.innerHTML = `
            <div class="skill-title">
                <span>${category}</span>
                <span class="skill-percent">${percent}%</span>
            </div>

            <div class="skill-bg">
                <div
                    class="skill-fill"
                    style="width:${percent}%">
                </div>
            </div>
        `;

        container.appendChild(div);

    });
}


/* ОШИБКИ */

function renderMistakes(){

    const container =
        document.getElementById("mistakes");

    container.innerHTML = "";


    const wrong = questions.filter((q,i)=>
        answers[i] !== q.correct
    );


    if(wrong.length === 0){

        container.innerHTML =
            '<div class="success">Все ответы правильные!</div>';

        return;
    }


    const title =
        document.createElement("h3");

    title.textContent =
        "Разбор ошибок (" + wrong.length + ")";

    container.appendChild(title);


    questions.forEach((q,i)=>{

        if(answers[i] === q.correct){
            return;
        }


        const yourAnswer =
            answers[i] === undefined
            ? "Нет ответа"
            : q.options[answers[i]];


        const div =
            document.createElement("div");

        div.className = "mistake";


        div.innerHTML = `
            <div class="mistake-question">
                ${i + 1}. ${q.text}
            </div>

            <div class="your">
                Ваш ответ: ${yourAnswer}
            </div>

            <div class="correct">
                Правильный ответ: ${q.options[q.correct]}
            </div>

            <div class="explanation">
                ${q.explanation}
            </div>

            <a
                class="learn"
                href="${q.link}"
                target="_blank"
                rel="noopener noreferrer">
                📚 Изучить тему →
            </a>
        `;


        container.appendChild(div);

    });
}
