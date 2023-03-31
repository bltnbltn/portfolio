function sendEmail() {
  Email.send({
    SecureToken: '196024e1-0498-4482-8545-203734ddf7c2',
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
