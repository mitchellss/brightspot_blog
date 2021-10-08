import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.publishArticle = this.publishArticle.bind(this);
    }

    publishArticle() {
        if (this.title.value && this.subtitle.value && this.content.value
            && this.imageUrl.value && this.author.value) {
                const dateNow = Date.now();
                const urlName = this.title.value.toLowerCase().replace(" ","_");
                const data = {
                    "title":this.title.value,
                    "subtitle":this.subtitle.value,
                    "datePosted": dateNow,
                    "content": this.content.value,
                    "imageUrl": this.imageUrl.value,
                    "author": this.author.value,
                    "urlName": urlName
                };
                axios.post("http://localhost:8080/api/blog_post", data).then(() => {
                    this.props.history.push(`/article/${urlName}`);
                });
            }
    }


    render() {
        return (
            <div className="create-article-container">
                <div className="create-article-title-container">
                    <div className="create-article-title-label">Title:</div>
                    <input type="text" ref={el => this.title = el}/>
                </div>
                <div className="create-article-subtitle-container">
                    <div className="create-article-subtitle-label">Subtitle:</div>
                    <input type="text" ref={el => this.subtitle = el}/>
                </div>
                <div className="create-article-author-container">
                    <div className="create-article-author-label">Author:</div>
                    <input type="text" ref={el => this.author = el}/>
                </div>
                <div className="create-article-imgurl-container">
                    <div className="create-article-imgurl-label">Image Url:</div>
                    <input type="text" ref={el => this.imageUrl = el}/>
                </div>
                <div className="create-article-content-container">
                    <div className="create-article-content-label">Content:</div>
                    <textarea className="create-article-content-input" ref={el => this.content = el}/>
                </div>
                <div className="create-article-button-container">
                    <div className="create-article-publish-button custom-button disable-select" onClick={this.publishArticle}>Publish</div>
                    <Link className="custom-link" to="/">
                        <div className="create-article-cancel-button custom-button disable-select">Cancel</div>
                    </Link>
                </div>
            </div>
        )
    }
}