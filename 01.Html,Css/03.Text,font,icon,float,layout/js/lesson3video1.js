const video2 = document.getElementById("video2");

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

window.addEventListener("click", function(e) {;
    console.log(`Video 2: left - ${getOffset(video2).left};
         top - ${getOffset(video2).top};
    `)
});

window.addEventListener("click", function(e) {
    console.log(`x: ${e.clientX}; 
y: ${e.clientY};`);
});