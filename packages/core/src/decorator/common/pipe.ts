import { Provide, Scope } from '..';

import { ScopeEnum } from '../../interface';

export function Pipe(): ClassDecorator {
  return (target: any) => {
    Scope(ScopeEnum.Singleton)(target);
    Provide()(target);
  };
}