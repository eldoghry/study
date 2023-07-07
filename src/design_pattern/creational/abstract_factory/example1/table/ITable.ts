// Product interface
export default interface ITable {
  name: string;
  width: number;
  height: number;
  depth: number;

  getDimensions(): void;
}
