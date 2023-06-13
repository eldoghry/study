interface IPizza {}

// creator
// concreteCreator

interface IFactory {
  createPizza(): IPizza;
}

// factory

abstract class StoreFactory implements IFactory {
  createPizza(): IPizza {}
}

// concreteFactory
