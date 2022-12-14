import {Actions} from "./messages";
import { stringify } from  "query-string"

export function sendMessage(actionType: Actions, payload?: any){
        const a = window.document.createElement('a')
        a.style.display = 'none'
        console.log(`uniwebview://action?${stringify({actionType: actionType, payload: payload})}`)
        a.href = `uniwebview://action?${stringify({actionType: actionType, payload: payload})}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        a.remove()
}