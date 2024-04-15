const calendar = document.getElementById('calendar');
const monthEl = document.getElementById('month');
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();


const drawBlankCalendar = () => {
  for (let i = 0; i < 35; i++) {
    const day = document.createElement('div');
    day.classList.add('day');

    const dayText = document.createElement('p');
    dayText.classList.add('day-text');
    dayText.innerText = days[i % 7];

    const dayNumber = document.createElement('p');
    dayNumber.classList.add('day-number');

    day.appendChild(dayText);
    day.appendChild(dayNumber);
    console.log(day);
    calendar.appendChild(day);
  }
};

const updateCalendar = (month, year) => {
  const dayElements = document.querySelectorAll('.day');

  const theFirst = new Date();
  theFirst.setMonth(month);
  theFirst.setYear(year);

  const theFirstDayOfWeek = theFirst.getDay();
  const monthName = months[month];
  const monthWithYear = `${year} - ${monthName}`;
  monthEl.innerText = monthWithYear;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let dayCounter = 1;
  for (let i = 0; i < dayElements.length; i++) {
    const day = dayElements[i];

    const dayNumber = day.querySelector('.day-number');
    if (i >= theFirstDayOfWeek && dayCounter <= daysInMonth) {
      const thisDate = new Date(year, month, dayCounter);
      console.log(thisDate);

      dayNumber.innerText = dayCounter;
      dayCounter++;
    } else {
      dayNumber.innerText = '';
    }
  }
};

const previousMonth = () => {
  if (currentMonth === 0) {
    currentMonth = 12;
    currentYear--;
  }
  updateCalendar(--currentMonth, currentYear);
};

const nextMonth = () => {
  if (currentMonth === 11) {
    currentMonth = -1;
    currentYear++;
  }
  updateCalendar(++currentMonth, currentYear);
};

const load = async () => {
  drawBlankCalendar();
  updateCalendar(currentMonth, currentYear, {});
};

load();