import { Err as ErrType, Ok as OkType, Result } from "../types/types";


export function castError(err: unknown): Error {
    if (err instanceof Error) {
        return err;
    } else {
        return new Error(String(err));
    }
}

export function Ok<T>(value: T): Result<T> {
    return { type: 'ok', value };
}

export function Err<E extends Error>(error: E): Result<never, E> {
    return { type: 'err', error };
}

export function isOk<T, E extends Error>(result: Result<T, E>): result is OkType<T> {
    return result.type === 'ok';
}

export function isErr<T, E extends Error>(result: Result<T, E>): result is ErrType<E> {
    return result.type === 'err';
}
