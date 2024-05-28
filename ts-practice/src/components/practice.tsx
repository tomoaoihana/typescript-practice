import React, { ReactNode } from "react";

//children

const Child = ({
  children,
  user,
}: {
  children: ReactNode;
  user: {
    name: string;
    age?: number;
    isChild: boolean;
    profile?: {
      job: string;
      language: string;
    };
  };
}) => {
  return (
    <div>
      <h2>child</h2>
      <p> {children}</p>
      <p> {user.name}</p>
      <p>{user.age && `10年後の年齢：${user.age + 10}歳`}</p>
      <p> {user.isChild ? "子供" : "大人"}</p>
      <p> {user.profile?.job}</p>
      <p> {user.profile?.language}</p>
    </div>
  );
};

//コンポーネントの引数の型

export const Practice = () => {
  return (
    <div>
      <h1>Practice</h1>
      <Child
        user={{
          name: "Taro",
          age: 20,
          isChild: false,
          profile: {
            job: "engineer",
            language: "typescript",
          },
        }}
      >
        親から渡された値
      </Child>
    </div>
  );
};

//&& ?の使い方
