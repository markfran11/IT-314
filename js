const form = document.getElementById('student-form');
const list = document.getElementById('student-list');
const emptyMsg = document.getElementById('empty-msg');

function updateEmptyMsg() {
  emptyMsg.style.display = list.querySelectorAll('.student-card').length === 0 ? 'block' : 'none';
}

function createStudentCard(name, program) {
  const card = document.createElement('div');
  card.className = 'student-card';

  const initials = name.trim().split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

  card.innerHTML = `
    <div class="avatar">${initials}</div>
    <h3>${name}</h3>
    <p>${program}</p>
    <button type="button">Remove</button>
  `;

  card.querySelector('button').addEventListener('click', () => {
    card.remove();
    updateEmptyMsg();
  });

  return card;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const programInput = document.getElementById('program');

  const name = nameInput.value.trim();
  const program = programInput.value.trim();

  if (!name || !program) return;

  const card = createStudentCard(name, program);
  list.appendChild(card);

  form.reset();
  nameInput.focus();
  updateEmptyMsg();
});
