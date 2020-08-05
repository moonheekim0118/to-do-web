

async function addTodo(dom){
    const contents = document.querySelector('input[name="task"]').value;
    const importance = document.querySelector('input[name="importance"]:checked').id;
    const sendingData = {contents: contents, importance: importance};
    const csrf=dom.parentNode.querySelector('[name=_csrf]').value;
    const method ="POST"; // post request 보낸다. 
    try{
        const result=await fetch('/add-todo',
        {
            method:method,
            body:JSON.stringify(sendingData),
            headers:{
                'Accept': 'application/json',
                'csrf-token':csrf,
                'Content-Type':'application/json;charset=utf-8'
            }
        });
        const data= await result.json(); 
        if(data.message === 'succeed'){ // dom 에다가 추가 
            const container= document.querySelector('.todo-container')
            const ul = container.querySelector('.todo-list'); 
            const li = document.createElement('li'); 
            li.classList.add('todo');
            li.innerHTML=
            `<input type="checkbox" name="" id="">
            ${contents}
            <div class="dropdown">
                <button class="dropbtn">
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="#">delete</a>
                    <a href="#">edit</a>
                  </div>
            </div>`
            ul.appendChild(li);

        }
    }catch(err){
        console.log(err);
    }
}

// json으로 전송해준 후 db에 저장 후 error 안나면
// parent dom 따라 올라가서 ul 돔까지 내려간후.. 새로운 li로 추가..
