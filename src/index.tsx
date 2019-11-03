import { app } from "./app";

app.listen(app.get("port"), (): void => {
    console.log("Server is running on http://127.0.0.1:%d", app.get("port"));
});
