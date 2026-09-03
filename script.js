const title = document.querySelector('.my-portfolio-title');
const buttonContainer = document.querySelector('.button-container');
const folderButtons = document.querySelectorAll('.folder-btn');
const backButton = document.getElementById("backButton");
const emptyMessage = document.getElementById("emptyMessage");
const closeMessage = document.getElementById("closeMessage");
const mainNav = document.getElementById("mainNav");
const cat = document.getElementById(".cat");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        mainNav.classList.add("scrolled");
    } else {
        mainNav.classList.remove("scrolled");
    }
});

if (title) {
    const blingSound = new Audio('Sound/bling.mp3');

    title.addEventListener('mouseenter', () => {

        if (!blingSound.paused) {
            return;
        }

        blingSound.volume = 0.1;
        blingSound.currentTime = 0;
        blingSound.play();

    });
}

if (title) {
    const blingSound = new Audio('Sound/bling.mp3');

    title.addEventListener('mouseenter', () => {

        if (!blingSound.paused) {
            return;
        }

        blingSound.volume = 0.1;
        blingSound.currentTime = 0;
        blingSound.play();

    });
}


if (folderButtons.length > 0) {
    const folderSound = new Audio('Sound/folder.mp3');

    folderButtons.forEach((button) => {

        button.addEventListener('mouseenter', () => {

            folderSound.volume = 0.1;
            folderSound.currentTime = 0;
            folderSound.playbackRate = 2.2;
            folderSound.play();

        });

    });
}


if (buttonContainer) {

    const clickSound = new Audio('Sound/click.mp3');

    buttonContainer.addEventListener('click', function(event) {

        const link = event.target.closest('a');

        if (!link) {
            return;
        }

        event.preventDefault();

        clickSound.volume = 0.1;
        clickSound.currentTime = 0;
        clickSound.playbackRate = 1.1;

        clickSound.play().catch(() => {});

        setTimeout(() => {
            window.location.href = link.href;
        }, 300);

    });

}

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backButton.classList.add("show");
    } else {
        backButton.classList.remove("show");
    }

});


const emptySound = new Audio('Sound/empty.mp3');

function openEmptyMessage() {

    emptyMessage.classList.add("show");

    emptySound.currentTime = 0;
    emptySound.volume = 0.1;
    emptySound.playbackRate = 2;

    emptySound.play().catch(() => {});

}


if (closeMessage) {

    closeMessage.addEventListener("click", () => {

        emptyMessage.classList.remove("show");

    });

}



//search bar

const folderSearch = document.getElementById("folderSearch");
const projects = document.getElementById("projects");

if (folderSearch && projects) {

    folderSearch.addEventListener("click", function () {

        const projectPosition =
            projects.getBoundingClientRect().top +
            window.scrollY -
            200;

        window.scrollTo({
            top: projectPosition,
            behavior: "smooth"
        });

    });

    folderSearch.addEventListener("input", function () {

        const searchText = folderSearch.value.toLowerCase().trim();
        const activities = document.querySelectorAll(".activity");

        activities.forEach(function (activity) {

            const activityName =
                activity.querySelector("p")?.textContent.toLowerCase() || "";

            if (activityName.includes(searchText)) {
                activity.classList.remove("hidden");
            } else {
                activity.classList.add("hidden");
            }

        });

    });

}