import React from 'react';
import './App.css';
import { Icon, InlineIcon } from '@iconify/react';
import bookmark from '@iconify-icons/icons8/bookmark';
import image from './assest/landing_header.jpg';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

class Landing extends React.Component<any> {
  render() {
    return (
      <div>
        <div className="text-image-container">
          <img src={image} alt="Snow" style={{width: '100%', height: '17em'}} />
          <div className="centered">Washington state small businesses, start your funding search here.</div>
        </div>

        <div className="two-column">
        <a href="https://icons8.com/icon/87011/book-shelf">
          <img className="icon" alt="bookshelf" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADc0lEQVR4nO2cy2pUMRyHv17sSooXvBa1m6LiBRmoqK1Wl75DRXDlBV/EN1A39g18ABdaSxURRREtXqgXFBEFtQUXWsfFVGnpTP4zc5KTjPl9ELpIcpKTb5L/5DRnQAghhBBCCCGEEEKI1ukDzgN3gHmg2mKaB6YWU7v1p4FzwKrA95ocW4D7tD5oodI9YHPQO06IPtIa/KUSspgJF4g/2I3S2YD3nQx3iT/QjdJ0wPv2QpeHa8wBqz1cJwRzQH/sTrjwIaDq4Roh8XGPweiO3YHc6S2hDesTaM2govWTRjMgMhIQmTKWoJTZAFSAtcBH4CHwLWqP2sD6Lp5S/W3AOHAZeFqn7A/gEh32wUxdwBlgAphtouzfdJ0OkpC6gHbTxSbaToL/VcDzJtoujL4FNWYIGAzdiAS4ORa6AQlwMxa6AQlwczx0A2U8DU3tWdAbYHIxzQI3jPLbgXcttlEqqX8LmgGuAKeAHXXqvzbqjzfRh6ikLmCXUX/CqH+1iT60TQ4xYNTIv2XkBw3EOQgYMfItAUPAgKe+rEAC4BXw1igTbD+Qg4AhagfHXEwa+cGWoRwEABwx8q1lKNh+IBcBRePATmCrp74sQwJqvADeG2WOeurLMnIRUME+PBYlDuQioBcYNspE2Q/kIgCKb8h2A5s89eUfOQmw4sAM8MGR30WAOJCTgMNAj1Fmysj3vgzlJKAf2GeUKX0/kJMAsOPATSN/D7DRU1+A/ARYceAZ8MmR34UtsSVyE2AF0Sol7wdyEzBA/f+KLaXU/UBuAqD4fmA/sN5TX7IUYMWBJ8BnR77XOCABK6kCt40y3pahHAXsBdYZZaL9f6AdUj8VUS+dNK55wKi/QO2ljsLkOAPAXoYeA18c+d14igO5CrAG7zclPRfKVcBBaj8y4iLqeaFW6MQYUAUOGdetGPV/AWua6J+TXGcA2MvQI+CrI78H+7SFSc4CrEC8QAlxIGcBo9hH3ztiP9CpMaBK7byPi2Gj/k8K/hxOzjMA7DjwAPjuyO/FDuZOchdQLw4MAqeBa8BL7E94pUgHOuZt8ECMUBvwMeDE4t9WX00t9Gi6mXfEmlmHRWOcY5z7EhQdCYiMBERGAiIjAZGRgMhIQGRS+K2I1Al6f5oBkZGAyEhAZCQgMhIQGQmIjAQIIYQQQgghhBBCCFESfwDq60O+3r666gAAAABJRU5ErkJggg=="/>
        </a>
          <div className="right-column">
            <h3>Financial Literacy Library</h3>
            <p>This library contains resources you can use to familiarize yourself with terminology while applying for funding.</p>
            <Link to="/library">
                  <div className="redirect_button">
                      <h1 className="button_text">Go To Library</h1>
                  </div>
              </Link>
          </div>
        </div>

        <div className="two-column">
          <SearchIcon fontSize="large"/>
          <div className="right-column">
            <h3>Search Tool</h3>
            <p>Here you can find what funding and assistance best match your business.</p>
            <Link to="/search">
                  <div className="redirect_button">
                      <h1 className="button_text">Go To the search tool</h1>
                  </div>
              </Link>
          </div>
        </div>

        <div className="two-column">
        <img className="icon" alt="piggy bank" src="https://img.icons8.com/material-outlined/96/000000/money-box--v1.png"/>
          <div className="right-column">
            <h3>Get Funding</h3>
            <p>Start applying on your own or reach out to an assistance to guide you thorugh applying. </p>
            <Link to="/form">
                  <div className="redirect_button">
                      <h1 className="button_text">Go To Library</h1>
                  </div>
              </Link>
          </div>
        </div>

      </div>
    );
  }
}


export default Landing;