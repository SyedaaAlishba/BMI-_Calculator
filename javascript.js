function calculateBMI() {
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const unit = document.getElementById("unit").value;
  const weight = parseFloat(document.getElementById("weight").value);

  if (!age || !height || !weight) {
    document.getElementById("status").innerHTML =
      "Please fill in all fields (age, height, and weight).";
    return;
  }

  if (age < 20 || age > 90) {
    document.getElementById("status").innerHTML =
      "Your age must be greater than 20 or less than 90";
    return;
  }
  let heightInMeters = height;
  if (unit === "cm") {
    if (height < 100 || height > 250) {
      document.getElementById("status").innerHTML =
        "Invalid height. Height in cm should be between 100 and 250.";
      return;
    }
    heightInMeters = height / 100;
  } else if (unit === "m") {
    if (height < 1.0 || height > 2.5) {
      document.getElementById("status").innerHTML =
        "Invalid height. Height in meters should be between 1.0 and 2.5.";
      return;
    }
    heightInMeters = height;
  } else {
    document.getElementById("status").innerHTML =
      "Please enter a valid unit (cm or m).";
    return;
  }
  const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category;
  if (BMI < 18.5) {
    category = "Underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    category = "Healthy weight";
  } else if (BMI >= 25 && BMI < 30) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  document.getElementById(
    "status"
  ).innerHTML = `Your BMI is ${BMI} <br> Category:<b> ${category}`;
}
