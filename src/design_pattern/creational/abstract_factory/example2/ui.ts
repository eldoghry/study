// * Products Interfaces -----------------------------------------------------
interface IButton {
  render(): void;
}

interface IInput {
  render(): void;
}

// * Product 1 [button] Concretes -----------------------------------------------------

class LightButton implements IButton {
  render(): void {
    console.log("Rendering Light Button");
  }
}

class DarkButton implements IButton {
  render(): void {
    console.log("Rendering Dark Button");
  }
}

// * Product 2 [input] Concretes -----------------------------------------------------
class LightInput implements IInput {
  render(): void {
    console.log("Rendering Light Input");
  }
}

class DarkInput implements IInput {
  render(): void {
    console.log("Rendering Dark Input");
  }
}

// * Theme Factory -----------------------------------------------------

interface ITheme {
  createButton(): IButton;
  createInput(): IInput;
}

class LightThemeFactory implements ITheme {
  createButton(): IButton {
    return new LightButton();
  }

  createInput(): IInput {
    return new LightInput();
  }
}

class DarkThemeFactory implements ITheme {
  createButton(): IButton {
    return new DarkButton();
  }

  createInput(): IInput {
    return new DarkInput();
  }
}

// * Abstract Factory -----------------------------------------------------
// function act as abstract factory

function createUI(themeFactory: ITheme) {
  const button = themeFactory.createButton();
  button.render();

  const input = themeFactory.createInput();
  input.render();
}

// * CLIENT CODE -----------------------------------------------------

let currentTheme = new DarkThemeFactory();

createUI(currentTheme);
//Rendering Dark Button
//Rendering Dark Input

// changing theme
currentTheme = new LightThemeFactory();
createUI(currentTheme);
// Rendering Light Button
// Rendering Light Input
