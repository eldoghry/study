(() => {
  /* 
  Assume 
  */

  interface ICommand {
    execute(): void;
  }

  // commands
  class ReadFileCommand implements ICommand {
    private fileSystem: IFileSystem | null = null;
    constructor(fileSystem: IFileSystem) {
      this.fileSystem = fileSystem;
    }

    execute() {
      if (this.fileSystem) this.fileSystem.readFile();
      else return null;
    }
  }

  // receiver
  interface IFileSystem {
    readFile(): void;
  }

  class WindowsFileSystem implements IFileSystem {
    readFile(): void {
      console.log("Reading file from Windows...");
    }
  }

  class LinuxFileSystem implements IFileSystem {
    readFile(): void {
      console.log("Reading file from Linux...");
    }
  }

  // invoker
  class FileSystemInvoker {
    command: ICommand | null = null;

    constructor(command: ICommand) {
      this.command = command;
    }

    execute() {
      if (this.command) this.command.execute();
      else console.log("No command set");
    }
  }

  //   client code
  const linuxFileSystem = new LinuxFileSystem();
  const readFileCommand = new ReadFileCommand(linuxFileSystem);

  let fileSystemInvoker = new FileSystemInvoker(readFileCommand);
  fileSystemInvoker.execute();

  fileSystemInvoker = new FileSystemInvoker(
    new ReadFileCommand(new WindowsFileSystem())
  );

  fileSystemInvoker.execute();
})();
