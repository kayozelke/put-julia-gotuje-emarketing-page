document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('wideScreenModal'), {
        keyboard: false
    });
    
    setTimeout(function() {
        myModal.show();
    }, 3000);
});


function setupChatToggle() {
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatBox = document.getElementById('chatBox');
    const closeChatBtn = document.getElementById('closeChatBtn');


    chatToggleBtn.addEventListener('click', () => {
        chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
    });

    closeChatBtn.addEventListener('click', () => {
        chatBox.style.display = 'none';
    });    
    chatBox.style.display = 'block'; // Make chatBox shown by default

};

setupChatToggle()