// دالة تسجيل الدخول
function validateLogin(event) {
  event.preventDefault(); // منع تحديث الصفحة

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // التحقق من صحة اسم المستخدم وكلمة المرور
  if (username === 'admin' && password === 'admin') {
      // إظهار قسم الكورسات
      document.getElementById('courses').style.display = 'block';
      // إخفاء قسم تسجيل الدخول
      document.getElementById('login').style.display = 'none';
  } else {
      alert('اسم المستخدم أو كلمة المرور غير صحيحة');
  }
}
// function goBackToCourses() {
//   // إخفاء محتوى الفيديوهات أو الأقسام الخاصة بالكورسات
//   document.querySelectorAll('.course div').forEach(div => {
//       div.style.display = 'none'; // إخفاء جميع المحتويات الداخلية للكورسات
//   });

//   // إظهار قسم الكورسات المتاحة
//   const coursesSection = document.getElementById('courses');
//   if (coursesSection) {
//       coursesSection.style.display = 'block'; // عرض قائمة الكورسات
//   }
// }


// دالة التسجيل مع كلمة المرور لكل كورس
function enrollWithPassword(courseName, correctPassword, passwordInputId, videoId) {
  const userPassword = document.getElementById(passwordInputId).value;

  if (userPassword === correctPassword) {
      // إظهار الفيديو الخاص بالكورس
      document.getElementById(videoId).style.display = 'block';
      // تعطيل حقل كلمة المرور بعد التسجيل
      document.getElementById(passwordInputId).disabled = true;
      // إضافة الكورس إلى قائمة الكورسات المسجلة
      

  } else {
      alert(`كلمة المرور لكورس "${courseName}" غير صحيحة. حاول مرة أخرى.`);
      document.getElementById(passwordInputId).value = ''; // مسح كلمة المرور المدخلة
  }
}

// دالة إضافة الكورس إلى قائمة الكورسات المسجلة
function addCourseToList(courseName) {
  const enrolledList = document.getElementById('enrolled-list');
  const listItem = document.createElement('li');
  listItem.textContent = courseName;
  enrolledList.appendChild(listItem);
}

// // فتح صفحة كورسات الذكاء الاصطناعي
// function enrollToAICourse() {
//   enrollWithPassword('الذكاء الاصطناعي', '1234', 'ai-password', 'ai-video');
// }


// فتح صفحة كورس الفوتوشوب
function openPhotoshopCourse() {
  const passwordInput = document.getElementById('photoshop-password').value;
  const correctPassword = '2345';

  if (passwordInput === correctPassword) {
      // التوجيه إلى صفحة كورسات الفوتوشوب
      window.location.href = 'photoshop-course.html';
  } else {
      alert('كلمة المرور غير صحيحة. حاول مرة أخرى!');
  }
}

// فتح صفحة كورس الذكاء الاصطناعي
function enrollToAICourse() {
  const passwordInput = document.getElementById('ai-password').value;
  const correctPassword = '1234';

  if (passwordInput === correctPassword) {
      // التوجيه إلى صفحة كورسات الذكاء الاصطناعي
      window.location.href = 'ai-course.html';
  } else {
      alert('كلمة المرور غير صحيحة. حاول مرة أخرى!');
  }
}

// فتح صفحة كورس كانفا
function openCanvaCourse() {
  const passwordInput = document.getElementById('canva-password').value;
  const correctPassword = '3456';

  if (passwordInput === correctPassword) {
      // التوجيه إلى صفحة كورسات كانفا
      window.location.href = 'canva-course.html';
  } else {
      alert('كلمة المرور غير صحيحة. حاول مرة أخرى!');
  }
}

// فتح صفحة كورس المونتاج
function openEditingCourse() {
  const passwordInput = document.getElementById('editing-password').value;
  const correctPassword = '5678';

  if (passwordInput === correctPassword) {
      // التوجيه إلى صفحة كورسات المونتاج
      window.location.href = 'editing-course.html';
  } else {
      alert('كلمة المرور غير صحيحة. حاول مرة أخرى!');
  }
}

// فتح صفحة كورس الوايت بورد
function openWhiteboardCourse() {
  const passwordInput = document.getElementById('whiteboard-password').value;
  const correctPassword = '6789';

  if (passwordInput === correctPassword) {
      // التوجيه إلى صفحة كورسات الوايت بورد
      window.location.href = 'whiteboard-course.html';
  } else {
      alert('كلمة المرور غير صحيحة. حاول مرة أخرى!');
  }
}

// فتح صفحة كورس الفويس أوفر
function openVoiceoverCourse() {
  const passwordInput = document.getElementById('voiceover-password').value;
  const correctPassword = '7890';

  if (passwordInput === correctPassword) {
      // التوجيه إلى صفحة كورسات الفويس أوفر
      window.location.href = 'voiceover-course.html';
  } else {
      alert('كلمة المرور غير صحيحة. حاول مرة أخرى!');
  }
}



