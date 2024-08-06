document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const leftEye = document.getElementById('left-eye');
    const rightEye = document.getElementById('right-eye');
    
    const leftEyeRect = leftEye.getBoundingClientRect();
    const rightEyeRect = rightEye.getBoundingClientRect();
    
    const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
    const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;
    const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
    const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;
    
    const angleLeftEye = Math.atan2(mouseY - leftEyeCenterY, mouseX - leftEyeCenterX);
    const angleRightEye = Math.atan2(mouseY - rightEyeCenterY, mouseX - rightEyeCenterX);
    
    const leftEyeMoveX = Math.cos(angleLeftEye) * 10;
    const leftEyeMoveY = Math.sin(angleLeftEye) * 10;
    const rightEyeMoveX = Math.cos(angleRightEye) * 10;
    const rightEyeMoveY = Math.sin(angleRightEye) * 10;
    
    leftEye.style.transform = `translate(${leftEyeMoveX}px, ${leftEyeMoveY}px)`;
    rightEye.style.transform = `translate(${rightEyeMoveX}px, ${rightEyeMoveY}px)`;
});
