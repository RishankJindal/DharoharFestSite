const cardData = {
    card1: {
        name: "edge",
        img: "../assets/logo/edge_logo.png",
        info: "EDGE which allows students to showcase their engineering acumen. Students participate in various events to showcase engineering models and applications developed by them."
    },
    card2: {
        name: "glitz",
        img: "../assets/logo/glitz_logo.png",
        info: "GLITZ is a fest which showcases cultural elements. It hosts events like dance competitions, plays, singing, rendering of musical instruments and fashion shows."
    },
    card3: {
        name: "ojas",
        img: "../assets/logo/ojas_logo.png",
        info: "OJAS is the event which highlights emerging trends with themes in business, social discourse and national issues."
    },
    card4: {
        name: "udaan",
        img: "../assets/logo/udaan_logo.png",
        info: "UDAAN teams from various universities take part in this with full enthasiasm and vigor. Quantum is reprsented by the University team comparising of the best students for the soprts to bring home the champion cup."
    },
}

const aboutData = {
    qu: {
        heading: "Quantum University",
        img: "../assets/gallery/about/quantum_university.jpg",
        order: 1,
        about: "Quantum University, located at Roorkee in the picturesque state of Uttarakhand, is a great seat of learning that provides an intellectually stimulating environment and an enviable academic infrastructure. The University encourages interdisciplinary and holistic education to ensure a very high caliber of professional and personal competency."
    },
    qst: {
        heading: "School of Technology",
        img: "../assets/gallery/about/about_tech.jpg",
        order: 2,
        about: "Quantum School of Technology is a world class center of excellence that provides an intellectually stimulating environment to hone one's engineering skills besides growing culturally and spiritually. It nurtures high quality technical manpower to meet the challenges of the knowledge era. Quantum has ensured an accomplished infrastructure by way of faculty, laboratories and libraries. Great emphasis is laid on domain-related conferences, seminars, workshops, projects and research as an integral part of the Quantum pedagogy."
    },
    qsb: {
        heading: "School of Business",
        img: "../assets/gallery/about/about_buisness.jpg",
        order: 1,
        about: "There are many B-Schools which claim to be Top b schools in India but Quantum School of Business has emerged as a beacon of business education. The prestigious IMRB has adjudged it the No.1 Business School in Uttarakhand. This recognizes the vast repository of world class undergraduate and postgraduate business programs at Quantum School of Business."
    },
    qsgs: {
        heading: "School of Graduate Studies",
        img: "../assets/gallery/about/about_gradute.jpg",
        order: 2,
        about: "School of Graduate Studies is the entity through which Quantum University provides graduate programs in social sciences, humanities, natural sciences and miscellaneous disciplines. These programs lead to the degrees in Arts, Science, Social Sciences and Business Studies. The School of Graduate Studies comprises a number of departments with each hosting an individual branch of learning. The school continues the Quantum tradition for quality and excellence in education."
    },
    qsas: {
        heading: "School Of Agriculture Studies",
        img: "../assets/gallery/about/about_agri.jpg",
        order: 1,
        about: "Quantum University, No.1 Agriculture College in Dehradun,Uttarakhand offers a number of graduate and masters level programs to explore the field of Agriculture and allied sciences. These courses have a heavy focus on lab-work and hands-on training. The major part of study in these courses involves Biological Science. These programs often include and focus on original research. The Agriculture school prepares students to work in a range of careers, which includes Farming, Ranching, Horticulture Management, Fertilizer Manufacturing, Agriculture Machinery and Food processing. It also makes the learners eligible for entrepreneurship and independent consultancy. Agriculture is a field with rich possibilities for research and academic work."
    },
    qsmd: {
        heading: "School Of Media Studies & Design",
        img: "../assets/gallery/about/about_bjmc.png",
        order: 2,
        about: "Quantum University, No.1 Agriculture College in Dehradun,Uttarakhand offers a number of graduate and masters level programs to explore the field of Agriculture and allied sciences. These courses have a heavy focus on lab-work and hands-on training. The major part of study in these courses involves Biological Science. These programs often include and focus on original research. The Agriculture school prepares students to work in a range of careers, which includes Farming, Ranching, Horticulture Management, Fertilizer Manufacturing, Agriculture Machinery and Food processing. It also makes the learners eligible for entrepreneurship and independent consultancy. Agriculture is a field with rich possibilities for research and academic work."
    },
    qshs: {
        heading: "School Of Health Science",
        img: "../assets/gallery/about/about_medical.jpg",
        order: 1,
        about: "The School of Health Sciences has been set up with the vision to expand educational vista in the domain of medicine, paramedical, nursing and allied fields. The School wants to develop competency-based curricula in different divisions of Health Sciences to facilitate the dissemination in the public the relevant health related knowledge. Ultimately this would foster a culture of research to further alleviate the general disease related afflictions. The school will deliver the professionals of the next generation who can tackle the challenges of this growing sector on a national, international and local stage."
    },
    qsht: {
        heading: "School Of Hospitality & Tourism",
        img: "../assets/gallery/about/about_bhm.jpg",
        order: 2,
        about: "Quantum School of Hospitality and Tourism has a unique focus on innovative pedagogy to orient the students towards a career of service. This focus stems from the fact this industry is exclusively based in practical work and customer satisfaction. As such students learn through up to date industry oriented curriculum. There is a focus on hands-on training which emphasizes hands on learning. Frequent workshops, seminars, guest lectures and interactive sessions with the industry expose the student to the current elements of study in the field. There is ample chance of lab work, projects and internships to let the student practice what has been learned. Therefore the course functions through a fine balance between theoretical rigor and its practical aspects. The entire learning experience is aimed at developing communication and interpersonal skills which is at the core of this industry. The entire effort is supported by world class and efficient infrastructure."
    },
    qsl: {
        heading: "School Of Law",
        img: "../assets/gallery/about/about_law.jpeg",
        order: 1,
        about: "Quantum School of Law offers the best law courses with various specializations. Based on their interest, students can independently choose their specializations in diverse fields like Civil Law, Corporate Law, Taxation Law, Labor Law, etc. The faculties of the school come from some of the most prestigious educational institutes of India and abroad. With their widened knowledge base, expertise and experience, faculties of the school are committed to producing exceptional law experts. Highly competent in theory and legal practice, Quantum’s lawyers never compromise on moral and ethical values and stand out as the top-notch professionals."
    },

}

const cardWrapper = document.querySelector('.card-wrapper');
const aboutWrapper = document.querySelector('.about-wrapper');

document.addEventListener('DOMContentLoaded', () => {

    // For cards
    for (let key in cardData) {
        // console.log(key);
        let cardLink = document.createElement('a');
        cardLink.href = '#events';

        let eventCard = document.createElement('div');
        eventCard.className = "event-card";

        let cardImg = document.createElement('div');
        cardImg.className = "cardImg";

        let img = document.createElement('img');
        img.src = cardData[key].img;
        img.alt = "";

        let cardInfo = document.createElement('div');
        cardInfo.className = "cardInfo";
        cardInfo.textContent = cardData[key].info;

        cardImg.appendChild(img);
        eventCard.appendChild(cardImg);
        eventCard.appendChild(cardInfo);
        cardLink.appendChild(eventCard);

        cardWrapper.appendChild(cardLink);
    }

    // For Data
    for (let key in aboutData) {
        let aboutRow = document.createElement('div');
        aboutRow.className = "row about-row align-items-center d-flex";

        let colImg = document.createElement('div');
        colImg.className = "col aboutImg";

        let img = document.createElement('img');
        img.src = aboutData[key].img;
        img.alt = "";

        let colData = document.createElement('div');
        colData.className = "col aboutData";

        let aboutHeading = document.createElement('div');
        aboutHeading.className = "aboutHeading";
        aboutHeading.textContent = aboutData[key].heading;

        let aboutContent = document.createElement('div');
        aboutContent.className = "aboutContent";
        aboutContent.textContent = aboutData[key].about;

        colImg.appendChild(img);
        colData.appendChild(aboutHeading);
        colData.appendChild(aboutContent);

        if (aboutData[key].order === 1) {
            aboutRow.appendChild(colImg);
            aboutRow.appendChild(colData);
        } else {
            aboutRow.appendChild(colData);
            aboutRow.appendChild(colImg);
        }

        aboutWrapper.appendChild(aboutRow);
    }
});
