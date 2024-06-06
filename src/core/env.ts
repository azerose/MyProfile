let env = { ...process.env };

// 클라이언트 측에서 실행되는 경우에만 window 객체 사용
if (typeof window !== "undefined") {
  //@ts-ignore
  env = { ...env, ...window.env };
}

export default env;
