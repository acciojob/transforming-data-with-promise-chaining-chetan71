//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
  const inputValue = document.getElementById('ip').value;
  const number = parseFloat(inputValue);

  new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 2000);
  })
  .then((num) => {
    document.getElementById('output').textContent = `Result: ${num}`;
    return num;
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num * 2;
        document.getElementById('output').textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num - 3;
        document.getElementById('output').textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num / 2;
        document.getElementById('output').textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num + 10;
        document.getElementById('output').textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then((finalResult) => {
    document.getElementById('output').textContent = `Final Result: ${finalResult}`;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});