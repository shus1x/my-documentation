const fs = require('fs');
const { exec } = require('child_process');

exec('npx diplomdoc build --input docs --output docs-html', (error, stdout, stderr) => {
    if (error) {
        console.error(`Ошибка сборки: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Ошибка: ${stderr}`);
        return;
    }
    console.log(`Сборка завершена:\n${stdout}`);
});