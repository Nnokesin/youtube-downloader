const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// publicフォルダをWebサイトとして公開
app.use(express.static("public"));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started on port ${PORT}`);
});