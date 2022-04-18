//fs 라이브러리 사용하여 json파일 만들기

const fs = require('fs');

const data = {
    title: 'Computer Organization and Design',
    subtitle: 'The Hardware Software Interface',
    author: 'David A. Patterson, John L. Hennessy',
    publisher: 'Morgan Kaufmann',
    edition: 'RISC-V Edition',
    price: '79,000 Won'
};

const myTextBook = fs.writeFileSync('textbook.json', JSON.stringify(data));
