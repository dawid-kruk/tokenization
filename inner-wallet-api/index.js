const express = require('express');
const sss = require('shamirs-secret-sharing')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

app.post('/split', (req, res) => {
    const privateKey = req.body.privateKey;
    const secret = Buffer.from(privateKey)
    const shares = sss.split(secret, { shares: 3, threshold: 1 })
    res.send(shares)
});

app.post('/combine', (req, res) => {
    const arrayOfBuffers = req.body.arrayBuffersSent
    let buffers = []
    for (let i = 0; i < arrayOfBuffers.length; i++ ){
        buffers.push(Buffer.from(hexToBytes(arrayOfBuffers[0])))
    }
    const recovered = sss.combine(buffers)
    res.send(recovered.toString())
});

const hexToBytes = (hex) => {
    let bytes = [];
    let c = 0;
    for (; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return new Uint8Array(bytes);
}

app.listen(port, () => console.log(`Port: ${port}!`))