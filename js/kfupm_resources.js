const resourcesData = {
    services: [
        { title: "KFUPM Blackboard", subtitle: "Access all course materials and assignments.", url: "https://blackboard.kfupm.edu.sa/", keywords: "blackboard, learning, assignments" },
        { title: "Registrar Services", subtitle: "Course registration, drop/add, official records.", url: "https://registrar.kfupm.edu.sa/", keywords: "registration, grades, records" },
        { title: "KFUPM Email Access", subtitle: "Official university email portal.", url: "https://outlook.office.com/", keywords: "email, office 365" },
    ],
    academics: [
        { title: "Course Catalog", subtitle: "View prerequisites and course descriptions.", url: "https://catalog.kfupm.edu.sa/", keywords: "catalog, courses, plan" },
        { title: "Academic Calendar", subtitle: "Important dates for semesters, exams, and holidays.", url: "https://kfupm.edu.sa/academic-calendar", keywords: "calendar, dates, exams" },
    ],
    notes: [
        { title: "SWE 363 Notes - Ch 5", subtitle: "Software Engineering - Shared by CS Students group.", url: "#", keywords: "swe 363, software, notes" },
        { title: "MATH 101 Practice Exam", subtitle: "Calculus I practice sheet.", url: "#", keywords: "math 101, calculus, exam, practice" },
    ]
};

const contentArea = document.getElementById('resource-content');
const searchInput = document.getElementById('resource-search');
const tabButtons = document.querySelectorAll('.tab-button');
let activeTab = 'services';

function renderResources(data) {
    contentArea.innerHTML = '';
    data.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.target = "_blank";
        link.className = 'resource-item';
        link.innerHTML = `
            <div class="resource-details">
                <span class="item-title">${item.title}</span>
                <span class="item-subtitle">${item.subtitle}</span>
            </div>
            <span class="item-icon">&rarr;</span>
        `;
        contentArea.appendChild(link);
    });
}

function filterResources() {
    const query = searchInput.value.toLowerCase().trim();
    let currentData = resourcesData[activeTab];
    if (query === '') {
        renderResources(currentData);
        return;
    }
    const filtered = currentData.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.keywords.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query)
    );
    renderResources(filtered);
}

function handleTabClick(event) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    activeTab = event.target.getAttribute('data-tab');
    filterResources();
    searchInput.value = '';
}

tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
});

searchInput.addEventListener('input', filterResources);

renderResources(resourcesData.services);
