const modules = [
  {
    id: 1,
    title: 'JavaScript Fundamentals & Async ES6',
    description: 'Deep dive into closures, prototypal inheritance, Event Loop queues, and asynchronous ES6 Promise patterns.',
    questions: [
      {
        id: 'm1_q1',
        type: 'single',
        text: 'What output is logged by `console.log(typeof typeof 1)`?',
        options: ['"number"', '"string"', '"undefined"', '"object"'],
        answer: '"string"'
      },
      {
        id: 'm1_q2',
        type: 'boolean',
        text: 'In JavaScript, primitive values are immutable.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm1_q3',
        type: 'multiple',
        text: 'Which of the following are valid primitive data types in JavaScript? (Select all that apply)',
        options: ['string', 'boolean', 'array', 'symbol'],
        answer: ['string', 'boolean', 'symbol']
      },
      {
        id: 'm1_q4',
        type: 'single',
        text: 'Where are Microtasks (Promises) executed relative to Macrotasks (setTimeout) in the Event Loop?',
        options: ['Before macrotasks', 'After macrotasks', 'In parallel web workers', 'Microtasks are deprecated'],
        answer: 'Before macrotasks'
      },
      {
        id: 'm1_q5',
        type: 'boolean',
        text: 'Variables declared with `let` and `const` are hoisted without initialization, triggering a ReferenceError if accessed early.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm1_q6',
        type: 'multiple',
        text: 'Which array methods mutate the original array instead of returning a new one? (Select all that apply)',
        options: ['push()', 'map()', 'splice()', 'filter()'],
        answer: ['push()', 'splice()']
      },
      {
        id: 'm1_q7',
        type: 'single',
        text: 'Which ES6 Data Structure stores unique primitive values and object references?',
        options: ['Map', 'Set', 'WeakMap', 'Object.keys()'],
        answer: 'Set'
      },
      {
        id: 'm1_q8',
        type: 'boolean',
        text: 'The result of `0.1 + 0.2 === 0.3` evaluates to `true` in standard JavaScript arithmetic.',
        options: ['True', 'False'],
        answer: 'False'
      },
      {
        id: 'm1_q9',
        type: 'single',
        text: 'Which method permanently binds a custom `this` context to a function?',
        options: ['Function.prototype.call()', 'Function.prototype.apply()', 'Function.prototype.bind()', 'Object.assign()'],
        answer: 'Function.prototype.bind()'
      },
      {
        id: 'm1_q10',
        type: 'multiple',
        text: 'Which of the following statements about closures are correct? (Select all that apply)',
        options: [
          'Functions have access to outer scope variables',
          'Closures are created automatically upon function creation',
          'Closures leak memory if not garbage collected',
          'Closures only work inside classes'
        ],
        answer: [
          'Functions have access to outer scope variables',
          'Closures are created automatically upon function creation',
          'Closures leak memory if not garbage collected'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Node.js & Express REST API Architecture',
    description: 'Constructing robust backend architectures, express middleware cascades, REST API endpoints, and error handling.',
    questions: [
      {
        id: 'm2_q1',
        type: 'single',
        text: 'Which core Node.js module handles non-blocking asynchronous file operations?',
        options: ['http', 'fs', 'path', 'stream'],
        answer: 'fs'
      },
      {
        id: 'm2_q2',
        type: 'boolean',
        text: 'Express middleware functions must always call `next()` or send a response to prevent the HTTP request from hanging indefinitely.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm2_q3',
        type: 'multiple',
        text: 'Which of the following are built-in core modules in Node.js? (Select all that apply)',
        options: ['fs', 'express', 'path', 'axios'],
        answer: ['fs', 'path']
      },
      {
        id: 'm2_q4',
        type: 'single',
        text: 'What status code represents a resource creation success in REST conventions?',
        options: ['200 OK', '201 Created', '204 No Content', '304 Not Modified'],
        answer: '201 Created'
      },
      {
        id: 'm2_q5',
        type: 'boolean',
        text: 'Node.js is inherently multi-threaded for executing custom JavaScript developer code.',
        options: ['True', 'False'],
        answer: 'False'
      },
      {
        id: 'm2_q6',
        type: 'multiple',
        text: 'Which components comprise an Express error-handling middleware signature? (Select all that apply)',
        options: ['err', 'req', 'res', 'next'],
        answer: ['err', 'req', 'res', 'next']
      },
      {
        id: 'm2_q7',
        type: 'single',
        text: 'What does `express.json()` middleware parse from incoming HTTP requests?',
        options: ['Form Data', 'JSON Payloads', 'URL Params', 'Cookies'],
        answer: 'JSON Payloads'
      },
      {
        id: 'm2_q8',
        type: 'boolean',
        text: 'The HTTP `PATCH` method is standardly used to perform a full replacement of a resource.',
        options: ['True', 'False'],
        answer: 'False'
      },
      {
        id: 'm2_q9',
        type: 'single',
        text: 'How do you access path variables in an Express endpoint like `/users/:id`?',
        options: ['req.body.id', 'req.params.id', 'req.query.id', 'req.headers.id'],
        answer: 'req.params.id'
      },
      {
        id: 'm2_q10',
        type: 'multiple',
        text: 'Which HTTP status codes signify client authorization or authentication errors? (Select all that apply)',
        options: ['400 Bad Request', '401 Unauthorized', '403 Forbidden', '500 Internal Error'],
        answer: ['401 Unauthorized', '403 Forbidden']
      }
    ]
  },
  {
    id: 3,
    title: 'Angular Enterprise Architecture & State',
    description: 'Master RxJS reactive data streams, component lifecycle hooks, dependency injection, and HTTP interceptors.',
    questions: [
      {
        id: 'm3_q1',
        type: 'single',
        text: 'Which decorator configures an Angular service class for Dependency Injection?',
        options: ['@Component()', '@Directive()', '@Injectable()', '@NgModule()'],
        answer: '@Injectable()'
      },
      {
        id: 'm3_q2',
        type: 'boolean',
        text: 'Angular uses Zone.js to automatically trigger change detection upon asynchronous browser events.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm3_q3',
        type: 'multiple',
        text: 'Which of the following are valid Angular component lifecycle hooks? (Select all that apply)',
        options: ['ngOnInit', 'ngOnChanges', 'ngComponentDidMount', 'ngOnDestroy'],
        answer: ['ngOnInit', 'ngOnChanges', 'ngOnDestroy']
      },
      {
        id: 'm3_q4',
        type: 'single',
        text: 'What RxJS operator prevents memory leaks by canceling previous pending HTTP requests?',
        options: ['mergeMap', 'switchMap', 'concatMap', 'exhaustMap'],
        answer: 'switchMap'
      },
      {
        id: 'm3_q5',
        type: 'boolean',
        text: 'BehaviorSubject in RxJS emits the latest value immediately upon subscription.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm3_q6',
        type: 'multiple',
        text: 'Which modules or packages are required for handling forms in Angular? (Select all that apply)',
        options: ['FormsModule', 'ReactiveFormsModule', 'HttpClientModule', 'BrowserModule'],
        answer: ['FormsModule', 'ReactiveFormsModule']
      },
      {
        id: 'm3_q7',
        type: 'single',
        text: 'What strategy optimizes Angular change detection by evaluating components ONLY when inputs change?',
        options: ['Default', 'OnPush', 'Zone.js', 'Manual checking'],
        answer: 'OnPush'
      },
      {
        id: 'm3_q8',
        type: 'boolean',
        text: 'Angular Pipes are exclusively used for HTTP communication and REST data fetching.',
        options: ['True', 'False'],
        answer: 'False'
      },
      {
        id: 'm3_q9',
        type: 'single',
        text: 'How do you lazy-load a feature module using Angular Router syntax?',
        options: ['loadChildren: () => import(...)', 'component: FeatureComponent', 'redirectTo: "feature"', 'canActivate: [Guard]'],
        answer: 'loadChildren: () => import(...)'
      },
      {
        id: 'm3_q10',
        type: 'multiple',
        text: 'Which advantages are provided by Angular CLI? (Select all that apply)',
        options: [
          'Scaffolding components and services',
          'Production build optimization',
          'Executing automated unit tests',
          'Direct database connectivity'
        ],
        answer: [
          'Scaffolding components and services',
          'Production build optimization',
          'Executing automated unit tests'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'React.js & Component State Management',
    description: 'Master functional hooks, Virtual DOM reconciliation, Context API, and state immutability in React.',
    questions: [
      {
        id: 'm4_q1',
        type: 'single',
        text: 'Which hook is used to perform side effects in functional React components?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        answer: 'useEffect'
      },
      {
        id: 'm4_q2',
        type: 'boolean',
        text: 'React component state updates are always executed synchronously.',
        options: ['True', 'False'],
        answer: 'False'
      },
      {
        id: 'm4_q3',
        type: 'multiple',
        text: 'Which of the following are built-in React hooks? (Select all that apply)',
        options: ['useMemo', 'useFetch', 'useCallback', 'useRef'],
        answer: ['useMemo', 'useCallback', 'useRef']
      },
      {
        id: 'm4_q4',
        type: 'single',
        text: 'What mechanism does React use to calculate minimal UI patches efficiently?',
        options: ['Shadow DOM', 'Virtual DOM & Reconciliation', 'Direct Browser Reflow', 'Angular Zone'],
        answer: 'Virtual DOM & Reconciliation'
      },
      {
        id: 'm4_q5',
        type: 'boolean',
        text: 'Props passed to child components are strictly read-only (immutable).',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm4_q6',
        type: 'multiple',
        text: 'Why do we need a unique `key` prop when rendering lists in React? (Select all that apply)',
        options: [
          'Helps React identify which items have changed',
          'Improves reconciliation performance',
          'Automatically sorts items alphabetically',
          'Prevents unnecessary component re-rendering'
        ],
        answer: [
          'Helps React identify which items have changed',
          'Improves reconciliation performance',
          'Prevents unnecessary component re-rendering'
        ]
      },
      {
        id: 'm4_q7',
        type: 'single',
        text: 'Which hook prevents expensive recalculations between renders by memoizing values?',
        options: ['useMemo', 'useEffect', 'useReducer', 'useState'],
        answer: 'useMemo'
      },
      {
        id: 'm4_q8',
        type: 'boolean',
        text: 'React Context API completely replaces Redux for all enterprise application state management needs.',
        options: ['True', 'False'],
        answer: 'False'
      },
      {
        id: 'm4_q9',
        type: 'single',
        text: 'What rule must all React Hook calls strictly follow?',
        options: ['Call them inside loops', 'Call them only at the top level of components', 'Call them inside event listeners only', 'Call them in class methods'],
        answer: 'Call them only at the top level of components'
      },
      {
        id: 'm4_q10',
        type: 'multiple',
        text: 'Which tools are standard for routing and state management in React ecosystems? (Select all that apply)',
        options: ['React Router', 'Redux Toolkit', 'Vue Router', 'Zustand'],
        answer: ['React Router', 'Redux Toolkit', 'Zustand']
      }
    ]
  },
  {
    id: 5,
    title: 'Python & Data Structures / Algorithms',
    description: 'Explore Pythonic paradigms, time complexity, recursion, pointers, and fundamental algorithm design.',
    questions: [
      {
        id: 'm5_q1',
        type: 'single',
        text: 'What is the average time complexity of searching in a Hash Map (Python dict)?',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'],
        answer: 'O(1)'
      },
      {
        id: 'm5_q2',
        type: 'boolean',
        text: 'In Python, strings are immutable sequences.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm5_q3',
        type: 'multiple',
        text: 'Which built-in Python data structures are mutable? (Select all that apply)',
        options: ['list', 'tuple', 'dict', 'set'],
        answer: ['list', 'dict', 'set']
      },
      {
        id: 'm5_q4',
        type: 'single',
        text: 'Which traversal algorithm uses a Queue data structure (FIFO)?',
        options: ['Depth-First Search (DFS)', 'Breadth-First Search (BFS)', 'Binary Search', 'QuickSort'],
        answer: 'Breadth-First Search (BFS)'
      },
      {
        id: 'm5_q5',
        type: 'boolean',
        text: 'Binary Search requires the input dataset to be sorted beforehand.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm5_q6',
        type: 'multiple',
        text: 'Which sorting algorithms have a worst-case time complexity of O(n log n)? (Select all that apply)',
        options: ['Merge Sort', 'Bubble Sort', 'Heap Sort', 'Insertion Sort'],
        answer: ['Merge Sort', 'Heap Sort']
      },
      {
        id: 'm5_q7',
        type: 'single',
        text: 'What Python keyword is used to create an anonymous inline function?',
        options: ['def', 'lambda', 'function', 'async'],
        answer: 'lambda'
      },
      {
        id: 'm5_q8',
        type: 'boolean',
        text: 'Python lists are implemented as dynamically resized arrays under the hood.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm5_q9',
        type: 'single',
        text: 'Which data structure operates on a Last-In, First-Out (LIFO) principle?',
        options: ['Queue', 'Stack', 'Priority Queue', 'Tree'],
        answer: 'Stack'
      },
      {
        id: 'm5_q10',
        type: 'multiple',
        text: 'Which concepts are fundamental to Object-Oriented Programming in Python? (Select all that apply)',
        options: ['Inheritance', 'Polymorphism', 'Pointers arithmetic', 'Encapsulation'],
        answer: ['Inheritance', 'Polymorphism', 'Encapsulation']
      }
    ]
  },
  {
    id: 6,
    title: 'Databases: SQL & MongoDB NoSQL',
    description: 'Master relational schema normalization, complex SQL joins, indexing, and MongoDB NoSQL document architecture.',
    questions: [
      {
        id: 'm6_q1',
        type: 'single',
        text: 'Which SQL JOIN returns all records from the left table and matched records from the right table?',
        options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
        answer: 'LEFT JOIN'
      },
      {
        id: 'm6_q2',
        type: 'boolean',
        text: 'MongoDB is a schema-flexible document-oriented NoSQL database.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm6_q3',
        type: 'multiple',
        text: 'Which of the following are ACID properties in relational database systems? (Select all that apply)',
        options: ['Atomicity', 'Consistency', 'Concurrency', 'Durability'],
        answer: ['Atomicity', 'Consistency', 'Durability']
      },
      {
        id: 'm6_q4',
        type: 'single',
        text: 'What SQL clause is used to filter aggregated group results?',
        options: ['WHERE', 'HAVING', 'FILTER', 'GROUP BY'],
        answer: 'HAVING'
      },
      {
        id: 'm6_q5',
        type: 'boolean',
        text: 'Database indexes significantly speed up data retrieval queries at the cost of slower write/insert performance.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm6_q6',
        type: 'multiple',
        text: 'Which MongoDB aggregation pipeline stages are commonly used for data analysis? (Select all that apply)',
        options: ['$match', '$group', '$sort', '$render'],
        answer: ['$match', '$group', '$sort']
      },
      {
        id: 'm6_q7',
        type: 'single',
        text: 'What normalization form eliminates partial functional dependencies of columns on primary keys?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        answer: '2NF'
      },
      {
        id: 'm6_q8',
        type: 'boolean',
        text: 'Relational databases store data in tables with rows and columns, whereas MongoDB stores JSON-like BSON documents.',
        options: ['True', 'False'],
        answer: 'True'
      },
      {
        id: 'm6_q9',
        type: 'single',
        text: 'Which SQL command removes all rows from a table permanently while keeping the table structure intact?',
        options: ['DROP TABLE', 'DELETE FROM', 'TRUNCATE TABLE', 'CLEAR TABLE'],
        answer: 'TRUNCATE TABLE'
      },
      {
        id: 'm6_q10',
        type: 'multiple',
        text: 'Which database paradigms handle horizontal scaling and distributed sharding very effectively? (Select all that apply)',
        options: ['NoSQL Document Stores', 'Traditional Monolithic SQL', 'Distributed Key-Value stores', 'Spreadsheet files'],
        answer: ['NoSQL Document Stores', 'Distributed Key-Value stores']
      }
    ]
  }
];

let activeModuleId = null;
let userScores = {};
let currentActiveQuestions = [];

const moduleListEl = document.getElementById('module-list');
const tagEl = document.getElementById('module-tag');
const titleEl = document.getElementById('module-title');
const descEl = document.getElementById('module-description');
const quizContainerEl = document.getElementById('quiz-container');
const questionsWrapperEl = document.getElementById('questions-wrapper');
const quizFormEl = document.getElementById('quiz-form');
const resultBoxEl = document.getElementById('result-box');
const completedCountEl = document.getElementById('completed-count');
const avgScoreEl = document.getElementById('avg-score');

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function init() {
  renderModuleList();
  updateStats();
}

function renderModuleList() {
  moduleListEl.innerHTML = '';
  modules.forEach((mod) => {
    const li = document.createElement('li');
    const isScore = userScores[mod.id] !== undefined;
    li.className = `nav-item ${activeModuleId === mod.id ? 'active' : ''}`;
    li.innerHTML = `
      <div>
        <div class="title">${mod.title}</div>
        <div class="subtext">10 Mixed Questions</div>
      </div>
      ${isScore ? `<span class="badge">${userScores[mod.id]}%</span>` : '<span class="subtext">→</span>'}
    `;
    li.onclick = () => selectModule(mod.id);
    moduleListEl.appendChild(li);
  });
}

function selectModule(id) {
  activeModuleId = id;
  renderModuleList();
  const mod = modules.find((m) => m.id === id);

  tagEl.innerText = `Module 0${mod.id}`;
  titleEl.innerText = mod.title;
  descEl.innerText = mod.description;
  quizContainerEl.classList.remove('hidden');
  resultBoxEl.classList.add('hidden');

  currentActiveQuestions = shuffleArray(mod.questions).map((q, index) => ({
    ...q,
    displayIndex: index + 1,
    shuffledOptions: q.type === 'boolean' ? q.options : shuffleArray(q.options)
  }));

  renderQuiz(currentActiveQuestions);
}

function renderQuiz(questions) {
  questionsWrapperEl.innerHTML = '';
  questions.forEach((q) => {
    const div = document.createElement('div');
    div.className = 'q-card';
    div.dataset.qid = q.id;
    div.dataset.qtype = q.type;
    
    let inputType = 'radio';
    let typeLabel = 'Single Choice';
    if (q.type === 'boolean') {
      inputType = 'radio';
      typeLabel = 'True / False';
    } else if (q.type === 'multiple') {
      inputType = 'checkbox';
      typeLabel = 'Multiple Answers (Checkboxes)';
    }

    let optionsHTML = '';
    q.shuffledOptions.forEach((opt) => {
      optionsHTML += `
        <label class="option-btn" data-option="${opt}">
          <input type="${inputType}" name="${q.id}" value="${opt}" />
          <span>${opt}</span>
        </label>
      `;
    });

    div.innerHTML = `
      <div class="q-header-row">
        <div class="q-title" style="margin-bottom:0;">${q.displayIndex}. ${q.text.replace(/^\d+\.\s*/, '')}</div>
        <span class="type-badge ${q.type}">${typeLabel}</span>
      </div>
      <div class="q-options" style="margin-top:12px;">${optionsHTML}</div>
      <div class="feedback-tag" id="feedback-${q.id}"></div>
    `;
    questionsWrapperEl.appendChild(div);
  });
}

quizFormEl.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(quizFormEl);
  
  let correct = 0;
  currentActiveQuestions.forEach((q) => {
    const cardEl = document.querySelector(`[data-qid="${q.id}"]`);
    const feedbackEl = document.getElementById(`feedback-${q.id}`);
    const labels = cardEl.querySelectorAll('.option-btn');

    let isCorrect = false;

    if (q.type === 'multiple') {
      const userSelected = formData.getAll(q.id); // array of checked values
      const sortedUser = [...userSelected].sort();
      const sortedAns = [...q.answer].sort();

      isCorrect = sortedUser.length === sortedAns.length && sortedUser.every((val, idx) => val === sortedAns[idx]);

      labels.forEach(lbl => {
        const input = lbl.querySelector('input');
        lbl.classList.remove('correct-choice', 'wrong-choice');
        if (q.answer.includes(input.value)) {
          lbl.classList.add('correct-choice');
        } else if (input.checked && !q.answer.includes(input.value)) {
          lbl.classList.add('wrong-choice');
        }
      });
    } else {
      const userAnswer = formData.get(q.id);
      isCorrect = (userAnswer === q.answer);

      labels.forEach(lbl => {
        const input = lbl.querySelector('input');
        lbl.classList.remove('correct-choice', 'wrong-choice');
        if (input.value === q.answer) {
          lbl.classList.add('correct-choice');
        }
        if (input.value === userAnswer && userAnswer !== q.answer) {
          lbl.classList.add('wrong-choice');
        }
      });
    }

    if (isCorrect) {
      correct++;
      feedbackEl.className = 'feedback-tag show correct';
      feedbackEl.innerText = '✓ Correct!';
    } else {
      feedbackEl.className = 'feedback-tag show incorrect';
      const ansText = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;
      feedbackEl.innerText = `✗ Incorrect. Correct answer: ${ansText}`;
    }
  });

  const percentage = Math.round((correct / currentActiveQuestions.length) * 100);
  userScores[activeModuleId] = percentage;
  updateStats();
  renderModuleList();

  resultBoxEl.className = `result-card ${percentage >= 70 ? 'success' : 'retry'}`;
  if (percentage >= 70) {
    resultBoxEl.innerHTML = `
      🎉 <strong>Congratulations! You passed the adaptive assessment!</strong> 
      <br/>Score: ${percentage}% (${correct}/10 correct). Exceptional technical mastery! Click the module again anytime for a fresh randomized question set.
    `;
  } else {
    resultBoxEl.innerHTML = `
      💪 <strong>Keep learning and try again!</strong> 
      <br/>Score: ${percentage}% (${correct}/10 correct). Review the highlighted correct answers above, then re-select this module to practice with new random questions.
    `;
  }
  resultBoxEl.classList.remove('hidden');
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

function updateStats() {
  const completed = Object.keys(userScores).length;
  const totalScores = Object.values(userScores);
  const avg = totalScores.length
    ? Math.round(totalScores.reduce((a, b) => a + b, 0) / totalScores.length)
    : 0;

  completedCountEl.innerText = `${completed} / ${modules.length}`;
  avgScoreEl.innerText = `${avg}%`;
}

init();