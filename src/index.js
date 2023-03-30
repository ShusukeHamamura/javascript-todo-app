import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;
  p.className = "todo-title";

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの要素を「完了したTODO」リストに移動
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    const addTarget = completeButton.parentNode.parentNode;

    //完了・削除ボタン削除
    const buttons = addTarget.getElementsByTagName("button");
    [...buttons].forEach((button) => {
      button.remove();
    });

    //戻すボタン
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    addTarget.getElementsByTagName("div")[0].appendChild(returnButton);
    returnButton.addEventListener("click", () => {
      //押された戻すボタンの要素を削除
      const returnTarget = returnButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(returnTarget);

      //押された戻すボタンの要素を「未完了のTODO」リストへ移動
      returnTarget.getElementsByTagName("button")[0].remove();
      returnTarget.getElementsByTagName("div")[0].appendChild(completeButton);
      returnTarget.getElementsByTagName("div")[0].appendChild(deleteButton);

      document.getElementById("incomplete-list").appendChild(returnTarget);
    });

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの要素を削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
