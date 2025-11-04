console.log("Trang web đã sẵn sàng!");
alert("Chào mừng bạn đến với trang web của tôi!");
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // chặn reload
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Vui lòng nhập đủ họ tên và email!");
  } else {
    alert(`Cảm ơn ${name}, tôi sẽ liên hệ qua ${email} sớm nhất!`);
    form.reset();
  }
});
