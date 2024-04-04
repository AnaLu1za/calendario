function colorirDia() {
  let days = document.getElementById('day').value;
  let color = document.getElementById('color').value;
  let calendar = document.getElementById('calendar');
  let td = calendar.getElementsByTagName('td')[parseInt(days) + 2];

  if (days <= 0 || isNaN(days) || days > 31) {
    alert("Digite um número positivo entre 1 e 31.");
    return;
  }


  let colorCounts = {};
  if (localStorage.getItem('colorCounts')) {
    colorCounts = JSON.parse(localStorage.getItem('colorCounts'));
  }


  if (colorCounts[color] == 3) {colorCounts[color] = 0; 
    alert(`A cor "${color}" foi reiniciada. Pode usar novamente.`);
  }

  colorCounts[color] = (colorCounts[color] || 0) + 1;
  localStorage.setItem('colorCounts', JSON.stringify(colorCounts));


  td.style.backgroundColor = color;
}
