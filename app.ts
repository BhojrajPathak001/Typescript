let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

userName = userInput;
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  //it's better than void it tells that function kbhi khtm hoga he ni script bich me ruk jayegi run hons
  throw { message: MessageChannel, errorCode: code };
}

generateError("An eror occured", 500);
