export class Book {
    idBook: number;
    name: string;
    date: string;
    author: string;
    edition: string;
    price: number;
    type: string;
    famous: string;

    constructor(
        idBook: number,
        name: string,
        date: string,
        author: string,
        edition: string,
        price: number,
        type: string,
        famous: string
    ) {
        this.idBook = idBook;
        this.name = name;
        this.date = date;
        this.author = author;
        this.edition = edition;
        this.price = price;
        this.type = type;
        this.famous = famous;
    }
}