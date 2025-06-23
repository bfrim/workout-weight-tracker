function adjustWeight(exercise, change) {
    let weight = parseFloat(document.getElementById(`${exercise}Weight`).value) + change;
    if (weight >= 0) {
        document.getElementById(`${exercise}Weight`).value = weight;
    }
    else { weight = 0; }
    localStorage.setItem(`${exercise}Weight`, weight);
}

window.onload = function() {
    const exercises = [
        { id: 'squatsWeight', page: 'a.html' },
        { id: 'benchWeight', page: 'a.html' },
        { id: 'latWeight', page: 'a.html' },
        { id: 'shoulderWeight', page: 'a.html' },
        { id: 'lateralWeight', page: 'a.html' },
        { id: 'chestFlyWeight', page: 'a.html' },
        { id: 'facePullsWeight', page: 'a.html' },
        { id: 'deadliftWeight', page: 'b.html' },
        { id: 'rowWeight', page: 'b.html' },
        { id: 'inclineWeight', page: 'b.html' },
        { id: 'legPressWeight', page: 'b.html' },
        { id: 'legCurlsWeight', page: 'b.html' },
        { id: 'tricepsWeight', page: 'b.html' },
        { id: 'bicepsWeight', page: 'b.html' }
    ];

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    exercises.forEach(exercise => {
        if (currentPage === exercise.page || currentPage === 'index.html') {
            const element = document.getElementById(exercise.id);
            if (element) {
                element.value = localStorage.getItem(exercise.id) || 0;
            }
        }
    });
}