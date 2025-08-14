// validation.js
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const modal = document.querySelector(".modal");
    const modalOverlay = document.querySelector(".modal__overlay");

    // Nút chuyển đổi form
    const switchBtns = document.querySelectorAll(".auth-form__switch-btn");
    const backBtns = document.querySelectorAll(".auth-form__controls-back");

    // Avatar & menu user
    const userAvatar = document.querySelector(".user-avatar").parentElement; 
    const usernameDisplay = document.querySelector(".username-display");
    const logoutBtn = document.querySelector(".logout-btn");

    // Nút đăng ký/đăng nhập trên header
    const registerBtnHeader = document.querySelector(".auth-switch li:nth-child(1)");
    const loginBtnHeader = document.querySelector(".auth-switch li:nth-child(2)");

    // Mặc định ẩn form & avatar
    registerForm.style.display = "none";
    loginForm.style.display = "none";
    modal.style.display = "none";
    userAvatar.style.display = "none";

    // Hiển thị form đăng ký
    registerBtnHeader.addEventListener("click", function () {
        modal.style.display = "flex";
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    });

    // Hiển thị form đăng nhập
    loginBtnHeader.addEventListener("click", function () {
        modal.style.display = "flex";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    // Chuyển đổi giữa đăng ký / đăng nhập
    switchBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            if (this.textContent.trim() === "Đăng nhập") {
                registerForm.style.display = "none";
                loginForm.style.display = "block";
            } else {
                loginForm.style.display = "none";
                registerForm.style.display = "block";
            }
        });
    });

    // Nút "TRỞ LẠI" đóng modal
    backBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            modal.style.display = "none";
            registerForm.style.display = "none";
            loginForm.style.display = "none";
        });
    });

    // Click ngoài modal để đóng
    modalOverlay.addEventListener("click", function () {
        modal.style.display = "none";
        registerForm.style.display = "none";
        loginForm.style.display = "none";
    });

    // Xử lý nút ĐĂNG NHẬP (giả lập đăng nhập thành công)
    document.querySelector("#loginForm .btn--primary").addEventListener("click", function () {
        const username = loginForm.querySelector("input[type='text']").value.trim();
        if (username) {
            usernameDisplay.textContent = username;
            modal.style.display = "none";
            loginForm.style.display = "none";
            userAvatar.style.display = "block";
            registerBtnHeader.style.display = "none"; // Ẩn nút Đăng ký
            loginBtnHeader.style.display = "none";    // Ẩn nút Đăng nhập
        } else {
            alert("Vui lòng nhập tên đăng nhập/email");
        }
    });

    // Xử lý nút ĐĂNG XUẤT
    logoutBtn.addEventListener("click", function () {
        userAvatar.style.display = "none";
        registerBtnHeader.style.display = "inline-block"; // Hiện lại nút Đăng ký
        loginBtnHeader.style.display = "inline-block";    // Hiện lại nút Đăng nhập
    });
});
