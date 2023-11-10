document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search").addEventListener("input", function () {
        searchCourses();
    });
});

function addCourse() {
    const courseCode = document.getElementById("course-code").value;
    const courseName = document.getElementById("course-name").value;
    const credit = document.getElementById("credit").value;

    if (courseCode && courseName && credit) {
        const table = document.getElementById("course-list").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.innerHTML = table.rows.length;
        cell2.innerHTML = courseCode;
        cell3.innerHTML = courseName;
        cell4.innerHTML = credit;
        cell5.innerHTML = '<button onclick="editCourse(this)">Sửa</button> ' +
                          '<button onclick="deleteCourse(this)">Xoá</button>';

        clearForm();
    }
}

function editCourse(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName("td");

    document.getElementById("course-code").value = cells[1].innerHTML;
    document.getElementById("course-name").value = cells[2].innerHTML;
    document.getElementById("credit").value = cells[3].innerHTML;

    row.remove();
}

function deleteCourse(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

function clearForm() {
    document.getElementById("course-code").value = "";
    document.getElementById("course-name").value = "";
    document.getElementById("credit").value = "";
}

function searchCourses() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const table = document.getElementById("course-list");
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let found = false;

        for (let j = 1; j < cells.length - 1; j++) {
            const cellText = cells[j].innerText.toLowerCase();

            if (cellText.includes(searchValue)) {
                found = true;
                break;
            }
        }

        if (found) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
    
}
function openTab(tabId) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = "block";
}
