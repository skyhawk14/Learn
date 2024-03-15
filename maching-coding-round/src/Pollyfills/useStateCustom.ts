export default function useStateCustom<T>(
  initialValue: T
): [T, (value: T) => void] {
  let state = initialValue;
  const setState = (newValue: T) => {
    state = newValue;
  };
  return [state, setState];
}
