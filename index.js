function createLoginTracker(userInfo) {
  // Step 2: Initialize login attempt counter
  let attemptCount = 0;

  // Step 3: Inner arrow function handling login attempts
  const loginAttempt = (passwordAttempt) => {
    // If already locked
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Increment attempt count
    attemptCount++;

    // Check password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      if (attemptCount >= 3) {
        return "Account locked due to too many failed login attempts";
      }
      return `Login attempt ${attemptCount}: Login failed`;
    }
  };

  // Return the inner function
  return loginAttempt;
}
const user = {
  username: "user1",

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};
