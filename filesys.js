// server_exp8.js
const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

http.createServer((req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        const form = new formidable.IncomingForm();
        
        form.parse(req, (err, fields, files) => {
            const oldPath = files.filetoupload[0].filepath;
            const newPath = __dirname + '/' + files.filetoupload[0].originalFilename;
            
            // Move the file from the temp folder to the current directory
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File uploaded and moved successfully!');
                res.end();
            });
        });
    } else {
        // Serve the upload form
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="/upload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br><br>');
        res.write('<button type="submit">Upload</button>');
        res.write('</form>');
        res.end();
    }
}).listen(3000, () => console.log('Upload server on http://localhost:3000'));