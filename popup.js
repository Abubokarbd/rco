// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a, button");

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      if (!navigator.onLine) {
        event.preventDefault();

        let offlineMessage = document.getElementById('offlineMessage');
        if (!offlineMessage) {
          offlineMessage = document.createElement('div');
          offlineMessage.id = 'offlineMessage';
          offlineMessage.textContent = 'দয়া করে আপনার ইন্টারনেট কানেকশন চেক করুন।';
          document.body.appendChild(offlineMessage);
          offlineMessage.style.cssText = `
            display:none;position:fixed;bottom:20px;left:50%;
            transform:translateX(-50%);
            background-color:#ff4d4d;color:#fff;
            padding:15px 25px;border-radius:8px;font-size:18px;
            box-shadow:0 2px 5px rgba(0,0,0,0.3);z-index:9999;
          `;
        }

        offlineMessage.style.display = 'none';
        void offlineMessage.offsetWidth; 
        offlineMessage.style.display = 'block';

        setTimeout(() => {
          offlineMessage.style.display = 'none';
        }, 5000);
      }
    });
  });
});
