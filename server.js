const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
          {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '일번이',
            'birthday': '111111',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '이번이',
            'birthday': '222222',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '삼번이',
            'birthday': '333333',
            'gender': '남자',
            'job': '대학생'
          }          
    ]);
});

app.listen(port, () => console.log(`Listening on Port ${port}`));