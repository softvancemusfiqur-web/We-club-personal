import app from "./app";


const port  = process.env.PORT || 3000;

const main = () => {
    app.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });
}

main();