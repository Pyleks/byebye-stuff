window.onload = function(size) {
    let width = window.innerWidth;
    if (width < "1000") {
       let widthClass =  document.querySelectorAll('.w-50');
           console.log(widthClass[0]);
        for (const element of widthClass) {
            element.classList.remove('w-50')
        }

    }
};

