var axios = require("axios");

const data = {
    "messaging_product": "whatsapp", 
    "to": "918305191706", 
    "type": "template", 
    "template": { 
        "name": "hello_world", 
        "language": { "code": "en_US" } 
    }
}

var options = {
    method: 'POST',
    url: 'https://graph.facebook.com/v17.0/101588133027048/messages',
    headers: {
        'Authorization': 'Bearer EAACpOEfZBjB8BABRgkOgJK05ZAC8YDIszhDhI7dk67uZC5bFmZBAPZCnZCvSWZB54yPyMzPpnJNcKan0gBcGawKKEZCX2ZAeYyjEKICXh6EOm8yGPYjc3SicD6gQxCJ2dEpNwiSLKpLGPfPSH24TG60bq97AuZBql2p3bjQYnXU7rFUEzrNpwIADiBuTDvxEZB5XyDLVTrU25iBeAZDZD',
        'Content-Type': 'application/json'
    },
    data: data
};

axios(options)
    .then(function (response) {
        console.log(response.status)
        return;
    })
    .catch(function (error) {
        console.log(error);
        console.log(error.response.data);
        return;
    });
//server
// const app = express()
// app.use(bodyParser.json())
// app.use(cors())


