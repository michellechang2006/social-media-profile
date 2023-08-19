

本來看官方的NPM安裝教學，看不懂。好不容易查到[這篇教學文章](https://hackmd.io/@lalarabbits/Installation_npm_tailwind)，但似乎因版本關係（[教學文章](https://hackmd.io/@lalarabbits/Installation_npm_tailwind)是兩年前的），少了幾個步驟。本篇筆記，筆者補充現在的版本（v3.3.3)需要的安裝步驟及Mac NPM 安裝 常常遇到的問題。


## 開始安裝


前面的安裝步驟都和[這篇教學文章](https://hackmd.io/@lalarabbits/Installation_npm_tailwind)。


**Mac NPM install issue**


如果你是MAC用戶又是第一次安裝NPM。很有可能無法執行第五步驟：


![](https://i.imgur.com/IXztLzX.png)



這時只要在終端機輸入`sudo chown -R 501:20 "/Users/{使用者名稱}/.npm"`，按下`Enter`鍵執行，並輸入登入電腦的密碼，就可以囉～感謝[Bing（GPT-4)]([Bing](https://www.bing.com/))幫我Google解答🙏🏻




## v3.3.3 版本 需要的步驟


如果你按照[這篇教學文章](https://hackmd.io/@lalarabbits/Installation_npm_tailwind)一步步安裝，你會發現當你將`要掛載在頁面的CSS檔`掛在你的`.html`，無法套用`Tailwind.css`的CSS Class。這是因為少了這個步驟：

在你的`tailwind.config.js`檔案中，修改：

```js
/** @type {import('tailwindcss').Config} */

module.exports = {

content: [

'./**/*.html', // 在 content 裡加入這一行，代表所有的.html檔案都會套用Tailwind.css

],

theme: {

extend: {},

},

plugins: [],

}
```


在你的`tailwind.config.js`檔案中，修改：


```json
"scripts": { // 在 scripts 中，修改這一行

"watch": "npx tailwindcss -i {你 css 檔擺放的路徑}/{要寫樣式的css檔名稱} -o {你 css 檔擺放的路徑}/{頁面要掛載的css檔名稱} --watch"

},

```



然後在終端機中執行 `npm run watch` 指令，就可以囉～感謝[Bing（GPT-4)]([Bing](https://www.bing.com/))幫我Google解答🙏🏻








### `@apply` 語法使用

我們使用 `@apply` 語法，將多個樣式合併，Tailwind 的模組化就是靠此功能實現。

- `@apply` 可與一般 CSS 一起使用
- `@apply` 後方樣式編譯時不照順序排列，如要排列可使用多個 `@apply`
- 可直接 `@apply` 組好的 `class` 但 `!important` 不會繼承
- 如需繼承 `!important` 可直接寫在 `@apply` 最後方

範例碼：

```css
/* 貼在用來寫樣式的css檔，範例這邊是 tailwind.css */

@import "tailwindcss/base";

  

@import "tailwindcss/components";

  

@import "tailwindcss/utilities";

  

.card{

@apply bg-primary m-5 p-5 px-10 w-96 rounded-full shadow-md flex justify-between items-center flex-row;

}
```


1. 所有的`@apply`語法必須寫在<u>貼在用來寫樣式的css檔</u>，才能執行。（ex：tailwind.css)
2. 如執行失敗，請在終端機執行`npm run build-css`。



感謝[Bing（GPT-4)]([Bing](https://www.bing.com/))幫我Google解答🙏🏻



>[CSS - Tailwind CSS 入門與語法](https://ithelp.ithome.com.tw/articles/10254936)