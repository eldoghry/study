import IFurniture from "./IFurniture";
import ChairFactory from "./chair/chairFactory";
import TableFactory from "./table/tableFactory";

// abstract factory
export default class FurnitureFactory {
  static getFurniture(type: string): IFurniture | undefined {
    if (type.toLocaleLowerCase().includes("table"))
      return TableFactory.getTable(type);
    else if (type.toLocaleLowerCase().includes("chair"))
      return ChairFactory.getChair(type);
    else return undefined;
  }
}
