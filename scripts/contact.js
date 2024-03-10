const contactData = {
    dharohar: {
        convener: [{
            name: "DHarohar convener",
            phone: ""
        }],
        co_convener: [
            {
                name: "Dharohar co-convener 1",
                phone: ""
            },
            {
                name: "dharohar co-convener 2",
                phone: ""
            }
        ],
        faculty_coordinators: [
            {
                name: "Faculty 1",
                phone: "+919528523266"
            },
            {
                name: "Faculty 2",
                phone: "+911234567890"
            },
            {
                name: "Faculty 3",
                phone: "+911234567890"
            }
        ],
        student_coordinators: [
            {
                name: "Student 1",
                phone: "+911234567890"
            },
            {
                name: "Student 2",
                phone: "+911234567890"
            },
            {
                name: "Student 3",
                phone: "+911234567890"
            },
            {
                name: "Student 4",
                phone: "+911234567890"
            }
        ]
    },
    edge: {
        convener: [{
            name: "DHarohar convener",
            phone: ""
        }],
        co_convener: [
            {
                name: "Dharohar co-convener 1",
                phone: ""
            },
            {
                name: "dharohar co-convener 2",
                phone: ""
            }
        ],
        faculty_coordinators: [
            {
                name: "Faculty 1",
                phone: "+919528523266"
            },
            {
                name: "Faculty 2",
                phone: "+911234567890"
            },
            {
                name: "Faculty 3",
                phone: "+911234567890"
            }
        ],
        student_coordinators: [
            {
                name: "Student 1",
                phone: "+911234567890"
            },
            {
                name: "Student 2",
                phone: "+911234567890"
            },
            {
                name: "Student 3",
                phone: "+911234567890"
            },
            {
                name: "Student 4",
                phone: "+911234567890"
            }
        ]
    },
    ojas: {
        convener: [{
            name: "DHarohar convener",
            phone: ""
        }],
        co_convener: [
            {
                name: "Dharohar co-convener 1",
                phone: ""
            },
            {
                name: "dharohar co-convener 2",
                phone: ""
            }
        ],
        faculty_coordinators: [
            {
                name: "Faculty 1",
                phone: "+919528523266"
            },
            {
                name: "Faculty 2",
                phone: "+911234567890"
            },
            {
                name: "Faculty 3",
                phone: "+911234567890"
            }
        ],
        student_coordinators: [
            {
                name: "Student 1",
                phone: "+911234567890"
            },
            {
                name: "Student 2",
                phone: "+911234567890"
            },
            {
                name: "Student 3",
                phone: "+911234567890"
            },
            {
                name: "Student 4",
                phone: "+911234567890"
            }
        ]
    },
    glitz: {
        convener: [{
            name: "DHarohar convener",
            phone: ""
        }],
        co_convener: [
            {
                name: "Dharohar co-convener 1",
                phone: ""
            },
            {
                name: "dharohar co-convener 2",
                phone: ""
            }
        ],
        faculty_coordinators: [
            {
                name: "Faculty 1",
                phone: "+919528523266"
            },
            {
                name: "Faculty 2",
                phone: "+911234567890"
            },
            {
                name: "Faculty 3",
                phone: "+911234567890"
            }
        ],
        student_coordinators: [
            {
                name: "Student 1",
                phone: "+911234567890"
            },
            {
                name: "Student 2",
                phone: "+911234567890"
            },
            {
                name: "Student 3",
                phone: "+911234567890"
            },
            {
                name: "Student 4",
                phone: "+911234567890"
            }
        ]
    },
    udaan: {
        convener: [{
            name: "DHarohar convener",
            phone: ""
        }],
        co_convener: [
            {
                name: "Dharohar co-convener 1",
                phone: ""
            },
            {
                name: "dharohar co-convener 2",
                phone: ""
            }
        ],
        faculty_coordinators: [
            {
                name: "Faculty 1",
                phone: "+919528523266"
            },
            {
                name: "Faculty 2",
                phone: "+911234567890"
            },
            {
                name: "Faculty 3",
                phone: "+911234567890"
            }
        ],
        student_coordinators: [
            {
                name: "Student 1",
                phone: "+911234567890"
            },
            {
                name: "Student 2",
                phone: "+911234567890"
            },
            {
                name: "Student 3",
                phone: "+911234567890"
            },
            {
                name: "Student 4",
                phone: "+911234567890"
            }
        ]
    },

}

// Complete the above data with proper information.

document.addEventListener('DOMContentLoaded', () => {
    let contactContainer = document.getElementById('contactCardsContainer');

    // Function to generate a contact card based on the provided data
    function generateContactCard(eventName, data) {
        // Create a new contact card element
        const cardElement = document.createElement("div");
        cardElement.classList.add("contact-card");

        // Set the title of the card
        const titleElement = document.createElement("h2");
        titleElement.textContent = eventName.toUpperCase();
        cardElement.appendChild(titleElement);

        // Generate sub-sections for convener, co-convener, faculty coordinators, and student coordinators
        generateSection("convener", "Fest Convener", data.convener);
        generateSection("co_convener", "Co-conveners", data.co_convener);
        generateSection("faculty_coordinators", "Faculty Coordinators", data.faculty_coordinators);
        generateSection("student_coordinators", "Student Coordinators", data.student_coordinators);

        // Append the contact card to the container
        contactContainer.appendChild(cardElement);

        // Function to generate a sub-section of the contact card
        function generateSection(sectionKey, sectionTitle, sectionData) {
            const sectionElement = document.createElement("div");
            sectionElement.classList.add(sectionKey);

            const titleElement = document.createElement("h5");
            titleElement.textContent = sectionTitle;
            sectionElement.appendChild(titleElement);

            const ulElement = document.createElement("ul");

            // Loop through the section data and create list items
            sectionData.forEach(item => {
                const liElement = document.createElement("li");
                liElement.textContent = `${item.name} ${item.phone !== '' ? `(${item.phone})` : ''}`;
                ulElement.appendChild(liElement);
            });

            sectionElement.appendChild(ulElement);
            cardElement.appendChild(sectionElement);
        }
    }

    // Loop through the contact data and generate contact cards
    for (const eventName in contactData) {
        generateContactCard(eventName, contactData[eventName]);
    }
});