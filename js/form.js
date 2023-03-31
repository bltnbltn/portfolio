function sendEmail() {
  Email.send({
    SecureToken: 'fa0869c5-e072-40e7-806f-6b00ece51787',
    To: 'yuralee1713@gmail.com',
    From: document.getElementById('email').value,
    Subject: "Message from yura's Web Portfolio",
    Body:
      'Name: ' +
      document.getElementById('name').value +
      '<br> Email: ' +
      document.getElementById('name').value +
      '<br> Phone no: ' +
      document.getElementById('phone').value +
      '<br> Message: ' +
      document.getElementById('message').value,
  }).then((message) => alert(message));
}
