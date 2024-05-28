//string

const firstName = "石田";

// number
const age = 28;

// boolean
let isHuman = true;

isHuman = false;

//date
const birthDay = new Date("1993, 8, 15");

//union
let color: "red" | "yellow" | "green" = "yellow";

//any 使わないようにする
let anyData: any = "hoge";
anyData = 1;
anyData = false;
anyData = new Date("1993, 8, 15");

//void
let funcLog = () => {
  console.log("ログを出願します");
};

// funcLog = null;

let funcSun = (a: number, b: number) => {
  return a + b;
};

funcSun(1, 2);

//object
let object = {
  name: "石田",
  age: 28,
  isHuman: true,
  birthDay: new Date("1993, 8, 15"),
};

object.name = "1234";

type User = {
  name: string;
  age: number;
  isHuman: boolean;
  birthDay: Date;
  phone?: number;
};

let user: User = {
  name: "石田",
  age: 28,
  isHuman: true,
  birthDay: new Date("1993, 8, 15"),
};

//配列
let array: number[] = [1, 2, 3, 4, 5];

//タブル

let tuple: [string, number, boolean] = ["石田", 28, true];

//連想配列
let userArray: User[] = [
  {
    name: "石田",
    age: 28,
    isHuman: true,
    birthDay: new Date("1993, 8, 15"),
  },
];

type UserDetail = {
  prefecture: string;
  sex: string;
};

type UserDetailInfo = UserDetail & User;

let user2: UserDetailInfo = {
  name: "石田",
  age: 28,
  isHuman: true,
  birthDay: new Date("1993, 8, 15"),
  prefecture: "東京",
  sex: "男",
};

type UserDetailInfo2 = {
  user: User;
  userDetail: UserDetail;
};

let user3: UserDetailInfo2 = {
  user: {
    name: "石田",
    age: 28,
    isHuman: true,
    birthDay: new Date("1993, 8, 15"),
  },
  userDetail: {
    prefecture: "東京",
    sex: "男",
  },
};
