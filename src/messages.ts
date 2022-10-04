export enum Actions {
 GET_ACCESS_TOKEN= "GET_ACCESS_TOKEN",
 GET_INIT_PARAMS="GET_INIT_PARAMS",
 SHOW_SCAN_PRODUCT="SHOW_SCAN_PRODUCT",
 BACK_PROJECT_LIST="BACK_PROJECT_LIST"
}

const eventName = "UNITY_MESSAGING"

export const subscribe = (listener: (event: Event)=> void) => {
 // @ts-ignore
 document.addEventListener(eventName, ({detail})=> listener(detail))
}

export const unsubscribe = (listener: (event: Event)=> void) => {
 document.removeEventListener(eventName, listener)
}

export const publish = (data: {[key: string]: string}) => {
 const event = new CustomEvent(eventName, { detail: data })
 document.dispatchEvent(event)
}
