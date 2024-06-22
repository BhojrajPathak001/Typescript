interface ErrorContainer {
  /*suppose humne error ke liye ek obejct chaheye jisme hamesa key value pair
    string ka hone chaheye tou aise define kar skte hai so that it will enforce every error object to be like that 
    and it is called index type below is the syntax of it
  */
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not a valid email",
  username: "must start with a capital character!",
};
