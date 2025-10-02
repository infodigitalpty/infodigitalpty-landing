document.addEventListener('DOMContentLoaded', () => {
    const typedTextSpan = document.querySelector('#typed-text');
    if (!typedTextSpan) return;

    const textToType = "ideas digitales en realidad!";
    const typingSpeed = 100;
    let charIndex = 0;

    const type = () => {
        if (charIndex < textToType.length) {
            typedTextSpan.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    };

    setTimeout(type, 1500);
});
