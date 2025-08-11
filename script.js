const modal = document.getElementById('modal');
const viewer = document.getElementById('pdfViewer');
const closeBtn = document.querySelector('.close');
const popupDownload = document.getElementById('popupDownload');

document.querySelectorAll('.tags a:not(.download)').forEach(tag => {
  tag.addEventListener('click', function(e) {
    e.preventDefault();
    const fileId = this.getAttribute('data-id');
    viewer.src = `https://drive.google.com/file/d/${fileId}/preview`;
    popupDownload.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  viewer.src = '';
  popupDownload.href = '#';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    viewer.src = '';
    popupDownload.href = '#';
  }
});
