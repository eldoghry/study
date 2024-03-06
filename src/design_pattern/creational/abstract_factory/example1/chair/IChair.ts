// Product interface
export default interface IChair {
  name: string;
  width: number;
  height: number;
  depth: number;

  getDimensions(): void;
}
