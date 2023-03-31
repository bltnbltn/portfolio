function sendEmail() {
  Email.send({
    SecureToken: '0bd50253-bdba-4040-b6b3-ba0e82e25a56',
    To: 'yuralee1713@gmail.com',
    From: 'yuralee1713@gmail.com',
    Subject: "Message from yura's Web Portfolio",
    Body:
      'Name: ' +
      document.getElementById('name').value +
      '<br> Email: ' +
      document.getElementById('email').value +
      '<br> Phone no: ' +
      document.getElementById('phone').value +
      '<br> Message: ' +
      document.getElementById('message').value,
  }).then((message) => alert(message));
}
