
// Get The Input From Input Field
function getInput(inputById) {
  const inputField = document.getElementById(inputById);
  const inputFieldText = inputField.value;
  const value = parseFloat(inputFieldText);


  inputField.value = '';
  return value;
}


// Get The Area Result Zone
function elementResult(elementId, area) {
  const elementArea = document.getElementById(elementId);
  elementArea.innerText = area;
  return elementArea;
}



// Calculate Triangle Area
function calculateTriangleArea() {
  // Get Triangle Based Value
  const triangleBase = getInput("triangle-base");

  // Get The Triangle Height Value
  const triangleHeight = getInput("triangle-height");

  // Calculate The Triangle Area
  const triangleArea = 0.5 * triangleBase * triangleHeight;

  // Display Triangle Area;
  const reulstArea = elementResult("triangle-area", triangleArea);

  // Return The Result
  return reulstArea;
}



// Calculate Rectangle Area
function calculateRectangleArea() {
  // Get The Rectangle Width
  const rectangleWidth = getInput("rectangle-width");

  // Get The Rectangle Height
  const rectangleheight = getInput("rectangle-height");

  // Get The Rectangle Area
  const rectangleArea = rectangleWidth * rectangleheight;

  // Display The Rectangle Area Result
  const area = elementResult("rectangle-area", rectangleArea);

  // Return the Result
  return area;
}
