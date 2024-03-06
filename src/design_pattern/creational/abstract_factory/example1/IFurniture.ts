import IChair from "./chair/IChair";
import ITable from "./table/ITable";

export default interface IFurniture extends IChair, ITable {}
