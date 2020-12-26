import React from 'react';
import s from './Dialogs.module.css'
import DialogItems from './DialogItems/DialogItems'
import Message from './Message/Message'
import MessageReduxForm from './AddMessageDialogs/AddMessageForm'

const Dialogs = (props) => {

    let dialogElement = props.messagesPage.dialogs.map( d => <DialogItems name={d.name} id={d.id}/>);

    let messageElement = props.messagesPage.messages.map(m => <Message message = {m.name}/>);

    let addElement = (values) => {
        props.addMessage(values.newMessage);
    };

  return(
          <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                  {dialogElement}
              </div>
              <div className={s.messages}>
                  {messageElement}
                  <MessageReduxForm onSubmit={addElement}/>
              </div>
          </div>
  )
};

export default Dialogs;