document.querySelector('.input_message').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    add();
    }
});

function add(){
    let text = document.querySelector('.input_message').value;
    let container_block_1 = document.querySelector('.message_out');
    let text_div = document.createElement('div');

    text_div.className = 'message_text';
    text_div.innerHTML = `<p>${text}</p>`;

    document.querySelector('.input_message').value = "";
    container_block_1.append(text_div);
}

