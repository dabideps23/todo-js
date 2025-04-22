import './style.css'

const onClickAdd = () => {
  //入力内容を取得
  const inputText = document.getElementById("add-text").value;
  //入力エリアをクリア
  document.getElementById("add-text").value = "";

  createIncompleteTodo(inputText);
}

const createIncompleteTodo = (todo) => {

  //未完了のTODOへ追加
  //追加する要素を作成
  const li = document.createElement("LI");
  const div = document.createElement("DIV");
  div.className = "list-row";
  const p = document.createElement("P");
  p.className = "todo-item";
  p.innerText = todo;

  //完了ボタン
  const completeButton = document.createElement("BUTTON");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了対象（完了ボタンから最も近いli要素）を取得
    const moveTarget = deleteButton.closest("li");
    //未完了TODOリストから削除
    document.getElementById("incomplete-list").removeChild(moveTarget);

    //完了・削除ボタンを削除
    completeButton.nextElementSibling.remove(); //削除ボタン削除
    completeButton.remove(); //完了ボタン削除
    //戻すボタンを作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //完了エリアから削除
      document.getElementById("complete-list").removeChild(moveTarget);
      
      //未完了エリアに追加
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
    });

    moveTarget.firstElementChild.appendChild(backButton);
    //完了TODOリストへ追加
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("BUTTON");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除対象（削除ボタンから最も近いli要素）を取得
    const deleteTarget = deleteButton.closest("li");
    //未完了TODOリストから削除
    document.getElementById("incomplete-list").removeChild(deleteTarget);

  });
  //List要素の組み立て
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //画面上のDOMに追加
  document.getElementById("incomplete-list").appendChild(li);
}

//追加ボタンへのイベントリスナーの追加
document.getElementById("add-button").addEventListener("click",onClickAdd);

