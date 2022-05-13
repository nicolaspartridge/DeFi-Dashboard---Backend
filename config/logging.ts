const getTimeStamp = (): string => {
  return new Date().toISOString();
}

const info = (namespace: string, message: string, object?: any) => {
  if(object) {
    console.log(`[${getTimeStamp()}] [${namespace}] [INFO] ${message}`, object);
  }
  else {
    console.log(`[${getTimeStamp()}] [${namespace}] [INFO] ${message}`);
  }
}

const warn = (namespace: string, message: string, object?: any) => {
  if(object) {
    console.warn(`[${getTimeStamp()}] [${namespace}] [INFO] ${message}`, object);
  }
  else {
    console.warn(`[${getTimeStamp()}] [${namespace}] [INFO] ${message}`);
  }
}

const error = (namespace: string, message: string, object?: any) => {
  if(object) {
    console.error(`[${getTimeStamp()}] [${namespace}] [INFO] ${message}`, object);
  }
  else {
    console.error(`[${getTimeStamp()}] [${namespace}] [INFO] ${message}`);
  }
}

const debug = (namespace: string, message: string, object?: any) => {
  if(object) {
    console.debug(`[${getTimeStamp()}] [${namespace}] [INFO] ${message}`, object);
  }
  else {
    console.debug(`[${getTimeStamp()}] [${namespace}] [INFO] ${message}`);
  }
}

export default { info, warn, error, debug}