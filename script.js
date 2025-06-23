function adjustWeight(exercise, change) {
    let weight = parseFloat(document.getElementById(`${exercise}Weight`).value) + change;
    if (weight >= 0) document.getElementById(`${exercise}Weight`).value = weight;
    localStorage.setItem(`${exercise}Weight`, weight);
}

window.onload = function() {
    document.getElementById('squatsWeight').value = localStorage.getItem('squatsWeight') || 0;
    document.getElementById('benchWeight').value = localStorage.getItem('benchWeight') || 0;
    document.getElementById('latWeight').value = localStorage.getItem('latWeight') || 0;
    document.getElementById('shoulderWeight').value = localStorage.getItem('shoulderWeight') || 0;
    document.getElementById('lateralWeight').value = localStorage.getItem('lateralWeight') || 0;
    document.getElementById('chestFlyWeight').value = localStorage.getItem('chestFlyWeight') || 0;
    document.getElementById('facePullsWeight').value = localStorage.getItem('facePullsWeight') || 0;
    document.getElementById('deadliftWeight').value = localStorage.getItem('deadliftWeight') || 0;
    document.getElementById('rowWeight').value = localStorage.getItem('rowWeight') || 0;
    document.getElementById('inclineWeight').value = localStorage.getItem('inclineWeight') || 0;
    document.getElementById('legPressWeight').value = localStorage.getItem('legPressWeight') || 0;
    document.getElementById('legCurlsWeight').value = localStorage.getItem('legCurlsWeight') || 0;
    document.getElementById('tricepsWeight').value = localStorage.getItem('tricepsWeight') || 0;
    document.getElementById('bicepsWeight').value = localStorage.getItem('bicepsWeight') || 0;
}