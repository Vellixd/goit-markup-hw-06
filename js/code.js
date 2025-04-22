document.addEventListener("DOMContentLoaded", () => {
    // Модалка 1
    const modal1 = {
      openBtn: document.querySelector("[data-modal-open]"),
      closeBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    // Модалка 2
    const modal2 = {
      openBtn: document.querySelector("[data-modal2-open]"),
      closeBtn: document.querySelector("[data-modal2-close]"),
      modal: document.querySelector("[data-modal2]"),
    };
  
    // Функция-переключатель
    function toggleModal(modalRef) {
      modalRef.modal.classList.toggle("is-open");
    }
  
    // Навешиваем обработчики
    if (modal1.openBtn && modal1.closeBtn && modal1.modal) {
      modal1.openBtn.addEventListener("click", () => toggleModal(modal1));
      modal1.closeBtn.addEventListener("click", () => toggleModal(modal1));
    }
  
    if (modal2.openBtn && modal2.closeBtn && modal2.modal) {
      modal2.openBtn.addEventListener("click", () => toggleModal(modal2));
      modal2.closeBtn.addEventListener("click", () => toggleModal(modal2));
    }
  });