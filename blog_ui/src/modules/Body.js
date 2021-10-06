import { Component } from "react";
import axios from "axios";
import ArticleBox from "./ArticleBox";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recent_articles: [],
            all_articles: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/blog_post/latest').then((res) => {
            this.setState({
                recent_articles: res.data
            });
        });

        axios.get('http://localhost:8080/api/blog_post/').then((res) => {
            this.setState({
                all_articles: res.data
            });
        });

    }

    renderNArticleBoxes(articles) {
        return articles.map(artc => <ArticleBox 
            title={artc.title}
            subtitle={artc.subtitle}
            imageUrl={artc.imageUrl}
            datePosted={artc.datePosted}
            urlName={artc.urlName}
        />);
    }

    render() {
        return (
            <div>
                <p className="article-intro-statement">Most Recent Posts:</p>
                <div className="container body">
                    {this.renderNArticleBoxes(this.state.recent_articles)}
                </div>
                <p className="article-intro-statement">All Posts:</p>
                <div className="container body">
                    {this.renderNArticleBoxes(this.state.all_articles)}
                </div>
            </div>
        )
    }
}