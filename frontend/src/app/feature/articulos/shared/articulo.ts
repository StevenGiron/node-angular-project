export class Source{
    id:   null | string;
    name: string;
    
    constructor(
        id:   null | string,
        name: string,){

        this.id = id;
        this.name = name;
    }
        
}

export class Article {
    status:       string;
    totalResults: number;
    articles:     Articulo[];

    constructor(
        status:       string,
        totalResults: number,
        articles:     Articulo[]
    ){
        this.status =status;
        this.totalResults = totalResults;
        this.articles = articles
    }
}

export class Articulo {
    source:      null|Source;
    author:      string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: null | Date;
    content:     string;

    constructor(
        source:      Source,
        autor:       string,
        titular:     string,
        descripcion: string,
        url:         string,
        urlToImage:  string,
        publishedAt: Date,
        content:     string

    ){
        this.source=source,
        this.author = autor,
        this.title =  titular,
        this.description = descripcion,
        this.url = url,
        this.urlToImage = urlToImage ,
        this.publishedAt= publishedAt
        this.content = content     
        
    }

}