function colorirDia() {
  let days = document.getElementById('day').value;
  let color = document.getElementById('color').value;
  let calendar = document.getElementById('calendar');
  let td = calendar.getElementsByTagName('td')[parseInt(days) + 2]; 

  // Validação de entrada para dia positivo e prevenção de coloração de cor já utilizada
  if (days <= 0) {
    alert("Digite um número positivo para o dia.");
    return;
  }

  days = Math.max(1, parseInt(days)); // Certifique-se de que o dia mínimo seja 1
  let colorCounts = {};

  if (localStorage.getItem('colorCounts')) {
    colorCounts = JSON.parse(localStorage.getItem('colorCounts'));
  }

  if (colorCounts[color] && colorCounts[color] >= 3) {
    alert(`A cor "${color}" já foi usada 3 vezes. Escolha outra cor.`);
    return;
  }

  // Atualizar contagens de cores e armazenar em localStorage
  colorCounts[color] = (colorCounts[color] || 0) + 1;
  localStorage.setItem('colorCounts', JSON.stringify(colorCounts));

  // Pinte a célula somente se permitido (ainda não colorido 3 vezes)
  if (colorCounts[color] < 4) {
    td.style.backgroundColor = color;
  }
}

// Função para redefinir todas as marcações coloridas no calendário
function resetCalendar() {
  let calendar = document.getElementById('calendar');
  let cells = calendar.getElementsByTagName('td');

  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = ""; // Limpa background color
  }

  // Limpa as cores
  localStorage.removeItem('colorCounts');
}

//Adiciona botão com função de resetar
let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetCalendar);
