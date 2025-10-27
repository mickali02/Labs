const toggleBtn = document.getElementById('toggle');
const targetPara = document.getElementById('targetPara');

if (toggleBtn && targetPara) {
  toggleBtn.addEventListener('click', () => {
    targetPara.classList.toggle('hidden');
  });
} else {
  console.log("Elements with id 'toggle' or 'targetPara' not found.");
}
