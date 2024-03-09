const eventData = {
    edge: [
        [1, 'Quantum University', 'सृजन - Startup Enclave cum Project Expo 2024', 'Inter', 'Team (4 Member)', '04-Apr-24', 'All Day', 'Ground Floor: In Front of Chemistry Lab', 200, 200, 0.4, 0.6, 10, 10, 'NA', 1, 2, 20],
        [2, '_', 'सृजन - Prototype', 'Inter', '_', '05-Apr-24', 'All Day', 'Mini Audi', 'NA', 'NA', 'NA', 50000, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [3, 'Department of Civil Engg', 'Puratan_Nirman_Kala', 'inter', 'Team 2', '04-Apr-24', '10:30', 'Structure Lab', 100, 100, 'NA', 'NA', 4, 4, 'NA', 1, 'NA', 8],
        [4, 'Department of Mechanical Engg', 'Robo Race', 'Inter', 'Team (2 Member)', '05-Apr-24', '11:00 AM', 'In tennis Court', 200, 200, 0.4, 0.6, 2, 2, 'NA', 1, 1, 4],
        [5, 'Department of Mechanical Engg', 'Aerogami', 'Intra', 'Individual', '04-Apr-24', '11:00 AM', 'Football Ground', 100, 'NA', 0.4, 0.6, 1, 1, 'NA', 1, 1, 2],
        [6, 'Department of Mechanical Engg', 'Water Rocket', 'Intra', 'Team(2 member)', '04-Apr-24', '2:00 PM', 'In front of main building', 100, 'NA', 0.4, 0.6, 2, 2, 'NA', 1, 1, 4],
        [7, 'Department of Applied Medical Sciences', 'Nutrition Fiesta', 'Intra', 'Showcase Event', '04-Apr-24', '1st Half', 'Near Admin area', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 20],
        [8, 'Department of Pharmacy', 'Poster Competion', 'Intra', 'Individual', '4-5 April 2024', 'Full Day', 'Old Moot Court', 30, 'NA', 'NA', 'NA', 1, 1, 'NA', 1, 1, 2],
        [9, 'Department of Pharmacy and Department of Parmedical sciences and Department of applied medical sciences', 'Health Awarness Camp/Checkup', 'Intra', 'Health checkup camp', '4-5 April 2024', 'Full Day', 'Near Account Office', 'Nil', 'Nil', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [10, 'Department of Computer Science & Eng', 'E-Poster Making', 'Intra', 'Individual', '05-Apr-24', '2:30 PM', 'Second Floor in front of Xebia Lab', 40, 'NA', 'NA', 'NA', 1, 1, 'NA', 1, 1, 2]
    ],
    dharohar: [
        [1, 'GLITZ ( Music Club)', 'Solo Singing', 'Inter', 'Individual', '05-Apr', '06:00', 'Main Stage', 200, 250, 0.4, 0.6, 5, 5, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [2, 'Creative ARts Club', 'Mandala', 'Inter', 'Individual', '05-Apr', '12:00', 'near central library', 50, 100, 0.4, 0.6, 'NA', 'NA', 'NA', 1, 2, 'All the participants will be given participation certificates.'],
        [3, 'Creative ARts Club', 'Bottle Arts', 'Inter', 'Individual', '06-Apr', '10:00', 'B102/ B103', 80, 100, 0.4, 0.6, 'NA', 'NA', 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [4, 'Fashion Society', 'Fashion Fiesta', 'Inter', 'Min 15 participants', '04-Apr', '06:00', 'Main Stage', 5000, 5000, 0.4, 0.6, 'NA', 'NA', 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [5, 'Thespian ( Theatre Club )', 'One Act Play and Monologue', 'Inter', 'Min 10 participants', '06-Apr', '11:00', 'Shyamji', 50, 50, 0.4, 0.6, 'NA', 'NA', 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [6, 'Thespian ( Theatre Club )', 'Street play', 'Inter', 'Min 10 participants', '05-Apr', '02:30 PM', 'Shyamji', 50, 50, 0.4, 0.6, 10, 10, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [7, 'creative arts', 'clay decoration', 'Inter', 'Individual Performance', '05-Apr', '02:00', 'B102/ B103', 50, 70, 0.4, 0.6, 1, 1, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [8, 'creative arts', 'rangoli', 'Inter', 'Minimum 1 and Maximum 4 students will participate', '05-Apr', '09:00', 'Near accunt office/Cental library', 50, 70, 0.4, 0.6, 4, 4, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [9, 'creative arts', 'best out of the waste', 'Inter', 'Min 1 and Max 2', '06-Apr', '02:00', 'A102/A103', 50, 70, 0.4, 0.6, 2, 2, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [10, 'creative arts', 'canvas painting', 'Inter', 'individual', '06-Apr', '10:00', 'Near accunt office/Cental library', 50, 70, 0.4, 0.6, 1, 1, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [11, 'creative arts', 'Art exhibition', 'Inter', 'Individual', '06-Apr', '10:00', 'Near admin Block', 50, 70, 0.4, 0.6, 1, 1, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [12, 'Dance Club', 'Group Dance-Cultural diversity', 'Inter', '6-12 member', '05-Apr', '05:30', 'Main stage', 200, 300, 0.4, 0.6, 12, 12, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [13, 'Dance Club', 'Duet Dance competition', 'Inter', '2', '04-Apr', '05:00', 'Main Stage', 200, 300, 0.4, 0.6, 2, 2, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [14, 'Dance Club', 'Dance Battle', 'Inter', 'min 1 max 2', '06-Apr', '11:00', 'Basket Ball', 100, 200, 0.4, 0.6, 2, 2, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [15, 'Q-Encore', 'Duet Signing', 'Inter', '2', '05-Apr', '05:00-06:00', 'Main Stage', 300, 350, 0.4, 0.6, 2, 2, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [16, 'Pahal Club', 'Ankuran', 'Inter', 'Team work', '06-Apr', '11:00 AM', 'B.Tech Seminar Hall', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [17, 'Creative Art', 'Nail Art', 'Inter', 'Team work', '06-Apr', '11:00', 'Moot Court', 50, 50, 0.4, 0.6, 1, 1, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [18, 'Thespian ( Theatre Club )', 'Behrupiya', 'Intra', 'Individual', '05-Apr', '11:00', 'Near Cafetaria', 50, 'NA', 0.4, 0.6, 1, 1, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [19, '_', 'Escape The Trap', 'Intra', 'Team work', '05-Apr', '11:00', 'Near New Building', 50, 'NA', 0.4, 0.6, 4, 4, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [20, '_', 'Medley 2.0', 'Intra', 'Team work', '05-Apr', '11:00', 'A-108/A109', 50, 'NA', 0.4, 0.6, 4, 4, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [21, '_', 'Treasure Hunt', 'Intra', 'Team work', '06-Apr', '09:00 AM onwards', 'A-208/A-209', 200, 'NA', 0.4, 0.6, 4, 4, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [22, '_', 'Cubic Puzzle', 'Intra', 'Individual', '06-Apr', '09:00 AM onwards', 'B-108/B-109', 50, 'NA', 0.4, 0.6, 1, 1, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [23, '_', 'Scabenzer', 'Intra', 'Team work', '06-Apr', '09:00 AM onwards', '_', 50, 'NA', 0.4, 0.6, 4, 4, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [24, '_', 'ACE- The Aptitude', 'Intra', '2', '04-06-2024', '09:00 AM onwards', 'Seminar Hall New Building', 50, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [25, '_', 'Free Fire', 'Intra', '4', '04-06-2024', '09:00 AM onwards', 'Seminar Hall New Building', 100, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA']
    ],
    ojas: [
        [1, 'Business Administration (BBA)', 'AD - MAD SHOW: MERA PRODUCT MERA FUNDA', 'Inter', 'Team (3)', '05-Apr', '02:30', 'New mini Audi', 100, 100, 0.4, 0.6, 3, 3, 3, 1, 'NA', 'NA'],
        [2, 'CODEX Club', 'CODE CRACKER', 'Inter', 'Individual', '05-Apr', '02:30', 'Lab 1, 2, 3, 4, 5, 6', 60, 60, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [3, 'CODEX Club', 'CRACK THE QUIZ', 'Inter', 'Individual', '06-Apr', '10:00 AM', 'F008/F009', 50, 50, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [4, 'HSS', 'ECONOMY CHAKRA - A BUSINESS QUIZ', 'Inter', 'Team (3)', '05-Apr', '01:30', 'New library', 100, 100, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [5, 'Commerce & Finance', 'Kreeda Carnival', 'Inter', 'Individual', '06-Apr', '10:00', 'F208/F209', 50, 50, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [6, 'Photography Club', 'FRAME A PHOTOGRAPHY', 'Inter', 'Individual', '05-Apr', '02:30', 'Drawing room', 50, 50, 0.4, 0.6, 1, 1, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [7, 'Department of Law', 'Legal Wrangle', 'Inter', 'Individual', '05-Apr', '02:30', 'New moot court', 50, 50, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [8, 'Department of Management', 'BUSINESS PLAN', 'Inter', 'Individual', '06-Apr', '09:30', 'New mini', 30, 30, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [9, 'Impulse Club', 'Design Challenge', 'Inter', 'Individual', '05-Apr', '02:30', 'Comp Lab A Block', 100, 100, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [10, 'Agriculture and Natural Science Club', 'Green Wall', 'Intra', 'Team (2-5)', '05-Apr', '10:00', 'Guest House', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [11, 'Agriculture and Natural Science Club', 'Zero Budget Farming', 'Intra', 'Team (2)', '05-Apr', '10:00', 'Stall', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [12, 'Agriculture and Natural Science Club', 'Artistic Touches of Blossoms', 'Inter', 'Individual', '05-Apr', '10:00', 'Stall', 50, 50, 0.4, 0.6, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [13, 'Agriculture and Natural Science Club', 'Gardening Showcase', 'Intra', 'Individual', '05-Apr', '10:00', 'Stall', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [14, 'Department of Paramedical Sciences', 'AI in Medical Sciences-Model Making Competition', 'Inter', 'Team (2-3)', '05-Apr', '10:00', 'First floor gallery', 100, 100, 0.4, 0.6, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [15, 'Media Club', 'Reel Making (ReelBazzi)', 'Inter', 'Individual', '06-Apr', '01:30', 'New mini Audi', 50, 50, 0.4, 0.6, 1, 1, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [16, 'Media Club', 'Film Making (Q Film)', 'Inter', 'Min 1 and Max 3', '06-Apr', '01:30', 'New mini Audi', 50, 70, 0.4, 0.6, 2, 2, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [17, 'Media Club', 'Mike Master Showdown (1 Peice to Camera, 2 On Spot Reporting, 3 On Spot Anchoring)', 'Inter', 'Individual', '06-Apr', '01:30', 'New mini Audi', 50, 70, 0.4, 0.6, 1, 1, 'NA', 1, 1, 'All the participants will be given participation certificates.'],
        [18, 'Civilinks Club', 'Structurodesign', 'Inter', 'Team (2 Member)', '06-Apr', '10:30', 'Structure Lab', 100, 100, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [19, 'Civilinks Club', 'MOCO Masters', 'Inter', 'Team (2 Member)', '06-Apr', '10:30', 'Structure Lab', 100, 100, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [20, 'Department of Hospitality and Tourism', 'Chef Competition', 'Inter', 'Team (2 Member)', '05-Apr', '02:30', 'BHM Lab', 500, 1000, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [21, 'Department of Hospitality and Tourism', 'Beverage Alchemy Competition', 'Inter', 'Team (2 Member)', '05-Apr', '02:30', 'BHM Lab', 500, 1000, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [22, 'Department of Hospitality and Tourism', 'The Décor Diaries', 'Inter', 'Team (2 Member)', '06-Apr', '10:30', 'BHM Lab', 250, 500, 'NA', 'NA', 5, 5, 'NA', 1, 1, 10],
        [23, 'Department of Computer Science & Eng', 'Fusion BYTE-QHack24: Uniting Tech Minds', 'Inter', 'Team (5 Members)', '06-Apr', '09:00 AM onwards', 'Central Library', 300, 500, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [24, 'Media Club', 'Tekken 8', 'Inter', 'Individual', '05-Apr', '02:30', 'ARC Lab', 100, 100, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [25, 'Department of Management', 'BULL OR BEAR BATTLE', 'Inter', 'Individual', '05-Apr', '02:30', 'F Block Comp Lab', 100, 100, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'],
        [26, 'Department of Computer Science & Eng', 'BGMI', 'Inter', 'Team (4 Member)', '06-Apr', '10:00', 'A-C Block Third Floor', 100, 200, 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA']
    ],
    udaan: [
        [1, 'Q-Spartan (Sports Club)', 'Volleyball (Boys)', 'Inter', 'Team', '02-04 to 04-04', 'All Day', 'Volleyball ground', 1200, 1800, 2500, 5500, 12, 12, 'NA', 1, 1, 24, 4],
        [2, 'Q-Spartan (Sports Club)', 'Football (Boys)', 'Inter', 'Team', '02-04 to 04-04', 'All Day', 'Football Ground', 1000, 1500, 2500, 5100, 12, 12, 'NA', 1, 1, 24, 4],
        [3, 'Q-Spartan (Sports Club)', 'Cricket (Boys)', 'Inter', 'Team', '27-03 to 30-03', 'All Day', 'Cricket Ground', 2000, 3500, 5100, 12000, 12, 12, 'NA', 1, 1, 24, 4],
        [4, 'Q-Spartan (Sports Club)', 'Kho-Kho (Boys)', 'Inter', 'Team', '02-04 to 04-04', 'All Day', 'Ground Near main gate', 1000, 1500, 1500, 3500, 12, 12, 'NA', 1, 1, 24, 4],
        [5, 'Q-Spartan (Sports Club)', 'Kho-Kho (Girls)', 'Inter', 'Team', '02-04 to 04-04', 'All Day', 'Ground Near main gate', 800, 1200, 2100, 3100, 12, 12, 'NA', 1, 1, 24, 'NA'],
        [6, 'Q-Spartan (Sports Club)', 'ROADIEES', 'Inter', 'Individual', '27-03 to 04-04', '12:40', '', 100, 200, 'NA', 8000, 'NA', 'NA', 'NA', 1, 'NA', 1, 'NA'],
        [7, 'Q-Spartan (Sports Club)', 'Basketball (Boys)', 'Inter', 'Team', '02-04 to 04-04', 'All Day', 'Basketball court', 1000, 1800, 2100, 3100, 12, 12, 'NA', 1, 1, 24, 4],
        [8, 'Q-Spartan (Sports Club)', 'Basketball (Girls)', 'Inter', 'Team', '02-04 to 04-04', 'All Day', 'Basketball court', 800, 1200, 1100, 2100, 12, 12, 'NA', 1, 1, 24, 'NA'],
        [9, 'Q-Spartan (Sports Club)', 'Badminton (Singles) (Boys & Girls)', 'Inter', 'Individual', '02-04 to 04-04', 'All Day', 'BH1, BH2 & GH', 100, 150, 500, 1000, 2, 2, 'NA', 1, 1, 4, 'NA'],
        [10, 'Q-Spartan (Sports Club)', 'Badminton (Doubles) (Boys & Girls)', 'Inter', 'Team', '02-04 to 04-04', 'All Day', 'BH1, BH2 & GH', 200, 300, 1200, 700, 4, 4, 'NA', 1, 1, 8, 'NA'],
        [11, 'Q-Spartan (Sports Club)', 'Kabaddi', 'Intra', 'Team', '27-03 to 30-03', '12:40', 'Kabaddi Ground', 600, 'NA', 600, 1100, 12, 12, 'NA', 1, 1, 24, 'NA'],
        [12, 'Q-Spartan (Sports Club)', 'Carrom', 'Intra', 'Team', '27-03 to 30-03', '12:40', 'Central Library', 100, 'NA', 'NA', 500, 2, 2, 'NA', 'NA', 'NA', 4, 'NA'],
        [13, 'Q-Spartan (Sports Club)', 'Chess', 'Intra', 'Individual', '27-03 to 30-03', '12:40', 'Central Library', 100, 'NA', 'NA', 500, 2, 2, 'NA', 'NA', 'NA', 4, 'NA'],
        [14, 'Q-Spartan (Sports Club)', 'Lawn Tennis', 'Intra', 'Team', '27-03 to 30-03', '12:40', 'Lawn Tennis Court', 200, 'NA', 'NA', 500, 2, 2, 'NA', 'NA', 'NA', 4, 'NA'],
        [15, 'Q-Spartan (Sports Club)', 'Tug Of War', 'Intra', 'Team', '27-03 to 30-03', '12:40', 'Ground Near main gate', 800, 'NA', 500, 1100, 16, 16, 'NA', 2, 2, 32, 'NA'],
        [16, 'Q-Spartan (Sports Club)', 'Table Tennis (Singles)', 'Intra', 'Individual', '27-03 to 30-03', '12:40', 'Near Sports Office', 100, 'NA', '', 500, 2, 2, 'NA', 'NA', 'NA', 4, 'NA'],
        [17, 'Q-Spartan (Sports Club)', 'Artificial Wall Climbing', 'Intra', 'Team', '02-04 to 04-04', 'All Day', 'Boys Hostel 2', 500, 'NA', 500, 1100, 5, 5, 'NA', 1, 1, 10, 2],
        [18, 'Q-Spartan (Sports Club)', '100 Meter Race', 'Intra', 'Individual', '27-03 to 30-03', '12:40', 'Ground Near main gate', 100, 'NA', 400, 800, 2, 2, 'NA', 'NA', 'NA', 4, 'NA'],
        [19, 'Q-Spartan (Sports Club)', '4X100m Relay Race', 'Intra', 'Team', '27-03 to 30-03', '12:40', 'Ground Near main gate', 200, 'NA', 500, 800, 4, 4, 'NA', 'NA', 'NA', 8, 'NA'],
        [20, 'Q-Spartan (Sports Club)', 'Long Jump', 'Intra', 'Individual', '27-03 to 30-03', '12:40', 'Ground Near main gate', 50, 'NA', 'NA', 'NA', 2, 2, 'NA', 'NA', 'NA', 4, 'NA'],
        [21, 'Q-Spartan (Sports Club)', 'Shot Put', 'Intra', 'Individual', '27-03 to 30-03', '12:40', 'Ground Near main gate', 50, 'NA', 'NA', 'NA', 2, 2, 'NA', 'NA', 'NA', 4, 'NA']
    ]

}


document.addEventListener('DOMContentLoaded', () => {

    const tableWrapper = document.querySelector('.table-data-wrapper');

    const tableId = tableWrapper.parentElement.getAttribute('id')

    function loadEdgeTableData() {
        let edgeWrapper = document.querySelector('#edge-table .table-data-wrapper');
        for (let array of eventData.edge) {
            let tableRow = document.createElement('tr');
            array.forEach(data => {
                // console.log(data);
                let tableData = document.createElement('td');
                tableData.innerHTML = data;
                tableRow.appendChild(tableData);
            })


            edgeWrapper.appendChild(tableRow);
        }
    }
    function loadDharoharTableData() {
        let dharoharWrapper = document.querySelector('#dharohar-table .table-data-wrapper');
        for (let array of eventData.dharohar) {
            let tableRow = document.createElement('tr');
            array.forEach(data => {
                // console.log(data);
                let tableData = document.createElement('td');
                tableData.innerHTML = data;
                tableRow.appendChild(tableData);
            })


            dharoharWrapper.appendChild(tableRow);
        }
    }
    function loadOjasTableData() {
        let OjasWrapper = document.querySelector('#ojas-table .table-data-wrapper');
        for (let array of eventData.ojas) {
            let tableRow = document.createElement('tr');
            array.forEach(data => {
                // console.log(data);
                let tableData = document.createElement('td');
                tableData.innerHTML = data;
                tableRow.appendChild(tableData);
            })


            OjasWrapper.appendChild(tableRow);
        }
    }
    function loadUdaanTableData() {
        let UdaanWrapper = document.querySelector('#udaan-table .table-data-wrapper');
        for (let array of eventData.udaan) {
            let tableRow = document.createElement('tr');
            array.forEach(data => {
                // console.log(data);
                let tableData = document.createElement('td');
                tableData.innerHTML = data;
                tableRow.appendChild(tableData);
            })


            UdaanWrapper.appendChild(tableRow);
        }
    }

    switch (tableId) {
        case 'edge-table':
            loadEdgeTableData();

        case 'dharohar-table':
            loadDharoharTableData();

        case 'ojas-table':
            loadOjasTableData();

        case 'ojas-table':
            loadUdaanTableData();

        default:
            break;
    }
})