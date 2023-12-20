import "./App.scss";
import Create from "./Components/create";
import List from "./Components/list";
import { useState, useEffect } from "react";
import { read, store, destroy, lsUpdate } from "./Functions/ls";
import Delete from "./Components/delete";
import Messages from "./Components/messages";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [create, setCreate] = useState(null);
  const [account, setAccount] = useState(null);
  const [remove, setRemove] = useState(null);
  const [edit, setEdit] = useState(null);
  const [clear, setClear] = useState(null);
  const [update, setUpdate] = useState(null);
  const [messages, setMessages] = useState([]);

  const KEY = "account";

  useEffect(() => {
    // console.log(remove);
    // console.log(clear);
    setAccount(read(KEY));
  }, [clear, remove]);

  useEffect(() => {
    if (null === create) {
      return;
    }
    const id = store(KEY, create);
    setAccount((c) => [{ ...create, id }, ...c]);
    // getName(create.color, id);
    addMessage("success", "Sąskaita sėkmingai sukurta");
  }, [create]);

  useEffect(() => {
    if (null === clear) {
      return;
    }
    destroy(KEY, clear.id);
    setAccount((c) => c.filter((acc) => acc.id !== clear.id));
    setClear(null);
    setRemove(null);
    addMessage("danger", "Sąskaita sėkmingai ištrinta");
  }, [clear]);

  useEffect(() => {
    if (null === update) {
      return;
    }
    lsUpdate(KEY, update.id, update);
    setAccount((c) => c.map((acc) => (acc.id === update.id ? update : acc)));
    // getName(update.color, update.id);
    setUpdate(null);
    setEdit(null);
    // console.log(update);
  }, [update]);

  const addMessage = (type, text) => {
    const id = uuidv4();
    setMessages((m) => [{ id, type, text }, ...m]);
    setTimeout(() => {
      setMessages((m) => m.filter((message) => message.id !== id));
    }, 3000);
  };

  const removeMessage = (id) => {
    setMessages((m) => m.filter((message) => message.id !== id));
  };



  return (
    <>
      <Create setCreate={setCreate} account={account} addMessage={addMessage}/>
      <List
        account={account}
        setRemove={setRemove}
        setEdit={setEdit}
        setUpdate={setUpdate}
        edit={edit}
        addMessage={addMessage}
      />
      <Delete remove={remove} setRemove={setRemove} setClear={setClear} />
      <Messages messages={messages} removeMessage={removeMessage} />
    </>
  );
}
