
// فتح/إغلاق القوائم الفرعية بالضغط فقط

 const images = document.querySelectorAll('.carousel img');
  const carousel = document.querySelector('.carousel');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-description');
  const closeBtn = document.getElementById('close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      // أوقف الحركة
      carousel.style.animationPlayState = 'paused';
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalDesc.textContent = img.dataset.description;
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = 'none';
    // استأنف الحركة
    carousel.style.animationPlayState = 'running';
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      // استأنف الحركة
      carousel.style.animationPlayState = 'running';
    }
  };
  
  const mainBtn = document.querySelector(".dropdown-btn");
const mainMenu = document.querySelector(".dropdown-menu");
const subButtons = document.querySelectorAll(".sub-btn");
const subMenus = document.querySelectorAll(".sub-menu");

// فتح / إغلاق القائمة الرئيسية
mainBtn.addEventListener("click", () => {
  const isOpen = mainMenu.style.maxHeight && mainMenu.style.maxHeight !== "0px";

  if (isOpen) {
    mainMenu.style.maxHeight = "0px";
    mainMenu.style.opacity = "0";
    mainBtn.classList.remove("open");
  } else {
    mainMenu.style.maxHeight = mainMenu.scrollHeight + "px";
    mainMenu.style.opacity = "1";
    mainBtn.classList.add("open");
  }
});

// فتح / إغلاق القوائم الفرعية
subButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const subMenu = subMenus[index];
    const isOpen = subMenu.style.maxHeight && subMenu.style.maxHeight !== "0px";

    if (isOpen) {
      subMenu.style.maxHeight = "0px";
      subMenu.style.opacity = "0";
      btn.classList.remove("open");
    } else {
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      subMenu.style.opacity = "1";
      btn.classList.add("open");
    }
  });
});

// إغلاق كل القوائم عند النقر خارجها
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    mainMenu.style.maxHeight = "0px";
    mainMenu.style.opacity = "0";
    mainBtn.classList.remove("open");

    subMenus.forEach(menu => {
      menu.style.maxHeight = "0px";
      menu.style.opacity = "0";
    });

    subButtons.forEach(btn => btn.classList.remove("open"));
  }
});


const menuBtn = document.getElementById("menu-btn"); // زر ☰
const navMenu = document.querySelector(".menu");     // القائمة

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open"); // يحوّل ☰ إلى X
  navMenu.classList.toggle("show"); // يفتح/يغلق القائمة
});

  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal-text");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 10; // كلما قل الرقم كلما ظهرت أسرع

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);

   const btn = document.getElementById("custom-menu-btn");
    const sidebar = document.getElementById("custom-sidebar");
    const overlay = document.getElementById("custom-overlay");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      sidebar.classList.toggle("show");
      overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", () => {
      btn.classList.remove("active");
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    });
      // التعامل مع كل زر وقائمته بشكل مستقل
  document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      const dropdown = this.nextElementSibling;
      const arrow = this.querySelector('.arrow');

      // إغلاق جميع القوائم الأخرى
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu !== dropdown) menu.classList.remove('show');
      });
      document.querySelectorAll('.arrow').forEach(a => {
        if (a !== arrow) a.classList.remove('rotate');
      });

      // تبديل الحالة للقائمة الحالية
      dropdown.classList.toggle('show');
      arrow.classList.toggle('rotate');
    });
  });

  // إغلاق إذا تم الضغط خارج أي قائمة
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-content').forEach(menu => menu.classList.remove('show'));
    document.querySelectorAll('.arrow').forEach(arrow => arrow.classList.remove('rotate'));
  });


