(() => {
  interface IButton {
    render(): void;
  }

  interface IInput {
    render(): void;
  }

  interface ITheme {
    createInput(): IInput;
    createButton(): IButton;
  }

  class DarkButton implements IButton {
    render(): void {
      console.log("Dark Button");
    }
  }

  class LightButton implements IButton {
    render(): void {
      console.log("Light Button");
    }
  }

  class DarkInput implements IInput {
    render(): void {
      console.log("Dark Input");
    }
  }

  class LightInput implements IInput {
    render(): void {
      console.log("Light Input");
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

  class LightThemeFactory implements ITheme {
    createButton(): IButton {
      return new LightButton();
    }

    createInput(): IInput {
      return new LightInput();
    }
  }

  //   abstract factory
  class ThemeFactory {
    static renderUI(mode: "light" | "dark") {
      let theme = null;
      if (mode === "dark") {
        theme = new DarkThemeFactory();
      } else {
        theme = new LightThemeFactory();
      }

      theme.createButton().render();
      theme.createInput().render();
    }
  }
  // client code
  console.log("start ----------------");
  ThemeFactory.renderUI("dark");
  console.log("---------------------");
  ThemeFactory.renderUI("light");
  console.log("---------------------");
  ThemeFactory.renderUI("dark");
  console.log("end ----------------");
})();
