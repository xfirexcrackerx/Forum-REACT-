import React, { Component } from 'react';
import PostComponent from './postComponent';
import '../../Css/post/allPostsView.css';

export default class postView extends Component {
    render() {
        let posts = [
        {
            title: 'ПРАВИЛА НА ФОРУМА',
            text: 'Пишейки в този форум,вие се съгласявате с правилата в него',
            author: 'ivo',
            answers: 1,
            views: 1046,
            id:10
        },
        {
            title: 'ВЪТРЕШНО ПЪРВЕНСТВО, КУПА',
            text: 'Представянето на ЛЕВСКИ в Първенството и Турнира за Купата на България',
            author: 'vasko',
            answers: 2,
            views: 5000,
            id:11
        },
        {
            title: 'ЕВРОПЕЙСКИ ТУРНИРИ',
            text: 'представянето на ЛЕВСКИ в Европейските турнири',
            author: 'krisi',
            answers: 35,
            views: 9460,
            id:12
        },
        {
            title: 'тръст "СИНЯ БЪЛГАРИЯ"',
            text: 'всичко свързано с тръста',
            author: 'vasko',
            answers: 5,
            views: 5060,
            id:13
        },
        {
            title: 'ДРУГИ',
            text: 'Всичко около ЛЕВСКИ, феновете и нещата свързани с тях.',
            author: 'krisi',
            answers: 83,
            views: 6990,
            id:14
        },
        {
           title: 'ПРЕДСТАВИТЕЛЕН ОТБОР',
           text: 'всичко свързано с тръста',
           author: 'vasko',
           answers: 24,
           views: 1500,
           id:15
        }
        ];
        for(let post in posts){
            if(posts[post].text.length > 100){
                posts[post].text = posts[post].text.slice(0, 90) + "..."; 
            }
        }
        let nextNum = 0;
            return (                
            <div className="post-view">
                <div className="row rowHeader">
                    <div className="col-md-9">
                        Posts                       
                    </div>
                    <div className="col-md-1">
                        Answers
                    </div>
                    <div className="col-md-1">
                        Views
                    </div>
                    <div className="col-md-1">
                        Author
                    </div>
                </div>  
                {posts.map(function(post){
                    nextNum++;
                    return (<PostComponent
                        postImage={nextNum}
                        key={post.id}
                        title={post.title}
                        text={post.text}
                        author={post.author}
                        answers={post.answers}
                        views={post.views}
                    />)
                })}
            </div>

        )        
    }

}
