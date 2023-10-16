import { IServiceFactory, ObjectIdentifier } from '../../interface';
import {
  createCustomPropertyDecorator,
  savePropertyInject,
} from '../decoratorManager';

import { FACTORY_SERVICE_CLIENT_KEY } from '../constants';

export function Inject(identifier?: ObjectIdentifier) {
  return function (target: any, targetKey: string): void {
    savePropertyInject({ target, targetKey, identifier });
  };
}

export function InjectClient(
  serviceFactoryClz: new (...args) => IServiceFactory<unknown>,
  clientName?: string
) {
  return createCustomPropertyDecorator(FACTORY_SERVICE_CLIENT_KEY, {
    serviceFactoryClz,
    clientName,
  });
}