const chatData = [];

        function sendMessage() {
            const messageInput = document.getElementById('messageInput');
            const senderSelect = document.getElementById('senderSelect');
            const chatMessages = document.getElementById('chatMessages');

            
            if (messageInput.value.trim() === '') {
                alert('Please enter a message');
                return;
            }

            if (senderSelect.value === '') {
                alert('Please select a sender');
                return;
            }

            
            chatData.push({
                sender: senderSelect.value,
                message: messageInput.value.trim()
            });

            
            messageInput.value = '';

    
            renderChatMessages();
        }

        function renderChatMessages() {
            const chatMessages = document.getElementById('chatMessages');
            chatMessages.innerHTML = ''; 

            chatData.forEach(chat => {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message', `${chat.sender}-message`);
                messageDiv.innerHTML = `
                    <div class="message-header">${chat.sender}</div>
                    ${chat.message}
                `;
                chatMessages.appendChild(messageDiv);
            });

            
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        
        document.getElementById('messageInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });