window.onload = function() {

    const questionLists = [
        {
            question: "Which of the following is a primitive data type in JavaScript?",
            option1: "object",
            option2: "string",
            option3: "array",
            option4: "function",
            ans: "string"
        },
        {
            question: "Which of the following is a non primitive data type in JavaScript?",
            option1: "number",
            option2: "string",
            option3: "boolean",
            option4: "function",
            ans: "function"
        },
        {
            question: "What will the following code return: Boolean(10 > 9)?",
            option1: "true",
            option2: "false",
            option3: "NaN",
            option4: "undefined",
            ans: "true"
        },
        {
            question: "Which of the following is a valid JavaScript variable name?",
            option1: "2name",
            option2: "@name",
            option3: "-name",
            option4: "_name",
            ans: "_name"
        },
        {
            question: "What is the result of typeof null in JavaScript?",
            option1: "null",
            option2: "object",
            option3: "undefined",
            option4: "boolean",
            ans: "object"
        },
        {
            question: "Which of the following methods can be used to add an element at the end of an array?",
            option1: "push()",
            option2: "add()",
            option3: "insert()",
            option4: "append()",
            ans: "push()"
        },
        {
            question: "Which built-in method combines the text of two strings and returns a new string?",
            option1: "append()",
            option2: "concat()",
            option3: "attach()",
            option4: "Non of them",
            ans: "concat()"
        },
        {
            question: "Which JavaScript method is used to write to an HTML document?",
            option1: "document.write()",
            option2: "document.log()",
            option3: "console.log()",
            option4: "write.console()",
            ans: "document.write()"
        },
        {
            question: "Which of the following is used to define a variable in JavaScript?",
            option1: "let",
            option2: "const",
            option3: "var",
            option4: "All of them",
            ans: "All of them"
        },
        {
            question: "Which company developed JavaScript?", 
            option1: "Microsoft", 
            option2: "Netscape", 
            option3: "Google", 
            option4: "Apple", 
            ans: "Netscape"
        },
        { 
            question: "Which of the following is not a reserved word in JavaScript?", 
            option1: "interface", 
            option2: "throws", 
            option3: "program", 
            option4: "short", 
            ans: "program" 
        },
        { 
            question: "Which operator is used to assign a value to a variable?", 
            option1: "=", 
            option2: "*", 
            option3: "x", 
            option4: "-", 
            ans: "=" 
        },
        {
            question: "What is the output of the following code: `console.log(2 + '2')`?", 
            option1: "22", 
            option2: "4", 
            option3: "NaN", 
            option4: "undefined", 
            ans: "22"
        },
        {
            question: "How do you create a function in JavaScript?", 
            option1: "function myFunction()", 
            option2: "func myFunction()", 
            option3: "function:myFunction()", 
            option4: "function = myFunction()", 
            ans: "function myFunction()"
        },
        {
            question: "Which event occurs when the user clicks on an HTML element?", 
            option1: "onchange", 
            option2: "onmouseclick", 
            option3: "onclick", 
            option4: "onmouseover", 
            ans: "onclick"
        },
        {
           question: "What is the global object of javascript?", 
            option1: "document", 
            option2: "window", 
            option3: "global", 
            option4: "console", 
            ans: "window"
        },
        {
            question: "How do you declare a JavaScript variable?", 
            option1: "variable carName", 
            option2: "v carName", 
            option3: "var carName", 
            option4: "varName car", 
            ans: "var carName"
        },
        {
            question: "Which symbol is used for single line comments in JavaScript?", 
            option1: "//", 
            option2: "/*", 
            option3: "*/", 
            option4: "#", 
            ans: "//"
        },
        {
            question: "How do you round the number 7.25 to the nearest integer?", 
            option1: "rnd(7.25)", 
            option2: "Math.round(7.25)", 
            option3: "Math.rnd(7.25)", 
            option4: "round(7.25)", 
            ans: "Math.round(7.25)"
        }, 
        {
            question: "How do you find the number with the highest value of x and y?", 
            option1: "ceil(x, y)", 
            option2: "Math.ceil(x, y)", 
            option3: "top(x, y)", 
            option4: "Math.max(x, y)", 
            ans: "Math.max(x, y)"
        },
        {
            question: "Which of the following is not a JavaScript data type?", 
            option1: "null", 
            option2: "undefined", 
            option3: "float", 
            option4: "boolean", 
            ans: "float"
        },
        {
            question: "How do you write an 'if' statement in JavaScript?", 
            option1: "if i = 5", 
            option2: "if i == 5 then", 
            option3: "if (i == 5)", 
            option4: "if i = 5 then", 
            ans: "if (i == 5)"
        },
        {
            question: "Which method returns the character at the specified index?", 
            option1: "getChar()", 
            option2: "charAt()", 
            option3: "getCharacter()", 
            option4: "characterAt()", 
            ans: "charAt()"
        },
        {
            question: "Which of the following is not a reserved word in JavaScript?", 
            option1: "default", 
            option2: "undefined", 
            option3: "finally", 
            option4: "throw", 
            ans: "undefined"
        },
        {
            question: "What will the following code return: `Boolean(10 < 9)`?", 
            option1: "true", 
            option2: "false", 
            option3: "NaN", 
            option4: "undefined", 
            ans: "false"
        },
        {
            question: "Which JavaScript keyword is used to declare a constant?", 
            option1: "const", 
            option2: "constant", 
            option3: "var", 
            option4: "let", 
            ans: "const"
        },
        {
            question: "Which method removes the last element from an array and returns that element?", 
            option1: "pop()", 
            option2: "push()", 
            option3: "reduce()", 
            option4: "shift()", 
            ans: "pop()"
        },
        {
            question: "Which method sorts the elements of an array?", 
            option1: "sort()", 
            option2: "changeOrder(order)", 
            option3: "order()", 
            option4: "None of the above", 
            ans: "sort()"
        }, 
        {
            question: "Which JavaScript method can be used to find the length of a string?", 
            option1: "length()", 
            option2: "size()", 
            option3: "index()", 
            option4: "None of the above", 
            ans: "length()"
        },
        {
            question: "What will the following code output: `console.log(typeof [])`?", 
            option1: "Array", 
            option2: "Object", 
            option3: "Undefined", 
            option4: "Function", 
            ans: "Object"
        }
    ];
    console.log(`yo question haru ko length ho ${questionLists.length}`);

    // Values of this array will be replaced with the random numbers.
    const questionNums = [-1, -1, -1, -1, -1];
    let count = null;
    let i=0;

    // Generating 5 unique random numbers.
    while(i<=4) 
    {
        count = 0;
        let randomNum = Math.floor(Math.random() * questionLists.length);

        questionNums.forEach((idx) => {
            if(randomNum != idx)
                count++;
        });

        if(count === 5) {
            questionNums[i] = randomNum;
            i++;
        }
    }
    console.log(`yo chai random numbers haruko array ${questionNums}`);

    const questionsContainer = document.querySelector(".questions_container");

    // creating elements
    let num = 0;
    function dynamicElements(obj) {
        num++;

        // it's a container for each questions and answers.
        const questionAnswer = document.createElement("div");

        const question = document.createElement("h3");
        question.className = "question";
        question.innerHTML = `${num}. ${obj.question}`;

        // it's just a answers container for each questions and answers.
        const answers = document.createElement("div");
        answers.className = "answers";

        for(let i=0; i<=3; i++) {
            let label = document.createElement("label");
            let input = document.createElement("input");
            let span = document.createElement("span");

            input.type = "radio";
            input.name = `q${num}`
            input.value = obj[`option${i+1}`];
            span.innerHTML = obj[`option${i+1}`];

            answers.append(label);
            label.append(input);
            label.append(span);
        }

        questionsContainer.append(questionAnswer);
        questionAnswer.append(question);
        questionAnswer.append(answers);
    }

    questionNums.forEach((idx) => {
        dynamicElements(questionLists[idx]);
    });

    let quizForm = document.querySelector(".quiz_form");
    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let marks = 0;
        const formData = new FormData(quizForm);
        const ansList = Array.from(formData.entries());
        
        if(ansList.length !== 5) {
            alert("Please give answers to all the questions.");
        }
        else {
            console.log(questionNums);
            console.log(ansList);
            for(let i=0; i<=4; i++) {
                if(questionLists[questionNums[i]].ans === ansList[i][1])
                    marks++;
            }
            alert(`You obtained ${marks} marks out of 5.`);
            location.reload();
        }
    });

}
