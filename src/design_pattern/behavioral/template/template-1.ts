(() => {
  /*
The Template Design Pattern is a behavioral design pattern that defines the skeleton of an algorithm in a base class 
but allows subclasses to override specific steps of the algorithm without changing its structure. 
This pattern is useful when you want to define the outline of an algorithm once and let subclasses implement the details.
 */
  abstract class WebScrapper {
    protected abstract fetchPage(): void;
    protected abstract parseContent(): void;
    protected abstract extractData(): void;

    protected processPage(): void {
      console.log("Processing data ... ");
    }

    public scrap() {
      this.fetchPage();
      this.parseContent();
      this.extractData();
      this.processPage();
    }
  }

  class AmazonScraper extends WebScrapper {
    protected fetchPage(): void {
      console.log("Fetching data from Amazon.");
    }

    protected parseContent(): void {
      console.log("Parsing Amazon data.");
    }

    protected extractData(): void {
      console.log("Extracting data from Amazon.");
    }
  }

  class EBayScraper extends WebScrapper {
    protected fetchPage(): void {
      console.log("Fetching data from EBay.");
    }

    protected parseContent(): void {
      console.log("Parsing EBay data.");
    }

    protected extractData(): void {
      console.log("Extracting data from EBay.");
    }
  }
  // client side

  const amazonScraper = new AmazonScraper();
  const eBayScraper = new EBayScraper();
  amazonScraper.scrap();

  console.log("=========================================");
  eBayScraper.scrap();
})();
