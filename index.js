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
        'Authorization': 'Bearer EAACpOEfZBjB8BAPD7iWK8p3FQIe5rv5kZCsBGSNobo7h8x2BtuCZCzkvOuaRGU6EcZAjRBj0z091hr6InfT4HTlrin7imJOsYs47TGbyBPeDY3yhq4IBjYKXPmtEU2DfRj76jiF20thQbiSK9CgKh2ViVbXUG7DLK8bkV8CzkThIz4YLLaShZBJ8744BKDznJfEb3Cc5fpgZDZD',
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


