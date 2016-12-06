import React from 'react';
import '../../Css/home/homeView.css';
import PostView from '../post/allPostsView';

export default function HomeView (){
    return <div className="home-view">
        <div id="body" className="width">
            <section id="content" className="first-column-text">
                <PostView/>
            </section>
        </div>
    </div>
}