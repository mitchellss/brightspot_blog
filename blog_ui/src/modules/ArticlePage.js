import axios from "axios";
import { Component } from "react";
import CommentSection from "./CommentSection";


export default class ArticleBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            subtitle: "",
            datePosted: "",
            imageUrl: "",
            content: "",
            author: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/blog_post/url_name/${this.props.match.params.urlName}`).then(res => {
            this.setState({
                id: res.data.id,
                title: res.data.title,
                subtitle: res.data.subtitle,
                datePosted: res.data.datePosted,
                imageUrl: res.data.imageUrl,
                content: res.data.content,
                author: res.data.author,
                loading: false
            });
        }).catch(err => {
            console.log(err.data);
            console.log(err.status);
            console.log(err.headers);
        });
    }

    splitText(text) {
        return text.split("\n").map(str => <p>{str}</p>)
    }

    translateDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    render() {
        if (this.state.loading) {
            return(<div>loading...</div>)
        } else {
            return (
                <div className="article">
                    <div className="article-title">{this.state.title}</div>
                    <div className="article-subtitle">{this.state.subtitle}</div>
                    <div className="article-author">{this.state.author}</div>
                    <div className="article-date">{this.translateDate(this.state.datePosted)}</div>
                    <img className="article-image" src={this.state.imageUrl}/>
                    <div className="article-content">{this.splitText(this.state.content)}</div>
                    <CommentSection articleId={this.state.id}/>
                </div>
            );
        }
    }
}