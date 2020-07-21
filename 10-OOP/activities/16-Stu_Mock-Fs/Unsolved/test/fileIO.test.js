const FileIO = require("../fileIO");
const fs = require("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // Your code here
      //Arrange
      const fileIO = new FileIO();
      const file = "file";
 
      //Act
      fs.readFileSync().mockfile(
        new Promise(function(resolve) {
          resolve({ data: {} });
        })
      );

      //Assert
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // Your code here
    });
  });
});
