function extractAndConvert<T extends object,U extends keyof T>(obj:T, key:U) {
  return obj[key];
}

extractAndConvert({ name: "bhojraj" }, "name");

/*so basically what problem can happen is humn object aur usme koi key pass kar rhe hai but agar wo key exists he nhi
krti hogi object  me tou for that we use keyof provided by typescript wo check kr leta hai ki koi key exists krti hai ya nhi 
*/
