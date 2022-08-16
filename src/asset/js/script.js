// 読み込み後に実行する処理
$(function() {
    console.log("Script");
});
// 完全読み込み後に実行する処理
window.onload = function() {
    console.log("Script after");
}
