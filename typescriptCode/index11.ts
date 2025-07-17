//Exclude

type EventType= 'click' | 'scroll' | 'mousemove'
type ExcludedType= Exclude<EventType,'scroll'>

function temp(something:ExcludedType){
console.log(`Handling Event: ${something}`)
}
temp('mousemove')