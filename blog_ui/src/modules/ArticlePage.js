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


    render() {
        return (
            <div>{this.state.title}</div>
        );
    }
}