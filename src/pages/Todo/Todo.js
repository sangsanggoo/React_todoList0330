/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState , useRef } from "react";
import * as S from './style'
const Todo = () => {
    const todo = {
        id : 0,
        content : '',
        clear : false
    };
    const [hiddenMenuShow, SetHiddenMenuShow] = useState(true);
    const mainSideRef = useRef();
    const buttonClick = (e) => {
        if(e === false) {
            mainSideRef.current.style.left = '-250px';
            SetHiddenMenuShow(true);
            console.log(e);
        } else {
            mainSideRef.current.style.left = '0px';
            SetHiddenMenuShow(false);
            console.log(e);
        }
    }

    const todoIndex = useRef(1);
    const[todoList,setTodoList] = useState([]);
    const[modifytodo,setModifyTodo] =useState(todo);
    const[inputs,setInputs] = useState(todo);
    const inputRef = useRef();
    const sidebuttonRef = useRef();
    const[modalOpen,setModalOpen] = useState(false);
    const inputHandler = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name] : value});
    }
    

    const addHandler = () => {
        const todo = {
            ...inputs
        }
        todo.id = todoIndex.current++;
        setTodoList([...todoList,todo]);
        inputRef.value='';
    }
    const modifyHandler = (e) => {
        setTodoList(todoList.map(todo => {
            if(todo.id === e.id) {
                todo.content = inputs.content;
            } 
            return todo;
        }))
    }
    const onRemove = (e) => {
        setTodoList(todoList.filter(todo => todo.id !== e));
    }
    const onClear = (e) => {
        setTodoList(todoList.map(todo => {
            if(todo.id === e) {
                todo.clear=true;
            } 
            return todo;
        }))
        
    }

    const onModifybutton = (e) => {
        setModalOpen(true);
        setModifyTodo(e);
  

    }
    const modifyTodoCheck = (e) => {
        setModalOpen(false);
        modifyHandler(e);
        setInputs('');

    }
    const cancelButton = () => {
        setModalOpen(false);

    }
    return (
        <>
        <div css={S.container}>
            
            <main css={S.mainContainer}>
                <header css={S.mainHeader}>
                    <h1 css={S.mainTitle}>ToDo</h1>
                        <div css={S.todoInputContainer}>
                            <input type="text" css={S.todoInput} onChange= {inputHandler} ref = {inputRef} name = "content" placeholder="Please enter todo..." />
                            <button css={S.addTodoButton} onClick={addHandler}>+</button>
                            
                        </div>
                </header>
                <header css ={S.contentHeader}>
                    <ul css={S.todoContentList}>
                        {todoList.map(todo => {
                            return(
                            <>

                                <li css= {S.todoContent}>
                                    <div css ={S.todoContentHeader}>
                                        오늘의 할일 {todo.id}번
                                    </div>

                                    {todo.clear ?
                                    <div css ={S.todoContentMainClear}>
                                        {todo.content} 완료
                                    </div> 
                                    :
                                    <div css ={S.todoContentMain}>
                                        {todo.content}
                                    </div> 
                                    }
                                    <div css ={S.todoContentFooter}>
                                        <button css={S.todoButton} onClick = {() => onClear(todo.id)}>완료</button>
                                        <button css={S.todoButton} onClick = {() => onModifybutton(todo)}>수정</button>
                                        <button css={S.todoButton} onClick = {() => onRemove(todo.id)}>삭제</button>
                                    </div>
                                </li>  
                            </>
                            )
                        })}
                        
                    </ul> 
                </header>
             
            </main>

                <div css ={S.mainSide} ref={mainSideRef}>
                    <div css = {S.mainSideMenu}>
                        Information
                    </div>
                    <div css = {S.mainSideMenu}>
                        ToDo
                    </div>
                    <button css= {S.hiddenButton} onClick ={() => buttonClick(hiddenMenuShow)} ref={sidebuttonRef} >
                          θ
                    </button>
                    
                 </div>

            
        </div>
        {modalOpen ? 
        <div css = {S.modalground}>
            <div css={S.modalcontainer}>
                <div css ={S.modalheader}>
                    {modifytodo.id}번 수정
                </div>
                <input type = "text" name = "content" onChange= {inputHandler} css = {S.modalMain}>
                    
                </input>
                <div css ={S.modalFooter}>
                    <button css = {S.modifyButton}  onClick = {() => modifyTodoCheck(modifytodo)}>수정하기</button>
                    <button css = {S.cancelButton} onClick = {() => cancelButton()}>취소하기</button>
                </div>
            </div>
         </div>
         : ''}     
    
        
        </>
    )
}
export default Todo;
