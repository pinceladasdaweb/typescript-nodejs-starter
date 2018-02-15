import Server from "./classes/Server";
import ArticlesRoute from "./routes/Articles.route";

const app = new Server(8080);

const articles = new ArticlesRoute();
app.addRoute("/articles", articles.router);

app.start();