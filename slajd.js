let selected = 1;

const images = ['./s1.jpg', './s2.jpg', './s3.jpg', './s4.jpg'];
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

function checkState(){
    const element = document.getElementById(selected);
    element.classList.remove("border-2");
    element.classList.add("border-[3px]");
}

checkState()

function updateState(id){
    const element = document.getElementById(id);
    const elementbefore = document.getElementById(selected);
    elementbefore.classList.remove("border-[3px]");
    elementbefore.classList.add("border-2");
    element.classList.remove("border-2");
    element.classList.add("border-[3px]");
    updateImage(id);
}

function rightArrow(){
    if(selected == 4){
        id = 1
    }
    else{
    id = selected + 1;
    }
    updateState(id);
}

function leftArrow(){
    if(selected == 1){
        id = 4
    }
    else{
    id = selected - 1;
    }
    updateState(id);
}

function updateImage(id){
    const path = `./s${id}.jpg`;
    const element = document.getElementById('imagecontainer');
    element.style.backgroundImage = `url('${path}')`;
    selected = Number(id);
}