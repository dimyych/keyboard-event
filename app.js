window.addEventListener('keydown', function (event) {
    console.log(event);
    let key = event.key,
        code = event.code,
        sel = selector => document.querySelector(selector);

    for (const iterator of document.querySelectorAll('.keyboard__key')) {
        if (iterator.classList.contains(key) || iterator.classList.contains(code)) {

            if (key != 'CapsLock') {
                iterator.classList.add('active');
            }

            if (key == 'CapsLock') {
                iterator.classList.toggle('active');
            }

            if (key != 'Shift' && key != 'Enter' && key != 'CapsLock' && key != 'Control' && key != 'Backspace' ) {
                sel('.keyboard__output-field').innerHTML += key;
            }

            if (key == 'Control') {
                sel('.keyboard__output-field').innerHTML += '    ';
            }
            
            if (key == 'Enter') {
                sel('.keyboard__output-field').innerHTML += '</br>';
            }

            if (key == 'Backspace') {
                var text = sel('.keyboard__output-field').innerHTML;
                text = text.substr(0, text.length - 1);
                sel('.keyboard__output-field').innerHTML = text;
            }
            
        }
    }
    
});


window.addEventListener('keyup', function (event) {
    console.log(event);
    let key = event.key;
    code = event.code;
    for (const iterator of document.querySelectorAll('.keyboard__key')) {
        if (event.keyCode == 9) {
            iterator.classList.remove('active');
        }
        if ((iterator.classList.contains(key) || iterator.classList.contains(code)) && key != 'CapsLock') {
            iterator.classList.remove('active');
        }
    }
});