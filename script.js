// ======================================================
// TEMPORARY STUDENT DATA
// Later, this will be loaded from your Excel/CSV file.
// ======================================================

const students = [
    {
        sno: 1,
        rollNumber: "BCA001",
        course: "BCA",
        name: "Rahul Verma",
        certificateId: "GGW2026-001",
        certificateFile: "certificates/GGW2026-001.pdf"
    },

    {
        sno: 2,
        rollNumber: "MCA002",
        course: "MCA",
        name: "Sanjana Khatri",
        certificateId: "GGW2026-002",
        certificateFile: "certificates/GGW2026-002.pdf"
    },

    {
        sno: 3,
        rollNumber: "BCA003",
        course: "BCA",
        name: "Aditi Sharma",
        certificateId: "GGW2026-003",
        certificateFile: "certificates/GGW2026-003.pdf"
    }
];


// ======================================================
// SEARCH CERTIFICATE
// ======================================================

function searchCertificate() {

    const searchInput = document.getElementById("searchInput");
    const result = document.getElementById("result");

    const keyword = searchInput.value
        .trim()
        .toLowerCase();


    // Check if search box is empty

    if (keyword === "") {

        result.innerHTML = `
            <div class="message-box">

                <h3>Enter Search Details</h3>

                <p>
                    Please enter your Name, Roll Number
                    or Certificate ID.
                </p>

            </div>
        `;

        return;
    }


    // Search student

    const student = students.find(student => {

        const name = student.name.toLowerCase();

        const rollNumber =
            student.rollNumber.toLowerCase();

        const certificateId =
            student.certificateId.toLowerCase();

        return (

            name.includes(keyword) ||

            rollNumber === keyword ||

            certificateId === keyword

        );

    });


    // If certificate is not found

    if (!student) {

        result.innerHTML = `
            <div class="not-found">

                <h3>❌ Certificate Not Found</h3>

                <p>
                    We could not find a certificate
                    matching the information entered.
                </p>

                <p>
                    Please check your Name,
                    Roll Number or Certificate ID
                    and try again.
                </p>

            </div>
        `;

        return;
    }


    // If certificate is found

    displayCertificate(student);
}


// ======================================================
// DISPLAY CERTIFICATE DETAILS
// ======================================================

function displayCertificate(student) {

    const result = document.getElementById("result");

    result.innerHTML = `

        <div class="certificate-result">

            <div class="verified-badge">
                ✓ Verified Certificate
            </div>

            <h2>
                ${student.name}
            </h2>

            <div class="student-details">

                <div class="detail-row">

                    <span class="label">
                        Roll Number
                    </span>

                    <span>
                        ${student.rollNumber}
                    </span>

                </div>


                <div class="detail-row">

                    <span class="label">
                        Course
                    </span>

                    <span>
                        ${student.course}
                    </span>

                </div>


                <div class="detail-row">

                    <span class="label">
                        Certificate ID
                    </span>

                    <span>
                        ${student.certificateId}
                    </span>

                </div>


                <div class="detail-row">

                    <span class="label">
                        Workshop
                    </span>

                    <span>
                        Git & GitHub Workshop
                    </span>

                </div>

            </div>


            <a
                href="${student.certificateFile}"
                class="download-btn"
                target="_blank"
            >

                Download Certificate

            </a>

        </div>

    `;
}


// ======================================================
// SEARCH WHEN USER PRESSES ENTER
// ======================================================

document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            searchCertificate();

        }

    });


// ======================================================
// CLEAR OLD RESULT WHEN USER STARTS NEW SEARCH
// ======================================================

document
    .getElementById("searchInput")
    .addEventListener("input", function() {

        if (this.value.trim() === "") {

            document.getElementById("result").innerHTML = `

                <h3>Welcome 👋</h3>

                <p>
                    Enter your Name, Roll Number or
                    Certificate ID to verify and
                    download your certificate.
                </p>

            `;

        }

    });
