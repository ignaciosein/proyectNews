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
    let recoveredData = localStorage.getItem("noticias");
 

    if (this.props.titulo) {
   
      let newsUser = [
        {
          title: this.props.titulo.title,
          author: this.props.titulo.author,
          content: this.props.titulo.content,
          cover: this.props.titulo.cover,
        },
      ];
 
      if (recoveredData === null) {
         localStorage.setItem("noticias", JSON.stringify(newsUser));

        let newsUser44 = {
          title: this.props.titulo.title,
          author: this.props.titulo.author,
          content: this.props.titulo.content,
          cover: this.props.titulo.cover,
        };

        arrayVacio.push(newsUser44);
  
      } else if (recoveredData !== null) {
        let data = JSON.parse(recoveredData);
        let newsUser44 = {
          title: this.props.titulo.title,
          author: this.props.titulo.author,
          content: this.props.titulo.content,
          cover: this.props.titulo.cover,
        };
        data.push(newsUser44);
         localStorage.setItem("noticias", JSON.stringify(data));

        for (let index = 0; index < data.length; index++) {
          let meterArray = data[index];
          arrayVacio.push(meterArray);
        }
      }
    } else {    
      let datosLocalStorage = JSON.parse(localStorage.getItem("noticias"));
      if (datosLocalStorage !== null) {
        for (let index = 0; index < datosLocalStorage.length; index++) {
          let dataLocalStorage = datosLocalStorage[index];
               arrayVacio.push(dataLocalStorage);
        }
      }
    }

    axios
      .get(
        `https://newsapi.org/v2/everything?q=keyword&apiKey=d61243b5ebee40f18b80f711522726ba`
      )
      .then((res) => {
        const newsApi = res.data.articles.slice(0, 5);
        for (let index = 0; index < newsApi.length; index++) {
           arrayVacio.push({
            title: newsApi[index].title,
            author: newsApi[index].author,
            content: newsApi[index].content,
            cover: newsApi[index].urlToImage,
          });
        }
        this.setState({ newsApi: arrayVacio });

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

  removeAllNews = () => {
    this.setState({ newsApi: [] });

    localStorage.removeItem("noticias");
  };

  removeOneNews = (i) => {
    let datosLocalStorage = JSON.parse(localStorage.getItem("noticias"));

    if (datosLocalStorage) {
      let filteredArray2 = datosLocalStorage.filter((item, j) => i !== j);
 
      localStorage.setItem("noticias", JSON.stringify(filteredArray2));
    } else {
    }

    let filteredArray = this.state.newsApi.filter((item, j) => i !== j);

    this.setState({ newsApi: filteredArray });
  };

  render() { 

    return (
      <article>
        <h2>Noticias</h2>

        <button onClick={this.removeAllNews}>Borrar Todas las noticias</button>

        <div className="container">{this.renderNews()}</div>
      </article>
    );
  }
}
