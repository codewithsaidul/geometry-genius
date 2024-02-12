
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



// Calculate parallelogram Area
function calculateParallelogramArea() {
  // Get The parallelogram Width
  const parallelogramBased = getInput("parallelogram-based");

  // Get The parallelogram Height
  const parallelogramheight = getInput("parallelogram-height");

  // Get The parallelogram Area
  const parallelogramArea = parallelogramBased * parallelogramheight;

  // Display The parallelogram Area Result
  const area = elementResult("parallelogram-area", parallelogramArea);

  // Return the Result
  return area;
}


// Calculate Rhombus Area
function calculateRhombusArea() {
  // Get The Rhombus Width
  const rhombusD1 = getInput("rhombus-d1");

  // Get The Rhombus Height
  const rhombusD2 = getInput("rhombus-d2");

  // Get The Rhombus Area
  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;

  // Display The Rhombus Area Result
  const area = elementResult("rhombus-area", rhombusArea);

  // Return the Result
  return area;
}


