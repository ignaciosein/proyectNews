import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    newsApi: []
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=d61243b5ebee40f18b80f711522726ba`)
      .then(res => {

       
        const newsApi = res.data.articles;

      console.log(newsApi);

      this.setState({ newsApi });

      
      
/* 
      { this.state.newsApi.map(person => <li>{person.name}</li>)}



         */
      })
  }

  render() {
    return (
      <div>
   { this.state.newsApi.slice(0, 5).map(news => (
     <div>
       <h3>{news.title}</h3>
       <p>{news.description}</p>
       <h6>Author : {news.author}</h6>
       <p>{news.content}</p>
   </div>)
   
   
   )}
  
  </div>
    )
  
    }
}