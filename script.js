// script.js

// يمكنك إضافة وظائف تفاعلية هنا في المستقبل
// على سبيل المثال، جعل القائمة نشطة بناءً على الصفحة الحالية،
// أو التعامل مع نماذج الإدخال، أو تهيئة محرر الأكواد.

console.log("تم تحميل ملف script.js بنجاح!");

// مثال بسيط: تحديد الرابط النشط في القائمة بناءً على الصفحة الحالية
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // الحصول على اسم الملف الحالي
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // تأكد من إزالة active من الآخرين إذا لزم الأمر
        }
    });
});

// ملاحظة: ستحتاج إلى كود أكثر تعقيدًا لدمج محرر أكواد