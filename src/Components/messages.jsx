export default function Messages({ messages, removeMessage }) {

    if (messages.length === 0) {
        return null;
    }

    return (

        <div className="modal1">
            <div className="modalCentered1">
                <div className="modalContent1">
            {
                messages.map(message => (
                    <div key={message.id} className={message.type} role="alert">
                        <button type="button" onClick={_ => removeMessage(message.id)} className="btnClose">x</button>
                        {message.text}
                    </div>
                ))
            }
            </div>
            </div>
        </div>



    );

}