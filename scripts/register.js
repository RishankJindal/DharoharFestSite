
// Sample event data (you can replace this with your actual data)
const eventCardData = [
    { name: 'Event 1', image: '/assets/gallery/events/image01.jpg', teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Event 2', image: 'event2.jpg', teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Event 3', image: 'event1.jpg', teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Event 4', image: 'event2.jpg', teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Event 5', image: 'event1.jpg', teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Event 6', image: 'event2.jpg', teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Event 7', image: 'event1.jpg', teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Event 8', image: 'event2.jpg', teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Event 9', image: 'event1.jpg', teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Event 10', image: 'event2.jpg', teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Event 11', image: 'event1.jpg', teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Event 12', image: 'event2.jpg', teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Event 13', image: 'event1.jpg', teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Event 14', image: 'event2.jpg', teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Event 15', image: 'event1.jpg', teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Event 16', image: 'event2.jpg', teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more events as needed
];

// Function to filter events based on search input
function filterEvents() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    const eventGrid = document.getElementById('eventGrid');
    eventGrid.innerHTML = '';

    eventCardData.forEach(event => {
        if (event.name.toLowerCase().includes(searchInput)) {
            const eventCard = createEventCard(event);
            eventGrid.appendChild(eventCard);
        }
    });
}

// Function to create an event card
function createEventCard(event) {
    const card = document.createElement('div');
    card.classList.add('register-card');

    const image = document.createElement('img');
    image.src = event.image;
    card.appendChild(image);

    const content = document.createElement('div');
    content.classList.add('register-card-content');

    const eventName = document.createElement('h3');
    eventName.textContent = event.name;
    content.appendChild(eventName);

    const teamMembers = document.createElement('p');
    teamMembers.textContent = `Team Members: ${event.teamMembers}`;
    content.appendChild(teamMembers);

    const eventDetail = document.createElement('p');
    eventDetail.textContent = event.detail;
    content.appendChild(eventDetail);

    const registerButton = document.createElement('button');
    registerButton.textContent = 'Register';
    content.appendChild(registerButton);

    card.appendChild(content);

    return card;
}

// Initial rendering of event cards
filterEvents();
