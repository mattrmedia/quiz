const q1 = {
  id: 1,
  type: 'Multiple Choice:',
  question: 'What is love?',
  answer: 'Baby don\'t hurt me',
  solutions: ['Never gonna give you up', 'You outta know', 'A battlefield', 'Baby don\'t hurt me'],
  image: 'https://placeimg.com/480/480/people',
  explanation: 'So what is right and what is wrong? <strong>Gimme a sign.</strong>'
};

const q2 = {
  id: 2,
  type: 'True or False:',
  question: 'Is the airspeed velocity of an unladen swallow 11 meters per second?',
  answer: 'true',
  solutions: ['true', 'false'],
  image: 'https://placeimg.com/480/480/people',
  explanation: 'Let\'s not go to Camelot. It is a silly place.'
};

const questions = [q1, q2];
const type = document.querySelector('.type');
const question = document.querySelector('.question');
const image = document.querySelector('.question__image');
const solutions = document.querySelector('.quiz__solutions');
const progress = document.querySelector('.quiz__progress');

let index = 0;
let results = 0;
let query = questions[index];

const display = (e) => {
  let bool = result(e);
  solutions.innerHTML = '<button class="quiz__btn next">Next</button>';
  solutions.childNodes[0].addEventListener('click', next);

  if (bool) {
    type.style = 'background-color: green;';
    type.innerHTML = 'Correct!';
    results += 1;
  } else {
    type.style = 'background-color: red;';
    type.innerHTML = 'Incorrect!';
  }
  question.innerHTML = query.explanation;
};

const result = (e) => {
  const answer = e.target.previousSibling.value;

  if (answer != undefined) {
    if (answer === query.answer) {
      return true;
    }
    return false
  }
};

const buildRadios = (arr) => {
  const radios = [];

  arr.forEach((value, i) => {
    const solution =
      `<div><input type="radio" id="solution_${i}" name="solution" value="${value}"><label class="quiz__btn" for="solution_${i}">${value}</label></div>`
    radios.push(solution);
  });
  return radios;
};

const populate = (data, node) => {
  node.innerHTML = '';
  node.style = '';

  if (Array.isArray(data)) {
    const radios = buildRadios(data);
    radios.forEach((solution) => {
      const input = new DOMParser().parseFromString(solution, 'text/html').body.firstChild;

      input.addEventListener('click', display);
      node.append(input);
    });
  } else {
    node.append(data);
  }
};

const build = () => {
  // This needs re-factoring rely less on this switch and just build
  for (key in query) {
    switch(key) {
      case 'image':
        image.src = query[key];
        break;
      case 'solutions':
        populate(query[key], solutions);
        break;
      case 'type':
        console.log(query[key], type)
        populate(query[key], type);
        break;
      case 'question':
        populate(query[key], question);
        break;
      default:
        console.log(key);
    }
  }

  for (let i = 0; i < questions.length; i++) {
    const div = document.createElement('div');
    populate(div, progress);
  }
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

document.addEventListener('DOMContentLoaded', build);
