async function addTodo(dom){
    const contents = document.querySelector('input[name="task"]').value;
    if(contents.length <=0){ // contents 입력 안하고 submit 할 시
        return alert('please type contents of your todo!');
    }
    let importance=document.querySelector('input[name="importance"]:checked');
    if(importance===null){ // importance check 안할시 not 으로 자동 설정 
        importance='not';
    }else{
        importance=importance.id;
    }
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
            const post = data.post;
            const ul = container.querySelector('.todo-list'); 
            const li = document.createElement('li'); 
            li.classList.add('todo');
            li.innerHTML=
            `<input type="checkbox" id="doneToggle" onClick="DoneCheck(this)">
            <input type="hidden" name="postId" id="postId" value="${post._id}"">
            ${post.contents}
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
            document.querySelector('input[name="task"]').value='';
        }
    }catch(err){
        console.log(err);
    }
}

// localstroage에서 check 된 id 목록을 가져와서, 해당 id의 dom에 done class를 추가해주어 checked 되었다는 UI를 구현해준다. 
function initalCheck(){ 
    const list = JSON.parse(localStorage.getItem('todoList')); // local stroage 에서 가져오기 
    list.forEach(get=>{ // done class 추가
        const post=document.querySelector(`input[value="${get.id}"]`);
        const li = post.parentNode;
        const checkbox = li.querySelector('#doneToggle');
        checkbox.checked=true;
        li.classList.add('done');
        
    })
}

let todoList=[];

// checkbox onclick 함수
async function DoneCheck(dom){
    const li = dom.parentNode;
    const checked =dom.checked;
    const id = li.querySelector('input[name="postId"]').value;
    const csrf=document.querySelector('[name=_csrf]').value;
    if(checked===true){ // 체크 되었다면 
        li.classList.add('done'); // done 클래스 추가 
        let ListStoraged = JSON.parse(localStorage.getItem('todoList')); // liststroage에서 기존 todoList 가져와서 업데이트 
        if(ListStoraged!==null){
            todoList = ListStoraged;
        }
        todoList.push({id:id});
        localStorage.setItem('todoList',JSON.stringify(todoList));    // 업데이트한 목록을 다시 저장  
    }
    else{ // uncheck 되었다면 
        li.classList.remove('done'); //done class 삭제 
        let ListStoraged =JSON.parse(localStorage.getItem('todoList')); // listStorage에서 기존 todoList 가져와서 업데이트 
        if(ListStoraged!==null){
            todoList = ListStoraged.filter(get=>
                {
                    return get.id!==id;
                });
            localStorage.setItem('todoList', JSON.stringify(todoList)); // 업데이트한 목록을 다시 저장 
        }
    }
    method='PUT';
    sendingData ={done:checked, id:id };
    const result = await fetch('/done-check',{  // 데이터베이스에 변경 사항 저장 
        method:method,
        body:JSON.stringify(sendingData),
        headers:{
            'Accept': 'application/json',
            'csrf-token':csrf,
            'Content-Type':'application/json;charset=utf-8'
        }
    })
    const data = await result.json();
    console.log(data);
}

initalCheck()