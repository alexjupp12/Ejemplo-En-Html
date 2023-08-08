const programs = [
    { id: 0, priority: 0 },
    { id: 1, priority: 1 },
    { id: 2, priority: 2 },
    { id: 3, priority: 3 },
    { id: 4, priority: 4 }
];

let priorityProyect = 0;

function runNextProgram() {
    const cpuElement = document.getElementById('cpu');
    const programElement = document.getElementById(`programa${priorityProyect}`);

    if (programElement) {
    cpuElement.innerText = `Iniciando P${priorityProyect} (Prioridad: ${programs[priorityProyect].priority})`;
    programElement.style.backgroundColor = 'Cyan';

    setTimeout(() => {
        programElement.style.backgroundColor = '';
        priorityProyect = (priorityProyect + 1) % programs.length;
        runNextProgram();
    }, 2000);
    }
}

runNextProgram();
