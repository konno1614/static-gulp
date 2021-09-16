import { kekka } from "./kekka";

// おみくじ
export let omikuji = (): void => {
    let massage: string = 'あなたの運勢は「' + kekka() + '」です！！';
    alert(massage);
    console.log("確認");
}
