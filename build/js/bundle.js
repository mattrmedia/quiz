(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

const display = e => {
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

const result = e => {
  const answer = e.target.previousSibling.value;

  if (answer != undefined) {
    if (answer === query.answer) {
      return true;
    }
    return false;
  }
};

const buildRadios = arr => {
  const radios = [];

  arr.forEach((value, i) => {
    const solution = `<div><input type="radio" id="solution_${i}" name="solution" value="${value}"><label class="quiz__btn" for="solution_${i}">${value}</label></div>`;
    radios.push(solution);
  });
  return radios;
};

const populate = (data, node) => {
  node.innerHTML = '';
  node.style = '';

  if (Array.isArray(data)) {
    const radios = buildRadios(data);
    radios.forEach(solution => {
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
    switch (key) {
      case 'image':
        image.src = query[key];
        break;
      case 'solutions':
        populate(query[key], solutions);
        break;
      case 'type':
        console.log(query[key], type);
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxNQUFNLEtBQUs7QUFDVCxNQUFJLENBREs7QUFFVCxRQUFNLGtCQUZHO0FBR1QsWUFBVSxlQUhEO0FBSVQsVUFBUSxxQkFKQztBQUtULGFBQVcsQ0FBQyx5QkFBRCxFQUE0QixnQkFBNUIsRUFBOEMsZUFBOUMsRUFBK0QscUJBQS9ELENBTEY7QUFNVCxTQUFPLHFDQU5FO0FBT1QsZUFBYTtBQVBKLENBQVg7O0FBVUEsTUFBTSxLQUFLO0FBQ1QsTUFBSSxDQURLO0FBRVQsUUFBTSxnQkFGRztBQUdULFlBQVUsc0VBSEQ7QUFJVCxVQUFRLE1BSkM7QUFLVCxhQUFXLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FMRjtBQU1ULFNBQU8scUNBTkU7QUFPVCxlQUFhO0FBUEosQ0FBWDs7QUFVQSxNQUFNLFlBQVksQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFsQjtBQUNBLE1BQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLE1BQU0sV0FBVyxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7QUFDQSxNQUFNLFFBQVEsU0FBUyxhQUFULENBQXVCLGtCQUF2QixDQUFkO0FBQ0EsTUFBTSxZQUFZLFNBQVMsYUFBVCxDQUF1QixrQkFBdkIsQ0FBbEI7QUFDQSxNQUFNLFdBQVcsU0FBUyxhQUFULENBQXVCLGlCQUF2QixDQUFqQjs7QUFFQSxJQUFJLFFBQVEsQ0FBWjtBQUNBLElBQUksVUFBVSxDQUFkO0FBQ0EsSUFBSSxRQUFRLFVBQVUsS0FBVixDQUFaOztBQUVBLE1BQU0sVUFBVyxDQUFELElBQU87QUFDckIsTUFBSSxPQUFPLE9BQU8sQ0FBUCxDQUFYO0FBQ0EsWUFBVSxTQUFWLEdBQXNCLDhDQUF0QjtBQUNBLFlBQVUsVUFBVixDQUFxQixDQUFyQixFQUF3QixnQkFBeEIsQ0FBeUMsT0FB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MEIsa0JBQTFCLEVBQThDLEtBQTlDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJjb25zdCBxMSA9IHtcbiAgaWQ6IDEsXG4gIHR5cGU6ICdNdWx0aXBsZSBDaG9pY2U6JyxcbiAgcXVlc3Rpb246ICdXaGF0IGlzIGxvdmU/JyxcbiAgYW5zd2VyOiAnQmFieSBkb25cXCd0IGh1cnQgbWUnLFxuICBzb2x1dGlvbnM6IFsnTmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAnLCAnWW91IG91dHRhIGtub3cnLCAnQSBiYXR0bGVmaWVsZCcsICdCYWJ5IGRvblxcJ3QgaHVydCBtZSddLFxuICBpbWFnZTogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzQ4MC80ODAvcGVvcGxlJyxcbiAgZXhwbGFuYXRpb246ICdTbyB3aGF0IGlzIHJpZ2h0IGFuZCB3aGF0IGlzIHdyb25nPyA8c3Ryb25nPkdpbW1lIGEgc2lnbi48L3N0cm9uZz4nXG59O1xuXG5jb25zdCBxMiA9IHtcbiAgaWQ6IDIsXG4gIHR5cGU6ICdUcnVlIG9yIEZhbHNlOicsXG4gIHF1ZXN0aW9uOiAnSXMgdGhlIGFpcnNwZWVkIHZlbG9jaXR5IG9mIGFuIHVubGFkZW4gc3dhbGxvdyAxMSBtZXRlcnMgcGVyIHNlY29uZD8nLFxuICBhbnN3ZXI6ICd0cnVlJyxcbiAgc29sdXRpb25zOiBbJ3RydWUnLCAnZmFsc2UnXSxcbiAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS80ODAvNDgwL3Blb3BsZScsXG4gIGV4cGxhbmF0aW9uOiAnTGV0XFwncyBub3QgZ28gdG8gQ2FtZWxvdC4gSXQgaXMgYSBzaWxseSBwbGFjZS4nXG59O1xuXG5jb25zdCBxdWVzdGlvbnMgPSBbcTEsIHEyXTtcbmNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHlwZScpO1xuY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb24nKTtcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0aW9uX19pbWFnZScpO1xuY29uc3Qgc29sdXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX3NvbHV0aW9ucycpO1xuY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fcHJvZ3Jlc3MnKTtcblxubGV0IGluZGV4ID0gMDtcbmxldCByZXN1bHRzID0gMDtcbmxldCBxdWVyeSA9IHF1ZXN0aW9uc1tpbmRleF07XG5cbmNvbnN0IGRpc3BsYXkgPSAoZSkgPT4ge1xuICBsZXQgYm9vbCA9IHJlc3VsdChlKTtcbiAgc29sdXRpb25zLmlubmVySFRNTCA9ICc8YnV0dG9uIGNsYXNzPVwicXVpel9fYnRuIG5leHRcIj5OZXh0PC9idXR0b24+JztcbiAgc29sdXRpb25zLmNoaWxkTm9kZXNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0KTtcblxuICBpZiAoYm9vbCkge1xuICAgIHR5cGUuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47JztcbiAgICB0eXBlLmlubmVySFRNTCA9ICdDb3JyZWN0ISc7XG4gICAgcmVzdWx0cyArPSAxO1xuICB9IGVsc2Uge1xuICAgIHR5cGUuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmVkOyc7XG4gICAgdHlwZS5pbm5lckhUTUwgPSAnSW5jb3JyZWN0ISc7XG4gIH1cbiAgcXVlc3Rpb24uaW5uZXJIVE1MID0gcXVlcnkuZXhwbGFuYXRpb247XG59O1xuXG5jb25zdCByZXN1bHQgPSAoZSkgPT4ge1xuICBjb25zdCBhbnN3ZXIgPSBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWU7XG5cbiAgaWYgKGFuc3dlciAhPSB1bmRlZmluZWQpIHtcbiAgICBpZiAoYW5zd2VyID09PSBxdWVyeS5hbnN3ZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufTtcblxuY29uc3QgYnVpbGRSYWRpb3MgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IHJhZGlvcyA9IFtdO1xuXG4gIGFyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgIGNvbnN0IHNvbHV0aW9uID1cbiAgICAgIGA8ZGl2PjxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInNvbHV0aW9uXyR7aX1cIiBuYW1lPVwic29sdXRpb25cIiB2YWx1ZT1cIiR7dmFsdWV9XCI+PGxhYmVsIGNsYXNzPVwicXVpel9fYnRuXCIgZm9yPVwic29sdXRpb25fJHtpfVwiPiR7dmFsdWV9PC9sYWJlbD48L2Rpdj5gXG4gICAgcmFkaW9zLnB1c2goc29sdXRpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJhZGlvcztcbn07XG5cbmNvbnN0IHBvcHVsYXRlID0gKGRhdGEsIG5vZGUpID0+IHtcbiAgbm9kZS5pbm5lckhUTUwgPSAnJztcbiAgbm9kZS5zdHlsZSA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgY29uc3QgcmFkaW9zID0gYnVpbGRSYWRpb3MoZGF0YSk7XG4gICAgcmFkaW9zLmZvckVhY2goKHNvbHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc29sdXRpb24sICd0ZXh0L2h0bWwnKS5ib2R5LmZpcnN0Q2hpbGQ7XG5cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheSk7XG4gICAgICBub2RlLmFwcGVuZChpbnB1dCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hcHBlbmQoZGF0YSk7XG4gIH1cbn07XG5cbmNvbnN0IGJ1aWxkID0gKCkgPT4ge1xuICAvLyBUaGlzIG5lZWRzIHJlLWZhY3RvcmluZyByZWx5IGxlc3Mgb24gdGhpcyBzd2l0Y2ggYW5kIGp1c3QgYnVpbGRcbiAgZm9yIChrZXkgaW4gcXVlcnkpIHtcbiAgICBzd2l0Y2goa2V5KSB7XG4gICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgIGltYWdlLnNyYyA9IHF1ZXJ5W2tleV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc29sdXRpb25zJzpcbiAgICAgICAgcG9wdWxhdGUocXVlcnlba2V5XSwgc29sdXRpb25zKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnlba2V5XSwgdHlwZSlcbiAgICAgICAgcG9wdWxhdGUocXVlcnlba2V5XSwgdHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncXVlc3Rpb24nOlxuICAgICAgICBwb3B1bGF0ZShxdWVyeVtrZXldLCBxdWVzdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVsYXRlKGRpdiwgcHJvZ3Jlc3MpO1xuICB9XG59O1xuXG5jb25zdCBuZXh0ID0gKCkgPT4ge1xuICBpbmRleCArPSAxO1xuXG4gIGlmIChpbmRleCA8IHF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICBxdWVyeSA9IHF1ZXN0aW9uc1tpbmRleF07XG4gICAgYnVpbGQoKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgneW91IGdvdCAnICsgcmVzdWx0cyArICcgb3V0IG9mICcgKyBxdWVzdGlvbnMubGVuZ3RoICsgJyBjb3JyZWN0Jyk7XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBidWlsZCk7XG4iXX0=
