export default function Note({note}){
    return  (
        <>
           
        <div className="h-48 w-48 border-2 flex rounded-xl p-2">
{note.content}
        </div>
        </>
    )

}