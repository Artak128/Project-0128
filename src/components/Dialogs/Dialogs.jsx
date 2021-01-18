import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog =>

        <DialogItem ava={dialog.ava} name={dialog.name} key={dialog.id} id={dialog.id} />);


    let messagesElement = state.messages.map(message =>

        <Message message={message.message} key={message.id} />
    );

    let newElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();

    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);

    }

    let newMessageBody = state.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange} 
                                  value={newMessageBody} 
                                  placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;
