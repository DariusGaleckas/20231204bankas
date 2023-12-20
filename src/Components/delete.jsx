export default function Delete({ remove, setRemove, setClear }) {

    if (null === remove) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modalCentered">
                <div className="modalContent">
                    <div className="modalClose">
                        <button type="button" className="btnClose" onClick={() => setRemove(null)}>x</button>
                    </div>
                    <div className="modalText">
                        <p>Ar tikrai norite ištrinti šitą sąskaitą?</p>
                    </div>
                    <div className="modalButtons">
                        <button onClick={() => setRemove(null)} type="button" className="btn2">atšaukti</button>
                        <button onClick={() => setClear(remove)} type="button" className="btn3">trinti</button>
                    </div>
                </div>
            </div>
        </div>
    )
}