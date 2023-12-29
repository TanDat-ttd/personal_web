// Thêm mã JavaScript mới vào file scriptLab7.js

document.addEventListener('DOMContentLoaded', function () {

    // Xử lý form liên hệ
    const contactForm = document.getElementById('contactForm');
    const guidedActionResult = document.getElementById('guidedActionResult');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Thực hiện xử lý form tại đây (ví dụ: gửi dữ liệu bằng Ajax)

        // Hiển thị thông báo kết quả
        guidedActionResult.textContent = 'Form submitted successfully!';
    });

    // Hiệu ứng chuyển động
    const animatedBox = document.querySelector('.animated-box');

    animatedBox.addEventListener('click', function () {
        animatedBox.classList.toggle('move');
    });

});

// Hàm thực hiện hành động theo sự hướng dẫn
function performGuidedAction() {
    // Thực hiện hành động theo sự hướng dẫn tại đây
    const guidedActionResult = document.getElementById('guidedActionResult');
    guidedActionResult.textContent = 'Guided action performed!';
}

// Quản lý sự kiện cho nút Gửi
document.getElementById('submit-btn').addEventListener('click', function() {
    submitContactForm();
  });
  
  // Hàm xử lý sự kiện khi gửi biểu mẫu
  function submitContactForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
  
    // Kiểm tra xem các trường có được điền đầy đủ hay không
    if (name && email && phone && message) {
      // Gửi dữ liệu lên server hoặc xử lý theo ý bạn
      alert('Biểu mẫu đã được gửi thành công!');
    } else {
      alert('Vui lòng điền đầy đủ thông tin trước khi gửi.');
    }
  }
  
// Quản lý sự kiện cho nút Gửi
document.getElementById('submit-btn').addEventListener('click', function() {
    submitContactForm();
  });
  
  // Hàm xử lý sự kiện khi gửi biểu mẫu
  function submitContactForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
  
    // Kiểm tra xem các trường có được điền đầy đủ hay không
    if (name && email && phone && message) {
      // Gửi dữ liệu lên server hoặc xử lý theo ý bạn
      alert('Biểu mẫu đã được gửi thành công!');
    } else {
      alert('Vui lòng điền đầy đủ thông tin trước khi gửi.');
    }
  }  
// Dùng một biến để kiểm tra xem biểu mẫu có đang được chỉnh sửa hay không
var isEditing = false;

function submitForm() {
  if (isEditing) {
    // Nếu đang chỉnh sửa, thực hiện hành động chỉnh sửa
    editForm();
  } else {
    // Nếu không đang chỉnh sửa, thực hiện hành động gửi biểu mẫu
    // Lấy giá trị từ các trường input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Hiển thị thông tin liên lạc trong một khối
    var contactInfoBlock = document.createElement('div');
    contactInfoBlock.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                                  <p><strong>Email:</strong> ${email}</p>
                                  <p><strong>Phone:</strong> ${phone}</p>`;
  
    // Thêm khối thông tin liên lạc vào body của trang
    document.body.appendChild(contactInfoBlock);

    // Xóa dữ liệu khỏi các trường input sau khi gửi
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    // (Tùy chọn) Có thể thực hiện các hành động khác sau khi gửi
  }
}

function editForm() {
  // Đặt lại trạng thái chỉnh sửa về false
  isEditing = false;

  // Cho phép chỉnh sửa các trường input
  document.getElementById('name').removeAttribute('disabled');
  document.getElementById('email').removeAttribute('disabled');
  document.getElementById('phone').removeAttribute('disabled');

  // Đổi nút "Edit" thành "Submit"
  document.getElementById('submit-btn').textContent = 'Submit';
}

function startEditing() {
  // Đặt trạng thái chỉnh sửa về true
  isEditing = true;

  // Không cho phép chỉnh sửa các trường input khi đang chỉnh sửa
  document.getElementById('name').setAttribute('disabled', 'disabled');
  document.getElementById('email').setAttribute('disabled', 'disabled');
  document.getElementById('phone').setAttribute('disabled', 'disabled');

  // Đổi nút "Submit" thành "Edit"
  document.getElementById('submit-btn').textContent = 'Edit';
}

// Gắn sự kiện khi nhấp nút "Submit"
document.getElementById('submit-btn').addEventListener('click', submitForm);

// Gắn sự kiện khi nhấp nút "Edit"
document.getElementById('edit-btn').addEventListener('click', startEditing);
