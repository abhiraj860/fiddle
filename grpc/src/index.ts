import { getTodos } from "./rpc";


async function toDocall() {
    const todos = await getTodos();
    console.log(todos);
}

toDocall();


