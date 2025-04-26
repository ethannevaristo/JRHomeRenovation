
function toggleChat() {
  var chat = document.getElementById('chat-window');
  if (chat.style.display === 'none') {
    chat.style.display = 'block';
  } else {
    chat.style.display = 'none';
  }
}

function submitChat() {
  alert('Thank you! We have received your inquiry. We will get back to you soon!');
  toggleChat();
}
