document.addEventListener("DOMContentLoaded", function () {
    const nav = document.createElement("nav");
    const navContainer = document.createElement("div");
    navContainer.className = "container";
    const navLogo = document.createElement("div");
    navLogo.className = "logo";
    const navTitle = document.createElement("h1");
    navTitle.textContent = "Start Bootstrap";
    const navList = document.createElement("ul");
    const navItems = ["home", "Resume", "Projects", "Contact"];
    navItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = item;
        li.appendChild(a);
        navList.appendChild(li);
    });

    navLogo.appendChild(navTitle);
    navLogo.appendChild(navList);
    navContainer.appendChild(navLogo);
    nav.appendChild(navContainer);
    document.body.appendChild(nav);

    const header = document.createElement("header");
    const headerContainer = document.createElement("div");
    headerContainer.className = "container";
    const headerDiv = document.createElement("div");
    headerDiv.className = "ikidiv";

    const textDiv = document.createElement("div");
    textDiv.className = "text";
    const textH1 = document.createElement("h1");
    textH1.textContent = "DESIGN · DEVELOPMENT · MARKETING";
    const textP1 = document.createElement("p");
    textP1.textContent = "I can help your business to";
    const textH2 = document.createElement("h2");
    textH2.textContent = "Get online and grow fast";
    const btnDiv = document.createElement("div");
    btnDiv.className = "btn";

    const resumeBtn = document.createElement("button");
    resumeBtn.style.backgroundColor = "blue";
    resumeBtn.style.color = "beige";
    resumeBtn.style.fontSize = "large";
    resumeBtn.style.fontFamily = "fantasy";
    resumeBtn.textContent = "Resume";

    const projectsBtn = document.createElement("button");
    projectsBtn.style.fontSize = "large";
    projectsBtn.style.fontFamily = "fantasy";
    projectsBtn.textContent = "Projects";

    btnDiv.appendChild(resumeBtn);
    btnDiv.appendChild(projectsBtn);

    textDiv.appendChild(textH1);
    textDiv.appendChild(textP1);
    textDiv.appendChild(textH2);
    textDiv.appendChild(btnDiv);

    const imgDiv = document.createElement("div");
    imgDiv.className = "img";
    const img = document.createElement("img");
    img.src = "https://startbootstrap.github.io/startbootstrap-personal/assets/profile.png";
    img.alt = "";

    imgDiv.appendChild(img);

    headerDiv.appendChild(textDiv);
    headerDiv.appendChild(imgDiv);

    headerContainer.appendChild(headerDiv);
    header.appendChild(headerContainer);
    document.body.appendChild(header);

    const section = document.createElement("section");
    const sectionH1 = document.createElement("h1");
    sectionH1.textContent = "About Me";
    const sectionP1 = document.createElement("p");
    sectionP1.textContent = "My name is Start Bootstrap and I help brands grow.";
    const sectionBr = document.createElement("br");
    const sectionP2 = document.createElement("p");
    sectionP2.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?";
    const sectionIcon = document.createElement("div");
    sectionIcon.className = "icon";
    const twitterIcon = document.createElement("i");
    twitterIcon.className = "bi bi-twitter";
    const linkedinIcon = document.createElement("i");
    linkedinIcon.className = "bi bi-linkedin";
    const githubIcon = document.createElement("i");
    githubIcon.className = "bi bi-github";
    
    sectionIcon.appendChild(twitterIcon);
    sectionIcon.appendChild(linkedinIcon);
    sectionIcon.appendChild(githubIcon);

    section.appendChild(sectionH1);
    section.appendChild(sectionP1);
    section.appendChild(sectionBr);
    section.appendChild(sectionP2);
    section.appendChild(sectionIcon);

    document.body.appendChild(section);
});