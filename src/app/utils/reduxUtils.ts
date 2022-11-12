export const LIST = "LIST";

export const providesList = <R extends { id: number }[], T extends string>(
  res: R | undefined,
  type: T
) => [{ type, id: LIST }, ...(res || []).map(({ id }) => ({ type, id }))];
