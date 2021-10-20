const fetch = require('node-fetch');

const myFunFact = async (request, response) => {
    const fact = await fetch("https://asli-fun-fact-api.herokuapp.com/");
    const body = await fact.json();

    var html = '<html><p>Category:' + 
                body.data.cat + '</p><p>'+ 
                body.data.fact +'</p></html>';

    response.send(html);
}

module.exports = myFunFact;