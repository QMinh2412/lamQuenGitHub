// nút tính đơn giá
document.getElementById("btnTinhDonGia").addEventListener("click", (event) => {
  event.preventDefault();

  //   kiểm tra ngày
  let soNgay = 0;
  const ngayThue = document.getElementById("dateNgayThue");
  const ngayTra = document.getElementById("dateNgayTra");

  if (
    ngayThue.value === "" ||
    ngayTra.value === "" ||
    ngayThue.value === ngayTra.value
  )
    soNgay = 1;
  else if (ngayThue.value > ngayTra.value)
    document.querySelector(
      ".date .error"
    ).textContent = `Ngày trả phải lớn hơn ngày thuê`;
  else {
    const dateNgayThue = new Date(ngayThue.value);
    const dateNgayTra = new Date(ngayTra.value);

    // Tính chênh lệch thời gian bằng ms
    const diffTime = dateNgayTra - dateNgayThue;

    // Đổi chênh lệch thời gian từ ms sang ngày
    soNgay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  //   tính tiền
  const loaiPhong = document.getElementById("cboMucGia");
  const soTien =
    loaiPhong.value === "a"
      ? 150000
      : loaiPhong.value === "b"
      ? 300000
      : 500000;
  let tamTinh = soTien;

  const dichvu = document.querySelectorAll(".dichVu input");
  console.log(dichvu);
  for (let elm of dichvu) {
    if (elm.checked === true) tamTinh += soTien * 0.05;
  }
  if (loaiPhong.value !== "a" && dichvu[0].checked === true) {
    tamTinh -= soTien * 0.05;
  }
  document.getElementById("txtTienThuePhong").value = tamTinh * soNgay;
});

//   kiểm tra loại phòng
document.getElementById("cboMucGia").addEventListener("change", () => {
  if (document.getElementById("cboMucGia").value !== "a")
    document.getElementById("chkAnSang").checked = true;
});

// nút đăng ký ===========================================================================
document.getElementById("subDangKy").addEventListener("click", (event) => {
  event.preventDefault();
  //kiểm tra họ tên
  let hoTen = document.getElementById("txtHoTen");
  if (hoTen.value === "") {
    document.querySelector(
      ".hoTen .error"
    ).textContent = `Họ tên không được rỗng`;
    hoTen.focus();
    return;
  }

  // kiểm tra cmnd
  let cmnd = document.getElementById("txtcmnd");
  if (cmnd.value === "") {
    document.querySelector(".cmnd .error").textContent = `CMND không được rỗng`;
    cmnd.focus();
    return;
  }
  if (isNaN(cmnd.value)) {
    document.querySelector(".cmnd .error").textContent = `CMND phải là số`;
    cmnd.focus();
    cmnd.select();
    return;
  }

  //   kiểm tra ngày
  let soNgay = 0;
  const ngayThue = document.getElementById("dateNgayThue");
  const ngayTra = document.getElementById("dateNgayTra");

  if (
    ngayThue.value === "" ||
    ngayTra.value === "" ||
    ngayThue.value === ngayTra.value
  )
    soNgay = 1;
  else if (ngayThue.value > ngayTra.value)
    document.querySelector(
      ".date .error"
    ).textContent = `Ngày trả phải lớn hơn ngày thuê`;
  else {
    const dateNgayThue = new Date(ngayThue.value);
    const dateNgayTra = new Date(ngayTra.value);

    // Tính chênh lệch thời gian bằng ms
    const diffTime = dateNgayTra - dateNgayThue;

    // Đổi chênh lệch thời gian từ ms sang ngày
    soNgay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  //   tính tiền
  const loaiPhong = document.getElementById("cboMucGia");
  const soTien =
    loaiPhong.value === "a"
      ? 150000
      : loaiPhong.value === "b"
      ? 300000
      : 500000;
  let tamTinh = soTien;

  const dichvu = document.querySelectorAll(".dichVu input");
  console.log(dichvu);
  for (let elm of dichvu) {
    if (elm.checked === true) tamTinh += soTien * 0.05;
  }
  if (loaiPhong.value !== "a" && dichvu[0].checked === true) {
    tamTinh -= soTien * 0.05;
  }
  document.getElementById("txtTienThuePhong").value = tamTinh * soNgay;

  alert(`Đăng ký thành công`);
});
