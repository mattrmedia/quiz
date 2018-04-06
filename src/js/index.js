(function () {
  const q1 = {
    id: 1,
    type: 'Multiple Choice:',
    question: 'What is love?',
    answer: 'Baby don\'t hurt me',
    solutions: ['Never gonna give you up', 'You outta know', 'A battlefield', 'Baby don\'t hurt me'],
    image: 'https://placeimg.com/480/480/people',
    explanation: 'So what is right and what is wrong? <strong>Gimme a sign.</strong>',
  };

  const q2 = {
    id: 2,
    type: 'True or False:',
    question: 'Is the airspeed velocity of an unladen swallow 11 meters per second?',
    answer: 'true',
    solutions: ['true', 'false'],
    image: 'https://placeimg.com/480/480/people',
    explanation: 'Let\'s not go to Camelot. It is a silly place.',
  };

  const questions = [q1, q2];

  let index = 0;
  let results = 0;
  let query = questions[index];

  const type = document.querySelector('.type');
  const question = document.querySelector('.question');
  const image = document.querySelector('.question__image');
  const solutions = document.querySelector('.quiz__solutions');
  // const progress = document.querySelector('.quiz__progress');

  const populate = (data, node) => {
    node.innerHTML = '';
    node.style = '';

    if (Array.isArray(data)) {
      const radios = data.map((value, i) => `<div><input type="radio" id="solution_${i}" name="solution" value="${value}"><label class="quiz__btn" for="solution_${i}">${value}</label></div>`);
      radios.forEach((solution) => {
        const input = new DOMParser().parseFromString(solution, 'text/html').body.firstChild;

        input.addEventListener('click', displayResult);
        node.append(input);
      });
    } else if (data.indexOf('http://') === 0 || data.indexOf('https://') === 0) {
      node.src = data;
    } else {
      node.append(data);
    }
  };

  const build = () => {
    const nodes = {
      type,
      question,
      image,
      solutions,
    };

    Object.keys(nodes).forEach((key) => {
      populate(query[key], nodes[key]);
    });
  };

  const next = () => {
    index += 1;

    if (index < questions.length) {
      query = questions[index];
      build();
    } else {
      alert('you got ' + results + ' out of ' + questions.length + ' correct');
    }
  };


  const result = (selection) => {
    if (selection !== undefined) {
      if (selection === query.answer) {
        return true;
      }
      return false;
    }
    return false;
  };


  const displayResult = (e) => {
    const userSelection = e.target.previousSibling.value;
    const correct = result(userSelection);

    solutions.innerHTML = '<button class="quiz__btn next">Next</button>';
    solutions.childNodes[0].addEventListener('click', next);

    if (correct) {
      type.style = 'background-color: green;';
      type.innerHTML = 'Correct!';
      results += 1;
    } else {
      type.style = 'background-color: red;';
      type.innerHTML = 'Incorrect!';
    }
    question.innerHTML = query.explanation;
  };
  document.addEventListener('DOMContentLoaded', build);
}());
