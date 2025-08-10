type Action<T> = Partial<T> | ((currentState: T) => Partial<T>);

export default function objReducer<T>(state: T, action: Action<T>): T {
    const patch = typeof action === "function" ? action(state) : action;
    return { ...state, ...patch };
}