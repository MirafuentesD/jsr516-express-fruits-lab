const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const fruits = ['apple', 'strawberry', 'cherry', 'watermelons', 'kiwi', 'mango', 'blueberry'];
const vegetables = ['carrot', 'onion', 'asparagus', 'cabbage', 'turnip', 'artichoke', 'spinach'];


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')

});


app.get('/greet/:name', (req, res) => {
    res.send('Why hello there, ' + req.params.name + '!');
});

app.get('/five', (req, res) => {
    const fiveNums = [1, 2, 3, 4, 5];
    res.send(fiveNums);

});

app.get('/fruits', (req, res) => {
    //your code here
    res.send(fruits);
});

app.get('/fruits/:name', (req, res) => {
    //your code here
    if (fruits.indexOf(req.params.name) != -1) {
        res.send(fruits[fruits.indexOf(req.params.name)] + ' is delicious');

    }
    else {
        res.send('Enter valid fruit name from fruits list');
    }
    // HINT - you can use a higher-order array method
})

app.get('/veggies', (req, res) => {
    //your code here
    res.send(vegetables);
});

app.get('/veggies/:name', (req, res) => {
    //your code here
    if (vegetables.indexOf(req.params.name) != -1) {
        res.send(vegetables[vegetables.indexOf(req.params.name)] + ' is delicious');

    }
    else {
        res.send('Enter valid vegetable name from vegetables list');
    }
    // HINT - you can use a higher-order array method
})


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

