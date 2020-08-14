const ul = document.querySelector('.todo-list');
const clearBtn= document.querySelector('#clear');
const modal_container =document.querySelector('.modal-container'); 
const close = document.querySelector('.close');
const csrf=document.querySelector('[name=_csrf]').value;
const sortBtn = document.querySelector('#sort');
const addTodoModal=document.getElementById("add-todo-modal");
const addContainer=document.getElementById("add-modal-container");
const add_close=document.getElementById('add-close');
// ---------------- Helper 함수 --------------------------------------
window.closeModal= function (){ // modal 닫는 함수 
    modal_container.classList.remove('show-modal');
}


window.addCloseModal = function(){
    addContainer.classList.remove('show-modal');
}

// ul 삭제해주는 함수 
window.removeUl=function (){
    ul.innerHTML='';
    ul.classList.add('hidden'); // ul 안보이게 바꾸기 
    clearBtn.classList.add('removed'); // clear all button 안보이게 바꾸기 
    sortBtn.classList.add('removed'); // /sort button 안보이게 바꾸기 
}

// li 변경 함수 
window.updateli=function(li,contents,id)
{
    li.innerHTML= 
    `<input type="checkbox" id="doneToggle" class="todo__state" onClick="DoneCheck(this)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">
            <use xlink:href="#todo__line" class="todo__line"></use>
            <use xlink:href="#todo__box" class="todo__box"></use>
            <use xlink:href="#todo__check" class="todo__check"></use>
            <use xlink:href="#todo__circle" class="todo__circle"></use>
        </svg>
        <input type="hidden" name="postId" id="postId" value="${id}"">
        <span id='contents'>${contents}</span>
        <div class="dropdown">
            <button class="dropbtn">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-content">
                <a href="#" onclick="removeOne(this);return false;">delete</a>
                <a href="#" onclick="popUpModal(this);return false;" >edit</a>
            </div>
        </div>
    `
}

// Edit 후 변경된 contents를 적용해주는 함수 
window.updatedUI=function(contents, id)
{
    const AllToDos=ul.querySelectorAll('li'); // ul에서 li들을 모두 가져옴 
    AllToDos.forEach(li=>{
        if(id === li.querySelector('#postId').value){  // li 태그 중에서 변경된 항목의 id와일치하는 곳의 html을 변경해준다.
           updateli(li,contents,id);
            return;
        }
    })
}

// ----------------------- Onclick event 함수 ------------------------------
// to do 추가 함수 
window.addTodo=async function(dom){
    let contents;
    if(dom.value === 'add'){
        contents = document.querySelector('input[name="task"]').value;
    }else{
        contents = document.querySelector('input[name="modal-task"]').value;
    }
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
            const post = data.post;
            const li = document.createElement('li'); 
            if(ul.classList.contains('hidden')){ // 첫번째 todo로 등록될 경우 
                ul.classList.remove('hidden'); // 숨겨졌던 ul visible하게 바꾸기 
            }
            if(clearBtn.classList.contains('removed')){ // 첫번째 todo 로 등록될 경우
                clearBtn.classList.remove('removed'); //숨겨졌던 clear all visible하게 바꾸기 
            } 
            if(sortBtn.classList.contains('removed')){
                sortBtn.classList.remove('removed');
            }
            li.classList.add('todo');
            updateli(li,post.contents,post._id);
            ul.appendChild(li);
            document.querySelector('input[name="task"]').value='';
        }
        if(dom.value="AddModal"){
            addCloseModal();
            document.querySelector('input[name="modal-task"]').value='';
        }
    }catch(err){
        console.log(err);
    }
}

// check status 저장 -> html에서 해결해줌 
// toto is done 체크 저장 함수 
window.DoneCheck=async function(dom){
    const li = dom.parentNode; // is done 체크된 항목 
    const checked =dom.checked;
    const id = li.querySelector('input[name="postId"]').value;
    if(checked===true){ // 체크 되었다면 
        li.classList.add('done'); // done 클래스 추가 
    }
    else{ // uncheck 되었다면 
        li.classList.remove('done'); //done class 삭제 
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
}


// to do 모두 삭제 함수 
window.clearAll=async function (dom){
    const method = "DELETE"
   try{
    const result = await fetch('/delete-all', 
    {
        method:method,
        headers:{
            'Accept': 'application/json',
            'csrf-token':csrf
        }
    });
    const  data = await result.json();
    removeUl();
    }catch(err){console.log(err)}
}

// 특정 항목 삭제 함수 
window.removeOne=async function(dom){
    const dropdown = dom.parentNode;
    const li =dropdown.parentNode.parentNode;
    const id = li.querySelector('#postId').value;
    const method = 'DELETE';
    try{
        const result =await fetch('/delete-one/'+id,
        {
            method:method,
            headers:{
                'Accept': 'application/json',
                'csrf-token':csrf
            }
        })
        const data = await result.json();
        ul.removeChild(li); // 삭제되었으니 해당 li 삭제 
        if(data.length === 0){ // 전달받은 남은 post 개수가 0이라면 ul과 button도 삭제해줘야함 
            removeUl();
        }
    }catch(err){
        console.log(err);
    }
    
}
// modal을 띄우는 함수
window.popUpModal=function(dom)
{
    const dropdown = dom.parentNode;
    const li =dropdown.parentNode.parentNode;
    const id = li.querySelector('#postId').value;
    const originContents = li.querySelector('#contents').innerText;
    const modal_contents = modal_container.querySelector('.modal-content');
    const ContentsInput= modal_contents.querySelector('#contents');
    ContentsInput.value=originContents; // 원래 contents 내용을 input value로 담아놓기
    localStorage.setItem('updateId', id); // 변경하는 항목의 id를 저장해놓기 
    modal_container.classList.add('show-modal');
}


// modal 내에서 edit submit을 누르면 실행되는 함수 
window.updatePost=async function(dom){
    const id = localStorage.getItem('updateId'); // localstroage 에 저장해놓은 id 가져오기 
    const modal_contents = modal_container.querySelector('.modal-content');
    const contents = modal_contents.querySelector('#contents').value;
    let importance =modal_contents.querySelector('input[name="importance"]:checked');
    if(importance===null){
        importance = 'not';
    }else{
        importance=importance.id;
    }
    const method="PUT";
    const sendingData={id:id, contents: contents, importance:importance};
    if(contents.length <=0){ // contents 입력 안하고 submit 할 시
        return alert('please type contents of your todo!');
    }
    if(importance===null){ // importance check 안할시 not 으로 자동 설정 
        importance='not';
    }
    try{
        const result = await fetch('/update-post',
        {
            method:method,
            headers:{
                'Accept': 'application/json',
                'csrf-token':csrf,
                'Content-Type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(sendingData)
        })
        const data = await result.json();
        updatedUI(contents,id);
        closeModal(); // modal 닫기
    }catch(err){
        console.log(err);
    }
}

window.sortByImportance=async function () // 중요도 순으로 정렬해주는 함수 
{
    const result = await fetch('/sort-post');
    const data = await result.json();
    const post = data.post;
    ul.innerHTML=''; // 일단 ul 모두 비우고, 
    post.forEach(p=>{ // 새로 받은 값으로 ul - li 채우기 
        const li = document.createElement('li');
        li.classList.add('todo');
        updateli(li,p.contents, p._id); // li 새로 생성 
        ul.appendChild(li);
    });
}

// --------- event listeners ----------------
close.addEventListener('click',closeModal);

add_close.addEventListener('click',addCloseModal);
// modal 외부를 눌렀을 때도 modal 닫기
window.addEventListener('click',(e)=>{
    if(e.target===modal_container){
        closeModal();
    }
    else if(e.target === addContainer){
        addCloseModal();
    }
})

addTodoModal.addEventListener("click", ()=>{
    addContainer.classList.add("show-modal");
});