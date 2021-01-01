import React, { Component } from 'react';
import './icomoon.css';

export default class SocialButtons extends Component {
    render() {
        return(
            <div>
                <div className="row justify-content-center">
                    <ul class="ftco-footer-social list-unstyled">
                        <li class=""><a href="https://twitter.com/" target="_blank" rel="noreferrer"><span class="icon-twitter"></span></a></li>
                        <li class=""><a href="https://discord.com/" target="_blank" rel="noreferrer"><span class="icon-discord"><img src="images/discord.png" class="discordlogo" alt="discord logo"/></span></a></li>
                        <li class=""><a href="https://t.me/" target="_blank" rel="noreferrer"><span class="icon-telegram"></span></a></li>
                        <li class=""><a href="https://medium.com/" target="_blank" rel="noreferrer"><span class="icon-medium"></span></a></li>
                    </ul>
                </div>

                <div className="row justify-content-center gibmoney">
                    <a href="https://gibmoney-nm.netlify.app" target="_blank" rel="noreferrer">gib.money</a>
                </div>
            </div>
        )
    }
}