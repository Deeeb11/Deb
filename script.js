document.addEventListener('DOMContentLoaded', function() {
    
    const app = document.getElementById('app');
    const container = document.createElement('div');
    container.className = 'w3-row-padding';
    
    const leftColumn = document.createElement('div');
    leftColumn.className = 'w3-third';
    
   
    
    const rightColumn = document.createElement('div');
    rightColumn.className = 'w3-twothird';
    
   
    container.appendChild(leftColumn);
    container.appendChild(rightColumn);
    app.appendChild(container);
  });