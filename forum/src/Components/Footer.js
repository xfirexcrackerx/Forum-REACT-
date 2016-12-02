import React, { Component } from 'react';
import './Footer.css';
export default class Footer extends Component {
    render() {
        document.body.style.backgroundColor = "#001d48";
        return (
            <div className="footer-view">
                <img className="foot-logo" src="https://levski.bg/front_end/img/footer-logo.png"/>
                <div className="columns" >
                    <span className="title">Клубът</span>
                    <ul>
                        <li><a href="https://levski.bg/the_club">История на клуба</a></li>
                        <li><a href="https://levski.bg/history/management">Ръководство</a></li>
                        <li><a href="https://levski.bg/team">Представителен отбор</a></li>
                    </ul>
                </div>
                <div className="columns">
                    <span className="title">История</span>
                    <ul>
                        <li><a href="https://levski.bg/history/patron">Патрон</a></li>
                        <li><a href="https://levski.bg/history/gundi">Гунди</a></li>
                        <li><a href="https://levski.bg/history/treners">Треньори</a></li>
                    </ul>
                </div>
                <div className="columns">
                    <span className="title">Новини</span>
                    <ul>
                        <li><a href="https://levski.bg/news">Всички</a></li>
                        <li><a href="https://levski.bg/news/category/2">ДЮШ</a></li>
                    </ul>
                </div>
                <div className="columns">
                    <span className="title">Левски ТВ</span>
                    <ul>
                        <li><a href="https://levski.bg/videos/category/1">Клубни новини</a></li>
                        <li><a href="https://levski.bg/videos/category/4">Академия</a></li>
                        <li><a href="https://levski.bg/videos/category/3">Ексклузивно</a></li>
                        <li><a href="https://levski.bg/videos/category/25">Клипове</a></li>
                        <li><a href="https://levski.bg/videos/category/23">Сектор "Б"</a></li>
                    </ul>
                </div>
                <div className="columns">
                    <span className="title">Контакти</span>
                    <p>1517 София <br/>
                        ул. Тодорини кукли 47
                        <br/> тел. (+359 2) 847-7958
                            <br/> факс. (+359 2) 945-4227
                                <br/> e-mail: office@levski.bg
                    </p>
                </div>



            </div>
        );
    }
}
