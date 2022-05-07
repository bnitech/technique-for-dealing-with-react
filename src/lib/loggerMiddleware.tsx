const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.group(action && action.type);
  console.log('이전상태', store.getState());
  console.log('액션', action);
  next(action);
  console.log('다음 상태', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
