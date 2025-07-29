import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
            category: "general",
            loading:false
        };
    }

    updateNews = async () => {
      this.setState({ loading: true });
      const { category } = this.props;
      const { page } = this.state;
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f19c0a397b7c4f42ba1e859133e3140a&page=${page}&pageSize=3`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ articles: parsedData.articles, loading: false });
    }

    componentDidMount() {
      this.updateNews();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.category !== this.props.category) {
        this.setState({ page: 1 }, this.updateNews);
      }
    }

    prevclick = () => {
      this.setState(
        prevState => ({ page: prevState.page - 1 }),
        this.updateNews
      );
    }

    nextclick = () => {
      this.setState(
        prevState => ({ page: prevState.page + 1 }),
        this.updateNews
      );
    }

    
  render() {
    return (
      <div>
        <h1>Below are some News:-</h1>
        {this.state.loading && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000
          }}>
            <Spinner />
          </div>
        )}
        <div className="container">
          <div className="row">
          {this.state.articles.map((element) => (
                    <div key={element.url} className="col-md-4 mb-4">
                        <Newsitem
                            title={element.title}
                            description={element.description}
                            imageurl={element.urlToImage}
                            newsurl={element.url}
                            published={element.publishedAt}
                            author={element.author}
                        />
                    </div>
                ))}
          </div>
          <div className="btn-primary btn-dark">
            <button disabled={this.state.page<=1} type='button' onClick={this.prevclick}>Previous</button>
            <button disabled={this.state.page>=13} type="button" onClick={this.nextclick}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
