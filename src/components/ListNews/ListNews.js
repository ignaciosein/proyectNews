import React, { Component } from "react";
import "./ListNews.css";
import Card from "../Card/Card";
import axios from "axios";

export default class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsApi: [],
    };
  }
  
  componentDidMount() {
    let arrayVacio = [];

    

    alert("se carga listnews")
  
    axios
      .get(
        `https://newsapi.org/v2/everything?q=keyword&apiKey=d61243b5ebee40f18b80f711522726ba`
      )
      .then((res) => {
        const newsApi = res.data.articles.slice(0, 5);

       

        /* arrayVacio.push(this.props.datos) */

        for (let index = 0; index < newsApi.length; index++) {
          console.log(newsApi[index].title);

          arrayVacio.push({
            title: newsApi[index].title,
            author: newsApi[index].author,
            content: newsApi[index].content,
            cover: newsApi[index].urlToImage,
          });
          
        }
        
  

       

        this.setState({ newsApi: arrayVacio });

        console.log(this.state.newsApi);

     
   
      });
  }

  renderNews = () =>
    this.state.newsApi.map((a, i) => (
      <Card
        titulos={a.title}
        autor={a.author}
        contenido={a.content}
        cover={a.cover}
        key={i}
        remove={() => this.removeOneNews(i)}
      />
    ));

  removeAllNews = () => this.setState({ newsApi: [] });

  removeOneNews = (i) => {
    let filteredArray = this.state.newsApi.filter((item, j) => i !== j);
    /*      alert("la noticia se ha borrado") */
    this.setState({ newsApi: filteredArray });
  };


/*   meterDatos = (mail) => this.setState({newsApi: {...this.state.newsApi, mail}}); */
 

  render() {

   
    console.log(this.props.titulo)
   /*  {this.meterDatos((this.props.titulo))} */
   

    return (
      
      <article>
        <h2>Noticias</h2>
        <section>
        <p>Titulo: {this.props.titulo.title} €</p>
        <p>Autor: {this.props.titulo.author} </p>
        <p>{this.props.titulo.content} </p>
        <button onClick={this.removeOneNews}>Borrar</button>
      </section>

        <button onClick={this.removeAllNews}>Borrar Todas las noticias</button>

        
        <div className="container">{this.renderNews()}</div>
      </article>
    );
  }
}
