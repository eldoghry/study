import fs from "fs";

/*
Single Responsibility Principle
class should do one thing and therefore it should have only a single reason to change.

*/

class Journal {
  entries: { [key: number]: string } = {};
  static count = 0;

  addEntry(text: string): number {
    const c = ++Journal.count;
    this.entries[c] = text;
    return c;
  }

  removeEntry(index: number): void {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  // this bad here, this class should not responsible to saving files
  // saveToFile(journal: Journal, filename: string) {
  //   fs.writeFileSync(`${filename}.txt`, journal.toString());
  // }
}

class SaveToFile {
  static save(journal: Journal, filename: string) {
    fs.writeFileSync(`${filename}.txt`, journal.toString());
  }
}

const journal = new Journal();
journal.addEntry("I go to school");
journal.addEntry("I ate my launch");
journal.toString();
console.log(journal.toString());

// journal.saveToFile(journal, "dummy");
SaveToFile.save(journal, "dummy");
// * ============================================================================================
// *example 2

class Book {
  id: number;
  title: string;
  author: string;
  price: number;

  constructor(id: number, title: string, author: string, price: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

class Invoice {
  invoice: number;
  book: Book;
  discount: number;
  total: number;

  constructor(book: Book, discount: number = 0) {
    this.book = book;
    this.discount = discount;
    this.invoice = Date.now();
    this.total = this._calcPrice();
  }

  _calcPrice() {
    return this.book.price - this.discount;
  }

  /*
    this is bad design class Invoice should only concern about invoice calculation
  */
  // printInvoice() {
  //   console.log(
  //     `Invoice{${this.invoice}} total: ${this.total} for ${this.book.title} by ${this.book.author}`
  //   );
  // }
}

class InvoicePrinter {
  invoice: Invoice;
  constructor(invoice: Invoice) {
    this.invoice = invoice;
  }

  print() {
    console.log(
      `Invoice{${this.invoice.invoice}} total: ${this.invoice.total} for ${this.invoice.book.title} by ${this.invoice.book.author}`
    );
  }
}

const book = new Book(1, "Design Pattern", "Mohamed Magdy", 100);
const invoice = new Invoice(book, 10);
// invoice.printInvoice();
const printer = new InvoicePrinter(invoice);
printer.print();
