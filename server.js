const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serves your resume directly at the root URL (e.g., yourdomain.com)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'resume.pdf'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
