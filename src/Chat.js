import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, SideMenu, FieldSet, FormGroup, FormInputAddonBtn, ReferralBanner } from './components'
import { messaging } from './modules'

class Chat extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    messaging.createMessage({ from: 'admin test', message: e.target.message.value })
  }
  renderMessages = () => {
    return this.props.messages.map(message => (
      <div>
        <p>{message.from} {message.createAt}</p>
        <p>{message.text}</p>
      </div>
    ))
  }
  render() {
    return [
      <SideMenu />,
      <main className="l-main">
        <Header
          size="small"
          position="fixed"
          container={false}
          navType="chat"
        />
        <ReferralBanner />
        <section className="c-chat">
          <div className="list c-chat__list" id="displayed-messages">
            {this.renderMessages()}
          </div>
          <div className="c-chat__buttons">
            <form onSubmit={this.handleSubmit}>
              <FieldSet>
                <FormGroup
                  formInput={FormInputAddonBtn}
                  name="message"
                  labelText="Message text"
                  labelHidden
                />
              </FieldSet>
            </form>
            <Button btnText='Location' />
          </div>
        </section>
      </main>
    ]
  }
}

const mapStateToProps = (store) => ({
  messages: store.app.messages
})

export default connect(mapStateToProps)(Chat);
