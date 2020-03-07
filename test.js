const fs = require('fs');
const path = require('path');
const {Light, all} = require('./asyncTask');

/*function final(resolve, reject, err, result) {
    console.log();
    if (err) {
        console.error(err);
        reject(err);
    } else {
        console.log(result);
        resolve(result);
    }
}

// читаем текущую папку
const readFiles = fs.readdirSync('.')
    // выбираем только файлы
    .filter(items => !fs.statSync(items).isDirectory())
    // для каждого файла делаем функцию на его чтение
    .map(f => callback => fs.readFile(f, (error, buffer) => {
        // достаем из буффера первый байт, чтобы не логировать весь файл в консоль
        const byte = buffer.slice(0, 1).toString('utf8');

        callback(null, byte);
    }));

// Создаем 3 фабрики таймеров, принимающих на вход callback, который будет вызван через time
const timeouts = [1000, 2000, 3000].map(
    time => callback => setTimeout(() => callback(null, time), time)
);

function runTest(testName, test) {
    console.time(testName);
    new Promise((resolve, reject) => {
        test((err, data) => final(resolve, reject, err, data))
    })
        .then(() => console.timeEnd(testName))
        .catch(() => console.timeEnd(testName));
}

function runPromiseAllTests() {
    // TEST 1 –– ошибка через ~ 100ms
    runTest('read files with error',
        finalPromiseHandler => all([
            ...readFiles,
            callback => setTimeout(() => callback(new Error('ups')), 100)
        ], finalPromiseHandler)
    );

    // TEST 2 – выводит список байтов
    // Для корректной работы теста нужно поместить test.js, asyncTask.js в папку с несколькими файлами
    runTest('read files', finalPromiseHandler => all(readFiles, finalPromiseHandler));

    // TEST 3 – время работы ~ 3000ms
    runTest('timeouts', finalPromiseHandler => all(timeouts, finalPromiseHandler));
}

runPromiseAllTests();*/

// TEST 1 Lights
// testLight();

function testLight() {
    const light = new Light([
        {color: 'green', duration: 1000},
        {color: 'yellow', duration: 2000},
        {color: 'red', duration: 3000},
        {color: 'purple', duration: 0}
    ]);

    light.start();

    setTimeout(() => light.stop(), 20000);
    // -g--y---rp-g--y- // "–" = 1000ms
}

testLight();
