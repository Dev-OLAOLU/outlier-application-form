// Email destination — all form submissions go here
var DESTINATION_EMAIL = "davidayantoyinbo@gmail.com";

// FormSubmit endpoint (no Google required)
// Works on Vercel (https://your-project.vercel.app) and local http://localhost:8080
// Does NOT work if you open HTML files directly (file://)
var FORMSUBMIT_ACTION = "https://formsubmit.co/" + DESTINATION_EMAIL;
