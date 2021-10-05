import { Component } from "react";
import axios from "axios";
import ArticleBox from "./ArticleBox";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article_1: ["Loading...", "Loading...", ""],
            article_2: ["Loading...", "Loading...", ""],
            article_3: ["Loading...", "Loading...", ""]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/blog_post/latest').then((res) => {
            this.setState({
                article_1: [res.data[0].title, res.data[0].subtitle, res.data[0].imageUrl],
                article_2: [res.data[1].title, res.data[1].subtitle, res.data[1].imageUrl],
                article_3: [res.data[2].title, res.data[2].subtitle, res.data[2].imageUrl]
            });
        });
    }

    render() {
        return (
            <div className="container body">
                <ArticleBox title={this.state.article_1[0]} subtitle={this.state.article_1[1]} url={this.state.article_1[2]}/>
                <ArticleBox title={this.state.article_2[0]} subtitle={this.state.article_2[1]} url={this.state.article_2[2]}/>
                <ArticleBox title={this.state.article_3[0]} subtitle={this.state.article_3[1]} url={this.state.article_3[2]}/>
            </div>
        )
    }
}