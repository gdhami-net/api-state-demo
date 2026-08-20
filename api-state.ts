// The soup: every flag combination is representable, including the lies.
interface SoupState<T> {
  isLoading: boolean;
  isError: boolean;
  error?: string;
  data?: T;
}

// Nothing stops this object from existing:
const lie: SoupState<string[]> = { isLoading: true, isError: true, data: [] };

// The union: only the states that can actually happen.
export type ApiState<T> =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'error'; error: string }
  | { kind: 'loaded'; data: T };

export function render<T>(state: ApiState<T>): string {
  switch (state.kind) {
    case 'idle':
      return 'nothing requested yet';
    case 'loading':
      return 'spinner';
    case 'error':
      return `error: ${state.error}`; // state.error only exists here
    case 'loaded':
      return `rows: ${JSON.stringify(state.data)}`; // state.data only exists here
    default: {
      // Exhaustiveness: add a fifth state and this line stops compiling.
      const unreachable: never = state;
      return unreachable;
    }
  }
}

// Angular usage: const users = signal<ApiState<User[]>>({ kind: 'idle' });
// The template switches on users().kind — no flag can contradict another.
