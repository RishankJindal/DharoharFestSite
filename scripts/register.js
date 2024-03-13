
// Sample event data (you can replace this with your actual data)
const eventCardData = [
    {
        name: 'Event 1',
        image: '/assets/gallery/events/image01.jpg',
        teamMembers: 4, detail: 'This is event 1 organised bu abc department or scienty.No participant can be go anywhere between the match. All the team members must be present there.',
        formLink: ''
    },
    {
        name: 'Event 2',
        image: '/assets/gallery/events/image02.jpg',
        teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        formLink: '../assets/gallery/events/image01.jpg'
    },
    {
        name: 'Event 3',
        image: '/assets/gallery/events/image03.jpg',
        teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        formLink: ''
    },
    {
        name: 'Event 4',
        image: '/assets/gallery/events/image04.jpg',
        teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        formLink: ''
    },
    {
        name: 'Event 5',
        image: '/assets/gallery/events/image05.jpg',
        teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        formLink: ''
    },
    {
        name: 'Event 6',
        image: '/assets/gallery/events/image06.jpg',
        teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        formLink: ''
    },
    {
        name: 'Event 7',
        image: '/assets/gallery/events/image07.jpg',
        teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        formLink: ''
    },
    {
        name: 'Event 8',
        image: '/assets/gallery/events/image08.jpg',
        teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        formLink: ''
    },
    {
        name: 'Event 9',
        image: '/assets/gallery/events/image09.png',
        teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        formLink: ''
    },
    {
        name: 'Event 10',
        image: '/assets/gallery/events/image10.jpg',
        teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        formLink: ''
    },
    {
        name: 'Event 11',
        image: '/assets/gallery/events/image11.jpg',
        teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        formLink: ''
    },
    {
        name: 'Event 12',
        image: '/assets/gallery/events/image12.jpg',
        teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        formLink: ''
    },
    {
        name: 'Event 13',
        image: '/assets/gallery/events/image13.jpg',
        teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        formLink: ''
    },
    {
        name: 'Event 14',
        image: '/assets/gallery/events/image14.jpg',
        teamMembers: 3, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        formLink: ''
    },
    {
        name: 'Event 15',
        image: '/assets/gallery/events/image15.jpg',
        teamMembers: 4, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        formLink: ''
    },
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

    const eventName = document.createElement('h4');
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
    registerButton.className = event.name.replace(' ', '');
    content.appendChild(registerButton);

    card.appendChild(content);

    return card;
}

// Initial rendering of event cards
filterEvents();


// Redirect button click to a respective register link.
const registerDirectedButton = document.querySelectorAll('.register-card button');

registerDirectedButton.forEach(button => {
    button.addEventListener('click', () => {
        eventCardData.forEach(event => {
            if (button.className === event.name.replace(' ', '')) {
                if (!(event.formLink === '')) {
                    // window.location.href = event.formLink;
                    window.open(event.formLink, '_blank');
                }
            }
        })

    })
})
