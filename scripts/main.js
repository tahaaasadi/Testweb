const cells = Array(8).fill(0); // ۸ سلول با امتیاز اولیه صفر
const cellNames = [
  "سلول بنیادی",
  "گلبول قرمز",
  "سلول عضلانی",
  "سلول استخوانی",
  "ماکروفاژ",
  "سلول گلیا",
  "نورون",
  "سلول پانکراس"
];

const cellResults = [
  // سلول بنیادی
  `سلول بنیادیِ همه‌کاره<br>تو یه شخصیت چندوجهی و همه‌کاره هستی که همیشه در حال رشد و تغییر.<br>اما این تغییر دائم گاهی باعث می‌شه خودت هم ندونی دقیقاً دنبال چی هستی.<br>یه کمی زمان برای پیدا کردن مسیرت بهت کمک می‌کنه.`,
  // گلبول قرمز
  `گلبول قرمز ماجراجو<br>همیشه مشغولی و انرژی‌ت در حال جابه‌جایی و حرکته<br>اما گاهی لازمه یه لحظه از سرعتت کم کنی و نفس عمیق بکشی تا دوباره با قدرت بیشتری بتونی ادامه بدی.<br>بدون تو، جریان زندگی متوقف می‌شه!`,
  // سلول عضلانی
  `سلول عضله‌ی پرانرژی<br>همیشه آماده حرکت و عمل هستی، مثل موتور گروه کار می‌کنی.<br>ولی بعضی وقتا بدنت از فشار خسته می‌شه و آرزو داری کسی بیاد جای تو بذاره.<br>یه استراحت کوتاه می‌تونه دوباره انرژی‌ات رو برگردونه.`,
  // سلول استخوانی
  `سلول استخوانیِ استوار<br>ستون فقرات گروهی، محکم و قابل اعتماد.<br>همیشه می‌تونن روی تو حساب کنن، اما خودت هم گاهی به استراحت نیاز داری.<br>بدون استراحت، هیچ ستونی دوام نمی‌آره.`,
  // ماکروفاژ
  `سلول ماکروفاژ مهربون<br>همیشه مراقب و پشتیبان بقیه‌ای، اولویتت کمک به دیگرانه.<br>اما گاهی دلت می‌خواد کسی به تو هم توجه کنه و بهت انرژی بده.<br>مراقبت از خودت هم به اندازه کمک به دیگران مهمه!`,
  // سلول گلیا
  `گلیاِ آرام و قوی<br>کار پشت‌صحنه رو انجام می‌دی که همه چیز درست پیش بره، حتی وقتی کسی حواسش نیست.<br>تو نیروی پنهان و ضروری‌ای که سیستم رو سرپا نگه می‌داری.<br>یه کمی توجه به خودت، به اندازه‌ی مراقبتی که از بقیه می‌کنی برات ضروریه.🙂‍↔️🩷`,
  // نورون
  `نورون پرسرعت<br>همیشه همه‌چیزو سریع می‌فهمی و تحلیل می‌کنی، همه ازت انتظار جواب سریع دارن.<br>اما دلت یه استراحت واقعی می‌خواد که مغزت نفس بکشه و بتونی شارژ بشی.<br>گاهی فقط می‌خوای یه لحظه دنیا رو خاموش کنی و هیچی فکر نکنی.`,
  // سلول پانکراس
  `سلول پانکراسِ قاطی پاتی<br>تو نقش مهمی در حفظ تعادل و تنظیم انرژی داری.<br>اما بعضی روزها خودت احساس آشفتگی می‌کنی و باید به خودت نظم بدی.<br>با کمی مراقبت از خود، می‌تونی دوباره به تعادل برسی.`
];

const questions = [
  {
    question: "بزرگ‌ترین نقطه قوتت چیه؟",
    answers: [
      { text: "توانایی یادگیری بالا و انطباق سریع", cell: 0 },
      { text: "نظم و استمرار در کار", cell: 1 },
      { text: "قدرت جسمی یا بدنی بالا", cell: 2 },
      { text: "ساختن بنیان‌های محکم برای آینده", cell: 3 }
    ]
  },
  {
    question: "وقتی پروژه‌ای بهم ریخته‌ست، چطور عمل می‌کنی؟",
    answers: [
      { text: "شروع می‌کنی به بازسازی مرحله‌به‌مرحله", cell: 3 },
      { text: "بلافاصله مسئولیتو قبول می‌کنی و دست‌به‌کار می‌شی", cell: 4 },
      { text: "با انرژی بالا پیش می‌ری و به بقیه هم انگیزه می‌دی", cell: 2 },
      { text: "سعی می‌کنی فضا رو آروم کنی و بقیه رو به همکاری برسونی", cell: 5 }
    ]
  },
  {
    question: "در یک گروه، معمولاً چه نقشی داری؟",
    answers: [
      { text: "مغز متفکر گروه، کسی که طرح می‌ریزه", cell: 6 },
      { text: "مراقب بی‌صدا و پشتیبان روانی تیم", cell: 5 },
      { text: "کسی که حال و هوا و نظم گروه رو تنظیم می‌کنه", cell: 7 },
      { text: "کسی که بیشتر کارای فیزیکی و اجرایی رو برمی‌داره", cell: 2 }
    ]
  },
  {
    question: "اگه توی یه اتاق شلوغ با نور کم و صداهای مبهم باشی، چه واکنشی نشون می‌دی؟",
    answers: [
      { text: "سعی می‌کنی الگوها رو پیدا کنی و مسیر خروج رو مشخص کنی", cell: 6 },
      { text: "فوری برای کمک به بقیه اقدام می‌کنی، حتی اگه خودت گیج باشی", cell: 4 },
      { text: "کنار می‌ایستی، فضا رو تحلیل می‌کنی و تعادل ایجاد می‌کنی", cell: 5 },
      { text: "دنبال منابع (مثلاً نور یا اطلاعات) می‌گردی تا فضا رو پایدارتر کنی", cell: 7 }
    ]
  },
  {
    question: "چقدر با تغییرات سازگار هستی؟",
    answers: [
      { text: "خیلی! من خودم دائماً در حال تغییرم", cell: 0 },
      { text: "فقط اگه منطقی باشه", cell: 6 },
      { text: "وقتی لازمه، خودمو وفق می‌دم", cell: 4 },
      { text: "نه زیاد؛ ترجیح می‌دم ثبات داشته باشم", cell: 3 }
    ]
  },
  {
    question: "کدوم جمله بیشتر بهت می‌خوره؟",
    answers: [
      { text: "در سکوت می‌درخشم!", cell: 5 },
      { text: "وقتی کسی به کمک نیاز داره، من اونجام.", cell: 4 },
      { text: "آروم و محکم، مثل سنگ.", cell: 3 },
      { text: "من منبع انرژی‌ام!", cell: 7 }
    ]
  },
  {
    question: "موقع انتخاب لباس یا استایل، بیشتر چه چیزی برات مهمه؟",
    answers: [
      { text: "راحتی و کارایی", cell: 1 },
      { text: "کاربردی و منعطف بودن", cell: 0 },
      { text: "ساختار و نظم", cell: 3 },
      { text: "انرژی و رنگ!", cell: 7 }
    ]
  },
  {
    question: "وقتی در یک تیم کار می‌کنی، کدوم ویژگی رو بیشتر به گروه اضافه می‌کنی؟",
    answers: [
      { text: "خلاقیت در ایده‌پردازی و حل مسئله‌های پیچیده", cell: 6 },
      { text: "ثبات، پشتکار و حمایت بی‌وقفه از تیم", cell: 3 },
      { text: "انرژی، تحرک و انگیزه برای ادامه دادن", cell: 2 },
      { text: "انعطاف‌پذیری و توانایی پر کردن جای خالی هر عضو", cell: 0 }
    ]
  }
];

let currentQuestion = 0;
let userAnswers = []; // ذخیره انتخاب‌های کاربر

function renderProgressBar(current) {
  let progressBar = document.getElementById('progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.className = 'progress-bar';
  }
  // ساخت نقطه‌ها
  let dots = '';
  for (let i = 0; i < questions.length; i++) {
    dots += `<span class="progress-dot${i <= current ? ' active' : ''}"></span>`;
  }
  progressBar.innerHTML = dots;
  // جابجایی پروگرس بار به بین answers و quiz-buttons
  const answersDiv = document.getElementById('answers');
  const quizButtons = document.getElementById('quiz-buttons');
  if (answersDiv && quizButtons && progressBar.parentNode !== quizButtons.parentNode) {
    // اطمینان از اینکه پروگرس بار فقط یک بار اضافه شود
    if (progressBar.parentNode) progressBar.parentNode.removeChild(progressBar);
    quizButtons.parentNode.insertBefore(progressBar, quizButtons);
  } else if (answersDiv && quizButtons && progressBar.parentNode !== quizButtons.parentNode) {
    quizButtons.parentNode.insertBefore(progressBar, quizButtons);
  }
}

function showQuestion(index) {
  renderProgressBar(index);
  const q = questions[index];
  document.getElementById('question').innerText = q.question;
  let answersDiv = document.getElementById('answers');
  if (!answersDiv) {
    answersDiv = document.createElement('div');
    answersDiv.id = 'answers';
    document.getElementById('quiz').appendChild(answersDiv);
  }
  answersDiv.innerHTML = '';
  q.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-button';
    btn.innerText = ans.text;
    btn.onclick = () => selectAnswer(i);
    if (userAnswers[index] === i) {
      btn.classList.add('selected-answer');
    }
    answersDiv.appendChild(btn);
  });
  document.getElementById('next-button').disabled = (userAnswers[index] === undefined);
  const prevBtn = document.getElementById('prev-button');
  if (index === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = '';
  }
  const header = document.querySelector('header');
  const logo = document.getElementById('quiz-logo');
  const quizTitle = document.getElementById('quiz-title');
  header.classList.add('small-header');
  logo.classList.add('visible');
  quizTitle.style.lineHeight = '52px';
  quizTitle.style.display = 'inline-block';
  quizTitle.style.fontSize = '11pt';
  document.getElementById('prev-button').disabled = (index === 0);
}

function render() {
  const q = questions[currentQuestion];
  const questionElement = document.getElementById('question');
  const answersDiv = document.getElementById('answers');

  questionElement.innerHTML = `${currentQuestion + 1}. ${q.question}`;

  // پاک کردن پاسخ‌های قبلی
  answersDiv.innerHTML = '';
  q.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-button';
    btn.innerText = ans.text;
    btn.onclick = () => selectAnswer(i);

    // اگر قبلاً این گزینه انتخاب شده بود، استایل انتخاب‌شده به آن بده
    if (userAnswers[currentQuestion] === i) {
      btn.classList.add('selected-answer');
    }

    answersDiv.appendChild(btn);
  });
  // دکمه نکست فقط اگر گزینه‌ای انتخاب شده بود فعال باشد
  document.getElementById('next-button').disabled = (userAnswers[currentQuestion] === undefined);

  // کنترل نمایش دکمه قبلی
  const prevBtn = document.getElementById('prev-button');
  if (currentQuestion === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = '';
  }

  // هدر و لوگو
  const header = document.querySelector('header');
  const logo = document.getElementById('quiz-logo');
  const quizTitle = document.getElementById('quiz-title');
  header.classList.add('small-header');
  logo.classList.add('visible');
  quizTitle.style.lineHeight = '52px';
  quizTitle.style.display = 'inline-block';
  quizTitle.style.fontSize = '11pt'; // تغییر اندازه فونت هدر هنگام شروع تست

  document.getElementById('prev-button').disabled = (currentQuestion === 0);
}

function selectAnswer(answerIndex) {
  // اگر قبلاً گزینه‌ای انتخاب شده بود، امتیازش را حذف کن
  const prevAnswer = userAnswers[currentQuestion];
  if (prevAnswer !== undefined) {
    const prevCell = questions[currentQuestion].answers[prevAnswer].cell;
    cells[prevCell]--;
  }
  userAnswers[currentQuestion] = answerIndex;
  // امتیازدهی به سلول مربوطه
  const cellIndex = questions[currentQuestion].answers[answerIndex].cell;
  cells[cellIndex]++;
  // دکمه نکست را فعال کن
  document.getElementById('next-button').disabled = false;
  // گزینه انتخاب‌شده را هایلایت کن
  highlightSelected();
}

function highlightSelected() {
  const answersDiv = document.getElementById('answers');
  if (!answersDiv) return;
  const btns = answersDiv.querySelectorAll('.answer-button');
  btns.forEach((btn, i) => {
    btn.classList.toggle('selected-answer', userAnswers[currentQuestion] === i);
  });
}

function nextQuestion() {
  // اگر کاربر گزینه‌ای انتخاب نکرده بود
  if (userAnswers[currentQuestion] === undefined) {
    alert("لطفاً یک گزینه را انتخاب کن!");
    return;
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

// استیکرهای مناسب برای هر سلول
const cellStickers = [
    '🧠', // سلول ۱
    '💪', // سلول ۲
    '❤️', // سلول ۳
    '🦴', // سلول ۴
    '🩸', // سلول ۵
    '👁️', // سلول ۶
    '🦠', // سلول ۷
    '🫁', // سلول ۸
];

function showResult() {
    // پیدا کردن بیشترین امتیاز
    const maxScore = Math.max(...cells);
    const topCells = cells
        .map((score, idx) => ({ score, idx }))
        .filter(item => item.score === maxScore)
        .map(item => item.idx);

    // فقط اولین سلول با بیشترین امتیاز را نمایش بده
    const idx = topCells[0];
    let resultHTML = `<div class="result-box">
        <div class="result-header">
            <span class="result-title">نتیجه تست شخصیت سلولی</span>
        </div>
        <div class="result-header">
            <span class="result-sticker">${cellStickers[idx]}</span>
            <span class="result-title">${cellNames[idx]}</span>
        </div>
        <div class="result-desc">${cellResults[idx]}</div>
    </div>`;
    document.getElementById('quiz').innerHTML = resultHTML;
}

// اجرای اولیه
window.onload = function() {
  // نمایش صفحه مقدمه و مخفی کردن تست
  document.getElementById('intro').style.display = '';
  document.getElementById('quiz').style.display = 'none';
  // هدر و لوگو در ابتدا: هدر بزرگ و لوگو نمایش داده شود
  const header = document.querySelector('header');
  const logo = document.getElementById('quiz-logo');
  const quizTitle = document.getElementById('quiz-title');
  header.classList.remove('small-header');
  logo.classList.add('visible');
  quizTitle.style.lineHeight = '';
  quizTitle.style.display = '';
  // دکمه شروع تست
  document.getElementById('start-quiz-btn').onclick = function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = '';
    // هدر کوچک و لوگو باقی بماند
    header.classList.add('small-header');
    logo.classList.add('visible');
    quizTitle.style.lineHeight = '52px';
    quizTitle.style.display = 'inline-block';
    quizTitle.style.fontSize = '11pt'; // تغییر اندازه فونت هدر هنگام شروع تست
    showQuestion(currentQuestion);
    document.getElementById('next-button').onclick = nextQuestion;
    document.getElementById('prev-button').onclick = prevQuestion;
  };
};
