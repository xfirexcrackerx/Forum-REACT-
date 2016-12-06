import React, { Component } from 'react';
import PostComponent from './postComponent';
import '../../Css/post/allPostsView.css';

export default class postView extends Component {
    render() {    
        let posts = [
        {
            title: 'ВЪТРЕШНО ПЪРВЕНСТВО, КУПА',
            text: 'Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.',
            author: 'vasko',
            answers: 2,
            views: 0,
            id:10
        },
        {
            title: 'ЕВРОПЕЙСКИ ТУРНИРИ',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            author: 'krisi',
            answers: 1,
            views: 0,
            id:20
        }];
        
        for(let post in posts){
            if(posts[post].text.length > 100){
                posts[post].text = posts[post].text.slice(0, 90) + "..."; 
            }
        }
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
                {posts.map(function (post) {  
                    return <PostComponent
                    key={post.id}
                    title={post.title}
                    text={post.text}
                    author={post.author}
                    answers={post.answers}
                    views={post.views}
                    />
                })}
            </div>
        )        
    }
}
