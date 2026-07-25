
/**
 * Google Apps Script — email form submissions to davidayantoyinbo@gmail.com
 */

function doPost(e) {
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var to = "davidayantoyinbo@gmail.com";
    var subject = data._subject || "New application form submission";
    var lines = [];
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (String(k).charAt(0) === "_") continue;
      lines.push(k + ": " + data[k]);
    }
    var body = lines.join("\n") || "(empty submission)";

    var opts = {
      to: to,
      subject: subject,
      body: body
    };
    if (data.email && data.email !== "—" && data.email.indexOf("@") !== -1) {
      opts.replyTo = data.email;
    }
    MailApp.sendEmail(opts);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: "Email sent" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      ok: true,
      message: "Application email endpoint is live for davidayantoyinbo@gmail.com"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor (Run → authorizeTest) to approve Gmail permission. */
function authorizeTest() {
  MailApp.sendEmail({
    to: "davidayantoyinbo@gmail.com",
    subject: "Option B active — form email pipeline",
    body: "Success. Your application form can now email submissions to this Gmail account."
  });
}
