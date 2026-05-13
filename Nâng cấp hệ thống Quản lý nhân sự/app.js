const employees = [];
const empName = document.querySelector('#empName');
const empSalary = document.querySelector('#empSalary');
const empForm = document.querySelector('#employeeForm');
const empList = document.querySelector('#employeeList');
const searchInput = document.querySelector('#searchInput');

empForm.addEventListener('submit', function(e){
    e.preventDefault();
    const empNew = {
        name: empName.value.trim(),
        salary: Number(empSalary.value)
    }
    employees.push(empNew);
    render(employees);
    empName.value = "";
    empSalary.value = "";
})

searchInput.addEventListener('input', function(){
    const name = searchInput.value.toLowerCase().trim();
    const empsFilter = employees.filter((emp) => {
        return emp.name.toLowerCase().startsWith(name);
    })
    if(empsFilter.length === 0){
        empList.innerHTML = `<li style="color: gray;">Không tìm thấy nhân viên nào...</li>`;
    }
    render(empsFilter);
})

function render(data){
    const htmlList = data.map((emp) => {
        return `<li class="employee-item">Tên nhân viên: ${emp.name} - Lương: ${emp.salary} VNĐ</li>`;
    })
    empList.innerHTML = htmlList.join("");
    updateTotal(data);
}

function updateTotal(data){
    const total = data.reduce((sum, emp) => sum + emp.salary, 0);
    document.querySelector('#totalSalary').innerText = total.toLocaleString();
}

