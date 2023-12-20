export default function Create({ setCreate, setInfo, info, addMessage }) {
    const add = (e) => {
      e.preventDefault();
      if(e.target.firstChild.value.length === 0) {
        addMessage("danger", "Neįvestas Vardas ir Pavardė");
        return 
      } else if (e.target.firstChild.value.split(" ")[1] === undefined ){
        addMessage("danger", "Neįvestas Vardas ir Pavardė");
        return 
      }
      console.log(e.target.firstChild.value.split(" ")[1])
      let firstName = e.target.firstChild.value.split(" ")[0];
      let lastName = e.target.firstChild.value.split(" ")[1];
      setCreate({
        name: firstName,
        surname: lastName,
        funds: 0
      });
    }
    return (
      <>
        <div className="card">
          <h2>Nauja banko sąskaita</h2>
          <label>Įveskite Vardą ir Pavardę</label>
          <form className="flex" onSubmit={add}>
            <input className="input" type="text" name="surname" placeholder="Vardas Pavardė"/>
            <button type="submit" className="button">
              SUKURTI
            </button>
          </form>
        </div>
      </>
    );
  }
  