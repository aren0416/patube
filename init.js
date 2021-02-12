import app from "./app";

const PORT = 4000;

const handleListening = () => console.log(`✅ 서버연결: localhost:${PORT}`);

app.listen(PORT, handleListening);
