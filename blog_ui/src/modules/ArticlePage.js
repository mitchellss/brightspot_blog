import axios from "axios";
import { Component } from "react";

export default class ArticleBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "",
            datePosted: "",
            imageUrl: "",
            content: "",
            author: ""
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/blog_post/url_name/${this.props.match.params.urlName}`).then(res => {
            this.setState({
                title: res.data.title,
                subtitle: res.data.subtitle,
                datePosted: res.data.datePosted,
                imageUrl: res.data.imageUrl,
                content: res.data.content,
                author: res.data.author 
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


    render() {
        return (
            <div className="article">
                <div className="article-title">{this.state.title}</div>
                <div className="article-subtitle">{this.state.subtitle}</div>
                <div className="article-author">{this.state.author}</div>
                <div className="article-date">{this.state.datePosted}</div>
                <img className="article-image" src={this.state.imageUrl}/>
                <div className="article-content">{this.splitText(this.state.content)}</div>
            </div>
        );
    }
}