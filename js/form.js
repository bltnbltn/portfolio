function sendEmail() {
  Email.send({
    SecureToken: '7dc4fa54-8340-4bde-ab9a-81e83a9fe838',
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
