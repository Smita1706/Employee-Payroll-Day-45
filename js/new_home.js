window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "  <th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";

    
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList){
        innerHtml = `${innerHtml}
            <tr>
                <td>
                    <img class="profile" src="${empPayrollData._profilePic}" alt="">
                </td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>
                    <div>${getDeptHtml(empPayrollData._department)}</div>
                </td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img name="${empPayrollData._id}"  onclick="remove(this)"
                        src="/assets/icons/delete-black-18dp.svg"
                        alt="delete">
                    <img name="${empPayrollData._id}" onclick="update(this)"
                        src="/assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
            `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Arya Thorat',
            _gender: 'Female',
            _department: [
                'HR', 
                'Sales'
            ],
            _salary: '500000',
            _startDate: '2 August 2022',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Aman singh',
            _gender: 'Male',
            _department: [
                'Engineer', 
                'Finance'
            ],
            _salary: '400000',
            _startDate: '1 Feb 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/assets/profile-images/Ellipse -3.png'
        },
        {
            _name: 'kartiki Gupta',
            _gender: 'Female',
            _department: [
                'Engineer', 
                'Finance'
            ],
            _salary: '100000',
            _startDate: '5 Oct 2029',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/assets/profile-images/Ellipse -4.png'
        }
        
    ];
    return empPayrollListLocal; 
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    if (typeof deptList == 'string') {
        deptHtml = `${deptHtml} <div class="dept-label">${deptList}</div>`
        return deptHtml;
    }
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}