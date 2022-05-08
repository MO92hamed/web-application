import React from 'react';
import { Article } from '../../components';
import{blog01, blog02, blog03, blog04, blog05} from './imports';
import './blog.css';
const Blog = () => {
    return (
        <div className='webapp__blog section__padding'id='blog'>
            <div className='webapp__blog-heading'>
                <h1 className='gradient__text'>A lot is happening,<br /> We are blogging about it.</h1>
            </div>
            <div className='webapp__blog-container'>
                <div className='webapp__blog-container_groupA'>
                    <Article imgUrl={blog01} date="dec 26,2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className='webapp__blog-container_groupB'>
                    <Article imgUrl={blog02} date="dec 26,2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog03} date="dec 26,2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog04} date="dec 26,2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog05} date="dec 26,2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />

                </div>
            </div>
        </div>
    )
}

export default Blog
