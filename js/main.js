function calculateTriangleArea() {
  // Get Triangle Based Value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBased = parseFloat(triangleBaseInput.value);

  // Get The Triangle Height Value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeight = parseFloat(triangleHeightInput.value);

  // Calculate The Triangle Area
  const area = 0.5 * triangleBased * triangleHeight;

  // Display Triangle Area; 
  const triangleAreaDisplay = document.getElementById('triangle-area')
  triangleAreaDisplay.innerText = area;

  return triangleAreaDisplay;
}
