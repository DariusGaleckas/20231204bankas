import { useState } from "react";
export default function List({
  account,
  setRemove,
  setEdit,
  edit,
  setUpdate,
  addMessage,
}) {
  const [add, setAdd] = useState(false);
  const [fund, setFund] = useState(0);

  const handleFunds = (e) => {
    e.preventDefault();
    // setEdit(null)
    if (fund === 0) {
      addMessage("danger", "Neįrašyta suma");
    }

    if (add) {
      setUpdate({ ...edit, funds: edit.funds + fund });
    } else {
      setUpdate({ ...edit, funds: edit.funds - fund });
    }
  };

  return (
    <>
      <div className="list">
        <h2>Sąskaitos</h2>
        <div>
          {account !== null && account.length !== 0 ? (
            account
              .sort((a, b) => {
                if (a.surname.toLowerCase() < b.surname.toLowerCase()) {
                  return -1;
                }
                if (a.surname.toLowerCase() > b.surname.toLowerCase()) {
                  return 1;
                }
                return 0;
              })
              .map((item) => (
                <form onSubmit={handleFunds} className="item" key={item.id}>
                  <li className="names">
                    <p>
                      {item.surname + " " + item.name}
                      <strong className="strong">€{item.funds}</strong>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="but1"
                        onClick={() => {
                          //   console.log(item);
                          setRemove(item);
                        }}
                      >
                        x
                      </button>
                    </div>
                  </li>
                  <div className="flex">
                    <input type="number" name="funds" className="input" />
                    <div>
                      <button
                        type="submit"
                        className="but3"
                        onClick={(e) => {
                          setAdd((c) => (c = false));
                          setEdit(item);
                          setFund(+e.target.form[1].value);
                        }}
                      >
                        Nuimti lėšas
                      </button>
                      <button
                        type="submit"
                        className="but2"
                        onClick={(e) => {
                          setAdd((c) => (c = true));
                          setEdit(item);
                          setFund(+e.target.form[1].value);
                        }}
                      >
                        Pridėti lėšas
                      </button>
                    </div>
                  </div>
                </form>
              ))
          ) : (
            <p>Nėra sukurtų sąskaitų</p>
          )}
        </div>
      </div>
    </>
  );
}
