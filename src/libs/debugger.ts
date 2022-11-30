// @ts-ignore
import * as R from 'ramda';
// @ts-ignore
import {Function} from 'ts-toolbelt';
// import Reactotron from 'reactotron-react-native';

type IdentityLogger = (title: string) => <T>(x: T) => T;

type GroupLogger = Function.Curry<IdentityLogger>;

interface Logger extends IdentityLogger {
  group: GroupLogger;
}

export const loggerFactory =
  (loggingFn: any) =>
  (style: any) =>
  (namespace: string): Logger => {
    const logGroup: GroupLogger = R.curry((tag: string, x: any) => {
      if (isDevelopment()) {
        const tail = tag ? `/${tag}` : '';

        if (isBrowser()) loggingFn(`%c${namespace}${tail}`, style, x);
        else loggingFn(`${namespace}${tail}`, x);
      }
      return x;
    });

    const logger: Logger = x => logGroup('')(x);
    logger.group = logGroup;

    return logger as Logger;
  };

// const reactotronLogger = loggerFactory((name: any, value: any) =>
//   Reactotron.display({name, value}),
// )('');

const defaultLogger = loggerFactory((name: any, value: any) =>
  console.log(name, value),
)('');

const infoLogger = loggerFactory(console.info)(`
  background-color: dodgerblue; 
  color: white;
  padding: 0 .5rem;
  border-radius: 3px;
`);

const errorLogger = loggerFactory(console.error)(`
  background-color: crimson; 
  color: white;
  padding: 0 .5rem;
  border-radius: 3px;
`);

export const isBrowser = () =>
  R.propEq('browser', true)((process.env || {}) as any);

export const isDevelopment = () =>
  JSON.stringify(process.env).includes('"NODE_ENV":"development"');

interface MakeTrace extends Array<Logger> {
  info: Logger;
  error: Logger;
}

export const makeTrace = (tag: string): MakeTrace => {
  const info = infoLogger(tag);
  const error = errorLogger(tag);

  const struct: MakeTrace = [info, error] as never;
  struct.info = info;
  struct.error = error;

  return struct;
};

const [traceLog, traceErrorLog] = makeTrace('TRACER ====>');
export const trace = traceLog.group;
export const traceError = traceErrorLog.group;

export const startStop = (name = 'HPION') => {
  console.time(name);
  let count = 0;
  const reset = () => (count = 0);

  return [
    () => {
      count += 1;
    },
    () => {
      console.timeEnd(name);
      let countBeforeReset = count;
      reset();

      return countBeforeReset;
    },
  ];
};

export const log = (title: string) => defaultLogger('LOG').group(title);
