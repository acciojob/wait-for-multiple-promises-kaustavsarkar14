
    function getRandomTime() {
        return Math.floor(Math.random() * 3000) + 1000;
    }

    function createPromise(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number);
            }, getRandomTime());
        });
    }

    const promises = [
        createPromise(1),
        createPromise(2),
        createPromise(3)
    ];

    Promise.all(promises)
        .then(results => {
            const outputTable = document.getElementById('output');
            const loadingRow = document.getElementById('loading');
            loadingRow.remove();

            for (let i = 0; i < promises.length; i++) {
                const newRow = document.createElement('tr');
                const promiseNameCell = document.createElement('td');
                const timeTakenCell = document.createElement('td');

                promiseNameCell.textContent = `Promise ${i + 1}`;
                timeTakenCell.textContent = (results[i] / 1000).toFixed(3);

                newRow.appendChild(promiseNameCell);
                newRow.appendChild(timeTakenCell);
                outputTable.appendChild(newRow);
            }

            const totalTime = (results.reduce((acc, time) => acc + time, 0) / 1000).toFixed(3);
            const totalRow = document.createElement('tr');
            const totalNameCell = document.createElement('td');
            const totalTimeTakenCell = document.createElement('td');

            totalNameCell.textContent = 'Total';
            totalTimeTakenCell.textContent = totalTime;

            totalRow.appendChild(totalNameCell);
            totalRow.appendChild(totalTimeTakenCell);
            outputTable.appendChild(totalRow);
        });