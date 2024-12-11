// async function so that we can use the await keyword
// async function so that we can use the await keyword
async function submitCode() {
  try {
    // Your investigation code should go here
    // Leave your lines of code in when you find something out, so that you can always come back to it and see how you got there
    const response = await fetch("/api/logs");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

submitCode(); // calls the function above to run your code


// Use the following endpoint URL:

// /api
// GET request to /logs
// Returns a list of all the logs.


////////////





  ////////////////////ORIGINAL ///////////////////////
  // async function submitCode() {
  //   try {
  //     // Your investigation code should go here
  //     // Leave your lines of code in when you find something out, so that you can always come back to it and see how you got there
  //     let response = await fetch("/api", {
  //     })
  //     .then(function (res) {
  //     return res.json();
  //     })
  //     console.log(response);
  //   } catch (error) {
  //     console.error(`Error: ${error.message}`);
  //   }
  // }