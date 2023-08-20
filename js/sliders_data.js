



// fetch(url)
//     .then(res => res.json())
//     .then(res => {
//         const data = res.values;
//         console.log(data);

//         // 刪除第一個陣列
//         data.shift();

//         Array.prototype.forEach.call(data, d => {


//             let slider = `<div class="sliders  mt-5 rounded-full">
//       <a class="slider fade my-3" href="${d[1]}"><img src="${d[0]}"
//               class="rounded-3xl hover:shadow-lg shadow-md w-96 sm:w-full"></a>
//   </div>`;

//             document.querySelector('.sliders').insertAdjacentHTML('beforeend', slider);



//         })

//     })



// 然而，由於 fetch() 是非同步的，所以在資料完全載入之前，第二段程式碼可能無法找到任何 .slider 或 .dot 元素。這可能會導致 showSlides() 函數在輪播元素還未完全載入時就被調用，從而導致問題。
// 為了解決這個問題，您可以將第二段程式碼的調用放在第一段程式碼的 fetch() 回調函數中，
const url = 'https://sheets.googleapis.com/v4/spreadsheets/1du7xd_7BgoYUBRIGG7QVlnSLC3NKZk6s4BBjtNwNK_I/values/sheet1?alt=json&key=AIzaSyDXVtiX6u99hVg1KH3XSFmYR-EuTNJXUgU';

fetch(url)
    .then(res => res.json())
    .then(res => {
        const data = res.values;
        console.log(data);

        // 刪除第一個陣列
        data.shift();

        Array.prototype.forEach.call(data, d => {
            let slider = `<div class="sliders  mt-5 rounded-full">
      <a class="slider fade my-3 w-1" href="${d[1]}"><img src="${d[0]}"
              class="rounded-3xl hover:shadow-lg shadow-md w-96 sm:w-full" alt="${d[2]}" srcset="${d[3]}"></a>
  </div>`;

            document.querySelector('.sliders').insertAdjacentHTML('beforeend', slider);
        })

        // 在此處調用第二段程式碼
        showSlides();
    })


