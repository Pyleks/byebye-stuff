// window.onload = function(size) {
//     let width = window.innerWidth;
//     if (width < "1000") {
//        let widthClass =  document.querySelectorAll('.w-50');
//            console.log(widthClass[0]);
//         for (const element of widthClass) {
//             element.classList.remove('w-50')
//         }
//
//     }
// };

// window.onload = function() {
//     let width = window.innerWidth;
//     width.addEventListener('change', function()  {
//         if (width < "1000"){
//             let widthClass =  document.querySelectorAll('.w-50');
//             console.log(widthClass[0]);
//             for (const element of widthClass) {
//                 element.classList.remove('w-50')
//             }
//         }
//     })
// };


window.onload = function() {
    window.addEventListener('resize', function()  {
        let newWidth = window.innerWidth;
        if (newWidth < "1000"){
            let widthClass =  document.querySelectorAll('.w-50');
            // console.log(widthClass[0]);
            for (const element of widthClass) {
                element.classList.remove('w-50')
            }
        } else {
            let widthClass =  document.querySelectorAll('.w-50');
            for (const element of widthClass) {
                element.classList.add('w-50')
            }
        }
    })
};
