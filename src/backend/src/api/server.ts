const port = process.env.PORT || 3002;
import app from './app';

app.listen(port);
// tslint:disable-next-line:no-console
console.log(`Api rodando na porta ${port}`);
