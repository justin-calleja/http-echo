const superagent = require('superagent');
// const httpEcho 

// const client = {
//     getX() {
//         superagent.get('http://localhost:2389').then(data => {
//     }
// };

superagent.get('http://localhost:54952').then(data => {
    console.log('in superagent callback');
    console.log('data.text is:', data.text);
}).catch(err => {
    console.log(err.message);
    console.log(err);
});
