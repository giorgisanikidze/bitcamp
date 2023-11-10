import users from './data.json' assert{type: "json"}


const main_class = document.querySelector(".main");
const filter = document.querySelector(".filter");
let filt_list;
let skills;
let del;



function main(){
    createBody();
    filterList();
    clear_func();
    filt_list = document.querySelector(".filter-list");
    skills = document.querySelectorAll(".skill");
    addFilter();
   

    
}

function filter_check() {
    let fil_list = document.querySelectorAll(".filter-skill");
    if(fil_list.length == 0){
        filter.style.display = "none";
    }else{
        filter.style.display = "flex";
    }
}


function remove_func(){
    let f_skills = document.querySelectorAll(".filter-skill");
    let arr = [];
    let arr3 = []
    f_skills.forEach((e) => {
        arr.push(e.classList[1]);
    })

    let ls = document.querySelectorAll(".list");
    ls.forEach((elmnt) => {  
        if(elmnt.classList.length == 1){
            arr3.push(elmnt.id);

        }
    })

    if(arr.length== 0){
        ls.forEach((elmnt) => {
            if(window.screen.width >= 1440){
                elmnt.style.display = "flex";

            }else{
                elmnt.style.display = "block";
            }
            elmnt.classList.add("active");
        })
        
    }else{


        users.forEach((e) => {

        if(e.id in arr3){
            let arr2 = [];
            arr2.push(e.role, e.level);
            e.tools.forEach((el) => {
                arr2.push(el);

            e.languages.forEach((elem) => {
                arr2.push(elem);
            })
        })

        if(arrayCheck(arr2, arr)){
            ls.forEach((elmnt) => {
                if(elmnt.id == e.id){
                    if(window.screen.width >= 1440){
                        elmnt.style.display = "flex"
                    }else{
                        elmnt.style.display = "block"
                    }
                    elmnt.classList.add("active");
                }
            })
            
        }

        }
        })

    }

    



}




function filter_func(){
    let f_skills = document.querySelectorAll(".filter-skill");
    let arr = [];
    f_skills.forEach((e) => {
        arr.push(e.classList[1]);
    })
    users.forEach((e) => {
        let arr2 = [];
        arr2.push(e.role, e.level);
        e.tools.forEach((el) => {
            arr2.push(el);
        })

        e.languages.forEach((elem) => {
            arr2.push(elem);
        })

        if(arrayCheck(arr2, arr) === false){
            let ls = document.querySelectorAll(".list");
            ls.forEach((elmnt) => {
                if(elmnt.id == e.id){
                    elmnt.classList.remove("active");
                    elmnt.style.display = "none";
                }

            })
            


        }




    })

}

function arrayCheck(f_array, s_array){
    return s_array.every(item => f_array.includes(item));
}


function removeFilter(){
    del.forEach((e) => {
        e.addEventListener("click", () => {
            e.parentNode.remove();
            remove_func();
            filter_check();
        })
    })
    
}



function addFilter() {
    skills.forEach((e) => {
        e.addEventListener("click", () => {
            const filter_skill = document.querySelectorAll(".filter-skill");
            if(Object.values(filter_skill).length == 0){
                let filt = document.createElement("div");
                filt.className = `filter-skill ${e.innerText}`;
                filt_list.append(filt);

                let txt = document.createElement("h5");
                txt.innerText = e.innerText;
                filt.append(txt);

                let remove = document.createElement("img");
                remove.src = "./images/icon-remove.svg";
                remove.className = "remove";
                filt.append(remove);

                filter_func();
                filter_check();


                del = document.querySelectorAll(".remove");
                removeFilter();



            }else{
                let counter = 0;
                filter_skill.forEach((element) =>{
                    if(element.classList.contains(e.innerText)){
                        counter ++; 
                    }
                })
                if(counter == 0){
                    let filt = document.createElement("div");
                    filt.className = `filter-skill ${e.innerText}`;
                    filt_list.append(filt);

                    let txt = document.createElement("h5");
                    txt.innerText = e.innerText;
                    filt.append(txt);

                    let remove = document.createElement("img");
                    remove.src = "./images/icon-remove.svg";
                    remove.className = "remove";
                    filt.append(remove);
                    
                    filter_func();

                    del = document.querySelectorAll(".remove");
                    removeFilter();

                }
            } 
        })
    })
}


function filterList(){
    let filter_list = document.createElement("div");
    filter_list.className = "filter-list";
    filter.append(filter_list);
}

function clear_func() {
    let clear = document.createElement("div");
    clear.className = "clear";
    clear.innerText = "clear";
    filter.append(clear);


    clear.addEventListener("click", () => {
        let ls = document.querySelectorAll(".list");
        ls.forEach((e) => {
            if(window.screen.width >= 1440){
                e.style.display = "flex";
            }
            else{
                e.style.display = "block";
            }
            if(e.classList.length == 1){
                e.classList.add("active");
            }
        })
        let f_list = document.querySelectorAll(".filter-skill");
        f_list.forEach((e) => {
            e.remove();
            
        })
        filter_check();
    })
}




function createBody(){
    users.forEach((element) => {
        let list_element = document.createElement("div");
        list_element.className = "list active";
        list_element.id = element.id;
        main_class.append(list_element);

        let left = document.createElement("div");
        left.className = "left";
        list_element.append(left);

        let logo = document.createElement("div");
        logo.className = "logo";
        left.append(logo);

        let logo_img = document.createElement("img");
        logo_img.src = element.logo;
        logo.append(logo_img);

        let text = document.createElement("div");
        text.className = "text";
        left.append(text);

        let top = document.createElement("div");
        top.className = "top";
        text.append(top);

        let h4 = document.createElement("h4");
        h4.innerText = element.company;
        top.append(h4);

        let middle = document.createElement("div");
        middle.className = "middle";
        text.append(middle);  
        
        let h2 = document.createElement("h2");
        h2.innerText = element.position;
        middle.append(h2);

        let bottom = document.createElement("div");
        bottom.className = "bottom";
        text.append(bottom);

        let posted = document.createElement("h3");
        posted.innerText = element.postedAt;
        bottom.append(posted);
        let contract = document.createElement("h3");
        contract.innerText = element.contract;
        bottom.append(contract);
        let location = document.createElement("h3");
        location.innerText = element.location;
        bottom.append(location);

        let right = document.createElement("div");
        right.className = "right";
        list_element.append(right);

        let role = document.createElement("span");
        role.className = "skill";
        role.innerText = element.role;
        right.append(role);

        let level = document.createElement("span");
        level.className = "skill";
        level.innerText = element.level;
        right.append(level);

        element.tools.forEach((e) => {
            let tool = document.createElement("span");
            tool.className = "skill";
            tool.innerText = e;
            right.append(tool);

        })
        element.languages.forEach((e) => {
            let tool = document.createElement("span");
            tool.className = "skill";
            tool.innerText = e;
            right.append(tool);

        })

        if(element.new){
            let New = document.createElement('span');
            New.className = "new";
            New.innerText = "NEW!"
            top.append(New);
        }
        if(element.featured){
            let feature = document.createElement('span');
            feature.className = "featured";
            feature.innerText = "FEATURED!"
            top.append(feature);
        }




    })
}


main()




