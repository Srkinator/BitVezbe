var dataControler = (function (){

    var data = {
        examsListPassed : [],
        examsListFailed : []
    }
    
    function Exam(name, student, grade) {
        this.name = name;
        this.student = student;
        this.grade = grade;
        this.passed = passed();

        function passed() {
            if (grade <= 10 && grade >= 6) {
                return true;
            } else {
                return false;
            }
        }
    }

    function getLists() {
        return {
            examsListFailed: data.examsListFailed,
            examsListPassed: data.examsListPassed
        }
    }

    Exam.prototype.getInfo = function() {
        return 'Exam: ' + this.name + ', Student: ' + this.student + ', Grade: ' + this.grade;
    }

    function createExam(name, student, grade) {
        var exam = new Exam(name.toUpperCase(), student, grade);

        if (exam.passed) {
            data.examsListPassed.push(exam);
        } else {
            data.examsListFailed.push(exam);
        }

        return exam;
    }

    return {
        createExam: createExam,
        getLists: getLists
    }

})();

var UIControler = (function (){

    var passedList = document.querySelector('.passed-list');
    var failedList = document.querySelector('.failed-list');
    var passedCount = document.querySelector('.exam-passed-count');
    var failedCount = document.querySelector('.exam-failed-count');
    var passedCountPercent = document.querySelector('.exam-passed-percentage');
    var failedCountPercent = document.querySelector('.exam-failed-percentage');
    var totalStudentsElement = document.querySelector('.exam-total');

    function getFormData() {
        var examSelect = document.querySelector('.add-subject');
        var studentSelect = document.querySelector('.add-student-name');
        var gradeSelect = document.querySelector('.add-grade');

        return {
            name: examSelect.value,
            student: studentSelect.value,
            grade: gradeSelect.value
        }
    }

    function renderLists(lists) {

        var totalStudents = lists.examsListFailed.length + lists.examsListPassed.length;

        renderOneList(lists.examsListPassed, passedList);
        renderOneList(lists.examsListFailed, failedList);

        passedCount.textContent = lists.examsListPassed.length;
        failedCount.textContent = lists.examsListFailed.length;

        if (totalStudents === 0) {
            passedCountPercent.textContent = 0 + ' %';
            failedCountPercent.textContent = 0 + ' %';
        } else {
            passedCountPercent.textContent = Math.round(lists.examsListPassed.length / totalStudents * 100) + '%';
            failedCountPercent.textContent = Math.round(lists.examsListFailed.length / totalStudents * 100) + '%';
        }

        totalStudentsElement.textContent = 'Total students: ' + totalStudents;
    }

    function renderOneList(list, location) {
        for (var i = 0; i < list.length; i ++) {
            var parag = document.createElement('p');
            var text = document.createTextNode(list[i].getInfo());
            parag.appendChild(text);
            location.appendChild(parag);
        }
    }

    function clearLists() {

        passedList.innerHTML = '';
        failedList.innerHTML = '';


    }

    return {
        getFormData: getFormData,
        renderLists: renderLists,
        clearLists: clearLists
    }

})();

var mainControler = (function(dataCtrl, UICtrl){

    function enableEventListeners() {
        document.querySelector('.add-btn').addEventListener('click', function() {
            createStudentItem();
            renderExamList();
        })
    }
    // function that calls the shots!
    function createStudentItem() {

        // 1. grab input from UI
        var input = UICtrl.getFormData();

        // 2. create Exam and push to list
        var exam = dataCtrl.createExam(input.name, input.student, input.grade);

        // 3. print info about exam in the list
        
    }

    function renderExamList() {

        // clear list before rendering new one
        UICtrl.clearLists();
        // grab lists from dataControler
        var lists = dataCtrl.getLists();

        // trigger rendering in UI while passing lists
        UICtrl.renderLists(lists);
    }

    return {
        init: function() {
            enableEventListeners();
            UICtrl.clearLists(); 
            UICtrl.renderLists(dataCtrl.getLists());            
        }
    }
})(dataControler, UIControler);

mainControler.init();
