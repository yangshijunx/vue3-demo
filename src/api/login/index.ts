import { post } from "../index";
// 获取表单数据
export function Login(body: Object) {
  return post("/login", body) as Promise<any>;
}
