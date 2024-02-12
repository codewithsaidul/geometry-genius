
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

  // Calculate The Rectangle Area
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

  // Calculate The parallelogram Area
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

  // Calculate The Rhombus Area
  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;

  // Display The Rhombus Area Result
  const area = elementResult("rhombus-area", rhombusArea);

  // Return the Result
  return area;
}



// Calculate Pentagon Area
function calculatePentagonArea() {
  // Get The Pentagon Width
  const pentagonP = getInput("pentagon-p");

  // Get The Pentagon Height
  const pentagonBase = getInput("pentagon-base");

  // Calculate The Pentagon Area
  const pentagonArea = 0.5 * pentagonP * pentagonBase;

  // Display The Pentagon Area Result
  const area = elementResult("pentagon-area", pentagonArea);

  // Return the Result
  return area;
}




// Calculate Ellipse Area
function calculateEllipseArea() {
  // Get The Ellipse Width
  const ellipseA = getInput("ellipse-a");

  // Get The Ellipse Height
  const ellipseB = getInput("ellipse-b");

  // Get The Pie 
  const pie = 3.1416

  // Calculate The Ellipse Area
  const ellipseArea = pie * ellipseA * ellipseB;

  // Display The Ellipse Area Result
  const area = elementResult("ellipse-area", ellipseArea);

  // Return the Result
  return area;
}


