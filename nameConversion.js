document.getElementById("convert-btn").addEventListener('click', () => {
    let inputText = document.getElementById("text").value;
    document.getElementById("camel-case").innerText = inputText.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
    document.getElementById("pascal-case").innerText = inputText.replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase()).replace(/\s+/g, '');
    document.getElementById("snake-case").innerText = inputText.replace(/\s+/g, '_').toLowerCase();
    document.getElementById("screaming-snake-case").innerText = inputText.replace(/\s+/g, '_').toUpperCase();
    document.getElementById("kebab-case").innerText = inputText.replace(/\s+/g, '-').toLowerCase();
    document.getElementById("screaming-kebab-case").innerText = inputText.replace(/\s+/g, '-').toUpperCase();
  })