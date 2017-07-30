import style from './style';
import Button from '../button';


const Subscribe = () => (
  <div className={style.subscribeContainer}>
    <form action="//woodsproduce.us10.list-manage.com/subscribe/post?u=f598d34a2042b816fb9943bab&amp;id=a84442482e" method="post" name="mc-embedded-subscribe-form" class="validate" target="noopener" novalidate>
      <div className={style.inputContainer}>
        <input className={style.emailInput} type="email" value="" name="EMAIL" placeholder="email address" required />
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_f598d34a2042b816fb9943bab_a84442482e" tabindex="-1" value="" />
        </div>
        <Button text="Subscribe" type="submit" />
      </div>
    </form>
  </div>
)

export default Subscribe


// Keeping this just in case I really don't like what's going on with the embed form

// import { h, Component } from 'preact';
// import cx from 'classnames';
// import style from './style';
// import ReactModal from 'react-modal';
//
// export default class Subscribe extends Component {
// 	// This handles opening and closing the hamburger menu on mobile
// 	// Also controls whether a user has scrolled or not on the page
// 	state = {
//     email: ''
//   };
//
// 	handleClick() {
//     let payload = {
//       email_address: this.state.email,
//       status_if_new: 'pending'
//     }
//
//     // XLMHttpRequest here
//     fetch('https://mywebsite.com/endpoint/', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization', 'Basic ' + base64.encode(username + ":" + password)
//       },
//       body: JSON.stringify({
//         firstParam: 'yourValue',
//         secondParam: 'yourOtherValue',
//       })
//     })
//
//     // Reset the form
//     document.getElementById('emailSubscribe').reset()
//     this.setState({})
//   }
//
// 	render({}, {}) {
//
//     // Use our handy dandy check box!
//
// 		return (
//       <form id="emailSubscribe" name="emailSubscribe">
//         <input onChange={(e, newValue) => this.setState({email: newValue})} className={style.textInput} />
//         <button onClick={this.handleClick}>Subscribe</button>
//       </form>
// 		);
// 	}
// }
