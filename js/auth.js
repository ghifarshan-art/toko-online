const AUTH_KEY = 'isLoggedIn';
const ROLE_KEY = 'role';

// ==================== CHECK LOGIN ====================

function checkLoginStatus() {

    return sessionStorage.getItem(AUTH_KEY) === 'true';
}

// ==================== REQUIRE AUTH ====================

function requireAuth() {

    if (!checkLoginStatus()) {

        window.location.href = 'index.html';
        return false;
    }

    return true;
}

// ==================== LOGIN USER ====================

function loginUser(email, password) {

    if (email === 'seller@gmail.com' && password === '123') {

        sessionStorage.setItem(AUTH_KEY, 'true');
        sessionStorage.setItem(ROLE_KEY, 'user');

        return true;
    }

    return false;
}

// ==================== LOGIN ADMIN ====================

function loginAdmin(email, password) {

    if (email === 'admin@gmail.com' && password === 'admin123') {

        sessionStorage.setItem(AUTH_KEY, 'true');
        sessionStorage.setItem(ROLE_KEY, 'admin');

        return true;
    }

    return false;
}


// ==================== LOGOUT ====================

function logout() {

    sessionStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(ROLE_KEY);

    window.location.href = 'index.html';
}

// ==================== UPDATE UI ====================

function updateUIBasedOnLogin() {

    const role = sessionStorage.getItem(ROLE_KEY);

    const adminBtn = document.getElementById('adminBtn');
    const adminInfo = document.getElementById('adminInfo');

    if (adminBtn) {

        adminBtn.style.display =
            role === 'admin'
            ? 'inline-flex'
            : 'none';
    }

    if (adminInfo) {

        adminInfo.style.display =
            role === 'admin'
            ? 'block'
            : 'none';
    }
}

// ==================== LOAD PAGE ====================

document.addEventListener('DOMContentLoaded', () => {

    updateUIBasedOnLogin();

    const logoutBtns =
        document.querySelectorAll('.logout-btn');

    logoutBtns.forEach(btn => {

        btn.addEventListener('click', (e) => {

            e.preventDefault();
            logout();
        });
    });

});