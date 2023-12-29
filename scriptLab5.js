document.querySelector('.payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy giá trị từ các trường input
    var name = document.getElementById('name').value;
    var cardnumber = document.getElementById('cardnumber').value;
    var expdate = document.getElementById('expdate').value;
    var cvv = document.getElementById('cvv').value;

    // Kiểm tra xem người dùng đã điền đầy đủ thông tin chưa
    if (!name || !cardnumber || !expdate || !cvv) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Xử lý thông tin thanh toán
    var paymentData = {
        name: name,
        cardnumber: cardnumber,
        expdate: expdate,
        cvv: cvv
    };

    // Gửi thông tin thanh toán đến máy chủ (giả định)
    // Lưu ý: Đây là mã do AI viết không nên tiết lộ thông tim!
    console.log('Gửi thông tin thanh toán đến máy chủ:', paymentData);

    alert('Thông tin thanh toán đã được gửi. Cảm ơn bạn!');
});
