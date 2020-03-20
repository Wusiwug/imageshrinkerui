const axios = require("axios");

export const sendEmail = ({ imgUrl, recipients, emailSubject, message }) => {
  let arr1 = imgUrl.split(".");
  arr1[arr1.length - 2] += "~email";
  let fullImgUrl = arr1.join(".");

  let serverUrl = "https://image-streamer.herokuapp.com/send";
  let htmlBod = `<html>
      <h1>ImgeStreamer 2.1</h1>
      <h3>CHG HackDay Project</h3>
      <p><strong>Message: </strong>${message}</p>
      <img src="${fullImgUrl}" alt="HackDay Picture"/>
      <p>By: Joseph VanWagoner & Edmundo Rubio</p>
      </html>`;

  let postBody = {
    emailRecipients: recipients,
    emailSubject: emailSubject,
    emailBody: htmlBod
  };

  axios.post(serverUrl, postBody).then(resp => {
    alert(`Email send: ${resp.data} - status: ${resp.status}`);
  });
};
