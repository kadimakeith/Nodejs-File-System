const fs = require('fs');
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("")
const jquery = require('jquery')(dom.window);


let url = 'http://jsonplaceholder.typicode.com/posts';

jquery.getJSON(url, function(data){
    const jsonData = JSON.stringify(data)
    fs.writeFile('result/posts.json', jsonData, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved in posts.json.");
    });
})