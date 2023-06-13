/* tslint:disable no-any */

export interface InitializeOptions {
  debug?: boolean,
  src: string
  trigger?: any
  colors?: any
  identify?: any
}

export function initialize(
  options?: InitializeOptions
): void;
