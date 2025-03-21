// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Calculate Trapezoid
 */
function Calculate() {
  // Get input values
  const lengthA = parseFloat(document.getElementById("Length-of-A-in-cm").value)
  const lengthB = parseFloat(document.getElementById("Length-of-B-in-cm").value)
  const resultDisplay = document.getElementById("Answer")

  // Validate inputs
  if (isNaN(lengthA) || isNaN(lengthB) || isNaN(height)) {
    resultDisplay.innerHTML = "Please enter valid numbers for all fields."
    resultDisplay.style.color = "Black"
    return
  }

  // Calculate area of trapezoid: ((a + b) / 2) * h
  const area = ((lengthA + lengthB) / 2) * height

  // Display the result
  resultDisplay.innerHTML = `The area of the trapezoid is: <strong>${area.toFixed(2)}</strong> cm²`
  resultDisplay.style.color = "Black"

  // Reset input fields after calculation
  document.getElementById("Length-of-A-in-cm").value = ""
  document.getElementById("Length-of-B-in-cm").value = ""
  document.getElementById("Length-of-H-in-cm").value = ""
}
