document.addEventListener('DOMContentLoaded', function() {
  // Select the body element
  const body = document.querySelector('body');

  if (body) {
    // Set the font family and background color
    body.style.fontFamily = 'verdana';
    body.style.backgroundColor = '#33FFBD';
  } else {
    console.error('Could not find the body element');
  }

  // Select the title element and style it
  const title = document.querySelector('h1');
  title.style.color = '#333';
  title.style.fontSize = '2rem';
  title.style.textAlign = 'center';

  // Select the form element and set its width and margin
  const form = document.querySelector('form');
  form.style.width = '50%';
  form.style.margin = '0 auto';

  // Select the question headings and add some margin and padding
  const questionHeadings = document.querySelectorAll('p');
  questionHeadings.forEach((heading) => {
    heading.style.marginTop = '2rem';
    heading.style.marginBottom = '1rem';
    heading.style.padding = '0.5rem';
    heading.style.backgroundColor = '#fff';
    heading.style.border = '1px solid #ccc';
    heading.style.borderRadius = '5px';
  });

  // Select the radio buttons and add some margin and padding
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.style.marginRight = '1rem';
  });

  // Select the submit button and style it
  const submitButton = document.querySelector('button[type="button"]');
  if (submitButton) {
    submitButton.style.display = 'block';
    submitButton.style.margin = '0 auto';
    submitButton.style.backgroundColor = '#1c8adb';
    submitButton.style.color = '#fff';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.padding = '1rem';
  }

  // Select the result paragraph and style it
  const result = document.querySelector('#result');
  result.style.marginTop = '2rem';
  result.style.padding = '0.5rem';
  result.style.backgroundColor = '#fff';
  result.style.border = '1px solid #ccc';
  result.style.borderRadius = '5px';
});

