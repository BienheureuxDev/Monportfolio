
window.onload = function () {

    const themeBtn = document.getElementById("theme");

    if (themeBtn) {

        let darkMode = true;

        themeBtn.addEventListener("click", function () {

            if (darkMode) {
                document.body.style.background = "#f5f5f5";
                document.body.style.color = "#111";

                themeBtn.textContent = "☀️";
                darkMode = false;

            } else {

                document.body.style.background = "#0f172a";
                document.body.style.color = "#ffffff";

                themeBtn.textContent = "🌙";
                darkMode = true;
            }

        });

    }

};